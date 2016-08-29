define(['app'], (app) => {
	'use strict';

	app.controller('ContactCtrl', ['$scope', '$stateParams', ContactCtrl]);

	function ContactCtrl($scope, $stateParams) {
		$scope.name = $stateParams.action;

		console.log(`Hello from contact controller ${$scope.name}`);
	}
});
