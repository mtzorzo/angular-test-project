/*jshint unused: vars */
require.config({
	paths: {
		angular: '../../bower_components/angular/angular',
		'angular-animate': '../../bower_components/angular-animate/angular-animate',
		'angular-cookies': '../../bower_components/angular-cookies/angular-cookies',
		'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
		'angular-resource': '../../bower_components/angular-resource/angular-resource',
		'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
		'angular-touch': '../../bower_components/angular-touch/angular-touch',
		'angular-ui-router': '../../bower_components/angular-ui-router/release/angular-ui-router',
		angularAMD: '../../bower_components/angularAMD/angularAMD',
		bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap'
	},
	shim: {
		angular: {
			exports: 'angular'
		},
		'angular-cookies': [
			'angular'
		],
		'angular-sanitize': [
			'angular'
		],
		'angular-resource': [
			'angular'
		],
		'angular-animate': [
			'angular'
		],
		'angular-touch': [
			'angular'
		],
		'angular-ui-router': [
			'angular'
		],
		'angular-mocks': {
			deps: [
				'angular'
			],
			exports: 'angular.mock'
		},
		angularAMD: [
			'angular'
		]
	},
	priority: [
		'angular'
	],
	packages: [

	],
	deps: [
		'app'
	]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';
