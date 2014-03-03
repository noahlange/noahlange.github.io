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
