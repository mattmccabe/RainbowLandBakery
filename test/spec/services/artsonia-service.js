'use strict';

describe('Service: ArtsoniaService', function () {

  // load the service's module
  beforeEach(module('rlbApp'));

  // instantiate service
  var ArtsoniaService;
  beforeEach(inject(function (_ArtsoniaService_) {
    ArtsoniaService = _ArtsoniaService_;
  }));

  it('should do something', function () {
    expect(!!ArtsoniaService).toBe(true);
  });

});
