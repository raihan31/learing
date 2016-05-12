'use strict';

angular.module('ctSignupApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('website.hourofcode', {
        url: '/hourofcode',
        templateUrl: 'app/hourofcode/home/home.html',
        controller: 'HOCHomeCtrl',
        resolve: {
          partnersData: function() {
            return [
              '/assets/images/hoc/1.png',
              '/assets/images/hoc/2.png',
              '/assets/images/hoc/3.png',
              '/assets/images/hoc/4.png',
              '/assets/images/hoc/5.png',
              '/assets/images/hoc/6.png',
              '/assets/images/hoc/7.png',
              '/assets/images/hoc/8.png',
              '/assets/images/hoc/9.png',
              '/assets/images/hoc/10.png',
              '/assets/images/hoc/11.png',
              '/assets/images/hoc/12.png',
              '/assets/images/hoc/13.png',
              '/assets/images/hoc/14.png',
              '/assets/images/hoc/15.png',
              '/assets/images/hoc/16.png',
              '/assets/images/hoc/17.png',
              '/assets/images/hoc/18.png',
              '/assets/images/hoc/19.png',
              '/assets/images/hoc/20.jpg',
              '/assets/images/hoc/21.jpg',
              '/assets/images/hoc/22.png',
              '/assets/images/hoc/23.png',
              '/assets/images/hoc/24.jpg',
              '/assets/images/hoc/25.png',
              '/assets/images/hoc/26.png',
              '/assets/images/hoc/27.jpg',
              '/assets/images/hoc/28.jpg',
              '/assets/images/hoc/29.png',
              '/assets/images/hoc/30.jpg'
            ];
          },
          headData: function() {
            return {
              title: 'Hour Of Code - CodersTrust',
              description: 'CodersTrust is an initiative backed by the development fund Danida, or Danish International Development Agency, to provide microfinance and education for students in emerging nations who want to upgrade their programming skills. The hope of founder, Copenhagen-born entrepreneur Ferdinand Kjærulff, is that these students are empowered to sell their work internationally via freelance portals such as Upwork. The team is currently operating in Dhaka, Bangladesh, where it collaborates with Grameen Bank, which is renowned for its part in revolutionising the microfinance industry. Skype seed funder Morten Lund invested in the company in March 2014, describing it as a "profitable charity"',
              keywords: 'Home, Coderstrust, Micro credit, Frontend development, Backend Development, Freelancing, Online marketplace, Code you later, CT'
            };
          },
          heroData: function() {
            return {
              title: 'JOIN CODERSTRUST<br>FOR A FREE ONE HOUR INTRODUCTION<br/>TO PROGRAMMING',
              description: '',
              url: '/assets/images/hoc-home-hero.jpg'
            };
          },
          memberQuotesData: function() {
            return [{
              name: 'Malala Yousafzai',
              image: {
                thumb: {
                  url: '/assets/images/hoc/malala.jpg'
                }
              },
              quote: 'Every Girl deserves to take part in creating the technology that will change our world, and change who run it'
            }, {
              name: 'Barack Obama',
              image: {
                thumb: {
                  url: '/assets/images/hoc/obama.jpg'
                }
              },
              quote: 'Don\'t just play on your phone, program it'
            }, ];
          },
          celebsData: function() {
            return [{
              name: 'Malala Yousafzai',
              image: {
                thumb: {
                  url: '/assets/images/hoc/malala.jpg'
                }
              }
            }, {
              name: 'Bill Gates',
              image: {
                thumb: {
                  url: '/assets/images/hoc/bill.jpg'
                }
              }
            }, {
              name: 'Zunaid Ahmed Palak',
              image: {
                thumb: {
                  url: '/assets/images/hoc/zunaid.jpg'
                }
              }
            }, {
              name: 'Ashton Kutcher',
              image: {
                thumb: {
                  url: '/assets/images/hoc/ashton.jpg'
                }
              }
            }, {
              name: 'Shakira',
              image: {
                thumb: {
                  url: '/assets/images/hoc/shakira.jpg'
                }
              }
            }, ];
          }
        }
      })
      .state('website.hourofcode_location', {
        url: '/hourofcode/location',
        templateUrl: 'app/hourofcode/location/location.html',
        controller: 'HOCLocationCtrl',
        resolve: {
          countriesData: function() {
            return [{
              image: '/assets/images/hoc/bangladesh.jpg',
              name: 'bangladesh',
              id: 1
            }, {
              image: '/assets/images/hoc/india.jpg',
              name: 'india',
              id: 2,
              href: 'https://calendly.com/hourofcodeindia'
            }, {
              image: '/assets/images/hoc/kenya.jpg',
              name: 'kenya',
              id: 3,
              href: 'https://calendly.com/kenya/12-09-2015'
            }, {
              image: '/assets/images/hoc/somaliland.jpg',
              name: 'somaliland',
              id: 4,
              href: 'https://calendly.com/somaliland/12-09-2015'
            }];
          }
        }
      })
      .state('website.hourofcode_events', {
        url: '/hourofcode/events/:id',
        templateUrl: 'app/hourofcode/events/events.html',
        controller: 'HOCEventsCtrl',
        resolve: {
          eventsData: function($stateParams) {
            var events = {
              '1': [{
                  href: 'https://calendly.com/coderstrustbangladesh/coderstrust-office/11-30-2015',
                  name: 'CodersTrust Office',
                  description: 'Apartment 3A, House - CWN(A) 3B, Rd 49, Dhaka 1212, Bangladesh'
                },

                {
                  href: 'https://calendly.com/morten-1/uca/12-02-2015',
                  name: 'United college of Aviation, Science and Management UCA',
                  description: 'House# 16, Road# 4, Sector# 3 ( Near Rajlakshmi complex Uttara, Dhaka-1230'
                },

                {
                  href: 'https://calendly.com/coderstrustbangladesh/aiub/12-08-2015',
                  name: 'American International University-Bangladesh (AIUB)',
                  description: 'House No. 58/B, Block-B, Rd No 21, Dhaka 1213, Bangladesh'
                },

                {
                  href: 'https://calendly.com/coderstrustbangladesh/bdjobs/12-03-2015',
                  name: 'BD jobs',
                  description: 'Bdjobs Training, BDBL Building (Level 19), 12 Kawran Bazar C/A, Dhaka 1215'
                },


                {
                  href: 'https://calendly.com/osmani/nub/12-03-2015',
                  name: 'Northern University Bangladesh (NUB) - Banani Campus',
                  description: 'Sher Tower, Holding #13, Road #17, Banani C/A, Dhaka'
                },


                {
                  href: 'https://calendly.com/morten-1/uiu/12-03-2015',
                  name: 'United International University (UIU)',
                  description: 'House No. 80, Satmasjid Road, Dhaka 1209, Bangladesh'
                },


                {
                  href: 'https://calendly.com/coderstrustbangladesh/diu/12-04-2015',
                  name: 'Daffodil International University (DIU)',
                  description: '102 Mirpur Rd, Dhaka 1207, Bangladesh'
                },

                {
                  href: 'https://calendly.com/coderstrustbangladesh/online/12-05-2015',
                  name: 'DEC 12 - Online ',
                  description: 'Do the Hour of Code with us online on DEC 12th'
                },


                {
                  href: 'https://calendly.com/morten-1/ct-office-11-december/12-04-2015',
                  name: 'CodersTrust Office - 11 December',
                  description: 'Apartment 3A, House - CWN(A) 3B, Rd 49, Dhaka 1212, Bangladesh'
                },


                {
                  href: 'https://calendly.com/coderstrustbangladesh/eastern-university/12-06-2015',
                  name: 'Eastern University',
                  description: 'House 3, Road 3, Dhanmondi R/A, Dhaka - 1205'
                }
              ],
              '3': [
                {
                  name: 'Moringa School',
                  description: 'Galana Place on Galana Road',
                  href: 'https://calendly.com/kenya/moringa-school-event/12-09-2015'
                },

                {
                  name: 'Institute of Advanced Technology',
                  description: 'Kasarni, Thika Road P.O Box 20653, Nairobi',
                  href: 'https://calendly.com/kenya/iat/12-14-2015'
                },

                {
                  name: 'Elink Computer College',
                  description: 'Mushale Building, Kamiti Road Nairobi',
                  href: 'https://calendly.com/kenya/elink-computer-college/12-10-2015'
                }
              ],
              '4': [
                {
                  name: 'Alpha University College - Hargeisa',
                  href: 'https://calendly.com/somaliland/alpha-university-college-hargeisa/12-09-2015',
                  description: 'The Hour Of Code Event'
                },
                {
                  name: 'Tima-Ade University',
                  href: 'https://calendly.com/somaliland/tima-ade/12-09-2015',
                  description: 'The Hour Of Code Event'
                }
              ]

            };


            return events[$stateParams.id];
          }
        }
      });
  });
