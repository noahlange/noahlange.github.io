$(window).load(function(){
	resize();
	if (window.location.pathname.split('/').pop() == "") {
			var content = $.get("pages/home.html", function(data){
			$("#main-container").html(data);
			});
		}		
});

function resize() {

	windowHeight = $(window).height()
	containerHeight = $("#main-container").height()
	
	if (windowHeight > containerHeight) {
		$("#main-container").height( $(window).height() - 75)
	}
	else {
		$("#main-container").height( $("#main-container").height())
	}
}

$(".ajax-link").click(function(e) {
	e.preventDefault();
	var href = $(this).attr("href")
	var content = $.get(href, function(data){	
		$("#main-container").html(data);
	});	
	resize();
})

