// /**
//  * Populate DB with sample data on server start
//  * to disable, edit config/environment/index.js, and set `seedDB: false`
//  */
//
'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Course = require('../api/course/course.model');
var Portfolio = require('../api/portfolio/portfolio.model');
var Mentor = require('../api/mentor/mentor.model');
var Workshop = require('../api/workshop/workshop.model');
var SuccessStory = require('../api/success_story/success_story.model');
var CustomerReview = require('../api/customer_review/customer_review.model');
var Team = require('../api/team/team.model');
var Office = require('../api/office/office.model');
//
// Thing.find({}).remove(function() {
//   Thing.create({
//     name : 'Development Tools',
//     info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
//   }, {
//     name : 'Server and Client integration',
//     info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
//   }, {
//     name : 'Smart Build System',
//     info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
//   },  {
//     name : 'Modular Structure',
//     info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
//   },  {
//     name : 'Optimized Build',
//     info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
//   },{
//     name : 'Deployment Ready',
//     info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
//   });
// });
//
// Course.find({}).remove(function() {
//   var android = new Course({
//     name : 'Android',
//     description : "Learn to develop for Android and transform your career outlook! This course will provide a guided, efficient path for an intermediate developer with little or no experience on mobile platforms to emerge as an Android Developer. By the end of the course you'll have a diverse portfolio of projects to show employers, and will even publish your own app on the Google Play Store.",
//     features: [
//       {
//         name: 'Duration',
//         value: '3 Month'
//       },
//       {
//         name: 'Course Type',
//         value: 'Blended'
//       },
//       {
//         name: 'Content',
//         value: 'CT'
//       },
//       {
//         name: 'Class Hours',
//         value: '72'
//       },
//       {
//         name: 'Online Hours',
//         value: '216'
//       },
//       {
//         name: 'Total Projects',
//         value: '3'
//       }
//     ],
//     icon: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 47" enable-background="new 0 0 60 47" xml:space="preserve"><path fill="#607D8A" d="M41.2,17.8L52,28.6L41.2,39.4L39.8,38l9.4-9.4l-9.4-9.4L41.2,17.8z M17.8,17.8L7,28.6l10.8,10.8l1.4-1.4l-9.4-9.4l9.4-9.4L17.8,17.8z M60,3v44H0V3c0-1.7,1.3-3,3-3h54C58.7,0,60,1.3,60,3z M2,3v7h56V3c0-0.6-0.4-1-1-1H3C2.4,2,2,2.4,2,3zM58,45V12H2v33H58z M7,5.2H5v1.9H7V5.2z M11,5.2H9v1.9H11V5.2z M15,5.2H13v1.9H15V5.2z M22,40.7l1.8,0.9L37,17l-1.8-0.9L22,40.7z"/></svg>'
//   })
//   var html = new Course({
//     name: 'Front end Development',
//     description: "The Front-End Web Development covers HTML/HTML5, CSS/CSS3, Bootstrap and JavaScript through a variety of courses designed to prepare you for a web developer career. You will be able to develop modern, dynamic and responsive webpage after complete all this skills. Using version control system, code quality check tracker, time tracking tool you will complete full course through best practice process.",
//     features: [
//       {
//         name: 'Duration',
//         value: '4 Month'
//       },
//       {
//         name: 'Course Type',
//         value: 'Blended'
//       },
//       {
//         name: 'Content',
//         value: 'CT'
//       },
//       {
//         name: 'Class Hours',
//         value: '96'
//       },
//       {
//         name: 'Online Hours',
//         value: '288'
//       },
//       {
//         name: 'Total Projects',
//         value: '3'
//       }
//     ],
//     icon: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 47" enable-background="new 0 0 60 47" xml:space="preserve"><path fill="#607D8A" d="M41.2,17.8L52,28.6L41.2,39.4L39.8,38l9.4-9.4l-9.4-9.4L41.2,17.8z M17.8,17.8L7,28.6l10.8,10.8l1.4-1.4l-9.4-9.4l9.4-9.4L17.8,17.8z M60,3v44H0V3c0-1.7,1.3-3,3-3h54C58.7,0,60,1.3,60,3z M2,3v7h56V3c0-0.6-0.4-1-1-1H3C2.4,2,2,2.4,2,3zM58,45V12H2v33H58z M7,5.2H5v1.9H7V5.2z M11,5.2H9v1.9H11V5.2z M15,5.2H13v1.9H15V5.2z M22,40.7l1.8,0.9L37,17l-1.8-0.9L22,40.7z"/></svg>'
//   });
//   var fullstack = new Course({
//     name : 'Full Stack Development',
//     description: "Full stack development covers both front end and back end. Through project based learning you will complete 6 projects using html5, css3, bootstrap, js/jquery, php, mysql, wordpress. Real life like project help you to understand the client requirement, way of working in project and time management. Best practice is essential to be a skilled developer and you will be by maintaining our process. you will be able to use modern tool for version control, time management, check code quality.",
//     features: [
//       {
//         name: 'Duration',
//         value: '7 Month'
//       },
//       {
//         name: 'Course Type',
//         value: 'Blended'
//       },
//       {
//         name: 'Content',
//         value: 'CT'
//       },
//       {
//         name: 'Class Hours',
//         value: '168'
//       },
//       {
//         name: 'Online Hours',
//         value: '504'
//       },
//       {
//         name: 'Total Projects',
//         value: '5'
//       }
//     ],
//     icon: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 47" enable-background="new 0 0 60 47" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" fill="#607D8B" d="M57,36c1.7,0,3-1.3,3-3V3c0-1.7-1.3-3-3-3H3C1.3,0,0,1.3,0,3v30c0,1.7,1.3,3,3,3h18.9v4.1H0v7h26h15h8.9h3h7v-7h-7V36H57z M2,33V3c0-0.6,0.4-1,1-1h54c0.6,0,1,0.4,1,1v30c0,0.6-0.4,1-1,1h-4v-6.7c0-0.4-0.1-0.7-0.2-1H56v-22H4v22h22V34H3C2.4,34,2,33.6,2,33z M46.9,12.2H29c-1.7,0-3,1.3-3,3v9.1H6v-18h48v18h-4h0v-9.1C49.9,13.6,48.6,12.2,46.9,12.2z M23.9,36H26v4.1h-2.1V36z M2,45.1v-3h24v3H2z M28,45.1V15.2c0-0.6,0.4-1,1-1h17.9c0.6,0,1,0.4,1,1v9.1H46v-8.2H30v23h11v6.1H28z M41,27.3V37h-9v-19h12v6.2C42.4,24.3,41,25.6,41,27.3z M45.9,45.1H43V27.3c0-0.6,0.4-1,1-1h5.2H50c0.6,0,1,0.4,1,1v17.9H45.9z M58,42.1v3h-5v-3H58z M46,41h2v2h-2V41z"/></svg>'
//   });
//   var empl = new Course({
//     name : 'Employability Course',
//     description : 'Employability & soft-skills is a core course for people who have always wanted to get into freelancing marketplaces with unlimited earning but just never knew how to do. Not only in freelancing but also for those who are eager of being successful in their career. CodersTrust is now offering the Employability & soft-skills course. This course breaks everything down into bite-sized chunks to help you set up your entrepreneurship without going broke. You are getting a bunch of expensive consultants for free to set up your successful freelancing career. It provides detailed explanations of how to market your skills and even how to manage your freelancing career.',
//     features: [
//       {
//         name: 'Duration',
//         value: '2 Month'
//       },
//       {
//         name: 'Course Type',
//         value: 'Blended'
//       },
//       {
//         name: 'Content',
//         value: 'CT'
//       },
//       {
//         name: 'Class Hours',
//         value: '32'
//       },
//       {
//         name: 'Online Hours',
//         value: '32'
//       }
//     ],
//     icon: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 41 50" enable-background="new 0 0 41 50" xml:space="preserve"><path fill="#617D8A" d="M40.8,30.4c-0.5-1.7-1.3-3.4-2.1-5c-1.1-2-1.7-3.8-0.6-6.1c1.3-2.8,0.9-5.7,0.1-8.6C38,10.1,38,9.2,38.3,8.6c1.1-3.2,0.5-4.6-2.7-5.4C30,1.8,24.4,0.3,18.6,0c-1,0.1-2.1,0-3.1,0.3C4.7,2.3-1.7,11.8,0.4,22.8c0.6,3.3,1.3,6.6,2.1,9.9c0.1,0.6,0.9,1.1,1.4,1.6c0.3,0.3,0.7,0.5,0.8,0.8c0.7,2.6,1.1,5.3,0,7.9c-0.5,1.3-0.2,2,1.2,2.4c1.5,0.4,3,0.8,4.6,1.1c4.6,1.1,9.2,2.3,13.9,3.3c0.2,0,0.5,0.1,0.7,0.1c0.6,0,1.2-0.1,1.5-0.4c0.4-0.3,0.2-1.4,0.1-2.1c-0.2-1.2-0.6-2.3-0.7-3.5c-0.1-1.5,0.3-1.9,1.6-1.9c0.1,0,0.2,0,0.3,0c1.6,0.1,3.2,0.3,4.8,0.3c0,0,0.1,0,0.1,0c2.4,0,3.4-1,3.8-3.4c0.1-1.1,0.2-2.2,0.3-3.3c0.1-2.5,0-2.5,2.4-2.9C40.8,32.5,41.3,32,40.8,30.4z M38.8,30.8c-3.3,0.6-4,1.4-4,4.8l0,0.1c0,1-0.1,2-0.2,3.1c-0.2,1.5-0.5,1.7-1.8,1.7l-0.1,0c-0.9,0-1.7-0.1-2.6-0.1c-0.7-0.1-1.4-0.1-2.2-0.1c-0.1,0-0.2,0-0.3,0c0,0,0,0,0,0c-0.5,0-1.8,0-2.8,1c-0.9,1-0.9,2.2-0.8,3.1c0.1,0.8,0.3,1.5,0.4,2.2c0.1,0.5,0.2,0.9,0.3,1.3l0,0.1c0,0,0,0.1,0,0.1c-3.4-0.8-6.9-1.6-10.3-2.5c-1.1-0.3-2.3-0.6-3.4-0.8c-0.5-0.1-0.9-0.2-1.4-0.3c-1-0.2-2-0.5-2.9-0.7c1.2-3.2,0.7-6.3,0-9c-0.2-0.9-0.9-1.4-1.2-1.6c0,0-0.1,0-0.1-0.1c-0.2-0.2-0.4-0.4-0.5-0.5c-0.1-0.1-0.3-0.2-0.4-0.3c-0.7-3.1-1.4-6.3-2-9.6C0.5,12.6,6.2,4.1,15.8,2.2C16.4,2.1,17,2.1,17.7,2c0.3,0,0.6,0,0.9,0C23.8,2.3,29,3.6,33.9,4.8l1.1,0.3c1.4,0.3,1.6,0.7,1.6,0.7c0,0.1,0.2,0.5-0.3,2.1c-0.3,1-0.4,2.3-0.1,3.3c0.6,2.4,1.1,4.9,0,7.2c-1.5,3.1-0.5,5.7,0.7,7.9C37.9,28.1,38.5,29.5,38.8,30.8C38.8,30.8,38.8,30.8,38.8,30.8z M13.3,19.9c0,3.6,3.2,6.7,6.7,6.7c0.1,0,0.2,0,0.3,0c3.6-0.2,6.6-3.4,6.5-6.9c-0.1-3.6-3.2-6.6-6.7-6.6l-0.1,0C16.3,13.2,13.2,16.4,13.3,19.9z M20,15.2c2.4,0,4.6,2.2,4.7,4.6c0.1,2.4-2.1,4.7-4.6,4.8c-0.1,0-0.1,0-0.2,0c-2.4,0-4.7-2.2-4.7-4.7C15.2,17.5,17.4,15.2,20,15.2C20,15.2,20,15.2,20,15.2z M34,19.9c0,1.2-0.5,2.1-1.8,2.3c0,0-0.1,0-0.1,0c-3.3,0.7-3.8,1.6-1.9,4.4c0.8,1.2,0.7,2.2-0.3,3.2c-0.5,0.5-1.1,0.8-1.6,0.8c-0.5,0-0.9-0.2-1.5-0.6c-0.5-0.3-1-0.6-1.6-0.9C24.9,29,24.6,29,24.4,29c-0.7,0-1.2,0.4-1.5,1.2c-0.2,0.7-0.5,1.3-0.6,2c-0.2,1.3-1.1,1.7-2.3,1.7c0,0,0,0-0.1,0c-1.2,0-2.1-0.4-2.3-1.7c-0.4-2.2-0.9-3.2-1.9-3.2c-0.7,0-1.6,0.4-2.9,1.3c-0.4,0.3-0.8,0.4-1.2,0.4c-0.6,0-1.1-0.3-1.6-0.8C9.3,29,8.9,28.1,9.6,27c0.4-0.6,0.7-1.2,1-1.8c0.6-1.1,0.2-2-1-2.4c-0.7-0.2-1.3-0.4-2-0.6C6.3,21.9,6,21,6,19.9c0-1.1,0.4-2,1.7-2.3c3.6-0.7,4.2-1.4,2-4.9c-0.9-1.4,0.4-3.5,2.3-3.6c0.7,0.4,1.5,0.8,2.4,1.3c0.5,0.3,1,0.4,1.4,0.4c0.7,0,1.2-0.5,1.5-1.6c0.1-0.4,0.3-0.9,0.4-1.3c0.2-1.4,1-2,2.3-2c0,0,0,0,0,0l0,2c-0.2,0-0.2,0-0.3,0c0,0,0,0.1-0.1,0.3c-0.1,0.5-0.2,0.9-0.3,1.3c0,0.1-0.1,0.2-0.1,0.3c-0.8,2.7-2.5,3-3.4,3c-0.7,0-1.5-0.2-2.3-0.7c-0.6-0.3-1.2-0.6-1.7-0.9c-0.1,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.2,0.3-0.2,0.4c1,1.6,2,3.5,1.3,5.3c-0.7,1.7-2.6,2.2-4.6,2.6c0,0,0,0,0,0c0,0.1,0,0.2,0,0.3c0,0.2,0,0.3,0,0.3c0.8,0.2,1.6,0.4,2.3,0.6c1.1,0.4,2,1.1,2.4,2.1c0.4,1,0.3,2.1-0.2,3.1l-0.1,0.2c-0.3,0.6-0.6,1.2-1,1.8c0,0.1,0.1,0.1,0.2,0.3c0.1,0.1,0.2,0.2,0.2,0.2c0,0,0,0,0.1,0c1.7-1.1,2.9-1.6,3.9-1.6c0,0,0,0,0,0c2.9,0,3.5,3.1,3.9,4.8c0,0,0,0.1,0,0.1c0.1,0,0.2,0,0.3,0c0.2,0,0.3,0,0.3,0c0,0,0,0,0,0c0.1-0.8,0.4-1.6,0.7-2.3c0.5-1.6,1.8-2.5,3.4-2.5c0.6,0,1.2,0.1,1.7,0.4l0.1,0c0.5,0.3,1.2,0.6,1.8,1c0.1,0.1,0.2,0.1,0.3,0.2c0,0,0.1-0.1,0.2-0.2c0.1-0.1,0.2-0.2,0.2-0.3c0-0.1-0.1-0.2-0.2-0.4c-1-1.4-1.9-3.1-1.2-4.8c0.7-1.7,2.5-2.3,4.4-2.7c0.1,0,0.2,0,0.3-0.1c0,0,0,0,0.1,0c0-0.1,0-0.2,0-0.3c0-0.2,0-0.3,0-0.3c0,0-0.1,0-0.2,0c-1.9-0.4-3.8-0.9-4.5-2.6c-0.7-1.7,0.3-3.5,1.3-5.1c0-0.1,0.1-0.1,0.1-0.2c0-0.1-0.1-0.1-0.2-0.3c-0.1-0.1-0.2-0.2-0.2-0.2c0,0-0.1,0-0.1,0.1c-0.6,0.4-1.2,0.7-1.7,1l-0.3,0.1c-0.6,0.3-1.2,0.4-1.8,0.4c-1.5,0-2.8-1-3.3-2.5L21,10.1c-0.2-0.6-0.4-1.2-0.5-2c0-0.1,0-0.2-0.1-0.3c-0.1,0-0.2,0-0.4,0v-2c1.4,0,2.2,0.6,2.4,2c0.1,0.6,0.3,1.2,0.5,1.7c0.3,0.8,0.8,1.2,1.5,1.2c0.3,0,0.6-0.1,0.9-0.2c0.6-0.3,1.2-0.6,1.7-0.9c0.5-0.3,0.9-0.5,1.3-0.5c0.6,0,1.1,0.3,1.6,0.8c0.9,0.9,1.2,1.7,0.4,2.9c-2.1,3.2-1.6,3.9,1.9,4.7C33.6,17.8,34,18.7,34,19.9z"/></svg>'
//   });
//   android.save();
//   html.save();
//   fullstack.save();
//   empl.save();
// });
//
// Portfolio.find({}).remove(function() {
//   var project1 = new Portfolio({
//     name: 'Tarofdar (Portfolio Site)',
//     subName: 'Skills: HTML5 & CSS3',
//     url: 'http://mtfeat.site90.com/best1/'
//   });
//   project1.attach('image', {path: '/Users/admin/tmp/2.PNG'}, function(error) {
//     project1.save();
//   });
//
//   var project2 = new Portfolio({
//     name: 'SHUMIT AHMED (Portfolio Site)',
//     subName: 'Skills: JavaScript & jQuery',
//     url: 'https://goo.gl/Ntmgn7'
//   });
//   project2.attach('image', {path: '/Users/admin/tmp/3.PNG'}, function(error) {
//     project2.save();
//   });
//
//   var project3 = new Portfolio({
//     name: 'MAKEPO',
//     subName: 'Skills: Bootstrap',
//     url: 'http://mtfeat.site90.com/seo/page.html'
//   });
//   project3.attach('image', {path: '/Users/admin/tmp/1.PNG'}, function(error) {
//     project3.save();
//   });
// });
//
// Mentor.find({}).remove(function() {
//   var mentor1 = new Mentor({
//     name: 'Mahbub Hasan',
//     position: 'Lead Mentor',
//     shortDescription: 'Mahbub Hasan is currently working as Lead Mentor in CodersTrust Bangladesh. Previously he worked as Mobile Application Team Leader in MCC Ltd. for 5 years. During his last 7 years of successful career he developed 50+ large-scale Android applications and 30+ J2ME applications. Mahbub built various wonderful mobile applications for Grameenphone, The Daily Prothom-alo, The Daily Star, RTV and Independent Television. He has also experience in iOS applications development.',
//     skills: [
//       {
//         name: 'Java'
//       },
//       {
//         name: 'J2ME'
//       },
//       {
//         name: 'J2EE'
//       },
//       {
//         name: 'Android'
//       },
//       {
//         name: 'iOS'
//       }
//     ]
//
//   });
//
//   mentor1.attach('image', {path: '/Users/admin/tmp/mentors/mahbub.jpg'}, function(error) {
//     mentor1.save();
//   });
//
//   var mentor2 = new Mentor({
//     name: 'Md. Hafizur Rashid',
//     position: 'Mentor',
//     shortDescription: 'Md. Hafizur Rashid (Hafiz) completed his B.Sc in Telecommunication & Electronic Engineering from Hajee Mohammad Danesh Science & Technology University, Dinajpur. He is very much passionate in web programming and teaching. During his graduation, he worked as a "Web Developer" on online marketplace (Upwork, Elance & Freelancer) and delivered more than 100 projects successfully to his clients. After completing his graduation, he joined BTC IT as a programmer and worked on a wide range of web application projects using the latest technology. With 4 years of professional experience, Hafiz joined CodersTrust Bangladesh Ltd. as a Mentor, where he is helping those people who is interested to learn web technologies and establish a successful career on online marketplace.',
//     skills: [
//       {
//         name: 'HTML5'
//       },
//       {
//         name: 'CSS3'
//       },
//       {
//         name: 'JavaScript'
//       },
//       {
//         name: 'jQuery'
//       },
//       {
//         name: 'PHP'
//       },
//       {
//         name: 'Wordpress'
//       }
//     ]
//   });
//
//
//   mentor2.attach('image', {path: '/Users/admin/tmp/mentors/hafiz.jpg'}, function(error) {
//     mentor2.save();
//   });
//
//   var mentor3 = new Mentor({
//     name: 'Khairul Islam Linkon',
//     position: 'Mentor',
//     shortDescription: 'Khairul Islam Linkon, completed his B.Sc on Computer Science & Engineering from University of Liberal Arts Bangladesh. He is very passionate in programming and teaching. During graduation he participated different national and international programming contests as well as he served as Teaching Assistant in University time. After that He Joined MCC Ltd. as an software developer. He worked there more than two years and main responsibility was developed mobile application, provide training on app development. After that he joined CodersTrust as Mentor to make skilled developer for the Market place. ',
//     skills: [
//       {
//         name: 'HTML5'
//       },
//       {
//         name: 'CSS3'
//       },
//       {
//         name: 'JavaScript'
//       },
//       {
//         name: 'jQuery'
//       },
//       {
//         name: 'AngularJS'
//       },
//       {
//         name: 'SASS'
//       },
//       {
//         name: 'Phonegap'
//       },
//       {
//         name: 'Bootstrap'
//       },
//       {
//         name: 'Java'
//       },
//       {
//         name: 'J2ME'
//       },
//     ]
//   });
//
//   mentor3.attach('image', {path: '/Users/admin/tmp/mentors/linkon.jpg'}, function(error) {
//     mentor3.save();
//   });
//
//   var mentor4 = new Mentor({
//     name: 'Tariqul Islam Shuvo',
//     position: 'Mentor',
//     shortDescription: 'Computer Science & Engineering at the Mawlana Bhashani Science and Technology University. During running his Bsc. he participated many online and offline programming contest. At this stage he also done many desktop based application and web based application projects.After finishing his Bsc. he joined "Your Tripmate Ltd." as a web developer. Also work at "Haji Ahmed Brothers Securities Ltd." as a web developer. With two years working experience, he join CodersTrust as a Mentor. Now he is helping those people who is interested to learn web design and development. ',
//     skills: [
//       {
//         name: 'HTML5'
//       },
//       {
//         name: 'CSS3'
//       },
//       {
//         name: 'JavaScript'
//       },
//       {
//         name: 'jQuery'
//       },
//
//       {
//         name: 'PHP'
//       },
//       {
//         name: 'Wordpress'
//       },
//       {
//         name: 'Java SE'
//       },
//       {
//         name: 'JSF'
//       },
//     ]
//   });
//
//
//   mentor4.attach('image', {path: '/Users/admin/tmp/mentors/shuvo.jpg'}, function(error) {
//     mentor4.save();
//   });
//
//   var mentor5 = new Mentor({
//     name: 'Kh. Rifat M Huq',
//     position: 'Mentor',
//     shortDescription: 'Rifat completed his B.Sc. in EEE from United International University (UIU). He has completed four professional courses from BDJOBS Training & Talha Training on Laravel Framework, Wordpress Customization, Object Oriented Programming (OOP), and PHP Codeigniter (CI) Framework for Web Applications etc. In Local and International freelancing marketplace, Rifat has three years solid & practical experience on web design & web development sector. Rifat is currently working with CodersTrust as a Mentor.',
//     skills: [
//       {
//         name: 'HTML5'
//       },
//       {
//         name: 'CSS3'
//       },
//       {
//         name: 'JavaScript'
//       },
//       {
//         name: 'jQuery'
//       },
//       {
//         name: 'Bootstrap'
//       },
//       {
//         name: 'PHP'
//       },
//       {
//         name: 'Wordpress'
//       },
//     ]
//   });
//
//
//   mentor5.attach('image', {path: '/Users/admin/tmp/mentors/rifat.jpg'}, function(error) {
//     mentor5.save();
//   });
//
//   var mentor6 = new Mentor({
//     name: 'Rajesh Ghosh',
//     position: 'Mentor',
//     shortDescription: 'Rajesh Ghosh received his B.Sc. degree from the department of Computer Science & Engineering at the University of Liberal Arts Bangladesh (ULAB). During his B.Sc., he attended several online and offline programming contest and was one of the top performers from his university. As a second year student, Rajesh was recruited by Multimedia and Content Development (MCC) as a Web Developer. After completing his degree, he began working with Saffron Corporation Ltd as a Web Developer and later, joined NKSoft as a Java and Web Developer. With almost three years of work experience, Rajesh is now a Mentor at CodersTrust and is greatly interested to help those who want to become successful developers.',
//     skills: [
//       {
//         name: 'HTML5'
//       },
//       {
//         name: 'CSS3'
//       },
//       {
//         name: 'JavaScript'
//       },
//       {
//         name: 'jQuery'
//       },
//       {
//         name: 'Bootstrap'
//       },
//       {
//         name: 'PHP'
//       },
//       {
//         name: 'Wordpress'
//       },
//     ]
//   });
//
//
//   mentor6.attach('image', {path: '/Users/admin/tmp/mentors/rajesh.jpg'}, function(error) {
//     mentor6.save();
//   });
//
//   var mentor7 = new Mentor({
//     name: 'Muktadir Hossain',
//     position: 'Mentor',
//     shortDescription: 'Muktadir Hossain completed his B.Sc. in Computer Science and Engineering from United International University (UIU). During his graduation, he attended several intra-university and inter-university programming contest and first ever hackathon in Bangladesh organized by World Bank. He has expertise in Java, PHP, Ruby and Ruby on Rails. He worked in lot of projects using those technologies specially Ruby on Rails. Beside this, he was Organizing Lead of Google Developer Group, Dhaka (GDG Dhaka) during his education period. It was a voluntary work. In that time he conducted several technical seminars at different universities across the country.',
//     skills: [
//       {
//         name: 'C'
//       },
//       {
//         name: 'Java'
//       },
//       {
//         name: 'JavaScript'
//       },
//       {
//         name: 'MySql'
//       },
//       {
//         name: 'Ruby'
//       },
//       {
//         name: 'PHP'
//       },
//       {
//         name: 'Ruby On Rails'
//       },
//     ]
//   });
//
//
//   mentor7.attach('image', {path: '/Users/admin/tmp/mentors/muktadir.jpg'}, function(error) {
//     mentor7.save();
//   });
// });

// Workshop.find({}).remove(function() {
//   var workshop0 = new Workshop({
//     name: 'Ace your Presentation Skills',
//     description: '',
//     createdAt: new Date()
//   });
//
//   workshop0.attach('image', {path: '/Users/admin/tmp/workshops/1.jpg'}, function(error) {
//     workshop0.save();
//   });
//
//   var workshop1 = new Workshop({
//     name: 'Get real life experience',
//     description: '',
//     createdAt: new Date()
//   });
//
//   workshop1.attach('image', {path: '/Users/admin/tmp/workshops/3.jpg'}, function(error) {
//     workshop1.save();
//   });
//
//   var workshop2 = new Workshop({
//     name: 'Celebrate your accomplishments',
//     description: '',
//     createdAt: new Date()
//   });
//
//   workshop2.attach('image', {path: '/Users/admin/tmp/workshops/7.jpg'}, function(error) {
//     workshop2.save();
//   });
//
//   var workshop3 = new Workshop({
//     name: 'Make new friends',
//     description: '',
//     createdAt: new Date()
//   });
//
//   workshop3.attach('image', {path: '/Users/admin/tmp/workshops/6.jpg'}, function(error) {
//     workshop3.save();
//   });
//
//   var workshop4 = new Workshop({
//     name: 'Earn Awards for your work',
//     description: '',
//     createdAt: new Date()
//   });
//
//   workshop4.attach('image', {path: '/Users/admin/tmp/workshops/5.jpg'}, function(error) {
//     workshop4.save();
//   });
//
//   var workshop5 = new Workshop({
//     name: 'Learn to stand out from the crowd',
//     description: '',
//     createdAt: new Date()
//   });
//
//   workshop5.attach('image', {path: '/Users/admin/tmp/workshops/4.jpg'}, function(error) {
//     workshop5.save();
//   });
//
//   var workshop6 = new Workshop({
//     name: 'Our team picture',
//     description: '',
//     createdAt: new Date()
//   });
//
//   workshop6.attach('image', {path: '/Users/admin/tmp/workshops/2.jpg'}, function(error) {
//     workshop6.save();
//   });
// });
//
// SuccessStory.find({}).remove(function() {
//   var successStory1 = new SuccessStory({
//     name: 'Ashif Mahmud',
//     story: 'Last few months I was fully depressed. Unable to work, unable to focus on anything. But Coderstrust has changed everything. I am back in marketplace. I know my earning is not much, but soon there will be some zeros after the number.',
//     earning: 361,
//     socialNetworks: [
//       {
//         name: 'LinkedIn',
//         url: 'https://bd.linkedin.com/in/mahmudashif',
//         iconClass: 'fa fa-linkedin-square'
//       },
//       {
//         name: 'Upwork',
//         url: 'https://www.upwork.com/o/profiles/users/_~01919317858ff4ac41/',
//         iconClass: 'w-icon-upwork'
//       },
//     ]
//   });
//
//   successStory1.attach('image', {path: '/Users/admin/tmp/students/ashif.jpg'}, function(error) {
//     successStory1.save();
//   });
//
//   // var successStory2 = new SuccessStory({
//   //   name: 'Ibrahim Khalil',
//   //   story: 'Life changes with time. You don\'t know how and when it will change. But we need to keep up with it. Last few months I was fully depressed. Unable to work, unable to focus on anything. But the prize giving ceremony at Coderstrust has changed everything. I am back in marketplace. I know my earning is not much, but soon there will be some zeros after the number.',
//   //   socialNetworks: [
//   //     {
//   //       name: 'LinkedIn',
//   //       url: 'https://www.linkedin.com/in/iamik',
//   //       iconClass: 'fa fa-linkedin-square'
//   //     },
//   //     {
//   //       name: 'Upwork',
//   //       url: 'https://www.upwork.com/o/profiles/users/_~018f5e5d960381749e/',
//   //       iconClass: 'w-icon-upwork'
//   //     },
//   //   ]
//   // });
//   //
//   // successStory2.attach('image', {path: '/Users/admin/tmp/students/peo.jpg'}, function(error) {
//   //   successStory2.save();
//   // });
//
//   var successStory3 = new SuccessStory({
//     name: 'Mihir Biswas',
//     story: 'I am so happy that now I am a level 1 seller on Fiverr just after joining CodersTrust. Special thanks to all the mentors of CodersTrust.',
//     earning: 308,
//     socialNetworks: [
//       {
//         name: 'LinkedIn',
//         url: 'https://www.linkedin.com/in/mihir-biswas-610345aa',
//         iconClass: 'w-icon-link'
//       },
//       {
//         name: 'Upwork',
//         url: 'https://www.upwork.com/o/profiles/users/_~01ba423da69afb7a07/',
//         iconClass: 'w-icon-upwork'
//       },
//     ]
//   });
//
//   successStory3.attach('image', {path: '/Users/admin/tmp/students/mihir.jpg'}, function(error) {
//     successStory3.save();
//   });
//
//   var successStory4 = new SuccessStory({
//     name: 'Syeda Aysha Nimmi',
//     story: 'I got 6 projects from Fiverr just after completing the Front-End course at CodersTrust. I’m proud to be a student of CodersTrust.',
//     earning: 385,
//     socialNetworks: [
//       {
//         name: 'LinkedIn',
//         url: 'https://www.linkedin.com/in/syeda-aysha-nimmi-935491b9',
//         iconClass: 'w-icon-link'
//       },
//       {
//         name: 'Upwork',
//         url: 'https://www.upwork.com/o/profiles/users/_~0128b9d31e1d141b70/',
//         iconClass: 'w-icon-upwork'
//       },
//     ]
//   });
//
//   successStory4.attach('image', {path: '/Users/admin/tmp/students/nimmi.jpg'}, function(error) {
//     successStory4.save();
//   });
//
//   var successStory5 = new SuccessStory({
//     name: 'Rokebul Hasan',
//     story: 'I am so happy that I have completed more than 15 custom orders on Fiverr just after joining CodersTrust. Special thanks to all the mentors of CodersTrust.',
//     earning: 380,
//     socialNetworks: [
//       {
//         name: 'LinkedIn',
//         url: 'https://www.linkedin.com/in/rokebul-hassan-81912a94',
//         iconClass: 'w-icon-link'
//       },
//       {
//         name: 'Upwork',
//         url: 'https://www.upwork.com/freelancers/~01fa02bfdae3bf8c96',
//         iconClass: 'w-icon-upwork'
//       },
//     ]
//   });
//
//   successStory5.attach('image', {path: '/Users/admin/tmp/students/rokebul.jpg'}, function(error) {
//     successStory5.save();
//   });
//
//   // var successStory6 = new SuccessStory({
//   //   name: 'Aminul Islam',
//   //   story: 'After completing the Front-End course at CodersTrust, I have selected to make the webpage of a Japanese company. It’s a great achievement for me.',
//   //   socialNetworks: [
//   //     {
//   //       name: 'LinkedIn',
//   //       url: 'https://www.linkedin.com/in/aminultarofdar ',
//   //       iconClass: 'w-icon-link'
//   //     },
//   //     {
//   //       name: 'Upwork',
//   //       url: 'https://www.upwork.com/o/profiles/users/_~01ed0a4170a6ed2810/',
//   //       iconClass: 'w-icon-upwork'
//   //     },
//   //   ]
//   // });
//   //
//   // successStory6.attach('image', {path: '/Users/admin/tmp/students/aminul.jpg'}, function(error) {
//   //   successStory6.save();
//   // });
//
//   var successStory7 = new SuccessStory({
//     name: 'Khairul Islam',
//     story: 'I have earned $385 so far from Upwork just after completing the Front-End course at CodersTrust. It’s a great achievement for me.',
//     earning: 385,
//     socialNetworks: [
//       {
//         name: 'LinkedIn',
//         url: 'https://www.linkedin.com/in/md-khairul-islam-40381980',
//         iconClass: 'w-icon-link'
//       },
//       {
//         name: 'Upwork',
//         url: 'https://www.upwork.com/o/profiles/users/_~01c4f06668db30f5be/',
//         iconClass: 'w-icon-upwork'
//       },
//     ]
//   });
//
//   successStory7.attach('image', {path: '/Users/admin/tmp/students/khairul.jpg'}, function(error) {
//     successStory7.save();
//   });
//
//   var successStory8 = new SuccessStory({
//     name: 'Habibur Rahman Juwel',
//     story: 'I have earned $1000 so far from Upwork just after completing the Front-End course at CodersTrust. It’s really a great achievement for me.',
//     earning: 1361,
//     socialNetworks: [
//       {
//         name: 'LinkedIn',
//         url: 'https://www.linkedin.com/in/habibur-rahman-2902b2aa',
//         iconClass: 'w-icon-link'
//       },
//       {
//         name: 'Upwork',
//         url: 'https://www.upwork.com/o/profiles/users/_~01c6562d182ff73096/',
//         iconClass: 'w-icon-upwork'
//       },
//     ]
//   });
//
//   successStory8.attach('image', {path: '/Users/admin/tmp/students/HB.jpg'}, function(error) {
//     successStory8.save();
//   });
//
//   var successStory9 = new SuccessStory({
//     name: 'Jahidul Islam',
//     story: 'I have earned $350 so far from Upwork just after completing the Front-End course at CodersTrust. ',
//     earning: 350,
//     socialNetworks: [
//       {
//         name: 'LinkedIn',
//         url: 'https://www.linkedin.com/in/jahidulislam1153',
//         iconClass: 'w-icon-link'
//       },
//       {
//         name: 'Upwork',
//         url: 'https://www.upwork.com/o/profiles/users/_~018e7cd0f0e6ee3047/',
//         iconClass: 'w-icon-upwork'
//       },
//     ]
//   });
//
//   successStory9.attach('image', {path: '/Users/admin/tmp/students/jahidul.jpg'}, function(error) {
//     successStory9.save();
//   });
//
//   var successStory10 = new SuccessStory({
//     name: 'Monwar Hossain Anik',
//     story: 'I got a $1500 project from Upwork just after completing the Front-End course at CodersTrust. I’m proud to be a student of CodersTrust.',
//     earning: 1500,
//     socialNetworks: [
//       {
//         name: 'LinkedIn',
//         url: 'https://www.linkedin.com/in/monwar-anik',
//         iconClass: 'w-icon-link'
//       },
//       {
//         name: 'Upwork',
//         url: 'https://www.upwork.com/o/profiles/users/_~013d65124de2969661/',
//         iconClass: 'w-icon-upwork'
//       },
//     ]
//   });
//
//   successStory10.attach('image', {path: '/Users/admin/tmp/students/anik.jpg'}, function(error) {
//     successStory10.save();
//   });
// });
// //
// // CustomerReview.find({}).remove(function() {
// //   var customerReview = new CustomerReview({
// //     name: 'Jared Smith',
// //     designation: 'PSD to responsive HTML',
// //     review: 'Great job. Great communication, met deadlines. def hire again'
// //   });
// //   customerReview.save();
// //
// //   var customerReview1 = new CustomerReview({
// //     name: 'Dr. Philgood',
// //     designation: 'Web Development',
// //     review: 'Ibrahim is a great worker. He is fast, reliable and intelligent. He needs minimum supervision. Highly Recommended.'
// //   });
// //   customerReview1.save();
// //
// //   var customerReview2 = new CustomerReview({
// //     name: 'Michael Joachim',
// //     designation: 'Design a landing page for startup business.',
// //     review: 'Mihir is a top worker. He always complete his work timely. I will definitely hire him again.'
// //   });
// //   customerReview2.save();
// //
// //   var customerReview3 = new CustomerReview({
// //     name: 'Edward Bernes',
// //     designation: 'Web Development.',
// //     review: 'Rokebul was amazing. I will definitely hire him again.'
// //   });
// //   customerReview3.save();
// //
// // });
// //
// // //
// // //User.find({}).remove(function() {
// // //  User.create({
// // //    provider: 'local',
// // //    name: 'Test User',
// // //    email: 'test@test.com',
// // //    password: 'test'
// // //  }, {
// // //    provider: 'local',
// // //    role: 'admin',
// // //    name: 'Admin',
// // //    email: 'admin@admin.com',
// // //    password: 'admin'
// // //  }, function() {
// // //      console.log('finished populating users');
// // //    }
// // //  );
// // //});
// Mentor.find({'skills.name': 'Java'}).exec(function (err, docs) {
//   var arr = [];
//
//   docs.forEach(function (item) {
//     arr.push(item._id);
//   });
//
//   Course.update({name: 'Android'}, {$set: {mentors: arr}}).exec();
// });
//
// Mentor.find({'skills.name': 'HTML5'}).exec(function (err, docs) {
//   var arr = [];
//
//   docs.forEach(function (item) {
//     arr.push(item._id);
//   });
//
//   Course.update({name: 'Front end Development'}, {$set: {mentors: arr}}).exec();
// });
//
// Mentor.find({'skills.name': {$in: ['HTML5', 'PHP']}}).exec(function (err, docs) {
//   var arr = [];
//
//   docs.forEach(function (item) {
//     arr.push(item._id);
//   });
//
//   Course.update({name: 'Full Stack Development'}, {$set: {mentors: arr}}).exec();
// });
//
// Mentor.find({}).exec(function (err, docs) {
//   var arr = [];
//
//   docs.forEach(function (item) {
//     arr.push(item._id);
//   });
//
//   Course.update({name: 'Employability Course'}, {$set: {mentors: arr}}).exec();
// });
//
// Portfolio.find({}).exec(function (err, docs) {
//   var arr = [];
//
//   docs.forEach(function (item) {
//     arr.push(item._id);
//   });
//
//   Course.update({name: 'Front end Development'}, {$set: {portfolios: arr}}).exec();
//
//   Course.update({name: 'Full Stack Development'}, {$set: {portfolios: arr}}).exec();
// });
// Team.find({name: 'Somaliland'}).remove(function() {
//   function attachMembers(members, index, lastIndex, folder, cb) {
//     if (index <= lastIndex) {
//       members[index].attach('image', {path: '/Users/admin/tmp/team/' + [folder, index].join('/') + '.jpg'}, function (err) {
//         attachMembers(members, index + 1, lastIndex, folder, cb)
//       });
//     } else {
//       cb();
//     }
//   }
//   var team0 = new Team({
//     name: 'Somaliland',
//     position: 4,
//     members: [
//       {
//         name: 'Ayaan Ali',
//         designation: 'Country Lead',
//         email: 'ayaan@coderstrust.com',
//         position: 1
//       }
//     ]
//   });
//   team0.attach('image', {path: '/Users/admin/tmp/team/somaliland.jpg'}, function(error) {
//      team0.attach('imageActive', {path: '/Users/admin/tmp/team/somaliland-active.jpg'}, function(error) {
//        attachMembers(team0.members, 0, team0.members.length - 1, 'somaliland', function () {
//          team0.save();
//        })
//      });
//    });
//  })
  // var team0 = new Team({
  //   name: 'Kenya',
  //   position: 3,
  //   members: [
  //     {
  //       name: 'Leonardas Gujis',
  //       designation: 'COO Kenya',
  //       email: 'leonardas@coderstrust.com',
  //       position: 1
  //     }
  //   ]
  // });
  // team0.attach('image', {path: '/Users/admin/tmp/team/kenya.jpg'}, function(error) {
  //    team0.attach('imageActive', {path: '/Users/admin/tmp/team/kenya-active.jpg'}, function(error) {
  //      attachMembers(team0.members, 0, team0.members.length - 1, 'kenya', function () {
  //        team0.save();
  //      })
  //    });
  //  });
//
  // var team0 = new Team({
  //   name: 'India',
  //   position: 2,
  //   members: [
  //     {
  //       name: 'Francesco Stasi',
  //       designation: 'COO India',
  //       email: 'francesco@coderstrust.com',
  //       position: 1
  //     },
  //     {
  //       name: 'Ramesh Joshi',
  //       designation: 'Business Developer',
  //       email: 'ramesh@coderstrust.com',
  //       position: 2,
  //       socialNetworks: [
  //         {
  //           name: 'linkedin',
  //           url: 'https://www.linkedin.com/profile/view?id=AAkAAAHmrPYBdhSJIOJXPf-ShG1u49NCOYt5-8g&authType=NAME_SEARCH&authToken=ORAR&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A31894774%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1449677808798%2Ctas%3Aramesh',
  //           icon: 'fa fa-linkedin-square'
  //         }
  //       ]
  //     },
  //     {
  //       name: 'Yash Arya',
  //       designation: 'Head of Strategy',
  //       email: 'yash@coderstrust.com',
  //       position: 3,
  //       socialNetworks: [
  //         {
  //           name: 'linkedin',
  //           url: 'https://www.linkedin.com/profile/view?id=AAkAAAGdjY0BwUo6fmpC1K9vVsKgEZX37ijynDQ&authType=NAME_SEARCH&authToken=f-UE&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A27102605%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1449677777579%2Ctas%3Ayash',
  //           icon: 'fa fa-linkedin-square'
  //         }
  //       ]
  //     },
  //     {
  //       name: 'Daniel Adlakha',
  //       designation: 'Head of Skills',
  //       email: 'daniel@coderstrust.com',
  //       position: 4,
  //       socialNetworks: [
  //         {
  //           name: 'linkedin',
  //           url: 'https://www.linkedin.com/profile/view?id=AAkAAAG4lWYBckWjNgi2CJepxFMMu0XnCdM6tdE&authType=NAME_SEARCH&authToken=lNWK&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A28874086%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1449677794183%2Ctas%3ADaniel%20Adlakha',
  //           icon: 'fa fa-linkedin-square'
  //         }
  //       ]
  //     },
  //     //
  //
  //   ]
  // });
  //
  //
  //
  // Team.findOne({name: 'India'}).exec(function (err, team0) {
  //   team0.attach('image', {path: '/Users/admin/tmp/team/india.jpg'}, function(error) {
  //     team0.attach('imageActive', {path: '/Users/admin/tmp/team/india-active.jpg'}, function(error) {
  //       attachMembers(team0.members, 0, team0.members.length - 1, 'india', function () {
  //         team0.save();
  //       })
  //     });
  //   });
  // });
//
//   var team1 = new Team({
//     name: 'Global',
//     position: 0,
//     members: [
//       {
//         name: 'Leonardas Gujis',
//         designation: 'Financial Assistant',
//         email: 'leonardas@coderstrust.com',
//         position: 8
//       },
//       {
//         name: 'Francesco Stasi',
//         designation: 'Business Developer',
//         email: 'francesco@coderstrust.com',
//         position: 7
//       },
//       {
//         name: 'Asser Smidt',
//         designation: 'Co-founder & Product',
//         email: 'as@coderstrust.com',
//         position: 6,
//         socialNetworks: [
//           {
//             name: 'LinkedIn',
//             url: 'https://www.linkedin.com/in/asssmidt',
//             icon: 'fa fa-linkedin-square'
//
//           }
//         ]
//       },
//       {
//         name: 'Jan-Cayo Fiebig',
//         designation: 'CFO & Co-Founder',
//         email: 'jc@coderstrust.com',
//         position: 5,
//         socialNetworks: [
//           {
//             name: 'LinkedIn',
//             url: 'https://www.linkedin.com/in/jancayofiebig',
//             icon: 'fa fa-linkedin-square'
//
//           }
//         ]
//       },
//       {
//         name: 'Ferdinand Kjærulff',
//         designation: 'Founder & CEO',
//         email: 'fk@coderstrust.com',
//         position: 4,
//         socialNetworks: [
//           {
//             name: 'LinkedIn',
//             url: 'https://www.linkedin.com/pub/ferdinand-kj%C3%A6rulff/2/a46/575',
//             icon: 'fa fa-linkedin-square'
//
//           }
//         ]
//       }
//     ]
//   });
//
//
//
//   team1.attach('image', {path: '/Users/admin/tmp/team/global.jpg'}, function(error) {
//     team1.attach('imageActive', {path: '/Users/admin/tmp/team/global-active.jpg'}, function(error) {
//       attachMembers(team1.members, 0, team1.members.length - 1, 'global', function () {
//         team1.save();
//       })
//     });
//   });
//
//   var team2 = new Team({
//     name: 'Bangladesh',
//     position: 1,
//     members: [
//       {
//         name: 'Habiba Jahan',
//         designation: 'Communication Assistant',
//         email: 'habiba@coderstrust.com',
//         position: 31,
//         socialNetworks: [
//           {
//             name: 'facebook',
//             url: 'https://www.facebook.com/khandoker.lipu',
//             icon: 'fa fa-facebook-square'
//           }
//         ]
//       },
//       {
//         name: 'Muktadir Hossain',
//         designation: 'Mentor',
//         email: 'muktadir@coderstrust.com',
//         position: 24,
//         socialNetworks: [
//           {
//             name: 'facebook',
//             url: 'https://www.facebook.com/MuktadirH.Shourove',
//             icon: 'fa fa-facebook-square'
//           },
//           {
//             name: 'linkedin',
//             url: 'https://bd.linkedin.com/in/muktadirhossain',
//             icon: 'fa fa-linkedin-square'
//           }
//         ]
//       },
//       {
//         name: 'Md.Tariqul Islam Shuvo',
//         designation: 'Mentor',
//         email: 'tariqul@coderstrust.com',
//         position: 24,
//         socialNetworks: [
//           {
//             name: 'facebook',
//             url: 'https://www.facebook.com/tariqul.i.shuvo',
//             icon: 'fa fa-facebook-square'
//           },
//           {
//             name: 'linkedin',
//             url: 'https://bd.linkedin.com/in/tariqul-islam-9b7b48a9',
//             icon: 'fa fa-linkedin-square'
//           }
//         ]
//       },
//       {
//         name: 'Md. Hafizur Rashid',
//         designation: 'Mentor',
//         email: 'hafiz@coderstrust.com',
//         position: 25,
//         socialNetworks: [
//           {
//             name: 'facebook',
//             url: 'https://www.facebook.com/hafiz42',
//             icon: 'fa fa-facebook-square'
//           },
//           {
//             name: 'linkedin',
//             url: 'https://www.linkedin.com/pub/md-hafizur-rashid/99/3b8/624',
//             icon: 'fa fa-linkedin-square'
//           }
//         ]
//       },
//       {
//         name: 'Kh. Rifat M Huq',
//         designation: 'Mentor',
//         email: 'rifat@coderstrust.com',
//         position: 22,
//         socialNetworks: [
//           {
//             name: 'facebook',
//             url: 'https://www.facebook.com/rifat.aymman',
//             icon: 'fa fa-facebook-square'
//           },
//           {
//             name: 'linkedin',
//             url: 'https://www.linkedin.com/profile/view?id=168453611&trk=nav_responsive_tab_profile',
//             icon: 'fa fa-linkedin-square'
//           }
//         ]
//       },
//
//       {
//         name: 'Md. Khairul Islam Linkon',
//         designation: 'Mentor',
//         email: 'linkon@coderstrust.com',
//         position: 21,
//         socialNetworks: [
//           {
//             name: 'facebook',
//             url: 'https://www.facebook.com/bd.linkon',
//             icon: 'fa fa-facebook-square'
//           },
//           {
//             name: 'linkedin',
//             url: 'https://bd.linkedin.com/pub/khairul-linkon/54/b8a/241',
//             icon: 'fa fa-linkedin-square'
//           }
//         ]
//       },
//
//       {
//         name: 'Rajesh Ghosh',
//         designation: 'Mentor',
//         email: 'rajesh@coderstrust.com',
//         position: 20,
//         socialNetworks: [
//           {
//             name: 'facebook',
//             url: 'https://www.facebook.com/Rajesh.Ghosh.cse',
//             icon: 'fa fa-facebook-square'
//           },
//           {
//             name: 'linkedin',
//             url: 'https://bd.linkedin.com/pub/rajesh-ghosh/60/38/809',
//             icon: 'fa fa-linkedin-square'
//           }
//         ]
//       },
//
//       {
//         name: 'Habib Chowdhury',
//         designation: 'Assistant Accountant',
//         email: 'habib@coderstrust.com',
//         position: 28,
//         socialNetworks: [
//           {
//             name: 'facebook',
//             url: 'https://www.facebook.com/shojib.chowdhury.52',
//             icon: 'fa fa-facebook-square'
//           },
//           {
//             name: 'linkedin',
//             url: 'https://bd.linkedin.com/in/md-habib-chowdhury-51022bb9',
//             icon: 'fa fa-linkedin-square'
//           }
//         ]
//       },
//
//       {
//         name: 'Nazrul Islam',
//         designation: 'Software Engineer',
//         email: 'nazrul@coderstrust.com',
//         position: 18,
//         socialNetworks: [
//           {
//             name: 'facebook',
//             url: 'https://www.facebook.com/mdnazrulislam.cse',
//             icon: 'fa fa-facebook-square'
//           },
//           {
//             name: 'linkedin',
//             url: 'https://bd.linkedin.com/in/nazrulcse07',
//             icon: 'fa fa-linkedin-square'
//           }
//         ]
//       },
//
//       {
//         name: 'Asif Ahmed Tonmoy',
//         designation: 'Marketing Manager',
//         email: 'tonmoy@coderstrust.com',
//         position: 30,
//         socialNetworks: [
//           {
//             name: 'facebook',
//             url: 'https://www.facebook.com/asifahmedtonmoy',
//             icon: 'fa fa-facebook-square'
//           },
//           {
//             name: 'linkedin',
//             url: 'http://ca.linkedin.com/in/asifahmedtonmoy',
//             icon: 'fa fa-linkedin-square'
//           }
//         ]
//       },
//
//       {
//         name: 'Mahbub Hasan',
//         designation: 'Lead Mentor',
//         email: 'mahbub@coderstrust.com',
//         position: 19,
//         socialNetworks: [
//           {
//             name: 'facebook',
//             url: 'https://www.facebook.com/mahbub.mukul1',
//             icon: 'fa fa-facebook-square'
//           },
//           {
//             name: 'linkedin',
//             url: 'https://bd.linkedin.com/in/mahbub-mukul-057b8954',
//             icon: 'fa fa-linkedin-square'
//           },
//         ]
//       },
//
//       {
//         name: 'Mizanur Rahman',
//         designation: 'Accountant',
//         email: 'mizanur@coderstrust.com',
//         position: 27,
//         socialNetworks: [
//           {
//             name: 'facebook',
//             url: 'https://www.facebook.com/Meizan',
//             icon: 'fa fa-facebook-square'
//           },
//           {
//             name: 'linkedin',
//             url: 'https://bd.linkedin.com/pub/mizanur-rahman/88/bb3/52a',
//             icon: 'fa fa-linkedin-square'
//           },
//         ]
//       },
//
//       {
//         name: 'M A G Osmani',
//         designation: 'Business Developer',
//         email: 'osmani@coderstrust.com',
//         position: 29,
//         socialNetworks: [
//           {
//             name: 'linkedin',
//             url: 'https://bd.linkedin.com/in/ataul-osmani-785b5a51',
//             icon: 'fa fa-linkedin-square'
//           },
//         ]
//       },
//
//       {
//         name: 'Sultana Parvin',
//         designation: 'HR and Human Talent Manager',
//         email: 'sultana@coderstrust.com',
//         position: 16,
//         socialNetworks: [
//           {
//             name: 'facebook',
//             url: 'https://www.facebook.com/sultana.parvin.1800',
//             icon: 'fa fa-facebook-square'
//           },
//           {
//             name: 'linkedin',
//             url: 'https://bd.linkedin.com/in/sultanaparvin',
//             icon: 'fa fa-linkedin-square'
//           },
//         ]
//       },
//
//       {
//         name: 'Maruf Hasan Bulbul',
//         designation: 'IT Project Manager',
//         email: 'maruf@coderstrust.com',
//         position: 17,
//         socialNetworks: [
//           {
//             name: 'facebook',
//             url: 'https://www.facebook.com/mhb07',
//             icon: 'fa fa-facebook-square'
//           },
//           {
//             name: 'linkedin',
//             url: 'http://bd.linkedin.com/in/mhb07',
//             icon: 'fa fa-linkedin-square'
//           },
//         ]
//       },
//
//       {
//         name: 'Shakil Mahmood',
//         designation: 'Head Of Operation',
//         email: 'shakil@coderstrust.com',
//         position: 15,
//         socialNetworks: [
//           {
//             name: 'facebook',
//             url: 'https://www.facebook.com/msm.nnd',
//             icon: 'fa fa-facebook-square'
//           },
//           {
//             name: 'linkedin',
//             url: 'https://www.linkedin.com/in/shakilmahmood1',
//             icon: 'fa fa-linkedin-square'
//           },
//         ]
//       },
//
//     ]
//   });
//
//   team2.attach('image', {path: '/Users/admin/tmp/team/bangladesh.jpg'}, function(error) {
//     team2.attach('imageActive', {path: '/Users/admin/tmp/team/bangladesh-active.jpg'}, function(error) {
//       attachMembers(team2.members, 0, team2.members.length - 1, 'bangladesh', function () {
//         team2.save();
//       })
//
//     });
//   });
// });
//
//
// Office.find({}).remove(function() {
//   Office.create(
//     {
//       name: 'CodersTrust Bangladesh',
//       address: 'Apartmets 3A, House 3B, Road 49,Gulshan 2, Dhaka 1212, Bangladesh',
//       phones: [
//         '+880 4478017838',
//         '+880 1739561919'
//       ],
//       location: {
//         lat: '23.793033',
//         lng: '90.415478'
//       }
//     },
//     {
//       name: 'CodersTrust Global',
//       address: 'Åbenrå 29, 1124 København K, Denmark',
//       phones: [],
//       location: {
//         lat: '55.6834128',
//         lng: '12.575401400000032'
//       }
//     },
//
//     {
//       name: 'CodersTrust Kenya',
//       address: '5th floor Piedmont Plaza, Ngong Rd, Nairobi, Kenya',
//       phones: [],
//       location: {
//         lat: '-1.2992513',
//         lng: '36.765371500000015'
//       }
//     },
//     {
//       name: 'CodersTrust India',
//       address: 'Floor 3th, Universal Business Park, Sec-66, Golf Course Extension Road, Gurgaon.',
//       phones: [],
//       location: {
//         lat: '28.4042635',
//         lng: '77.05313530000001'
//       }
//     }
// );

  // office.save();
// });
Team.findOne({name: 'Bangladesh'}).exec(function (err, team) {
  // team.members.push({
  //   name: 'Giovanni Toschi',
  //   designation: 'CMO Bangladesh',
  //   position: 12,
  //   email: 'gio@coderstrust.com',
  //   socialNetworks: [
  //     {
  //       name: 'linkedin',
  //       url: 'https://www.linkedin.com/in/giovannitoschi',
  //       icon: 'fa fa-linkedin-square'
  //     }
  //   ]
  // });
  //
  // var member = team.members[team.members.length - 1];
  //
  // member.attach('image', {path: '/Users/admin/tmp/team/bangladesh/16.jpg'}, function (err) {
  //   team.save();
  // });
  // team.members.push({
  //   name: 'Pavel Samchuk',
  //   designation: 'CTO Bangladesh',
  //   position: 11,
  //   email: 'pavel@coderstrust.com',
  //   socialNetworks: [
  //     {
  //       name: 'linkedin',
  //       url: 'https://ua.linkedin.com/in/samchuk-pavel-2743874b',
  //       icon: 'fa fa-linkedin-square'
  //     }
  //   ]
  // });
  //
  // var member = team.members[team.members.length - 1];
  //
  // member.attach('image', {path: '/Users/admin/tmp/team/bangladesh/17.jpg'}, function (err) {
  //   team.save();
  // })
//   // console.log(team);
//   // team.members.push({
//   //   name: 'Kirpal Singh',
//   //   designation: 'CTO',
//   //   position: 10,
//   //   email: 'kirpal@coderstrust.com',
//   //   socialNetworks: [
//   //     {
//   //       name: 'linkedin',
//   //       url: 'https://www.linkedin.com/profile/view?id=AAkAAABUDSQBvVhqpZHB9-FD5h5MhwdoPkIyoDI&authType=NAME_SEARCH&authToken=Qb7M&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A5508388%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1449677856314%2Ctas%3Akirpal',
//   //       icon: 'fa fa-linkedin-square'
//   //     }
//   //   ]
//   // });
//   //
//   // var member = team.members[team.members.length - 1];
//   //
//   // member.attach('image', {path: '/Users/admin/tmp/team/global/5.jpg'}, function (err) {
//   //   team.save();
//   // });
//
  // team.members.push({
  //   name: 'Morten Lynggaard',
  //   designation: 'Business Developer',
  //   position: 12,
  //   email: 'morten@coderstrust.com',
  //   socialNetworks: [
  //     {
  //       name: 'linkedin',
  //       url: 'https://www.linkedin.com/profile/view?id=AAkAAApwKTMBJZFgHcAiVZAgTeEQiVeuvQDnBdE&authType=NAME_SEARCH&authToken=-SHJ&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A175122739%2CauthType%3ANAME_SEARCH%2Cidx%3A1-6-6%2CtarId%3A1449677839912%2Ctas%3Amorten%20',
  //       icon: 'fa fa-linkedin-square'
  //     }
  //   ]
  // });
  //
  // var member = team.members[team.members.length - 1];
  //
  // member.attach('image', {path: '/Users/admin/tmp/team/global/6.jpg'}, function (err) {
  //   team.save();
  // });
  // team.members.push({
  //   name: 'Milica Sokolović',
  //   designation: 'Legal Manager',
  //   position: 13,
  //   email: 'milica@coderstrust.com',
  //   socialNetworks: [
  //     {
  //       name: 'linkedin',
  //       url: 'https://www.linkedin.com/profile/view?id=AAkAAAxNlJUBoLMDg_qT2ZVKcE6MDZagKLMGJBc&authType=NAME_SEARCH&authToken=bGA0&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A206410901%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1449677825418%2Ctas%3Amilica',
  //       icon: 'fa fa-linkedin-square'
  //     }
  //   ]
  // });
  //
  // var member = team.members[team.members.length - 1];
  //
  // member.attach('image', {path: '/Users/admin/tmp/team/global/7.jpg'}, function (err) {
  //   team.save();
  // });
});
