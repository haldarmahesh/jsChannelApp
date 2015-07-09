'use strict';

/**
 * @ngdoc function
 * @name jsAppApp.controller:VenueCtrl
 * @description
 * # VenueCtrl
 * Controller of the jsAppApp
 */
angular.module('jsAppApp')
    .controller('VenueCtrl', function($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.goBack = function() {
            window.history.back();
        }
    });
