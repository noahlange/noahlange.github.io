$(window).load(function(){
	resize();
	if (window.location.pathname == "/") {
			var content = $.get("pages/home.html", function(data){
			$("#main-container").html(data);
			});
		}		
});

function resize() {
	var windowHeight = $(window).height();
	document.getElementById("main-container").style.minHeight=windowHeight-75 + "px";
	document.getElementById("main-container").style.height="auto";
}

$(".ajax-link").click(function(e) {
	e.preventDefault();
	var href = $(this).attr("href")
	var content = $.get(href, function(data){	
		$("#main-container").html(data);
	});	
	resize();
})

$(document).ready(function(){
	var description = 'This extended play was written and recorded over the course of January and February 2014 at Luther College in Decorah, Iowa.';

	$('#music-player').ttwMusicPlayer(myPlaylist, {
		autoPlay:false, 
		description:description,
		jPlayer:{
			swfPath:'../plugin/jquery-jplayer' //You need to override the default swf path any time the directory structure changes
		}
	});
});

