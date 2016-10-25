$(document).ready(function(){

	$('.btn').mouseenter(function(){
		$(this).fadeTo("",0.5);
	});
	$('.btn').mouseout(function(){
		$(this).fadeTo("",1);
	});
	$('.btn2').mouseenter(function(){
		$(this).fadeTo("",0.5);
	});
	$('.btn2').mouseout(function(){
		$(this).fadeTo("",1);
	});


	$('.btn').click(function(){
		var $size = prompt("What size, sir?");
		var hhh = (+$size + +1);
		console.log(hhh+"JY SIEN");
		var $blocksize = (500/$size);
		console.log($blocksize);
		alert("You have chosen a sketch area of " + $size+ "x" +$size + ", which is " + $size*$size + " blocks!");
		for (var x = 1; x < (+$size + +1); x++){
			var id = 'gen'+x;
			$('#table').append('<tr id=' +id+ '></tr>');
				for(var y = 1; y < (+$size + +1); y++){
					$('#gen'+x).append('<td class="data" height='+$blocksize+ ' width='+$blocksize+'></td>');

				};
				
		};	

	$(document).on('mouseenter', 'td', function(){
		$(this).css('background-color', 'red');
	});
	$(document).on('mouseout', 'td', function(){
		$(this).fadeTo('blue');
	});
	$('#btn4').click(function(){
		$('#table').empty();
	});
	});
});