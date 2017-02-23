( function () {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/templates/state_home.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/templates/state_categories.html',
      controller: 'CategoriesController as controller1',
      resolve: {
        categories: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('categoryItem', {
        url: '/categories/{categoryShortName}',
        templateUrl: 'src/templates/state_item.html',
        controller: 'ItemController as controller2',
        resolve: {
          items: ['$stateParams','MenuDataService', function($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName).then(function (success) {
              return success;
            })
          }]
        }
    })
  }

})();
