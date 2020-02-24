var fixScroll = function(){
		var wW = $(window).width();
		if (wW > 1040){
			var tg = $(".openCourse .appBox");
			var appTop = $(".opView").offset().top; //시작점
			var tmp = $(window).scrollTop();
			var gnbH = $('#gnb').height();
			var tz = tmp - appTop + gnbH + 20;
			var limit = $('footer').offset().top - tg.height();
			console.log(tz,limit,gnbH);

			if (tz > 0 ){
				if (tmp >= limit){
					tg.stop().animate({'top':limit},300);
				} else {
					tg.stop().animate({'top':tz},300);
				}
			}else{
				tg.stop().animate({'top':'0'},300);
			}
		}
	};

	// event control
	$(window).scroll(function() {
		fixScroll();
	});

	$(window).load(function() {
		setTimeout(function(){ 
			fixScroll();
		},800);
	});


	$(window).resize(function(){
		fixScroll();
		if ($('.fixApp .mAppBtn').hasClass('on')){$('.fixApp .mAppBtn').click();}
	});
