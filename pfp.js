$(window).on('load', function() {
 $('.image').animate({top: '15%' ,left: '1%', opacity: '1'}, 1000);
 $('.tabs-panels ul').animate({marginLeft: '-=2250px', opacity: '1'}, 2000); 
 $('#panel1').hide(0).show(1000).css('backgroundColor',  `beige`);
 $('.shadow').on('load', function() {
  $(this).css('backgroundColor', `radial-gradient(circle, rgba(101,119,247,0.7) 14%, rgba(247,101,101,0.7) 25%, rgba(160,247,101,0.7) 36%, rgba(101,247,228,0.7) 49%, rgba(101,198,247,0.7) 60%, rgba(255,74,74,0.7) 69%, rgba(167,93,213,0.7) 76%, rgba(0,22,255,0.7) 85%, rgba(196,67,105,0.7) 94%)`);
 })
});


$(function() {
 $('.tabs-panels .tabs li').on('click', function() {
  var $panel = $(this).closest('.tabs-panels');
  $panel.find('.tabs li.active').removeClass('active');
  $(this).addClass('active');
 
  // figure out which panel to show
  var panelToShow = $(this).attr('rel');

  // hide current panel
  $panel.find('.panel.active').slideUp(300, showNextPanel);

  // show next panel function
  function showNextPanel() {
   $(this).removeClass('active');
   $('#' + panelToShow).slideDown(300, function(){
    $(this).addClass('active');
   });
  }
 });
});