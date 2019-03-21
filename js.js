$(window).on("navigate", function(event, data) {
  var direction = data.state.direction;
  if (direction == 'back') {
    alert('Going back');
  }
  if (direction == 'forward') {
    alert('Going forward');
  }
});

$(document).on('click', '#reg', function() {
  $.mobile.navigate("#registration-page", {
    transition: "slide"
  });
});

$(document).on('click', '#log', function() {
  $.mobile.navigate("#login-page", {
    transition: "slide"
  });
});

// Bind to the navigate event
$( window ).on( "navigate", function() {
  console.log( "navigated!" );
});

$(document).on('click', '#back-btn', function() {
  $.mobile.navigate("#login-page", {
    transition: "slide"
  });
});



         