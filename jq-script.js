$(document).ready(function(){
	
	$("#sel_type").change(function(){
		let selValue = $(this).val();
		console.log('selValue:',selValue)
		switch(selValue){
			case "hide":
			$('.hide-container').css({"display":"block"});
			$('.fade-container,.slide-container,.anime-container,.stop-container,\
			.callback-container,.chaining-container').css({"display":"none"});
			break;
			case "fade":
			$('.fade-container').css({"display":"block"});
			$('.hide-container,.slide-container,.anime-container,.stop-container,\
			.callback-container,.chaining-container').css({"display":"none"});
			break;
			case "slide":
			$('.slide-container').css({"display":"block"});
			$('.hide-container,.fade-container,.anime-container,.stop-container,\
			.callback-container,.chaining-container').css({"display":"none"});
			break;
			case "anime":
			$('.anime-container').css({"display":"block"});
			$('.hide-container,.fade-container,.slide-container,.stop-container,\
			.callback-container,.chaining-container').css({"display":"none"});
			break;
		}
	}); 	
	
	$("#btn_hide,#btn_show,#btn_toggle,#btn_chain_hide").click(function(){
		let btnValue = $(this).val();
		switch(btnValue){
			case "hide":
			$(".hide-container .content").hide(1000,function(){
				alert("The content is hidden and we have used call back function for alert.")
			});
			break;
			case "show":
			$(".hide-container .content").show(1000);
			alert("The content is displayed and no callback function is used for alert.")
			break;
			case "toggle":
			$(".hide-container .content").toggle(1000);
			break;
			case "chain":
			$(".hide-container .content").hide(1000).show(1000,function(){
				alert("Chaining function is used.");
			});
			break;
		}
	});
	
	$("#btn_fade_in,#btn_fade_out,#btn_fade_toggle,#btn_fade_to,#btn_chain_fade").click(function(){
		let btnValue = $(this).val();
		switch(btnValue){
			case "fadein":
			$(".fade-container .content").fadeIn(1000);
			break;
			case "fadeout":
			$(".fade-container .content").fadeOut(1000);
			break;
			case "toggle":
			$(".fade-container .content").fadeToggle(1000);
			break;
			case "fadeto":
			$(".fade-container .content").fadeTo(1000,0.5);
			break;
			case "chain":
			$(".fade-container .content").fadeOut(1000).fadeIn(1000,function(){
				alert("Chaining function is used.");
			});
			break;
		}
	});
	
	$("#btn_slide_up,#btn_slide_down,#btn_slide_toggle").click(function(){
		let btnValue = $(this).val();
		switch(btnValue){
			case "slideup":
			$(".slide-container .content").slideUp(1000);
			break;
			case "slidedown":
			$(".slide-container .content").slideDown(1000);
			break;
			case "toggle":
			$(".slide-container .content").slideToggle(1000);
			break;
		}
	});
	
	$("#btn_anime_1,#btn_anime_2,#btn_anime_3,#btn_stop,#btn_stop_all,#btn_stop_fnsh").click(function(){
		let btnValue = $(this).val();
		console.log("btnValue:",btnValue)
		switch(btnValue){
			case "anime-1":
			$(".anime-container .content").animate({padding:'30px'},1000);
			$(".anime-container .content").animate({padding:'10px'},"slow");
			break;
			case "anime-2":
			let divConatiner = $(".anime-container .content");
            let pContent = $(".anime-container .content p");			
			divConatiner.animate({height:"175px"},1000);
			pContent.animate({fontSize:'1.5em'},1000);
			divConatiner.animate({height:"106px"},1000);
			pContent.animate({fontSize:'1em'},1000);
			break;
			case "anime-3":
			let divConatain = $(".anime-container .content");			
			divConatain.animate({height:"175px"},1000);
			divConatain.animate({fontSize:'1.5em'},1000);
			divConatain.animate({fontSize:'1em'},1000);
			divConatain.animate({height:"106px"},1000);
      		break;
			case "anime-stop":
			$(".anime-container .content").stop();		
			break;
			case "anime-stop-all":
			$(".anime-container .content").stop(true);
			break;
			case "anime-stop-finish":
			$(".anime-container .content").stop(true,true);
			break;
		}
	});
});