(function () {
  'use strict';
  angular.module('data')
         .component('items', {
           templateUrl: 'src/templates/component.items.html',
           bindings: {
             items: '<'
           }
         })
})()
