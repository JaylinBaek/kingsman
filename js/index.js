$(document).ready(function () {
	$(".play").on("click", function () {
		$(".sound")[0].play();
	})
})

$(document).mousemove(function(e){
  $('.qui').css("top", e.pageY);
  $('.qui').css("left", e.pageX);
});