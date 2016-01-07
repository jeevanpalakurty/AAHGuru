var _ = require('lodash');
require('angular');

module.exports = angular.module('aah-home-route-module', [
	// directives
	require('../header/header.controller').name,
	require('./home.controller').name,
	require('../footer/footer.controller').name,
	require('../../components/carousel/carousel.directive').name,
]).config(['$stateProvider', '$urlRouterProvider', function HomeConfig($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/guru');

	$stateProvider
		.state('home', {
			url: '/guru',
			views: {
				header: {
					templateUrl: 'partials/header.template.html',
					controller: 'aahHeaderController',
					controllerAs: 'ctrl'
				},
				content_area: {
					templateUrl: 'partials/home.template.html',
					controller: 'aahHomeController',
					controllerAs: 'ctrl'
				},
				summary: {

				},
				footer: {
					templateUrl: 'partials/footer.template.html',
					controller: 'aahFooterController',
					controllerAs: 'ctrl'
				}

			}

		});
}]);