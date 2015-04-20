var myApp = angular.module('myApp', []);
/*restrict, replace, transclude, template, templateUrl, link 속성*/

myApp.directive('custom', function () {
  return {
		restrict: 'A',
        replace: true,
		transclude: true,
		template: '<a href="" class="myawesomebutton" ng-transclude>' +
                      '<i class="icon-ok-sign"></i>' +
                  '</a>',
        link: function (scope, element, attrs) {
                // DOM manipulation/events here!
        }
    };
});