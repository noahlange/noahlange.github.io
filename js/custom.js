$(window).load(function(){
	resize();
	if (window.location.pathname == "/") {
			var content = $.get("pages/home.html", function(data){
			$("#content").html(data);
			});
		}		
});

function resize() {
	var windowHeight = $(window).height();
	document.getElementById("content").style.minHeight=windowHeight-75 + "px";
	document.getElementById("content").style.height="auto";
}

$(".ajax-link").click(function(e) {
	e.preventDefault();
	var href = $(this).attr("href")
	var content = $.get(href, function(data){	
		$("#content").html(data);
	});	
	resize();
})