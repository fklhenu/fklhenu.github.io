$(function() {

				function iframeTextChang(){
					$(".container_iframe").empty().css({
						"z-index":1
					});
					$("#mf").contents().find("body").children().appendTo(".container_iframe")
					$("#mf").contents().find("head link[rel='stylesheet']").appendTo("head")
				}
				$("a[href='javascript:;']").click(function() {
					$("iframe").attr("src", $(this).attr("data_href"))
				}) 
				
				$("iframe").load(function(){
					iframeTextChang()
				})
				
				$(document).on("touchmove", function(e) {
					e.preventDefault() 
					e.stopPropagation() 
					return false
				})
				$(".gotop").click(function(){
							$("body,html").stop().animate({
								scrollTop:10
							},"slow")
						})
				$(window).scroll(function(){
					if($(this).scrollTop()>600){
						$(".gotop").css({
							display:"block"
						})
					}else{
						$(".gotop").css({
							display:"none"
						})
					}
				})
			})