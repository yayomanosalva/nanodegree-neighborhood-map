// Google Maps JavaScript API
/* ========= class for the map =========*/
var mapa = function() {
    /* ========= Variable declare =========*/
    this.myOptions = {
        center: new google.maps.LatLng(11.00414, -74.8132908),
        panControl: false,
        disableDefaultUI: true,
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map($('#map')[0], this.myOptions);
}

// Here's my data model
var ViewModel = function() {
    var self = this;
    self.name = ko.observable('');
    self.mapa = new mapa();

    function location( ) {
      this.name = ko.observable(name);
      this.type = ko.observable(type);      
      this.restaurantIcon = 'images/restaurants.png';
      this.storesIcon = 'images/stores.png';
      // This marker is 20 pixels wide by 32 pixels high.
      this.size = new google.maps.Size(35, 52);
       // The origin for this image is (0, 0).
      this.origin = new google.maps.Point(0, 0);
      this.anchor = new google.maps.Point(0, 32);
      /* lat and long are observables for future use with drag events */
      this.lat = ko.observable(lat);
      this.long = ko.observable(long);
      this.category = category;
      /* the map marker for this point */
      this.marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, long),
        title: name,
        map: self.mapa.map,
        draggable: draggable
      });
      console.log('observableArray');
    }
    

    this.shape = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: 'poly'
    };

    self.location = ko.observableArray([
        new self.location('Mc donald', 11.004012, -74.812481, false, 'restaurant'),
        new self.location('Hamburguesas El Corral', 11.004836, -74.812189, false, 'restaurant'),
        new self.location('Restaurante El Pulpo Paul', 11.003132, -74.810671, false, 'restaurant'),
        new self.location('LUPI', 11.005128, -74.811161, false, 'store')        
    ]);

    for (var i = 0; i < location.length; i++) {
      location.restaurantIcon();  
    }

    /*self.location.push(new ViewModel('Mc donald', 11.004012, -74.812481, false, 'restaurant'));
    self.location.push(new ViewModel('Hamburguesas El Corral', 11.004836, -74.812189, false, 'restaurant'));
    self.location.push(new ViewModel('Restaurante El Pulpo Paul', 11.003132, -74.810671, false, 'restaurant'));
    self.location.push(new ViewModel('LUPI', 11.005128, -74.811161, false, 'restaurant'));
*/
};
ko.applyBindings(new ViewModel());

// Data for the markers consisting of a name, a LatLng and a zIndex for the

/*
function setMarkers(map) {
  // Adds markers to the map.
  var restaurants = [
    ['Mc donald', 11.004012, -74.812481, false, 'restaurant', 4],
    [ 'Hamburguesas El Corral', 11.004836, -74.812189, false, 'restaurant', 5],
    ['Restaurante El Pulpo Paul', 11.003132, -74.810671, false, 'restaurant', 3],
    ['LUPI', 11.005128, -74.811161, false, 'restaurant', 2]
  ];

  var img = {
    url: 'images/restaurants.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(35, 52),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };
}*/
