define(['app'], (app) => {
	'use strict';

	function ContactCtrl($scope, $stateParams) {
		$scope.name = $stateParams.action;

		console.log(`Hello from contact controller ${$scope.name}`);
	}

	app.controller('ContactCtrl', ['$scope', '$stateParams', ContactCtrl]);
});
