'use strict';

describe('Controller: OfficeCtrl', function () {

  // load the controller's module
  beforeEach(module('ctSignupApp'));

  var OfficeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OfficeCtrl = $controller('OfficeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
