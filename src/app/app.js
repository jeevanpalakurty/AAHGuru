require('angular');

var ui_bootstrap = require('angular-ui-bootstrap'),
	ui_router = require('angular-ui-router'),
	ui_scrollbar = require('ng-scrollbar'),
	ng_messages = require('angular-messages');

angular.module('aah-guru', [
	// dependencies
	ui_bootstrap,
	ui_router,
	'ngScrollbar',
	ng_messages,

	// routes
	require('./routes/home/home.route').name


]).config(['$compileProvider', function ($compileProvider) {
	// $compileProvider.debugInfoEnabled(false);
}]).run(['$state', '$rootScope',  function ($state, $rootScope) {
	$rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
		console.log(error);
	});


	$state.go('home');

}]);