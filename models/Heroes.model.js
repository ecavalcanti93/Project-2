const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const heroeSchema = new Schema(
    {
  name: { 
    type: String,
    required: true,
    unique: true 
    },
  specie: {
    type: String,
    enum: ['Human', 'Alien']
    },
 
});

const Heroes = mongoose.model('Heroes', heroeSchema);

module.exports = Heroes;