const express = require('express');
const { createPool } = require('mysql');
const router = express.Router();
const pool = require('../database');

router.get('/index',  async (req, res) => {
    const registros = await pool.query('SELECT * FROM registro')
    res.render('index', { registros });
});

router.post('/index', (req, res) => {
    res.send('received');
});

router.get('/proceso1', (req, res) => {
    res.render('links/proceso1');
});

router.post('/proceso1', (req, res) => {
    const {materia, cantidad} = req.body;
    material = materia;
    cantidad_material = cantidad;
    console.log(material);
    console.log(cantidad_material);
    res.render('links/proceso2');
});

router.get('/proceso2', (req, res) => {
    res.render('links/proceso2');
});

router.post('/proceso2', async (req, res) => {
    const {validar, residuos} = req.body;
    const proceso2 ={
        material,
        cantidad_material,
        residuos
    };
    await pool.query('INSERT INTO registro set ?', [proceso2])
    if (validar == "Si") {
        res.render('links/proceso2-1');        
    }else res.render('links/proceso3'); 
    console.log(proceso2);
});

router.get('/proceso2-1', (req, res) => {
    res.render('links/proceso2-1');
});

router.post('/proceso2-1', (req, res) => {
    res.render('links/proceso3');
});

router.get('/proceso3', (req, res) => {
    res.render('links/proceso3');
});

router.get('/proceso4', (req, res) => {
    res.render('links/proceso4');
});

router.get('/proceso5', (req, res) => {
    res.render('links/proceso5');
});

module.exports = router;