var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BoutiqueSchema = new Schema({
    name: String,
    proprietaire: String,
    
});

var Model = mongoose.model('Boutique', BoutiqueSchema);

module.exports = Model;