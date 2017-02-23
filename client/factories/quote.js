app.factory('quoteFactory', function($http, $location){
	var factory = {}; 
	factory.addQuote = function(quote){
		$http.post('/quotes/add', quote).then(function(output){
			if(output.data.status){
				$location.url('/dash')
			}
		})
	}
	factory.showOneAuthor = function(author, cb){
		$http.get('quotes/author/' + author).then(function(data){
			cb(data.data)
		})
	}

	factory.getAll = function(cb){
		$http.get('quotes/all').then(function(output){
			cb(output.data)
		})
	}


	factory.addLike = function(id, cb){
		$http.get('quotes/likes/' + id).then(function(data){
			cb()
		})
	}
	return factory;
})