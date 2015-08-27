(function(){
	var app = angular.module('store', []);

	var gems = [
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: '. . .',
		canPurchase: true,
		soldOut: false,
		images: [
		{
			full: 'http://placehold.it/350x150',
			thumb: 'http://placehold.it/150x150'
		},
		{
			full: 'http://placehold.it/350x150',
			thumb: 'http://placehold.it/150x150'
		}],
		reviews:[
		{
			stars: 5,
			body: "I Love this product!",
			author: "bingola@hotmail.com"
		},
		{
			stars: 5,
			body: "I Love this product!",
			author: "bingola@hotmail.com"
		},
		{
			stars: 5,
			body: "I Love this product!",
			author: "bingola@hotmail.com"
		}],
	},
	{
		name: 'Malandro',
		price: 1,
		description: '. . .',
		canPurchase: true,
		soldOut: true,
		images: [
		{
			full: 'http://placehold.it/350x150',
			thumb: 'http://placehold.it/150x150'
		},
		{
			full: 'http://placehold.it/350x150',
			thumb: 'http://placehold.it/150x150'
		}],
		reviews:[
		{
			stars: 5,
			body: "I Love this product!",
			author: "bingola@hotmail.com"
		},
		{
			stars: 5,
			body: "I Love this product!",
			author: "bingola@hotmail.com"
		},
		{
			stars: 5,
			body: "I Love this product!",
			author: "bingola@hotmail.com"
		}],
	},
	{
		name: 'Muleco',
		price: 8.54,
		description: '. . .',
		canPurchase: true,
		soldOut: false,
		images: [
		{
			full: 'http://placehold.it/350x150',
			thumb: 'http://placehold.it/150x150'
		},
		{
			full: 'http://placehold.it/350x150',
			thumb: 'http://placehold.it/150x150'
		}],
		reviews:[
		{
			stars: 5,
			body: "I Love this product!",
			author: "bingola@hotmail.com"
		},
		{
			stars: 5,
			body: "I Love this product!",
			author: "bingola@hotmail.com"
		},
		{
			stars: 5,
			body: "I Love this product!",
			author: "bingola@hotmail.com"
		}],
	},

	];

	app.controller('StoreController', function(){
		this.products = gems;	
	});

	app.controller('PanelController', function(){
		
		this.tab = 1;

		this.selectTab = function(setTab){

			this.tab = setTab;

		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};

	});

	

})();
