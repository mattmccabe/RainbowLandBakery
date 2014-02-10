'use strict';

describe('Controller: NavHeaderCtrl', function () {

  // load the controller's module
  beforeEach(module('rlbApp'));

  var NavHeaderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavHeaderCtrl = $controller('NavHeaderCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
