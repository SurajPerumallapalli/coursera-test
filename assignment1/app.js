(function (){
  'use strict';
  var LunchCheckApp = angular.module('LunchCheck',[]);
  function LunchCheckController($scope){
    $scope.name = "Perumallapalli Suraj";
    $scope.displayMessage = "";

    $scope.CheckIfTooMuch = function () {
      if($scope.items == null)
      $scope.displayMessage = "Please enter data first";
      else{
        var listOfItems = $scope.items.split(',');
        var sizeOfListOfItems = listOfItems.length;

        //not graded
        for(var x = 0; x<listOfItems.length; x++){
          var brokenToken = listOfItems[x].trim();
          console.log(brokenToken);
          if(brokenToken == '')
            sizeOfListOfItems--;
        }

        if(sizeOfListOfItems == 0)
        $scope.displayMessage = "Please enter data first";
        else if(sizeOfListOfItems <= 3)
        $scope.displayMessage = "Enjoy! " + sizeOfListOfItems;
        else
        $scope.displayMessage = "Too much!" + sizeOfListOfItems;
      }
    };

  }
  LunchCheckController.$inject = ['$scope'];
  LunchCheckApp.controller('LunchCheckController', LunchCheckController);

})();
