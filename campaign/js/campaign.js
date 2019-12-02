






    var vip3= 870; //스크롤 위치값
    $(window).scroll(function(){
      var num=$(window).scrollTop();
        if(num>vip3){
          $(".p3fpart").fadeIn();
        }else{
          $(".p3fpart").fadeOut();
        }
      });


  var vip4= 1600; //스크롤 위치값
	$(window).scroll(function(){
		var num=$(window).scrollTop();
			if(num>vip4){
				$(".timeline,.introfire,.sum1").fadeIn();
			}else{
				$(".timeline,.introfire,.sum1").fadeOut();
			}
		});
