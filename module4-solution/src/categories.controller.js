(function () {
  'use strict';

  angular.module('MenuApp')
         .controller('CategoriesController', CategoriesController)

  CategoriesController.$inject = ['categories'];
  function CategoriesController(categories) {
    // TU JE TO OK
    var ctrl = this;
    ctrl.categories = categories;
  }
})();
