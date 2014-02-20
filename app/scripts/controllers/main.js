'use strict';

angular.module('rlbApp')
  .controller('MainCtrl', function ($scope, ArtsoniaService) {

  	var handleArtResults = function(artUrlArray) {
  		if(artUrlArray.length >0)
  		{
  			$scope.recentArt1 = artUrlArray[0];	
  		}
  		if(artUrlArray.length > 1)
  		{
  			$scope.recentArt2 = artUrlArray[1];	
  		}
  		if(artUrlArray.length > 2)
  		{
  			$scope.recentArt3 = artUrlArray[2];	
  		}
  	}

  	//ArtsoniaService.getLatestFromPortfolio('5251834', 3, handleArtResults)
    
  });
