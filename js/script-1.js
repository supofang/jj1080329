$(document).ready(function($){
  $('.card-option').on("click", function(e){
    e.preventDefault();
    $(this).addClass('flipOutY').hide().siblings('.card-option').addClass('flipOutY').removeClass('flipInY').hide();
    $(this).next('.card-result').addClass('flipInY').removeClass('flipOutY').show();
    $(window).resize();
  });
  $('.card-close').on("click", function(e){
    e.preventDefault();
    $(this).parent('.card-result').addClass('flipOutY').removeClass('flipInY').hide();
    $(this).parent().siblings('.card-option').addClass('flipInY').removeClass('flipOutY').show();
    $(window).resize();
  });
  $('.send').on("click", function(){
    var str=$('.phone').val();
    if(str==""){
      alert('請輸入手機號碼');
    }else if(isNaN(str)){
      alert("請檢查是為全為數字，數字間不可有空白");
    }else if(str.length<=9||str.length>=11){
      alert("手機號碼為十位數字。Ex：0900123123");
    }else{
      $('.serial-no').slideDown();
    }
  });
  
});

