var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 var QuoteSchema = new Schema({
 	date: {type: String, required: true},
	author: {type: String, required: true},
	content: {type: String, required: true},
	likes: {type: Number, default: 0}

 })

  mongoose.model('Quote', QuoteSchema);
