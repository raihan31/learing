'use strict';

angular.module('ctSignupApp')
.filter('joinHashBy', function() {
  return function(hash, by) {
    var arr = [];
    angular.forEach(Object.keys(hash), function (key) {
      arr.push(hash[key][by]);
    });

    return arr.join(', ');
  };
})
.filter('htmlToPlaintext', function() {
  return function(text) {
    return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
  };
})
.filter('shorterText', function() {
  return function(text, length, continueLabel) {
    return  text ? String(text).slice(0, length) + (continueLabel ? continueLabel : ' ...') : '';
  };
})
.directive('toggleShorterText', [
  '$filter',
  function ($filter) {
    return {
      scope: {
        text: '='
      },
      link: function ($scope, element) {
        $scope.short = true;
        function toggle(val) {
          if (val) {
            element.html($filter('shorterText')($scope.text, 150, '  '));
            element.append('<a href="#">Show More</a>');
          } else {
            element.html($scope.text);
            element.append(' <a href="#">Show Less</a>');
          }

          $('a', element).click(function (e) {
            e.preventDefault();
            e.stopPropagation();

            $scope.short = !$scope.short;
            toggle($scope.short);
          });
        }

        toggle($scope.short);
      }
    };
  }
])
.directive('ngBackgroundImage', function(){
  return {
    scope: {
      url: '=backgroundUrl'
    },
    link: function(scope, element) {
      scope.$watch('url', function (newVal) {
        element.css({
            'background-image': 'url(' + newVal +')'
        });
      });
    }
  };
})
.directive('ngFullHeightBg', ['$window', function ($window) {
  return {
    scope: {
      url: '=backgroundUrl'
    },
    link: function(scope, element) {
      scope.$watch('url', function (newVal) {
        element.css({
          'background-image': 'url(' + newVal +')',
          minHeight: $('html').height()
        });
      });

      $($window).resize(function () {
        element.css({
          minHeight: $('html').height()
        });
      });
    }
  };
}])
.directive('ngWaypoints', [
  '$rootScope',
  function ($rootScope) {
    return {
      scope: {
        data: '=waypointData'
      },
      link: function($scope, element, attrs){
        $scope.event = attrs.broadcastEvent;

        $scope.$watch('data', function (newVal) {
          if (newVal.id) {
            $scope.waypoint = new window.Waypoint({
              element: element[0],
              handler: function() {
                $rootScope.$broadcast($scope.event, $scope.data);
              },
              offset: 89
            });
          }
        });
      }
    };
  }
])
.directive('ngLinkable', [
  '$state',
  function ($state) {
    return function(scope, element, attrs){
      var url = attrs.ngLinkable;
      $(element).click(function () {
        $state.go(url);
      });
    };
  }
]);
