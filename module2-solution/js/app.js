(function() {
	'use strict'

	angular.module('ShoppingListCheckOff',[])
		.controller('ToBuyController', ToBuyController)
		.controller('AlreadyBoughtController', AlreadyBoughtController)
		.service("ShoppingListCheckOffService", ShoppingListCheckOffService);
		
	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		var toBuy = this;
		toBuy.items = ShoppingListCheckOffService.getToBuyItems();
		toBuy.addItem = function (index) {
			ShoppingListCheckOffService.buyItem(index)
		}
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var alreadyBought = this;
		alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
	}

	function ShoppingListCheckOffService(){
		var service = this;
		
		var toBuy = [{name:"cookies", quantity:10}, {name:"muffins", quantity:6}, 
					{name:"chocolate", quantity:1}, {name:"candy", quantity:2}, {name:"M&Ms", quantity: 10}];
					
		var alreadyBought = [];
		console.log('*** initialized ***');
		
		service.buyItem = function (index){
			console.log('buying item');
			var itemToBuy = toBuy[index]
			console.log(itemToBuy);
			alreadyBought.push(itemToBuy);
			toBuy.splice(index, 1);
		}
		
		service.getToBuyItems = function (){
			return toBuy;
		}
		
		service.getAlreadyBoughtItems = function (){
			return alreadyBought;
		}
	}
	
})();