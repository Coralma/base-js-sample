angular.module('testApp', [])
    .controller('userCtrl', function($scope) {
        console.log("User Ctrl");
        $scope.subTitle = "Sub title for UserCtrl";
        $scope.runError = function() {
            var a= b/c;
        }
    });