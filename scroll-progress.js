$(window).load(function(){
  $(window).scroll(function() {
    console.log("test");
    var wintop = $(window).scrollTop(), docheight = $('article').height(), winheight = $(window).height();
    console.log(wintop);
    var totalScroll = (wintop/(docheight-winheight))*100;
    console.log("total scroll" + totalScroll);
    $(".progress-bar").css("width",totalScroll+"%");
  });

});
