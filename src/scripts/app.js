// Google Maps JavaScript API
/* ========= class for the map =========*/
var mapa = function() {
    /* ========= Variable declare =========*/
    this.myLatLng = {
        lat: 11.00414,
        lng: -74.8132908
    };

    this.myOptions = {
        center: myLatLng,
        panControl: false,
        disableDefaultUI: true,
        zoom: 16,
        mapTypeId: 'terrain'
    };

    this.map = new google.maps.Map($('#map')[0], myOptions);
    setMarkers(map);    
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.

var restaurants = [
  ['Mc donald', 11.004012, -74.812481, false, 'food hamburger', 4],
  ['Hamburguesas El Corral', 11.004836, -74.812189, false, 'food hamburger', 5],
  ['Restaurante El Pulpo Paul', 11.003132, -74.810671, false, 'food restaurant', 3],
  ['LUPI', 11.005128, -74.811161, false, 'food restaurant', 1]
];



function setMarkers(map) {
  // Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  var image = {
    url: 'images/restaurants.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(35, 52),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 52)
  };

  var stores = {
    url: 'images/stores.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(3, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };

  for (var i = 0; i < restaurants.length; i++) {
    var restaurant = restaurants[i];
    var marker = new google.maps.Marker({
      position: {lat: restaurant[1], lng: restaurant[2]},
      map: map,
      icon: image,
      shape: shape,
      title: restaurant[0],
      zIndex: restaurant[3]
    });
  }


}


var viewModel = function() {

    this.marker = ko.observable();
    this.myLatLng = ko.observable()

    this.Mapa = new mapa();

    this.restaurants = ko.observableArray([
        new this.restaurants('Mc donald', 11.004012, -74.812481, false, 'food hamburger'),
        new this.restaurants('Hamburguesas El Corral', 11.004836, -74.812189, false, 'food hamburger'),
        new this.restaurants('Restaurante El Pulpo Paul', 11.003132, -74.810671, false, 'food restaurant'),
        new this.restaurants('LUPI', 11.005128, -74.811161, false, 'food restaurant'),        
    ]);

    this.listPoint = ko.observable(1);

    this.watchList = ko.computed(function(){
        return this.restaurants().slice();
    });

    function setMarkers(map) {
      // Adds markers to the map.

      // Marker sizes are expressed as a Size of X,Y where the origin of the image
      // (0,0) is located in the top left of the image.

      // Origins, anchor positions and coordinates of the marker increase in the X
      // direction to the right and in the Y direction down.
      var image = {
        url: 'images/restaurants.png',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(35, 52),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 52)
      };
      var stores = {
        url: 'images/stores.png',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(3, 32),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
      };
      // Shapes define the clickable region of the icon. The type defines an HTML
      // <area> element 'poly' which traces out a polygon as a series of X,Y points.
      // The final coordinate closes the poly by connecting to the first coordinate.
      var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
      };
      for (var i = 0; i < restaurants.length; i++) {
        var restaurant = restaurants[i];
        var marker = new google.maps.Marker({
          position: {lat: restaurant[1], lng: restaurant[2]},
          map: map,
          icon: image,
          shape: shape,
          title: restaurant[0],
          zIndex: restaurant[3]
        });
      }


    }
  
}

ko.applyBindings(viewModel);
