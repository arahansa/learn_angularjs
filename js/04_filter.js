var myApp = angular.module('myApp', []);

myApp.filter('reverse', function () {
    return function (input, uppercase) {
        var out = "";

        for (var i = 0; i < input.length; i++) {
            out = input.charAt(i) + out;
        }

        if (uppercase) {
            out = out.toUpperCase();
        }
        return out;
    }
});

// Controller included to supply data
myApp.controller('MainCtrl', ['$scope', function ($scope) {

    $scope.greeting = 'Todd Motto';

    $scope.numbers = [10, 25, 35, 45, 60, 80, 100];
    
    $scope.lowerBound = 42;
    
    // 필터가 되어줘
    $scope.greaterThanNum = function (item) {
        return item > $scope.lowerBound;
    };

}]);