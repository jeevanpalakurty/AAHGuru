var _ = require('lodash');
require('angular');

module.exports = angular.module('aah-guru-carousel-controller-module', [

]).controller('aahGuruCarouselController', [ function CarouselController() {

	var ctrl = this,
		_slides = [];

	function _activate() {

		$('.guru-carousel-child').each(function(){
			var next = $(this).next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}
			next.children(':first-child').clone().appendTo($(this));

			if (next.next().length>0) {
				next.next().children(':first-child').clone().appendTo($(this));
			}
			else {
				$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
			}
		});

		_slides.push({
			url: '#/vehicle',
			image: 'assets/Thumb_1.png',
			module: 'Vehicle'
		});

		_slides.push({
			url: '#/callHandler',
			image: 'assets/Thumb_2.png',
			module:'Call Handler'
		});
		_slides.push({
			url: '#/patrol',
			image: 'assets/Thumb_3.png',
			module:'Patrol'
		});
		_slides.push({
			url: '#/location',
			image: 'assets/Thumb_4.png',
			module:'Location'
		});

		_slides.push({
			url: '#/supplier',
			image: 'assets/Thumb_5.png',
			module:'Supplier'
		});

		_slides.push({
			url: '#/parts',
			image: 'assets/Thumb_6.png',
			module: 'Parts'
		});

		_slides.push({
			url: '#/task',
			image: 'assets/Thumb_7.png',
			module: 'Task'
		});
	}
	_activate();


	_.extend(ctrl, {
		slides: function slidesAccessor(){
			return _slides;
		},
		isValid: function isValid() {
			return false;
		}

	});
}]).directive('eatClickIf', ['$parse', '$rootScope',
		function($parse, $rootScope) {
			return {
				priority: 100,
				restrict: 'A',
				compile: function($element, attr) {
					var fn = $parse(attr.eatClickIf);
					return {
						pre: function link(scope, element) {
							var eventName = 'click';
							element.on(eventName, function(event) {
								var callback = function() {
									if (fn(scope, {$event: event})) {
										event.stopImmediatePropagation();
										event.preventDefault();
										return false;
									}
								};
								if ($rootScope.$$phase) {
									scope.$evalAsync(callback);
								} else {
									scope.$apply(callback);
								}
							});
						},
						post: function() {}
					}
				}
			}
		}
])