/*jshint unused: vars */
define(['angularAMD', 'angular', 'angular-ui-router', 'angular-animate'], (angularAMD, angular) => {
	'use strict';

	let app = angular.module('angularTestApp',
		[
			'ui.router',
			'ngAnimate'
		]);

	function getRouteByName(name) {
		let lowerCaseName = name.toLowerCase();
		let capitalizedName = lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1);
		let controller = `controllers/${lowerCaseName}`;
		let controllerName = `${capitalizedName}Ctrl`;
		let view = `views/${lowerCaseName}.html`;

		return {
			controllerName,
			controller,
			view
		};
	}

	app.config(($stateProvider, $urlRouterProvider) => {

		$stateProvider
			.state('default', angularAMD.route({
				url: '/:controller/:action?',
				templateUrl: ($stateParams) => {
					let route = getRouteByName($stateParams.controller);
					return route.view;
				},
				resolve: {
					loadController: ['$stateParams',
						($stateParams) => {
							let route = getRouteByName($stateParams.controller);

							return new Promise((resolve, reject) => {
								require([route.controller], () => resolve());
							});
						}]
				},
				controllerProvider: ['$stateParams',
					($stateParams) => {
						let route = getRouteByName($stateParams.controller);
						return route.controllerName;
					}]
			}));

		$urlRouterProvider
			.otherwise('/');
	});

	return angularAMD.bootstrap(app);
});
