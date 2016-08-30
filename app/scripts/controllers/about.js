define(['app', 'services/user'], (app) => {
	'use strict';

	function AboutCtrl($scope, userService) {
		console.log('Hello from about controller');

		$scope.name = userService.getUser().name;
	}

	app.controller('AboutCtrl', ['$scope', 'userService', AboutCtrl]);
});
