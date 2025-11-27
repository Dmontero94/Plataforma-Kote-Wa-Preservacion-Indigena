const express = require('express');
const Student = require('../models/student.model');
const router = express.Router();

//http://localhost:3000/api/register-student
router.post('/register-student', async (req, res) => {
    try {
    let newStudent = new Student({
        name: req.body.name,
        email: req.body.email,
        language: req.body.language,
        password: req.body.password,
    });
    await newStudent.save();
    res.json({ message: 'Student registered successfully' });
    }
    catch (error) {
        res.json({error});
    }
});

router.get('/list-students', async (req, res) => {
    try {
        const students = await Student.find({});
        res.json(students);
    }catch (error) {
        res.json({error});
    }

});

//Listar la informacion de un usuario por su correo electronico
router.get('/get-student/:email', async (req, res) => {
    try {
        let email = req.params.email;
        const student = await Student.findOne({email: email});

        if(!student){
            return res.json({message: 'Student not found'});
        }else{
            return res.json(student);
        }
    }catch (error) {
        res.json({error});
    }   
});

router.put('/update-student/:id', async (req, res) => {
    try {
        const id = req.params.id;
        let dataUpdate = {
        name: req.body.name,
        email: req.body.email,
        language: req.body.language,
        password: req.body.password
        };
        await Student.findByIdAndUpdate(id, dataUpdate);
        res.json({ message: 'Student updated successfully' });
    } catch (error) {
        res.json({error});
    }
});

// Borrar un usuario por su ID
router.delete('/delete-student/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Student.findByIdAndDelete(id);
        res.json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.json({error});
    }   
});

module.exports = router;