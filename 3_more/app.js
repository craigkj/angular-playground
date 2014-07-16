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

    $scope.data = {};
    $scope.data.message = MyDataFactory.getSomeData();

    $scope.data.heroes = MyDataFactory.getSomeHeroes();

    $scope.reverser = function(message) {
        return message.split("").reverse().join("");
    }

}]);












