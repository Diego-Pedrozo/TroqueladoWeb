const express = require('express');
const router = express.Router();
const pool = require('../database');
const { createPool } = require('mysql');

// router.get('/', (req, res) => {
//      res.render('index');
// });

router.get('/',  async (req, res) => {
    const registros = await pool.query('SELECT * FROM registro')
    res.render('index', { registros });
 });

module.exports = router;