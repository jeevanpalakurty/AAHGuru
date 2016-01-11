var _ = require('lodash');
require('angular');

module.exports = angular.module('guru-location-module', [	require('../location/location.controller').name])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('location', {
        url: "/location",
        views: {
            header: {
                templateUrl: 'partials/header.template.html',
                controller: 'aahHeaderController',
                controllerAs: 'ctrl'
            },
            content_area: {
                templateUrl: 'partials/location.template.html',
                controller: 'locationController',
                controllerAs: 'ctrl'
            }

        }

    });
}]);