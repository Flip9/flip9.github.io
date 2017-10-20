$(document).ready(function() {
 $('.menu-triger').click(function() {
 	$('nav ul').slideToggle(580)
 });
 $(window).resize(function(){
 	if($(window).width() > 620) {
 		$('nav ul').removeAttr('style');
 	} 
 });
});