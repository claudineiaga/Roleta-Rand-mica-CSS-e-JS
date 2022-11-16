var degree = 1800;
var clicks = 0;

$(document).ready(function(){

	$('#spin').click(function(){
		clicks++;

		var newDegree = degree * clicks;
		var extraDegree = Math.floor(Math.random()* (360 - 1 + 1)) +1;
		totalDegree = newDegree + extraDegree;

		$('#roleta .sec').each(function(){
			var t = $(this);
			var noY = 0;

			var c = 0;
			var n = 0;
			var interval = setInterval(function(){
				c++;
				if(c === n){
					clearInterval(interval);
				}
				var aoY = to.offset().top;
				$('#txt').html(aoY);
				console.log(aoY);

				if(aoY < 23.83){
					console.log('<<<');
					$('#spin').addClass('spin');
					setTimeout(function(){
						$('#spin').removeClass('spin');

					},100);
				}
			},10);

			$('#interno-roleta').css({
				'transform': 'rotate(' + totalDegree + 'deg)'
			});
			noY = t.offset().top;
		});
	});
});