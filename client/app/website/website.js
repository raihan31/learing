'use strict';

angular.module('ctSignupApp')
  .config(function ($stateProvider){
    $stateProvider
      .state('website', {
        url: '',
        templateUrl: 'app/website/website.html',
        controller: 'WebsiteCtrl',
        abstract: true,
        resolve: {
          headData: function () {
            return {
              title: 'Coderstrust',
              description: 'CodersTrust is an initiative backed by the development fund Danida, or Danish International Development Agency, to provide microfinance and education for students in emerging nations who want to upgrade their programming skills. The hope of founder, Copenhagen-born entrepreneur Ferdinand Kjærulff, is that these students are empowered to sell their work internationally via freelance portals such as Upwork. The team is currently operating in Dhaka, Bangladesh, where it collaborates with Grameen Bank, which is renowned for its part in revolutionising the microfinance industry. Skype seed funder Morten Lund invested in the company in March 2014, describing it as a "profitable charity"',
              keywords: 'Home, Coderstrust, Micro credit, Frontend development, Backend Development, Freelancing, Online marketplace, Code you later, CT'
            };
          },
          socialNetworkNavs: function (socialNetworksPages) {
            return socialNetworksPages;
          },
          menuItems: function (websiteMenuItems) {
            return websiteMenuItems;
          }
        }
      })
      .state('website.finance', {
        url: '/finance',
        templateUrl: 'app/website/finance/finance.html',
        controller: 'FinanceCtrl',
        resolve: {
          headData: function () {
            return {
              title: 'Finance - Coderstrust',
              description: 'Microloans are paid out monthly for a duration of course period. The microloans are provided for tuition fee. This model allows the student to focus on their educational progress and further their IT skills.',
              keywords: 'Micro Finance, Micro Credit'
            };
          }
        }
      })
      .state('website.home', {
        url: '/how-it-works',
        templateUrl: 'app/website/home/home.html',
        controller: 'HomeCtrl',
        resolve: {
          headData: function () {
            return {
              title: 'Coderstrust',
              description: 'CodersTrust is an initiative backed by the development fund Danida, or Danish International Development Agency, to provide microfinance and education for students in emerging nations who want to upgrade their programming skills. The hope of founder, Copenhagen-born entrepreneur Ferdinand Kjærulff, is that these students are empowered to sell their work internationally via freelance portals such as Upwork. The team is currently operating in Dhaka, Bangladesh, where it collaborates with Grameen Bank, which is renowned for its part in revolutionising the microfinance industry. Skype seed funder Morten Lund invested in the company in March 2014, describing it as a "profitable charity"',
              keywords: 'Home, Coderstrust, Micro credit, Frontend development, Backend Development, Freelancing, Online marketplace, Code you later, CT'
            };
          },
          // map: function ($window, $q, $http) {
            // var deferred = $q.defer(),
            //     map = {
            //       position: '0, 0',
            //       center: 'center',
            //       zoom: 2,
            //       mapTypeId: $window.google.maps.MapTypeId.ROADMAP,
            //       styles: [{'featureType':'water','elementType':'geometry','stylers':[{'color':'#064a75'}]},{'featureType':'landscape','elementType':'geometry','stylers':[{'color':'#24a388'}]},{'featureType':'poi','elementType':'geometry','stylers':[{'color':'#1f8a70'}]},{'featureType':'road.highway','elementType':'geometry','stylers':[{'color':'#fd7400'}]},{'featureType':'road.arterial','elementType':'geometry','stylers':[{'color':'#1f8a70'},{'lightness':-20}]},{'featureType':'road.local','elementType':'geometry','stylers':[{'color':'#1f8a70'},{'lightness':-17}]},{'elementType':'labels.text.stroke','stylers':[{'color':'#ffffff'},{'visibility':'off'},{'weight':0.9}]},{'elementType':'labels.text.fill','stylers':[{'visibility':'on'},{'color':'#ffffff'}]},{'featureType':'poi','elementType':'labels','stylers':[{'visibility':'simplified'}]},{'elementType':'labels.icon','stylers':[{'visibility':'off'}]},{'featureType':'transit','elementType':'geometry','stylers':[{'color':'#1f8a70'},{'lightness':-10}]},{},{'featureType':'administrative','elementType':'geometry','stylers':[{'color':'#1f8a70'},{'weight':0.7}]}]
            //     };
            //
            // $http.get('http://kpi.coderstrust.com/edu_kpi/get_locations.php')
            // .then(function (data) {
            //   map.markers = data.data.slice(0);
            //
            //   deferred.resolve(map);
            // })
            // .catch(function (err) {
            //   deferred.reject(err);
            // });
            //
            // return deferred.promise;
          // },
          Snap: function ($window) {
            return $window.Snap;
          },
          slides: function () {
            return [
              {
                src: '//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fi0Waih3yoQs%3Ffeature%3Doembed&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Di0Waih3yoQs&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fi0Waih3yoQs%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube',
                title: 'Horizon Talks - Ferdinand Kjærulff (Coderstrust)',
                text: 'This allows us to recommend which paths & courses is right for you and project your future potential earnings and repayment scheme.'
              },
              {
                src: '//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fi0Waih3yoQs%3Ffeature%3Doembed&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Di0Waih3yoQs&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fi0Waih3yoQs%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube',
                title: 'Horizon Talks 2 - Ferdinand Kjærulff (Coderstrust)',
                text: 'This allows us to recommend which paths & courses is right for you and project your future potential earnings and repayment scheme.'
              },
              {
                src: '//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fi0Waih3yoQs%3Ffeature%3Doembed&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Di0Waih3yoQs&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fi0Waih3yoQs%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube',
                title: 'Horizon Talks 3 - Ferdinand Kjærulff (Coderstrust)',
                text: 'This allows us to recommend which paths & courses is right for you and project your future potential earnings and repayment scheme.'
              },
              {
                src: '//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fi0Waih3yoQs%3Ffeature%3Doembed&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Di0Waih3yoQs&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fi0Waih3yoQs%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube',
                title: 'Horizon Talks 4 - Ferdinand Kjærulff (Coderstrust)',
                text: 'This allows us to recommend which paths & courses is right for you and project your future potential earnings and repayment scheme.'
              }
            ];
          },
          heroData: function () {
            return {
              title: 'Student <span>finance</span> for a <br/> borderless <span>workforce</span>',
              description: 'Receive student finance to take online coding courses and repay<br/> with your future earning from leading freelancing portals',
              url: '/assets/images/home-hero-bg.jpg'
            };
          },
          latestLearningItems: function ($http, WEBSITE_ENDPOINT, $q) {
            var deferred = $q.defer();

            $http.get(WEBSITE_ENDPOINT + '/api/courses').then(function (data) {
              deferred.resolve(data.data);
            }).catch(function (err) {
              deferred.reject(err);
            });

            return deferred.promise;
          }
        }
      })
      .state('website.learning', {
        url: '/learning',
        templateUrl: 'app/website/learning/learning.html',
        controller: 'LearningCtrl',
        resolve: {
          headData: function () {
            return {
              title: 'Learn - Coderstrust',
              description: 'Students upgrade their skills by following a 6-month personalized e-learning curriculum, work with a mentor, and perform paid assignments from online freelance marketplaces.',
              keywords: 'Learning Center, Education, Online Course, Html5, CSS, JavaScript, PHP, Android, Wordpress, Online Learning'
            };
          },
          tabsData: function ($http, WEBSITE_ENDPOINT, $q) {
            var deferred = $q.defer();

            $http.get(WEBSITE_ENDPOINT + '/api/courses').then(function (data) {
              deferred.resolve(data.data);
            }).catch(function (err) {
              deferred.reject(err);
            });

            return deferred.promise;
          },
          portfolioData: function ($http, WEBSITE_ENDPOINT, $q) {
            var deferred = $q.defer();

            $http.get(WEBSITE_ENDPOINT + '/api/portfolios').then(function (data) {
              deferred.resolve(data.data);
            }).catch(function (err) {
              deferred.reject(err);
            });

            return deferred.promise;
          },
          mentorsData: function ($http, WEBSITE_ENDPOINT, $q) {
            var deferred = $q.defer();

            $http.get(WEBSITE_ENDPOINT + '/api/mentors').then(function (data) {
              deferred.resolve(data.data);
            }).catch(function (err) {
              deferred.reject(err);
            });

            return deferred.promise;
          },
          workshopsData: function ($http, WEBSITE_ENDPOINT, $q) {
            var deferred = $q.defer();

            $http.get(WEBSITE_ENDPOINT + '/api/workshops').then(function (data) {
              deferred.resolve(data.data);
            }).catch(function (err) {
              deferred.reject(err);
            });

            return deferred.promise;
          },
          // tabsData: function () {
          //   return [
          //     {
          //       content: '<div class="container text-center"><div class="row circles-list"><div class="col-xs-12 col-sm-6 col-md-3"><div class="circle"><div class="help"><div id="num-1" class="animated counter">160</div> <div class="hint">hours</div> </div></div></div><div class="col-xs-12 col-sm-6 col-md-3"><div class="circle"><div class="help"><div id="num-2" class="animated counter">4</div> <div class="hint">PROJECTS</div> </div></div></div><div class="col-xs-12 col-sm-6 col-md-3"><div class="circle"><div class="help"><div id="num-3" class="animated counter">7</div> <div class="hint">SKILLS</div> </div></div></div><div class="col-xs-12 col-sm-6 col-md-3"><div class="circle"><div class="help"><div id="num-4" class="animated counter">2000</div> <div class="hint">hours</div> </div></div></div></div><div class="text-center"><h1>Description</h1><p>We\'ve partnered up with the world\'s best online learning providers such as<br/>codeschool.com and www.pluralsight.com to make their learning paths, courses and content<br/>available through our platform. You will need to pass a skill assessment test for<br/>each learning path to ensure you have the right coding prerequisites<br/>to complete the courses successfully.</p></div></div><div class="video-description"><div class="container"><div class="row"><div class="col-xs-12 col-md-6 pull-right"><div class="js-lazyYT-box"><div class="js-lazyYT" data-youtube-id="_oEA18Y8gM0" data-ratio="16:9"></div></div></div><div class="col-xs-12 col-md-6 pull-left"><h3>Video Description</h3><p>We\'ve partnered up with the world\'s best onlinelearning providers such as codeschool.com andwww.pluralsight.com to make their learning paths,courses and content available through our platform.</p></div></div></div></div>'
          //     },
          //     {content: '2...'},
          //     {content: '3...'},
          //     {content: '4...'},
          //   ];
          // },
          heroData: function () {
            return {
              title: 'We <span>teach</span> what <br> the <span>market wants!</span>',
              url: '/assets/images/home-hero-bg.jpg'
            };
          }
        }
      })
      .state('website.earn', {
        url: '/earn',
        templateUrl: 'app/website/earn/earn.html',
        controller: 'EarnCtrl',
        resolve: {
          headData: function () {
            return {
              title: 'Earn - Coderstrust',
              description: 'During the CodersTrust program the student get’s a great online freelance profile with reviews, worked hours, passed tests and client portfolio. This combined with their upgraded skills that are in-demand ensures they get better paying jobs and tasks.',
              keywords: 'Learn & Earn Center, Online earning, Freelancing, Online Job'
            };
          },
          customerReviewsData: function ($http, WEBSITE_ENDPOINT, $q) {
            var deferred = $q.defer();

            $http.get(WEBSITE_ENDPOINT + '/api/customer_reviews').then(function (data) {
              deferred.resolve(data.data);
            }).catch(function (err) {
              deferred.reject(err);
            });

            return deferred.promise;
          },
          successStoriesData: function ($http, WEBSITE_ENDPOINT, $q) {
            var deferred = $q.defer();

            $http.get(WEBSITE_ENDPOINT + '/api/success_stories').then(function (data) {
              deferred.resolve(data.data);
            }).catch(function (err) {
              deferred.reject(err);
            });

            return deferred.promise;
          },
          map: function ($window, $q, $http) {
            var deferred = $q.defer(),
                map = {
                  position: '0, 0',
                  center: 'center',
                  zoom: 2,
                  mapTypeId: $window.google.maps.MapTypeId.ROADMAP,
                  styles: [{'featureType':'water','elementType':'geometry','stylers':[{'color':'#064a75'}]},{'featureType':'landscape','elementType':'geometry','stylers':[{'color':'#24a388'}]},{'featureType':'poi','elementType':'geometry','stylers':[{'color':'#1f8a70'}]},{'featureType':'road.highway','elementType':'geometry','stylers':[{'color':'#fd7400'}]},{'featureType':'road.arterial','elementType':'geometry','stylers':[{'color':'#1f8a70'},{'lightness':-20}]},{'featureType':'road.local','elementType':'geometry','stylers':[{'color':'#1f8a70'},{'lightness':-17}]},{'elementType':'labels.text.stroke','stylers':[{'color':'#ffffff'},{'visibility':'off'},{'weight':0.9}]},{'elementType':'labels.text.fill','stylers':[{'visibility':'on'},{'color':'#ffffff'}]},{'featureType':'poi','elementType':'labels','stylers':[{'visibility':'simplified'}]},{'elementType':'labels.icon','stylers':[{'visibility':'off'}]},{'featureType':'transit','elementType':'geometry','stylers':[{'color':'#1f8a70'},{'lightness':-10}]},{},{'featureType':'administrative','elementType':'geometry','stylers':[{'color':'#1f8a70'},{'weight':0.7}]}]
                };

            $http.get('http://kpi.coderstrust.com/edu_kpi/get_locations.php')
            .then(function (data) {
              map.markers = data.data.slice(0);
              deferred.resolve(map);
            })
            .catch(function (err) {
              deferred.reject(err);
            });

            return deferred.promise;
          },
        }
      })
      .state('website.about', {
        url: '/about',
        templateUrl: 'app/website/about/about.html',
        controller: 'AboutCtrl',
        resolve: {
          headData: function() {
            return {
              title: 'Team - Coderstrust',
              description: 'CodersTrust is the brainchild of Ferdinand Kjærulff. As a Captain of the Danish army he served as recovery officer in Iraq after the fall of Saddam. He pioneered a recovery project with the allied forces, bringing internet and e-learning to the citizens of the region in which he was stationed. The project was a massive success and inspired him to eventually create CodersTrust – supported by Danida – with a vision to democratize access to education via the internet on a global scale.',
              keywords: 'About, About Coderstrust, Team, Global Team, Bangladesh Team'
            };
          },
          map: function ($window) {
            var map = {
                  position: '28.4042635, 77.05313530000001',
                  center: 'center',
                  zoom: 2,
                  mapTypeId: $window.google.maps.MapTypeId.ROADMAP,
                  styles: [{'featureType':'water','elementType':'geometry','stylers':[{'color':'#064a75'}]},{'featureType':'landscape','elementType':'geometry','stylers':[{'color':'#24a388'}]},{'featureType':'poi','elementType':'geometry','stylers':[{'color':'#1f8a70'}]},{'featureType':'road.highway','elementType':'geometry','stylers':[{'color':'#fd7400'}]},{'featureType':'road.arterial','elementType':'geometry','stylers':[{'color':'#1f8a70'},{'lightness':-20}]},{'featureType':'road.local','elementType':'geometry','stylers':[{'color':'#1f8a70'},{'lightness':-17}]},{'elementType':'labels.text.stroke','stylers':[{'color':'#ffffff'},{'visibility':'off'},{'weight':0.9}]},{'elementType':'labels.text.fill','stylers':[{'visibility':'on'},{'color':'#ffffff'}]},{'featureType':'poi','elementType':'labels','stylers':[{'visibility':'simplified'}]},{'elementType':'labels.icon','stylers':[{'visibility':'off'}]},{'featureType':'transit','elementType':'geometry','stylers':[{'color':'#1f8a70'},{'lightness':-10}]},{},{'featureType':'administrative','elementType':'geometry','stylers':[{'color':'#1f8a70'},{'weight':0.7}]}]
                };


            return map;
          },
          officesData: function ($http, WEBSITE_ENDPOINT, $q) {
            var deferred = $q.defer();

            $http.get(WEBSITE_ENDPOINT + '/api/offices').then(function (data) {
              deferred.resolve(data.data);
            }).catch(function (err) {
              deferred.reject(err);
            });

            return deferred.promise;
          },
          teamsData: function ($http, WEBSITE_ENDPOINT, $q) {
            var deferred = $q.defer();

            $http.get(WEBSITE_ENDPOINT + '/api/teams').then(function (data) {
              deferred.resolve(data.data);
            }).catch(function (err) {
              deferred.reject(err);
            });

            return deferred.promise;
          }
        }
      });
  });
