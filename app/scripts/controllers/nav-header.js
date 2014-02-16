'use strict';

angular.module('rlbApp')
  .controller('NavHeaderCtrl', function ($scope, $rootScope, $location, ContentService) {
    $scope.currentSection = null;

    $scope.sections = ContentService.getSections();

    $rootScope.$on("$locationChangeSuccess", function (){
    	var section = null;
    	var path = $location.path();
    	var regex;

    	for(var i=0;i<$scope.sections.length;i++){
    		regex = new RegExp($scope.sections[i].path, 'g');
    		if(regex.test(path)) 
    		{
    			section = $scope.sections[i];
    			break;
    		}
    	}

    	$scope.currentSection = section;

    	if($scope.currentSection)
    	{
    		$scope.subSections = ContentService.getSubSections($scope.currentSection);
    		$scope.showSubMenu = true;
    	}
    	else
		{
			$scope.showSubMenu = false;
		}
    });
  });
