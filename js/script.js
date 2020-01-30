$(function(){

    // Set Header Size
    $('.land').height($(window).innerHeight() - $('nav').innerHeight());

    // Event Schedule Slider
    $('.days li').click(function(){
      $(this).addClass('active-day').siblings().removeClass('active-day');
      $($(this).data('slide')).addClass('top-0').removeClass('top-100').siblings().addClass('top-100')
    });

    // When Click On About The Event Button
    $('#ab-event').on('click',function(){
        $('html,body').animate({
          scrollTop : $('.about').offset().top - 80
        },1000);
    });

    // Animate The Body To 0 Point When Click On Back To Top Button
    $('.back-to-top').on('click',function(){
      $('html,body').animate({
        scrollTop : 0
      },1500);

      $('.first-link').addClass('active').siblings().removeClass('active')
    });

    $('.nav-link').on('click',function(e){

      e.preventDefault();
      // Check If The Current Clickable Link Isn't Buy Tickets Button And Add Active Class
      if($(this).data('scroll') != '.buy-tickets'){
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }

      // Animate The Body When Click On Nav Links
      $('html,body').animate({
        scrollTop : $($(this).data('scroll')).offset().top - 70
      },1000);

    });


});

var open = document.getElementsByClassName('open-video-overlay')[0],
    close = document.getElementsByClassName('close-video-overlay')[0],
    over = document.getElementsByClassName('video-overlay')[0];
    nav = document.getElementsByTagName('nav')[0];

// Open The Video Overlay
open.onclick = function(){
  over.classList.add('open-over');
};

// Close The Video Overlay
close.onclick = function(){
  over.classList.remove('open-over');
  document.getElementsByClassName('embed-responsive-item')[0].pause()
};

  var backToTopBtn = document.getElementsByClassName('back-to-top')[0];
// Fixed The Nav To The Top
window.onscroll = function(){
  if(document.documentElement.scrollTop > 50){
    nav.classList.add('fix-nav-to-top')
  }
  else{
    nav.classList.remove('fix-nav-to-top')
  }

  // Show And Hide Back To Top Button
  if(document.documentElement.scrollTop > 100){
    backToTopBtn.classList.add('show-Back-To-Top')
  }
  else{
    backToTopBtn.classList.remove('show-Back-To-Top')
  }
};

window.onload = function(){
  document.getElementsByClassName('load')[0].style.cssText = 'display : none; z-index : -1';
  document.body.style.overflow = 'visible'
};
