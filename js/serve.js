$(function(){
	console.log(window.innerWidth);
	console.log($("#a_search").parent().siblings());
	if(window.innerWidth<=1365){
		$(".nav a").css("fontSize","12px")
	}
	if(window.innerWidth>1365){
		$(".nav a").css("fontSize","14px")
	}
	if(window.innerWidth>1220){
		$(".nav .col-lg-0").removeClass("col-lg-0").addClass("col-lg-1");
		$(".nav .col-lg-5").removeClass("col-lg-5").addClass("col-lg-4");
		$(".fl").css("margin-left","-0.8rem");
		$(".fr").css("margin-right","-0.8rem");
	}	
	if(window.innerWidth<=1220){
		$(".nav .col-lg-1").removeClass("col-lg-1").addClass("col-lg-0");
		$(".nav .col-lg-4").removeClass("col-lg-4").addClass("col-lg-5");
		$(".fl").css("margin-left","0.15rem");
		$(".fr").css("margin-right","0");
	}
	if(window.innerWidth>1024){
			var add=$(".fl").children();
			for(var i=add.length;i<add.length-5;i--){
				$(".fr").prepend(add[i]);
			}
	}
	if(window.innerWidth<=1024){
		
			var add=$("#a_search").parent().siblings();
			for(var i=0;i<add.length;i++){
				$(".flex_list>ul").append(add[i]);
			}
	}
	$(window).resize(function(){
		
		if(window.innerWidth<=1365){
			console.log(window.innerWidth);
		$(".nav a").css("fontSize","12px")
	}
	if(window.innerWidth>1365){
		$(".nav a").css("fontSize","14px")
	}
		if(window.innerWidth<=1220){
		$(".nav .col-lg-1").removeClass("col-lg-1").addClass("col-lg-0");
		$(".nav .col-lg-4").removeClass("col-lg-4").addClass("col-lg-5");
		$(".fl").css("margin-left","0.15rem");
		$(".fr").css("margin-right","0");
	}
		if(window.innerWidth>1220){
		$(".nav .col-lg-0").removeClass("col-lg-0").addClass("col-lg-1");
		$(".nav .col-lg-5").removeClass("col-lg-5").addClass("col-lg-4");
		$(".fl").css("margin-left","-0.8rem");
		$(".fr").css("margin-right","-0.8rem");
	}
		if(window.innerWidth>1024){
			console.log($(".fl").children());
			var add=$(".fl").children();
			if(add.length>5)
			for(var i=add.length;i<add.length-5;i--){
				$(".fr").prepend(add[i]);
//				$("#a_search").insertBefore(add[i]);
			}
			console.log($(".fr").children());
		}
		if(window.innerWidth<=1024){
			
			var add=$("#a_search").parent().siblings();
			for(var i=0;i<add.length;i++){
				$(".flex_list").append(add[i]);
			}
	}
	});
})
