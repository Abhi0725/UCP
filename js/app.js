/* ==============================================
Back to Top
=============================================== */

$(window).scroll(function(){
		if($(window).scrollTop() > 300){
			$("#back-to-top").fadeIn(600);
		} else{
			$("#back-to-top").fadeOut(600);
		}
	});
	
	$('#back-to-top, .back-to-top').click(function() {
		  $('html, body').animate({ scrollTop:0 }, '1000');
		  return false;
	});

/* ==============================================
Contact Form and carousel default remover
=============================================== */

jQuery(document).ready(function(){
	
	$('.carousel').carousel({
    pause: "false"
    });    // carousel default remover ends
	
	$('#contactform').submit(function(e){
		e.preventDefault();
		$('#message').hide();
 		$('#submit').after('<img src="img/ajax-loader.gif" class="loader" />').attr('disabled','disabled');
		name= $('#name').val();
		email= $('#email').val();
		phone= $('#phone').val();
		comments= $('#comments').val();
		
		if(name=="" || name==null){
			document.getElementById('message').innerHTML = "<p class='error_message'>Please enter your name.</p>"; 
			$('#message').slideDown('slow');
			$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
			$('#submit').removeAttr('disabled');
			return false;
			}
			
		var x = email;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
		if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
           document.getElementById('message').innerHTML ="<p class='error_message'>Please enter a valid e-mail address.</p>";
		   $('#message').slideDown('slow');
		   $('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
		   $('#submit').removeAttr('disabled');
           return false;
           }
		   
		if(isNaN(phone) || phone=="" || phone==null){
			document.getElementById('message').innerHTML = "<p class='error_message'>Please enter a valid phone number.</p>"; 
			$('#message').slideDown('slow');
			$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
			$('#submit').removeAttr('disabled');
			return false;
		    }
		   
		if(comments=="" || comments==null){
			document.getElementById('message').innerHTML = "<p class='error_message'>Please enter your message.</p>"; 
			$('#message').slideDown('slow');
			$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
			$('#submit').removeAttr('disabled');
			return false;
			}
			
		else{
			document.getElementById('message').innerHTML = "<p class='error_message'>PHP code needs to be added. -Abhi</p>"; 
			$('#message').slideDown('slow');
			$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
			$('#submit').removeAttr('disabled');
			return false;
		}

	});

});

/* ==============================================
Google Maps
=============================================== */

	function initialize() {
	var myLatlng = new google.maps.LatLng(28.367486, 77.332494); // Change your location Latitude and Longitude 
	var mapOptions = {
	zoom: 15,
	center: myLatlng
	}
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

// Disabled Map Scroll in Contact Page 
	map.setOptions({'scrollwheel': false});

	var styles = [
	{
	stylers: [
	{ saturation: 0 }
	]
	},{
	featureType: "road",
	elementType: "geometry",
	stylers: [
	{ lightness: -8 },
	{ visibility: "simplified" }
	]
	},{
	featureType: "road",
	elementType: "labels",
	}
	];
	map.setOptions({styles: styles});

// Google Map Maker 
	var marker = new google.maps.Marker({
	position: myLatlng,
	map: map,
	});
	}

	google.maps.event.addDomListener(window, 'load', initialize);
	
	
	//**************Slick**************************//
	//*********************************************//
	
