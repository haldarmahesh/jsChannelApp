'use strict';

describe('Controller: Agendaday2Ctrl', function () {

  // load the controller's module
  beforeEach(module('jsAppApp'));

  var Agendaday2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Agendaday2Ctrl = $controller('Agendaday2Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
