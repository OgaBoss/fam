function initialize() {	
	var myCenter = new google.maps.LatLng(40.5456, -74.4608);
	var mapProp = {
		center : myCenter,
		zoom : 11,
		mapTypeId : google.maps.MapTypeId.ROADMAP,
		scrollwheel: false,
		styles: [{"featureType":"all","elementType":"geometry","stylers":[{"color":"#00c775"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"gamma":0.01},{"lightness":20}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"saturation":-31},{"lightness":-33},{"weight":2},{"gamma":0.8}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":30},{"saturation":30}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"saturation":20}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"lightness":20},{"saturation":-20}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":10},{"saturation":-30}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"saturation":25},{"lightness":25}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"lightness":"0"},{"visibility":"on"},{"color":"#00c775"},{"gamma":"1"},{"weight":"1"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]}]
	};
	var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
	var marker = new google.maps.Marker({
		position : myCenter,		
		icon : 'images/map_marker.png'
	});
	marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize); 