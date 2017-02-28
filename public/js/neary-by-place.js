$(document).ready(function(){
	var image_src = "images/";
	var map;
	var infowindow;
	var bounds = new google.maps.LatLngBounds();

	var PlaceArray = [ "restaurant", "cafe", "bar", "grocery_or_supermarket", "parks", "school", "shopping_mall", "movie_theater", "bank", "university"];
	var PlaceCounter = 0;

	function initialize() {
		"use strict";
		var pyrmont = new google.maps.LatLng(40.5456, -74.4608);

		map = new google.maps.Map(document.getElementById('googleMapNearestPlaces'), {
			center: pyrmont,
			zoom: 14,
			icon:'images/map_marker.png',
			scrollwheel: false,
			rankby: 'distance',
			styles: [{"featureType":"all","elementType":"geometry","stylers":[{"color":"#00c775"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"gamma":0.01},{"lightness":20}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"saturation":-31},{"lightness":-33},{"weight":2},{"gamma":0.8}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":30},{"saturation":30}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"saturation":20}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"lightness":20},{"saturation":-20}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":10},{"saturation":-30}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"saturation":25},{"lightness":25}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"lightness":"0"},{"visibility":"on"},{"color":"#00c775"},{"gamma":"1"},{"weight":"1"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]}]		
		});

		var marker=new google.maps.Marker({position:pyrmont,icon:'images/map_marker.png'});
		marker.setMap(map);
		var request = {
			location: pyrmont,
			radius: 5000,
			types: [ "restaurant", "cafe", "bar", "grocery_or_supermarket", "parks", "school", "shopping_mall", "movie_theater", "bank", "university"],
		};

		infowindow = new google.maps.InfoWindow();
		var service = new google.maps.places.PlacesService(map);
		service.nearbySearch(request, callback);
	}

	function callback(results, status) {
		"use strict";
		if (status == google.maps.places.PlacesServiceStatus.OK) {
			for (var i = 0; i < results.length; i++) {
				createMarker(results[i]);
			}
		}
	}

	function createMarker(place) {
		"use strict";
		var place_icon;
		place_icon =  "images/map-icons/" + place.types['0'] + ".png";
		
		var PlaceType = place.types['0'];

		if( jQuery.inArray( PlaceType, PlaceArray ) == -1 ){
			return;
		}
		
		PlaceArray = jQuery.grep(PlaceArray, function(value) {
		  return value != PlaceType;
		});

		var Distance = distance(place.geometry.location.lat(),place.geometry.location.lng());

		function distance(latitude2, longitude2) {
			var lat1 = "40.5456";
			var lon1 = "-74.4608";
			var lat2 = latitude2;
			var lon2 = longitude2;
			
			var radlat1 = Math.PI * lat1/180;
			var radlat2 = Math.PI * lat2/180;
			var radlon1 = Math.PI * lon1/180;
			var radlon2 = Math.PI * lon2/180;
			var theta = lon1-lon2;
			var radtheta = Math.PI * theta/180;
			var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
			dist = Math.acos(dist);
			dist = dist * 180/Math.PI;
			dist = dist * 60 * 1.1515;

			dist = dist * 1.609344;
			
			return Math.round( dist * 100 )/100;
		}
			
		if( PlaceType == "cafe"){
			PlaceType = "Cofee";
		}
		if( PlaceType == "grocery_or_supermarket"){
			PlaceType = "Groceries";
		}
		if( PlaceType == "shopping_mall"){
			PlaceType = "Shopping";
		}
		if( PlaceType == "movie_theater"){
			PlaceType = "Entertainment";
		}
		if( PlaceType == "bank"){
			PlaceType = "Errands";
		}

		jQuery("#near-by-place-detail").append("<ul><li class='left'><p><b>"+PlaceType.charAt(0).toUpperCase() + PlaceType.substr(1)+"</b></p><span>"+place.name+"</span></li><li class='right'><label>"+Distance+" Km</label></li></ul>");

		var placeLoc = place.geometry.location;
		var marker = new google.maps.Marker({
			map: map,
			position: place.geometry.location,
			icon:place_icon,
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.setContent(place.name);
			infowindow.open(map, this);
		});

		bounds.extend(marker.position);

		//now fit the map to the newly inclusive bounds
		map.fitBounds(bounds);

		//(optional) restore the zoom level after the map is done scaling
		var listener = google.maps.event.addListener(map, "idle", function () {
		    map.setZoom(12);
		    google.maps.event.removeListener(listener);
		});

	}
	google.maps.event.addDomListener(window, 'load', initialize);
});