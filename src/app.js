
import angular from 'angular';
import "./style.less";



// register the app module with dependencies
angular.module('app', [
			//navbar.name,
			//snake.name,
			//scores.name
		])

// register the app directive
.directive('app', () => {
	return {template: require('app/app.html')}
});

// kick angular!
angular.bootstrap(document, ['app']);

//class Hello {
//
//	speak() {
//		console.log("hello");
//	}
//
//}
//
//var hello = new Hello();
//hello.speak();
