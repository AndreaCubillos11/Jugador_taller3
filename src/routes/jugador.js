const express = require('express')
const router = express.Router()
const Jugador = require('../models/jugador')

// Nuevo jugador-inserción-create
router.post('/jugadores', (req, res) => {
  const nuevoJugador = new Jugador(req.body)
  nuevoJugador
    .save()
    .then(data => res.json(data))
    .catch(error => res.status(400).json({ message: error }))
})

module.exports = router

// Consultar todos los jugadores-consultar-read
router.get('/jugadores', (req, res) => {
  Jugador.find()
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }))
})

// Consultar un jugador por su ID-read
router.get('/jugadores/:id', (req, res) => {
  const { id } = req.params
  Jugador.findById(id)
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }))
})

//Modificar-actualizar un jugador-Update
router.put('/jugadores/:id', (req, res) => {
    const { id } = req.params;
    const { 
      nombre, 
      edad, 
      posición, 
      equipo, 
      nacionalidad,   
      altura, 
      peso, 
      numero_camiseta, 
      tarjetas_amarillas, 
      tarjetas_rojas, 
      valor_mercado, 
      goles_marcados 
    } = req.body;
    
    Jugador.updateOne(
      { _id: id },
      {
        $set: { 
          nombre, 
          edad, 
          posición, 
          equipo, 
          nacionalidad,   
          altura, 
          peso, 
          numero_camiseta, 
          tarjetas_amarillas, 
          tarjetas_rojas, 
          valor_mercado, 
          goles_marcados 
        }
      }
    )
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }))
  })
  

// Eliminar un jugador por su ID
router.delete('/jugadores/:id', (req, res) => {
  const { id } = req.params
  Jugador
    .findByIdAndDelete(id)
    .then(data => {
      res.json(data)
    })
    .catch(error => {
      res.json({ message: error })
    })
})


  
