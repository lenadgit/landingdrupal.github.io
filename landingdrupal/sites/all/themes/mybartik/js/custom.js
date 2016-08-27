
(function($) {

 Drupal.behaviors.lkname = {
  attach: function(context, settings) {

		// Menu
		$(".menu-collapsed").click(function() {
		$(this).toggleClass("menu-expanded");
		});
  }
 }

   Drupal.behaviors.googlemap = {
    attach: function(context, settings) {
   $('.maps').click(function () {
      $('.maps iframe').css("pointer-events", "auto");
  });

  $( ".maps" ).mouseleave(function() {
    $('.maps iframe').css("pointer-events", "none");
  });
    }
  }

  Drupal.behaviors.scrollhide = {
    attach: function(context, settings) {
  $("#portfolio,.port-hover-content a").click( function(){
     $("html,body").css("overflow", "hidden");
     });
    $("#cboxClose,#cboxOverlay").click( function(){
    $("html,body").css("overflow", "visible");
    });
  }
};

//Drupal.behaviors.hover = {
 // attach: function(context, settings) {
 //    $('.hovereffect')
//      .on('mouseover', function(){
 //      $('.team-team').slideUp (1000);
//      });
 //    .on('mouseleave', function(){
 //       $('.team-team').slideDown(1000);
 //     });
//    }
//  }
Drupal.behaviors.test = {
 attach: function(context, settings) {
  $('.view-myslider > .view-content').slick({
 centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
   }
 }

})(jQuery);


