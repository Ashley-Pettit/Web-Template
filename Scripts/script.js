$('#search').click(function() {
  $('p').remove();
  var searchingFor = $('#input').val();

  $.ajax({
  type: "GET",
  url: "http://www.omdbapi.com/?s=" + searchingFor,
  dataType: 'json',
  }).done(function(response){
    response['Search'].forEach(function(movie){
      $('#results').append("<p>" + movie.Title + "</p>");
    });
  });

});
