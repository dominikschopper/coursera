(function () { // ---------- scope ---------- 
'use strict';

angular.module('CheckMeal', [])
    .controller('MealCtrl', MealCtrl);

MealCtrl.$inject = ['$scope'];
function MealCtrl($scope) {
    var messages = {
        empty: {
            text: 'Please enter data first! You did not enter anything!'
            ,css: 'txt-err'
        }
        ,okay: {
            text: 'Enjoy!'
            ,css: 'txt-okay'
        }
        ,toomuch: {
            text: 'Too much!'
            ,css: 'txt-nogood'
        }
        ,error: {
            text: 'This should not have happened!'
            ,css: 'txt-err'
        }
    };
    $scope.mealInput = '';
    $scope.mealMessage = '';
    $scope.checkMeal = function () {
        var ingredients = $scope.mealInput.split(/\s*,\s*/);
        if (!$scope.mealInput || ingredients.length === 0) {
            $scope.mealMessage = messages.empty.text;
            $scope.cssClassName = messages.empty.css;
        } else if (ingredients.length <= 3) {
            $scope.mealMessage = messages.okay.text;
            $scope.cssClassName = messages.okay.css;
        } else if (ingredients.length > 3) {
            $scope.mealMessage = messages.toomuch.text;
            $scope.cssClassName = messages.toomuch.css;
        } else {
            $scope.mealMessage = messages.error.text;
            $scope.cssClassName = messages.error.css;
        }
    };
}

})();          // ---------- /scope ----------
