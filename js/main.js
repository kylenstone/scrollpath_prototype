var start = 0; // be careful where this is defined.  needs to change!

$.getJSON( "js/data.json", function( data ) {
  var items = [];
   $.each( data, function( key, val ) {
    items.push( "<span id='" + key + "'>" + val + "</span>" );  
  });
  
  console.log(items);
  console.log(start);

  //next steps
    // add DOM adder to a separate function -- pass in array and start position

  for ( var i=start; i <= items.length; i++ ) {
      if (i < 3){
      $(items[i]).appendTo($(".container"));        
      }
  }


  //NOT WORKING YET -- needs to update 'start' value above
  $("#btn").on("click", function() {
    start = 3;
    console.log('button works');
    $(items[start]).appendTo($(".container"));
  });

});


// METHOD TO JOIN ALL SIX ITEMS[] TO CONTAINER
//   $( "<div>", {
//     "class": "sentences",
//     html: items.join( "" )
//   }).appendTo( $(".container") );
// });