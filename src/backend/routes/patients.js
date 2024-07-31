// backend/routes/patients.js
const express = require('express');
const router = express.Router();
const Patient = require('../models/Patients');

router.post('/', async (req, res) => {
    try {
        const newPatient = await Patient.create(req.body);
        res.status(201).json(newPatient);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const patients = await Patient.findAll();
        res.json(patients);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedPatient = await Patient.update(req.body, {
            where: { id: req.params.id },
            returning: true
        });
        res.json(updatedPatient[1][0]);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
