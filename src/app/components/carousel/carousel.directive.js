var _ = require('lodash');
require('angular');

module.exports = angular.module('aah-guru-carousel-module', [
	// controller
	require('./carousel.controller.js').name
]).directive('aahGuruCarousel', [function GuruCarousel() {
	return {
		restrict: 'E',
		templateUrl: 'partials/carousel.template.html',
		controller: 'aahGuruCarouselController',
		controllerAs: 'ctrl',
		scope: {}
	};
}]);