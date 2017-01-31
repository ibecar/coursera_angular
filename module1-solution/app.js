(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {

    $scope.checkMe = function() {
      if ($scope.input == null || $scope.input == '') {
        $scope.errorEmptyData = true;
        $scope.error = false;
        $scope.ok = false;
      } else {
        var items = $scope.input.split(",");
        var count = countItems(items);
        $scope.error = count > 3
        $scope.ok = !$scope.error;
        $scope.errorEmptyData = false;
      }
    };

    function countItems(items) {
      var count = 0;
      for (var key in items ) {
        if (items[key].trim() !== '') {
          count++;
        }
      }
      return count;
    };
  }
})();
