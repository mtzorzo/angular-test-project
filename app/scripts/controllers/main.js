define(['app', 'services/user'], (app) => {
	'use strict';

	function MainCtrl($scope, $state, userService) {
		console.log('Hello from main controller');

		$scope.setName = function (name) {
			userService.setUserName(name);
			$state.go('default', {controller: 'about'});
		};
	}

	app.controller('MainCtrl', ['$scope', '$state', 'userService', MainCtrl]);
});
