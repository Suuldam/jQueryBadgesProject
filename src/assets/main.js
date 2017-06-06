$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/2531550.json',
    dataType: 'jsonp',
    success: function(response){
      console.log('response', response.courses.completed);
      ajoutBadges(response.courses.completed);
    }
  });

  function ajoutBadges(formations){

    var $badges = $('#badges')

    formations.forEach(function(formations){
      $('<div class="course">'+
      '<h3>'+formations.title+'</h3>'+
      '<img src="'+formations.badge+'"></img>'+
      '<a href="'+formations.url+'" class="btn btn-primary" target="_blank">See Course</a>'+
      '</div>').appendTo($badges);
    })
  }

});
