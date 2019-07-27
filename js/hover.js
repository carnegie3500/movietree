$(document).ready(
		function(){
			 
			//메인메뉴 호버
			$("div#header").hover(
				function(){
					// alert(1);
				    $("div#header").animate({"height":"630px"},0);
					//$("div#header .mainMenu li ul").slideDown(0);
					 // $("div#header").animate({"height":"400px"},0);
				  		//  $("div#header .mainMenu").css({"overflow":"visible"});
					//$("div#header .mainMenu > li:nth-child(-n+6)").hide().slideDown(0);
					// $("div#header").css

				},
				function(){
					//$("div#header .mainMenu li ul").slideUp(0);
					$("div#header").animate({"height":"109px"},1000);
				}
			);
			// $("div#header").mouseleave(
			// 	function(){
			// 		 $("div#header").animate({"height":"114px"},0);
			// 	}
			// );

			

			$("div#header .mainMenu>li").mouseenter(
					function(){
						n=0
						if (n<5) {
						n=$(this).attr("data-n");
						 $("div#header .mainMenu > li:nth-child("+n+") span").show();
						 $("div#header .mainMenu > li:nth-child("+n+")").siblings().children("span").hide();
						 $("div#header .mainMenu > li:nth-child("+n+") h2 a").css("color","#68a12a");
						 $("div#header .mainMenu > li:nth-child("+n+") h2").parent().siblings().children("h2").children("a").css("color","#585858");
						 // $("div#header .mainMenu > li:nth-child("+n+")").siblings().children("span").css("");
						 // $("div#header .mainMenu > li:nth-child("+n+") span").hide();
						}
					}
			);
			$("div#content ul li h3,div#content ul li h2")
			$("div#content ul li").mouseenter(
				function() {

				}
			);
			$("div#content ul li").hide().css({"position":"relative","top":"50px"});
			$(document).scroll(
				function(){
					if ($(window).scrollTop()>10){
						$("div#content ul li:eq(2)").delay(1000).fadeIn(1200).css("position","relative").animate({"top":"50px"},500);
						$("div#content ul li:eq(1)").delay(1100).fadeIn(1200).css("position","relative").animate({"top":"50px"},600);
						$("div#content ul li:eq(0)").delay(1200).fadeIn(1200).css("position","relative").animate({"top":"50px"},700);

					}		
				}
			);
			//img를 안보이게 하시오
			
			//첫번째이미지는 1초지연뒤 fadeIn,두번째이미지는 2초지연뒤 fadeIn,첫번째이미지는 3초지연뒤 fadeIn
			


			
			
			// $("div#header .mainMenu>li:first-child").mouseenter(
			// 	function(){
			// 	 $("div#header .mainMenu > li:nth-child(1) span").show();
			// 	}
			// );
			// $("div#header .mainMenu>li:nth-child(2)").mouseenter(
			// 	function(){
			// 	 $("div#header .mainMenu > li:nth-child(2) span").show();
			// 	}
			// );
			// $("div#header .mainMenu>li:nth-child(3)").mouseenter(
			// 	function(){
			// 	 $("div#header .mainMenu > li:nth-child(3) span").show();
			// 	}
			// );
			// $("div#header .mainMenu>li:nth-child(4)").mouseenter(
			// 	function(){
			// 	 $("div#header .mainMenu > li:nth-child(4) span").show();
			// 	}
			// );
			// $("div#header .mainMenu>li:nth-child(5)").mouseenter(
			// 	function(){
			// 	 $("div#header .mainMenu > li:nth-child(5) span").show();
			// 	}
			// );
			// $("div#header .mainMenu>li:first-child").mouseleave(
			// 	function(){
			// 	 $("div#header .mainMenu > li:nth-child(1) span").hide();
			// 	}
			// );
			// $("div#header .mainMenu>li:nth-child(2)").mouseleave(
			// 	function(){
			// 	 $("div#header .mainMenu > li:nth-child(2) span").hide();
			// 	}
			// );
			// $("div#header .mainMenu>li:nth-child(3)").mouseleave(
			// 	function(){
			// 	 $("div#header .mainMenu > li:nth-child(3) span").hide();
			// 	}
			// );
			// $("div#header .mainMenu>li:nth-child(4)").mouseleave(
			// 	function(){
			// 	 $("div#header .mainMenu > li:nth-child(4) span").hide();
			// 	}
			// );
			// $("div#header .mainMenu>li:nth-child(5)").mouseleave(
			// 	function(){
			// 	 $("div#header .mainMenu > li:nth-child(5) span").hide();
			// 	}
			// );
		
		}
	);
	