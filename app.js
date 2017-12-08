(function() {
    'use strict';
    angular
        .module('ngLib', [])
        .directive('ngLib', ngLib);
    function ngLib() {
        return {
            restrict: 'E',
            link: function ($scope, $attrs, $element) {
                console.log('Funciona!');
            }
        };
    }
})();