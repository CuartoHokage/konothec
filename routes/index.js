'use strict'

const express= require('express');
const api= express.Router()

const userControllers= require('../controllers/userControllers')
//Cruds para peliculas

//rutas de páginas
api.get('/roucube', (req, res)=>{
	res.render('roucube');
});
api.get('/contacto', (req, res)=>{
	res.render('contacto');
});

api.get('/wordpress', (req, res)=>{
	res.render('wordpress');
});
api.get('/moodle', (req, res)=>{
	res.render('moodle');
});

module.exports= api