(function () {
  'use strict';

  angular.module('MenuApp')
         .controller('ItemController', ItemController)

  ItemController.$inject = ['items'];
  function ItemController(items) {

    console.log(items)
    var itemCtrl = this;
    itemCtrl.menuItems = items.menu_items;
    itemCtrl.category = items.category;
  }
})();
