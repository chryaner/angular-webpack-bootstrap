
import angular from 'angular';
import "./style.less";

// register the app module with dependencies
angular.module('app', [

])

// register the app directive
.directive('app', () => {
	return {template: require('app/app.html')}
});

// kick angular!
angular.bootstrap(document, ['app']);
