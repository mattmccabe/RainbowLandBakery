'use strict';

angular.module('rlbApp')
  .service('ArtsoniaService', function ArtsoniaService($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var getLatestFromPortfolio = function(id, qty, onSuccess){
    	var url = 'http://www.artsonia.com/artists/portfolio.asp';

    	var findImgRegEx = /img src="http:\/\/images\.artsonia\.com\/art\/thumbnail\/[\d]*.jpg/;
    	var params = {id:id};
    	var headers = {
    		'Accept': 'text/html',
    		'Accept-Language':'en-US,en;q=0.8',
    		'Cache-Control':'max-age=0',
    		'Access-Control-Allow-Origin':'*'
    	};

    	$http({method:'GET', url:url, params:params, headers:headers})
    		.success(function(data, status, headers, config){
    			var rawUrl = data.match(findImgRegEx);
    			onSuccess(rawUrl);
    		}).
    		error(function(data, status, headers, config){
    			var d = data;	
    		});

    };

    return {
    	getLatestFromPortfolio : getLatestFromPortfolio
    }
  });
