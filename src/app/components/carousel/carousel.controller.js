var _ = require('lodash');
require('angular');

module.exports = angular.module('aah-guru-carousel-controller-module', [

]).controller('aahGuruCarouselController', [ function CarouselController() {

	var ctrl = this,
	_slides = [];

	_slides.push({
		url: '#home',
		image: 'http://placekitten.com/300/200'
	});

	_slides.push({
		url: '#home',
		image: 'http://placekitten.com/307/200'
	});
	$scope.slides.push({
		url: '#home',
		image: 'http://placekitten.com/302/200'
	});
	$scope.slides.push({
		url: '#home',
		image: 'http://placekitten.com/305/200'
	});

	$scope.setActive = function(idx) {
		$scope.slides[idx].active = true;
	};

	//runing every tim controller is accessed
	$scope.setActive($route.current.params.slide || 0);




	_.extend(ctrl, {

	});
}]);