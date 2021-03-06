(function(){

	var app = angular.module('store', ['store-products']);

	app.controller('StoreController', ['$http', '$log', function($http, $log){
		var store = this;
		store.products = [];

		$http.get('json/products.json').success(function(data){
				store.products = data;
		});

	} ]);


	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product){
				product.reviews.push(this.review);
				this.review = {};
		};


	});



})();
