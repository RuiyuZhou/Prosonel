angular.module("finance", [])
.factory("currencyConverter", function() {
    var currencies = ["USD", "EUR", "CNY"];
    var usdToForeignRates = {
        USD: 1,
        EUR: 0.74,
        CNY: 6.09
    };
    var conver = functioin(ammount, inCurr, outCurr) {
        return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr]
    };

    return {
        currencies: currencies,
        convert: convert
    }
})

angular.module("AngularDemo", ["finance"])
.controller("controller1", ["currencyConverter", function controller1($scope) {
}])