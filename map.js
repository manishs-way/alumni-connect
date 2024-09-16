// Map Page JavaScript

function initMap() {
    // Initialize the map centered on the world
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: { lat: 20.0, lng: 0.0 }
    });

    // Example alumni locations
    var alumniLocations = [
        { lat: 37.7749, lng: -122.4194 }, // San Francisco
        { lat: 51.5074, lng: -0.1278 }, // London
        { lat: 35.6895, lng: 139.6917 }, // Tokyo
        { lat: -33.8688, lng: 151.2093 } // Sydney
    ];

    // Place markers on the map
    alumniLocations.forEach(function (location) {
        new google.maps.Marker({
            position: location,
            map: map
        });
    });
}
