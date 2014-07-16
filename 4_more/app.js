var myApp = angular.module('myApp', []);
   // the app.


myApp.factory("MyDataFactory", function() {
   return {
       getSomeData: function() {
           return 'World';
       },
       getSomeHeroes: function() {
           return [
            {name: "Tony Stark", alias: 'Iron Man'},
            {name: "Steve Rogers", alias: 'Captain America'},
            {name: "Bruce Banner", alias: 'The HULK'}
           ]
       }
   }
});

myApp.controller("myController", ['$scope', 'MyDataFactory', function($scope, MyDataFactory) {

    $scope.person = {name : 'craig', dob: '01/01/87'}

    $scope.data = {};
    $scope.data.message = MyDataFactory.getSomeData();
    $scope.data.heroes = MyDataFactory.getSomeHeroes();
    $scope.reverser = function(message) {
        return message.split("").reverse().join("");
    }
}]);


myApp.directive("hulk", function() {

    return {
        restrict: "A",
        link: function() {
            //alert("Hulk smash");
        }
    }
});

myApp.directive("superman", function() {
    return {
        restrict: "A",
        template: "<div>Here I am to save the day</div>"
    }
});












