$(window).load(function() {
	$("#main-container").height( $(window).height() - 75)
	if (window.location.pathname.split('/').pop() == "") {
		var content = $.get("pages/home.html", function(data){
		$("#main-container").html(data);
		});
	}
});

$(".ajax-link").click(function(e) {
	e.preventDefault();
	var href = $(this).attr("href")
	var content = $.get(href, function(data){	
		$("#main-container").html(data);
	});	
})

