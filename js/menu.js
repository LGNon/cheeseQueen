$(function(){
  $('#gnb > ul > li').on({
    'mouseover':function(){
      $('.submenu').stop().slideDown(400);
    },
    'mouseout':function(){
      $('.submenu').stop().slideUp(400);
    }
  });

});