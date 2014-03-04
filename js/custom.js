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

var chicagoPlaylist = [

	{
        mp3:'files/the-road.mp3',
        title:'The Road',
        artist:'Noah Lange',
        buy:'http://bandcamp.com/noahlange',
        price:'1',
        duration:'2:42',
        cover:'images/chicago.jpg'
    },
    {
        mp3:'files/chicago-pt-i.mp3',
        title:'Chicago, Pt. I',
        artist:'Noah Lange',
        buy:'http://bandcamp.com/noahlange',
        price:'1',
        duration:'3:46',
        cover:'images/chicago.jpg'
    },
    {
        mp3:'files/twenty-second-century-blues.mp3',
        title:'22nd Century Blues',
        artist:'Noah Lange',
        buy:'http://bandcamp.com/noahlange',
        price:'1',
        duration:'3:12',
        cover:'images/chicago.jpg'
    },    
    {
        mp3:'files/rosie-holden.mp3',
        title:'Rosie Holden',
        artist:'Noah Lange',
        buy:'http://bandcamp.com/noahlange',
        price:'1',
        duration:'6:12',
        cover:'images/chicago.jpg'
    },
        {
        mp3:'files/chicago-pt-ii.mp3',
        title:'Chicago, Pt. II',
        artist:'Noah Lange',
        buy:'http://bandcamp.com/noahlange',
        price:'1',
        duration:'1:56',
        cover:'images/chicago.jpg'
    },
];

$(document).load(function() {

	var description = 'This extended play was written and recorded over the course of January and February 2014 at Luther College in Decorah, Iowa.';

	$('#music-player').ttwMusicPlayer(chicagoPlaylist, {
		autoPlay:false, 
		description:description,
		jPlayer:{
			swfPath:'/jquery-jplayer' //You need to override the default swf path any time the directory structure changes
		}
	});
	
});

