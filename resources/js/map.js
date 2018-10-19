module.exports = {
    initMap: function() {
        var uluru = {lat: 34.101283, lng: -118.343705};
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 4, center: uluru});
        var marker = new google.maps.Marker({position: uluru, map: map});
    }
}
