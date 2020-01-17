$(function(){
  $('.is-finished').on('click', function(obj){
    $(obj.target).attr('aria-expanded', true);
    $(obj.target).addClass('is-active');
    openTarget = $(obj.target).attr('aria-controls');
    $("#" + openTarget).attr('aria-hidden', false);
  });
});
$(function(){
  $('.modal-calendar__close').on('click', function(){
    $('div').attr('aria-hidden', true);
  });
});


$(function(){
  $('.slider').slick({
    fade: true,
    arrows: false,
    autoplay:true,
    autoplaySpeed:3000,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false
  });

  $('.carousel').slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      speed: 7000,
      slidesToShow: 4,//表示するスライドの数
      //infinite: true, //スライドのループ有効化
      dots: false //ドットのナビゲーションを表示
    });

});
