'use strict';

angular.module('rlbApp')
  .service('ArtsoniaService', function ArtsoniaService($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var getLatestFromPortfolio = function(id, qty, onSuccess){
    	var url = 'http://www.artsonia.com/artists/portfolio.asp';

    	var findImgRegEx = /img src="http:\/\/images\.artsonia\.com\/art\/thumbnail\/[\d]*.jpg/;
    	var params = {id : id, callback : 'JSON_CALLBACK'};
    	var headers = {
    		Accept: 'text/html'
    	};
        var deferred = $q.defer();

    	$http.jsonp(url, {method:'GET', params:params, headers:headers})
    		.success(function(data){
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
