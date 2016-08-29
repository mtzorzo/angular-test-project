define(['app'], (app) => {
	'use strict';

	app.controller('AboutCtrl', AboutCtrl);

	function AboutCtrl() {
		console.log('Hello from about controller');
	}
});
