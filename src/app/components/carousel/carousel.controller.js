var _ = require('lodash');
require('angular');

module.exports = angular.module('aah-guru-carousel-controller-module', [

]).controller('aahGuruCarouselController', [ function CarouselController() {

	var ctrl = this,
		_slides = [];

	_slides.push({
		url: '/vehicle',
		image: 'assets/vehicle.jpg'
	});

	_slides.push({
		url: '/callHandler',
		image: 'assets/Call_Handler.jpg'
	});
	_slides.push({
		url: '/patrol',
		image: 'assets/patrol.jpg'
	});
	_slides.push({
		url: '/location',
		image: 'assets/location.jpg'
	});

	_slides.push({
		url: '/supplier',
		image: 'assets/supplier.jpg'
	});

	_slides.push({
		url: '/parts',
		image: 'assets/Parts.jpg'
	});

	_slides.push({
		url: '/task',
		image: 'assets/Task.jpg'
	});

	function setActive(idx) {
		_slides[idx].active = true;
	}

	//running every tim controller is accessed
	//_slides.setActive($route.current.params.slide || 0);


	_.extend(ctrl, {
		slides: function slidesAccessor(){
			return _slides;
		}

	});
}]);