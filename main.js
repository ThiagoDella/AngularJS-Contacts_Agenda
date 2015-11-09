var app = angular.module('contactsAgenda',[]);


app.controller('MinMaxCtrl',function($scope,$http){
	$scope.formModel ={};

	$scope.onSubmit = function(){
		console.log("Submitted");
		console.log($scope.formModel);
		$http.post('https://minmax-server.herokuapp.com/register/',$scope.formModel).success(
			function(data){
				console.log(":)");
			}).error(function(data){
				console.log(":(");
			});
	};
});