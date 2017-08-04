angular.module('myApp', [])
    .controller('DecimalCtrl', function($scope) {
        var rs = Decimal.mul(339.15, 90);
        $scope.title = " = " + rs;

        console.log("In Js, 0.3 - 0.1 = ",(0.3-0.1));
        var a = new Decimal(0.3);
        console.log("In Decimal, 0.3 - 0.1 = ",a.minus(0.1).toFixed(2));
        console.log("In Decimal, 0.3 - 0.1 = ",Decimal.mul(0.3, 0.1).toFixed(2));


    });