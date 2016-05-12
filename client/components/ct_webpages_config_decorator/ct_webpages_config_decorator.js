'use strict';

angular.module('ctSignupApp')
  .factory('ctWebpagesConfigDecorator', [
    '$window',
    function($window) {
      return function() {

        var accordionSlide = $('#featured .slide');
        $('#featured .slide:nth-child(2)').addClass('active');
        accordionSlide.click(function() {
          accordionSlide.removeClass('active');
          $(this).addClass('active');
        });



        //$('.btn-init').click(function(){

        //})
        $(".pay-slider").slick({
          slide: '.item',
          slidesToShow: 1,
          arrows: false,
          dots: false,
          adaptiveHeight: true
        })
        if ($(window).width() > 768) {
          $("#featured .arrows").remove();
          $("#featured").zAccordion({
            timeout: 5500,
            slideWidth: 580,
            //tabWidth: 40,
            width: 680,
            speed: 400,
            startingSlide: 1,
            auto: false,
            height: 302
          });
          $(".prev").click(function() {
            $('#featured .slide.active').prev('.slide').click();
          });
          $(".next").click(function() {
            $('#featured .slide.active').next('.slide').click();
          });
        }

        if ($(window).width() <= 768) {
          //$(".tabulation-styled .nav-tabs li a").click(function(e){
          //    e.preventDefault();
          //})
          $(".tabulation-styled .nav-tabs li a").attr({
            'aria-controls': '',
            "data-toggle": "",
            "role": '',
            'href': '#'
          })
          $(".tabulation-styled .nav-tabs").slick({
            slide: 'li',
            slidesToShow: 1,
            arrows: false,
            centerMode: true,
            dots: false,
            adaptiveHeight: true,
            centerPadding: '30px',
            asNavFor: ".tabulation-styled .tab-content"
          })
          $(".tabulation-styled .tab-content").slick({
            slide: '.tab-pane',
            slidesToShow: 1,
            arrows: false,
            fade: true,
            asNavFor: ".tabulation-styled .nav-tabs",
            centerMode: true,
            dots: false,
            adaptiveHeight: true,
            centerPadding: '30px'
          })
          $("#featured").slick({
            slide: '.slide',
            slidesToShow: 1,
            arrows: false,
            dots: false,
            adaptiveHeight: true
          })
          $("#stickers-slider").slick({
            slide: '.item',
            slidesToShow: 1,
            arrows: false,
            dots: false,
            adaptiveHeight: true
          })

          //$("#stickers-slider").on('edge', function(event, slick, direction){
          //    console.log('edge was hit')
          //});
        }
        $('.slick-slider').on('click', function() {
          $(this).find('.arrows').remove();
        });
        //jQuery('.staff')
        //    .on('movestart', function(e) {
        //        // If the movestart is heading off in an upwards or downwards
        //        // direction, prevent it so that the browser scrolls normally.
        //        if ((e.distX > e.distY && e.distX < -e.distY) ||
        //            (e.distX < e.distY && e.distX > -e.distY)) {
        //            e.preventDefault();
        //            $(this).find('.arrows').remove();
        //        }
        //    });
        $(window).resize(function() {

          if ($(window).width() > 769) {
            //$('#stickers-slider').removeClass("switchOn");
          }
        });


        $('.multiple-items-slider').slick({
          infinite: true,
          slide: '.item',
          slidesToShow: 3,
          slidesToScroll: 3,
          responsive: [{
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }, {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }, {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }]
        });
        $(".staff-slider").slick({
          infinite: true,
          slide: '.item',
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [{
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }, {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }, {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }]
        });
        $(".main-slider").slick({
          infinite: true,
          slide: '.item',
          fade: true,
          arrows: true,
          responsive: [{
            breakpoint: 769,
            settings: {
              slidesToShow: 1,
              fade: false,
              slidesToScroll: 1,
              arrows: false
            }
          }]
        });

        $(".anchor").click(function(event) {
          event.preventDefault();
          var id = $(this).attr('href'),
            top = $(id).offset().top;
          $('body,html').animate({
            scrollTop: top
          }, 800);
        });


        // $('.js-lazyYT').lazyYT({
        //   loading_text: '...'
        // });

      };
    }
  ]);
