(function () {

  angular.module('MenuApp')
          .component('categories', {
            templateUrl: 'src/templates/component.categories.html',
            bindings: {
              categories: '<'
            }
          })
})();
