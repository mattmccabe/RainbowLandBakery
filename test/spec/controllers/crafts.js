'use strict';

describe('Controller: CraftsCtrl', function () {

  // load the controller's module
  beforeEach(module('rlbApp'));

  var CraftsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CraftsCtrl = $controller('CraftsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
