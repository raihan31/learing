'use strict';

describe('Controller: SuccessStoryCtrl', function () {

  // load the controller's module
  beforeEach(module('ctSignupApp'));

  var SuccessStoryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SuccessStoryCtrl = $controller('SuccessStoryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
