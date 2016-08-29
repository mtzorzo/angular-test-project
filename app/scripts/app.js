/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about'], function (angular, MainCtrl, AboutCtrl) {
	'use strict';

	return angular
		.module('angularTestApp', ['angularTestApp.controllers.MainCtrl', 'angularTestApp.controllers.AboutCtrl', 'ui.router', 'ngCookies', 'ngResource', 'ngSanitize', 'ngAnimate', 'ngTouch'])
		.config(function ($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('main', {
					url: '/',
					templateUrl: 'views/main.html',
					controller: 'MainCtrl'
				})
				.state('about', {
					url: '/about',
					templateUrl: 'views/about.html',
					controller: 'AboutCtrl'
				});
		});
});
