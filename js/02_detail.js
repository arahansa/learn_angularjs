var myApp = angular.module('myApp', []);

myApp.controller('UserCtrl', ['$scope', function ($scope) {
    
    // user details라는 네임스페이스를 사용하자. DOM에서 알아보기도 좋을 것이다.
    $scope.user = {};
    $scope.user.details = {
      "username": "Todd Motto",
      "id": "89101112"
    };
    
}]);