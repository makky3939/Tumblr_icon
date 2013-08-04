var app = (function(){

function _init(){
	var rotate = function(logo, angle) {
		logo.css({
			"transform" : "rotate("+angle+"deg)"
		});
	}
	$(window).scroll(function(){
		rotate($(".logo"), $(window).scrollTop()*0.3);
		$("#value").html($(window).scrollTop());
	})
}

function _br(){
	var br="";
	for(var i=0; i<1000; i++){br=br+"<br>";}
	$("#br").html(br);
}

_init();
  
return {init:_init,br:_br};

}());

