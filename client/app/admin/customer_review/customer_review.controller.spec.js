'use strict';

describe('Controller: CustomerReviewCtrl', function () {

  // load the controller's module
  beforeEach(module('ctSignupApp'));

  var CustomerReviewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CustomerReviewCtrl = $controller('CustomerReviewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
