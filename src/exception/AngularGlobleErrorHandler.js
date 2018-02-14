angular.module('myApp', ['testApp'])
    .config(function ($provide) {
        $provide.decorator('$exceptionHandler', function ($delegate) {
            return function (exception, cause) {
                $delegate(exception, cause);
                var message  = exception.message;
                var stack = exception.stack;
                console.log('Error Message: ' + message);
                console.log('Error Stack: ' + stack);
            };
        });
    })
    .controller('ErrorCtrl', function($scope) {
        console.log("ErrorCtrl");
        $scope.title = "Validate the error handler";
        //var a = s/d;
    });