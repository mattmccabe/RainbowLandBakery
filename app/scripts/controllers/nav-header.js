'use strict';

angular.module('rlbApp')
  .controller('NavHeaderCtrl', function ($scope, $rootScope, $location) {
    $scope.currentSection = 'HOME';

    $rootScope.$on("$locationChangeSuccess", function (){
    	var mode = $scope.currentMode;
    	var path = $location.path();
    	if(isBarnPath(path))
    	{
    		mode = BARN;
    	}
    	else if(isMedPath(path))
    	{
    		mode = MED;
    	}
    	else if(isMortalityPath(path))
    	{
    		mode = MORTALITY;
    	}
    	else if(path === "/")
    	{
    		mode = SUMMARY;
    	}
    	$scope.currentMode = mode;
    });
  });
