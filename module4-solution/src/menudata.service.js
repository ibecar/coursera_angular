(function() {
  'use strict';

  angular.module('data')
         .service('MenuDataService', MenuDataService)

         MenuDataService.$inject = ['$http', '$q', '$timeout']
         function MenuDataService($http, $q, $timeout) {
           var service = this;
           service.getAllCategories = function (){
             return $http({
               method: "GET",
               url: "https://davids-restaurant.herokuapp.com/categories.json"
             }).then(function(result) {
               console.log(result.data);
               return result.data;
             });
           };

           service.getItemsForCategory = function (categoryShortName) {
             let urlWithCatName = "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName
             return $http({
               method: "GET",
               url: urlWithCatName,
             }).then(function(result) {
               return result.data;
             })
           };
        }
})()
