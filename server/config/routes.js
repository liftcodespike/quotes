var session = require('./../controllers/session.js')
var quote = require('./../controllers/quote.js')
module.exports = function(app){
	app.post('/login', function(req, res){
		session.login(req, res);
	})
	app.get('/checkuser', function(req, res){
		session.checkUser(req, res);
	})
	app.get('/logout', function(req, res){
		session.logout(req, res)
	})
	//************************************************
	app.post('/quotes/add', function(req, res){
		quote.add(req, res)
	})
	app.get('/quotes/all', function(req, res){
		quote.all(req, res)
	})
	app.get('/quotes/likes/:id', function(req, res){
		quote.addLike(req, res);
	})

	app.get('/quotes/author/:author', function(req, res){
		quote.showOneAuthor(req, res)
	})
}