var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');
module.exports = (function(){
	return{
		add:function(req, res){
			var quote = new Quote(req.body);
			quote.save(function(err, data){
				if(err){
					console.log(err)
				}else{
					return res.json({status: true, data: data})
				}
			})
		},
		all:function(req, res){
			Quote.find({}, function(err, data){
				res.json(data)
			})
		},
		addLike:function(req, res){
			Quote.findOne({_id: req.params.id}, function(err, quote){
				quote.likes += 1
				quote.save(function(err){
					res.json({status: true})
				})
			})
		},
		showOneAuthor: function(req, res){
			Quote.find({author: req.params.author}, function(err, quotes){
				res.json(quotes)
			})
		}
	}
})()