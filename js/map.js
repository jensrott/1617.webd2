function init_map(){
    var myOptions = {zoom:10,center:new google.maps.LatLng(51.005822,3.886168),
        mapTypeId: google.maps.MapTypeId.ROADMAP};
        
        map = new google.maps.Map(document.getElementById('gmap_canvas'), 
        myOptions);marker = new google.maps.Marker
        ({map: map,position: new google.maps.LatLng(51.005822,3.886168)});
        
        infowindow = new google.maps.InfoWindow(
        {content:'<strong>Title</strong><br>Kerkstraat 27, Wetteren<br>'});
        google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
        infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);






/*function initMap() {
    var location = {lat: -25.363, Lng: 131.044};
    var map = new google.map.Map(document.getElementById("map"),{
        zoom: 4, 
        center: location
    });
} Dit is met een api key*/