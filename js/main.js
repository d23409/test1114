$(document).ready(function(){

  $(".depth2").hide(); 

  $(".gnb > li").mouseenter(function(){
    $(this).children(".depth2").stop().slideDown();
  });

  $(".gnb > li").mouseleave(function(){
    $(this).children(".depth2").stop().slideUp();
  });


  // 슬라이드 2, 3번 숨기기
  $(".slide li:nth-child(2), .slide li:nth-child(3)").hide();

  setInterval(function(){

  
  // 슬라이드 2초 대기
    $(".slide li").delay(2000);
    // 슬라이드 1번 사라짐
    $(".slide li:nth-child(1)").fadeOut();
    // 슬라이드 2번 나타남
    $(".slide li:nth-child(2)").fadeIn();
    // 슬라이드 2초 대기
    $(".slide li").delay(2000);
    // 슬라이드 2번 사라짐
    $(".slide li:nth-child(2)").fadeOut();
    // 슬라이드 3번 나타남
    $(".slide li:nth-child(3)").fadeIn();
    // 슬라이드 2초 대기
    $(".slide li").delay(2000);
    // 슬라이드 3번 사라짐
    $(".slide li:nth-child(3)").fadeOut();
    // 슬라이드 1번 나타남
    $(".slide li:nth-child(1)").fadeIn();
  });


  $(".btn li:nth-child(1)").click(function(){
    $(".tab > li:nth-child(1)").show();
    $(".tab > li:nth-child(2)").hide(); 
  });

  $(".btn li:nth-child(2)").click(function(){
    $(".tab > li:nth-child(2)").show();
    $(".tab > li:nth-child(1)").hide(); 
  });

});
