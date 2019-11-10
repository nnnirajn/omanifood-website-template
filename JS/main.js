$('#menu').slicknav({
	label: '',
	duration: 1400,
	easingOpen: "easeOutBounce", //available with jQuery UI
});

var map = new GMaps({
  div: '.map',
  lat: 18.559485,
  lng: 73.93122212121,
  zoom:16   /*as number increse will zoom in */ 
});
  
map.addMarker({
      lat: 18.559485,
      lng: 73.931178,
      title: 'sangharsh chowk by Niraj',
     
      infoWindow: {
        content: '<p>Niraj Narkhede</p>'
      }
});