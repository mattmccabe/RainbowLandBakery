'use strict';

angular.module('rlbApp')
  .controller('EasterCtrl', function ($scope) {

  	$scope.clue1 = { code : 'A9840',
  		name: 'Egg 1',
  		solved: false,
  		songUrl: '../content/crocodile_rock.mp3'};
  	$scope.clue2 = { code : 'G4633',
  		name: 'Egg 2',
  		solved: false,
  		songUrl: '../content/jenny.mp3'};
  	$scope.clue3 = { code : 'U1298',
  		name: 'Egg 3',
  		solved: false,
  		songUrl: '../content/sultans_of_swing.mp3'};
  	$scope.clue4 = { code : 'W3410',
  		name: 'Egg 4',
  		solved: false,
  		songUrl: '../content/Mr_Robot.mp3'};

  	$scope.clue5 = { code : 'Y7866',
  		name: 'Egg 5',
  		solved: false,
  		songUrl: '../content/mr_sandman.mp3'};

  	var clueIdx = 0;
    $scope.huntCode = '';

    $scope.checkCode = function() {
    	if(!$scope.clue1.solved){
    		if($scope.clue1.code === $scope.huntCode)
    		{
    			$scope.clue1.solved = true;
    			$scope.huntCode = '';
    		}

    	}
    	else if(!$scope.clue2.solved){
    		if($scope.clue2.code === $scope.huntCode)
    		{
    			$scope.clue2.solved = true;
    			$scope.huntCode = '';
    		}

    	}
    	else if(!$scope.clue3.solved){
    		if($scope.clue3.code === $scope.huntCode)
    		{
    			$scope.clue3.solved = true;
    			$scope.huntCode = '';
    		}

    	}
    	else if(!$scope.clue4.solved){
    		if($scope.clue4.code === $scope.huntCode)
    		{
    			$scope.clue4.solved = true;
    			$scope.huntCode = '';
    		}

    	}
    	else if(!$scope.clue5.solved){
    		if($scope.clue5.code === $scope.huntCode)
    		{
    			$scope.clue5.solved = true;
    			$scope.huntCode = '';
    		}

    	}

    	
    	
    }

  });
