$(document).ready(function(){

	$('.btn').mouseenter(function(){
		$(this).fadeTo("",1);
	});
	$('.btn').mouseout(function(){
		$(this).fadeTo("",0.5);
	});
	$('.btn2').mouseenter(function(){
		$(this).fadeTo("",1);
	});
	$('.btn2').mouseout(function(){
		$(this).fadeTo("",0.5);
	});
	$('#btn4').click(function(){
	$('#area').empty();
	});


	$('#btn1').click(function(){
		$('.data1').remove();
		$("#area").off();
		var $size = prompt("What size, sir?");
		var hhh = (+$size + +1);
		var $blocksize = (500/$size);
		console.log($blocksize);
		alert("You have chosen a sketch area of " + $size+ "x" +$size + ", which is " + $size*$size + " blocks!");
		for (var x = 1; x < (+$size + +1); x++){
			var id = 'gen'+x;
			$('#area').append('<div class="data1" id=' +id+ '></div>');
			$('.data1').css('height', $blocksize);
				for(var y = 1; y < (+$size + +1); y++){
					$('#gen'+x).append('<div class="data"></div>');
					$('.data').css('height', $blocksize);
					$('.data').css('width', $blocksize);
				};
		};	
			$('#area').on('mouseenter', '.data', function(){
			$(this).css('background-color', 'white');
		});
	});

	$('#btn3').click(function(){
		$('.data1').remove();
		$("#area").off();
		var $size = prompt("What size, sir?");
		var hhh = (+$size + +1);
		var $blocksize = (500/$size);
		console.log($blocksize);
		alert("You have chosen a sketch area of " + $size+ "x" +$size + ", which is " + $size*$size + " blocks!");
		for (var x = 1; x < (+$size + +1); x++){
			var id = 'gen'+x;
			$('#area').append('<div class="data1" id=' +id+ '></div>');
			$('.data1').css('height', $blocksize);
				for(var y = 1; y < (+$size + +1); y++){
					$('#gen'+x).append('<div class="data"></div>');
					$('.data').css('height', $blocksize);
					$('.data').css('width', $blocksize);
				};
		
		};	
		$('#area').on('mouseenter', '.data', function(){
				var randomColor = Math.floor(Math.random()*16777215).toString(16);
			$(this).css('background-color', '#' +randomColor);
		});

	});

	$('#btn2').click(function(){
		$('.data1').remove();
		$("#area").off();
		var $size = prompt("What size, sir?");
		$('.data').css('opacity', '100%');
		var hhh = (+$size + +1);
		var $blocksize = (500/$size);
		console.log($blocksize);
		alert("You have chosen a sketch area of " + $size+ "x" +$size + ", which is " + $size*$size + " blocks!");
		for (var x = 1; x < (+$size + +1); x++){
			var id = 'gen'+x;
			$('#area').append('<div class="data1" id=' +id+ '></div>');
			$('.data1').css('height', $blocksize);
				for(var y = 1; y < (+$size + +1); y++){
					$('#gen'+x).append('<div class="data"></div>');
					$('.data').css('height', $blocksize);
					$('.data').css('width', $blocksize);
					$('.data').css('background-color', 'black');
				};
		
		};	
		$("#area").on('mouseenter', '.data', function(){
			var $opa = $(this).css('opacity');
			console.log($opa);
					$(this).css('opacity', (+$opa - +0.1));
		});

	});
});