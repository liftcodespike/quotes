app.controller('quoteController', function($scope, quoteFactory, $routeParams){
	$scope.errors = [];

	quoteFactory.getAll(function(data){
		$scope.quotes = data
	})

	if($routeParams.author){
		quoteFactory.showOneAuthor($routeParams.author, function(data){
			$scope.showOneAuthor = data
			console.log(data)
		})
	}


	$scope.addLike = function(id){
		quoteFactory.addLike(id, function(){
				quoteFactory.getAll(function(data){
					$scope.quotes = data
				})
		})
	}

	$scope.addQuote = function(){
		$scope.errors = [];
		var newDate = new Date($scope.newQuote.date);
		todaysDate = Date.now();
		
		if(!$scope.newQuote|| $scope.newQuote.date == null || !$scope.newQuote.author|| !$scope.newQuote.content){
			$scope.errors.push('Please fill out all the fields.')
		}else if($scope.newQuote.author.length< 3){
			$scope.errors.push("Please make sure your author's name is at least 3 chars long.")
		}else if(newDate > todaysDate){
			$scope.errors.push("Date must be today or in the past.")
		}else{
			quoteFactory.addQuote($scope.newQuote)
		}
	}
})