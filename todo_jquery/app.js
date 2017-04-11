

$(document).ready(function(){

	var $todosList = $('#todos-list');
	var $newItemInput = $('#new-item');

	//add new item
	$('#add-item').on('click', function(){

		var value = $newItemInput.val();
		$todosList.append('<li> <span class="text">' + 
			value + 
			' </span><a href="#" class="delete">[X]</a></li>');

		$newItemInput.val('');
	});

	//remove item
	$(document).on('click', '.delete', function(){
		$(this).closest('li').remove();
	});

	//check as done
	$(document).on('click', 'li', function(){
		$(this).toggleClass('done');
	});
});