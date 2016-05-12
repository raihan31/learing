'use strict';

describe('Controller: WorkshopCtrl', function () {

  // load the controller's module
  beforeEach(module('ctSignupApp'));

  var WorkshopCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WorkshopCtrl = $controller('WorkshopCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
