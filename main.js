$(document).ready(function() {
  $("body").prepend("<h1>Mom and Popsicles</h1>");
  $('#content').prepend("<h2>Amazing restaurant has amazing frozen treats and mothers who make them for you.</h2>");
  $('#content').append("<p>Is this true?  have a found the best frozen treats place on the planet?  OMGEE these are delicious, head down here and try it meng.</p>");
  $("#content").prepend("<img src='https://www.floatingkitchen.net/wp-content/uploads/2015/07/Tequila-Sunrise-Popsicles-3.jpg' />");
  $("#home").click(function(){
    $('#content').empty();
    $('#content').prepend("<h2>Amazing restaurant has amazing frozen treats and mothers who make them for you.</h2>");
    $('#content').append("<p>Is this true?  have a found the best frozen treats place on the planet?  OMGEE these are delicious, head down here and try it meng.</p>");
    $("#content").prepend("<img src='https://www.floatingkitchen.net/wp-content/uploads/2015/07/Tequila-Sunrise-Popsicles-3.jpg' />");
  })
  $("#contact").click(function(){
    $("#content").empty();
    $("#content").prepend("<h1>Contact Us</h1>");
    $("#content").append("<p>We would love to hear from you! Give us all that feedback so we can improve our service to you!</p>");
  })
  $("#menu").click(function(){
    $("#content").empty();
    $("#content").prepend("<h1>Menu</h1>");
    $("#content").append("<p>Here is a list of our finest frozen treats:</p>");
    $("#content").append("<ul><li>Starberry</li><li>Unicorn poop</li><li>Hobbit Hamburgers</li><li>Dragon Smoothie</li></ul>");
  })

});
