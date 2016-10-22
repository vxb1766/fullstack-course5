'use strict';
(function (){
  angular.module('assignment1',[])
         .controller('Assignment1Controller',['$scope',function($scope){
           $scope.items = {};
           $scope.items.message="";
           $scope.items.dishes = "";
           $scope.checkItems = function(){
             return ($scope.items.dishes == "" ? 0 : $scope.items.dishes.split(',').length);
           }
           $scope.displayMessage = function(){
             var dishesLength = $scope.checkItems();
             console.log(dishesLength);
             switch(true){
              case dishesLength > 3:
                    $scope.items.message="Too Much!";
                    break;

              case dishesLength == 0:
                    $scope.items.message="Please Enter Data First!";
                    break;

              case dishesLength < 4:
                    $scope.items.message="Enjoy !";
                    break;

             }
           }

         }]);

  ;
})();
