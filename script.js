$('#the_button').on('click', function(){

	alert("Hi!");

});

$('#show_modal').on('click', function(){

  $('#my_modal').modal();

});

$('#close_modal').on('click', function(){

  $('#my_modal').modal('hide');

});
