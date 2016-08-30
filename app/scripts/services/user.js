define(['app'], (app) => {
	'use strict';

	function userService() {
		var user = {};

		function setUserName(userName) {
			user.name = userName;
		}

		function getUser() {
			return user;
		}

		return {
			setUserName,
			getUser
		};
	}

	app.service('userService', userService);
});
