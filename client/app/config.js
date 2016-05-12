"use strict";

angular.module('config', [])

.constant('ENV', 'development')

.constant('STUDENT_API', 'http://test.coderstrust.com')

.constant('ENDPOINT', 'http://test.coderstrust.com')

.constant('WEBSITE_ENDPOINT', 'http://localhost:9000')

.constant('FACEBOOK', {id:'1396945077245373',redirectUri:'http://localhost:9000/students/login/callback'})

.constant('GOOGLE', {id:'608577910207.apps.googleusercontent.com',redirectUri:'http://localhost:9000/students/login/callback'})

;