'use strict';

angular.module('ctSignupApp')
.factory('ForbideScroll', function () {
  var keys = {37: 1, 38: 1, 39: 1, 40: 1};
  var API = {
    preventDefault: function (e) {
      e = e || window.event;
      if (e.preventDefault) {
        e.preventDefault();
      }
      e.returnValue = false;
    },

    preventDefaultForScrollKeys: function (e) {
        if (keys[e.keyCode]) {
          API.preventDefault(e);
          return false;
        }
    },

    disableScroll: function () {
      if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', API.preventDefault, false);
      }
      window.onwheel = API.preventDefault; // modern standard
      window.onmousewheel = document.onmousewheel = API.preventDefault; // older browsers, IE
      window.ontouchmove  = API.preventDefault; // mobile
      document.onkeydown  = API.preventDefaultForScrollKeys;
    },

    enableScroll: function () {
        if (window.removeEventListener) {
          window.removeEventListener('DOMMouseScroll', API.preventDefault, false);
        }
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
    }
  };

  return API;
});
