'use strict';

describe('Controller: SpeakerdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('jsAppApp'));

  var SpeakerdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpeakerdetailsCtrl = $controller('SpeakerdetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
