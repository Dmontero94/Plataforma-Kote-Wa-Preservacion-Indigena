const lenguasIndigenas = [
  {
    id: "bribri",
    imagen: "docs/img/bribri.jpg",
    nombre: "Bribri",
    region: "Talamanca (Limón) y zona sur de Costa Rica",
    descripcion:
      "Lengua chibchense hablada por el pueblo bribri. Conserva una fuerte tradición oral y espiritual.",
  },
  {
    id: "cabecar",
    nombre: "Cabécar",
    region: "Cordillera de Talamanca (vertiente Atlántica y Pacífico sur)",
    descripcion:
      "Es la lengua indígena con mayor número de hablantes en Costa Rica, parte de la familia chibchense.",
    imagen: "docs/img/cabecar.jpg",
  },
  {
    id: "maleku",
    nombre: "Maleku (Guatuso)",
    region: "Provincia de Alajuela, zona de Guatuso",
    descripcion:
      "Lengua con un número reducido de hablantes, ligada al territorio y la cosmovisión maleku.",
    imagen: "docs/img/maleku.jpg",
  },
  {
    id: "boruca",
    nombre: "Boruca / Brunca",
    region: "Territorios de Boruca y Curré, Puntarenas",
    descripcion:
      "Conocida también como Brunka. Asociada a artesanías, máscaras y festividades culturales.",
    imagen: "docs/img/boruca.jpg",
  },
  {
    id: "ngabe",
    nombre: "Ngäbe (Guaymí)",
    region: "Zona sur de Puntarenas, frontera con Panamá",
    descripcion:
      "Lengua compartida con Panamá, hablada por el pueblo ngäbe. Pertenece a la familia chibchense.",
    imagen: "docs/img/ngobe.jpg",
  },
  {
    id: "buglere",
    nombre: "Buglere",
    region: "Pueblos ngäbe-buglé en la región sur",
    descripcion:
      "Lengua estrechamente relacionada con el ngäbe, hablada por comunidades buglé.",
    imagen: "docs/img/buglere.jpg",
  },
  {
    id: "teribe",
    nombre: "Térraba / Teribe (Naso Tjerdi)",
    region: "Reserva Térraba-Boruca, sur de Puntarenas",
    descripcion:
      "Lengua en peligro crítico, con esfuerzos de revitalización junto a comunidades naso en Panamá.",
    imagen: "docs/img/teribe.jpg",
  },
];

function renderLenguas() {
  const container = document.getElementById("lenguas-container");
  if (!container) return;

  container.innerHTML = lenguasIndigenas
    .map(
      (lengua) => `
      <article class="card" id="lengua-${lengua.id}">
        <div class="card__image-wrapper">
          <img
            src="${lengua.imagen}"
            alt="Imagen de la lengua ${lengua.nombre}"
            class="card__image"
            onerror="this.src='https://images.pexels.com/photos/4606720/pexels-photo-4606720.jpeg?auto=compress&cs=tinysrgb&w=800';">
        </div>
        <div class="card__body">
          <h3 class="card__title">${lengua.nombre}</h3>
          <button class="btn btn--secondary" data-lengua-id="${lengua.id}">Ver más</button>
        </div>
      </article>
    `
    )
    .join("");

  // Agregar event listeners a los botones "Ver más"
  document.querySelectorAll(".btn--secondary").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const lenguaId = e.target.getAttribute("data-lengua-id");
      const lengua = lenguasIndigenas.find(l => l.id === lenguaId);
      if (lengua) {
        openModal(lengua);
      }
    });
  });
}

function openModal(lengua) {
  const modal = document.getElementById("modal-lengua");
  const modalTitle = document.getElementById("modal-titulo");
  const modalRegion = document.getElementById("modal-region");
  const modalDescripcion = document.getElementById("modal-descripcion");
  
  if (modal && modalTitle && modalRegion && modalDescripcion) {
    modalTitle.textContent = lengua.nombre;
    modalRegion.textContent = lengua.region;
    modalDescripcion.textContent = lengua.descripcion;
    modal.classList.add("modal--open");
  }
}

function closeModal() {
  const modal = document.getElementById("modal-lengua");
  if (modal) {
    modal.classList.remove("modal--open");
  }
}

function setupNavbar() {
  const toggle = document.getElementById("navbar-toggle");
  const menu = document.getElementById("navbar-menu");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    menu.classList.toggle("navbar__menu--open");
  });

  // Scroll suave a secciones
  menu.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (!target) return;

      const yOffset = -70; 
      const y =
        target.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });

      menu.classList.remove("navbar__menu--open");
    });
  });
}

// Validación y registro de estudiantes
let inputName = document.getElementById("txtName");
let inputEmail = document.getElementById("txtEmail");
let inputLanguage = document.getElementById("txtLanguage");
let inputPassword = document.getElementById("txtPassword");
let btnRegistrar = document.getElementById("btnRegistrar");

let camposRequeridos = document.querySelectorAll(":required");

function validate() {
    let estadoValidacion = true;

    camposRequeridos.forEach(campo =>{
        if(campo.value == ""){
            estadoValidacion = false;
            campo.classList.add("inputError");
        }else{
            campo.classList.remove("inputError");
        }
    });
    return estadoValidacion;
}

function registrar() {
    const validacion = validate();
    if (validacion) {
        const student = {
            "name": inputName.value.trim(),
            "email": inputEmail.value.trim(),
            "language": inputLanguage.value.trim(),
            "password": inputPassword.value.trim()
        }
         //Fetch

        fetch("http://localhost:3000/api/register-student",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)

        })
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error HTTP: ${res.status}`);
            }
            return res.json();
        })
        .then(data=>{
            Swal.fire({
                'icon' : "success",
                'title': "Operación exitosa",
                'text' : "El Estudiante se registró correctamente"
            });
        })
        .catch(error =>{
            Swal.fire({
                'icon' : "error",
                'title': "Operación fallida",
                'text' : error.message || "El Estudiante no se pudo registrar, revise los campos resaltados"
            });
        });
    }
}

if (btnRegistrar) {
    btnRegistrar.addEventListener('click', registrar);
}

document.addEventListener("DOMContentLoaded", () => {
  renderLenguas();
  setupNavbar();
  validate();
  registrar();
});
