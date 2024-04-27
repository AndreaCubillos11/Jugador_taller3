const mongoose = require("mongoose");

const jugadorSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  posición: {
    type: String,
    required: true,
  },
  equipo: {
    type: String,
    required: true,
  },
  nacionalidad: {
    type: String,
    required: true,
  },
  altura: {
    type: Number,
    required: true,
  },
  peso: {
    type: Number,
    required: true,
  },
  numero_camiseta: {
    type: Number,
    required: true,
  },
  tarjetas_amarillas: {
    type: Number,
    default: 0,
  },
  tarjetas_rojas: {
    type: Number,
    default: 0,
  },
  valor_mercado: {
    type: Number,
    required: true,
  },
  goles_marcados: {
    type: Number,
    default: 0,
  }
});

module.exports = mongoose.model("Jugador", jugadorSchema);
