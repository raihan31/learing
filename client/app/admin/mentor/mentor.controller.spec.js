'use strict';

describe('Controller: MentorCtrl', function () {

  // load the controller's module
  beforeEach(module('ctSignupApp'));

  var MentorCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MentorCtrl = $controller('MentorCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
