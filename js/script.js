//menu-burger
$(document).ready(function() {
	$('.menu__burger').click(function(event) {
		$('.menu__burger, .menu__body').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

//background
function ibg(){
let ibg=document.querySelectorAll(".ibg"); for (var i = 0; i < ibg.length; i++) { if(ibg[i].querySelector('img')){ ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; } }
}
ibg();

//search-bar
$(document).ready(function() {
	$('.menu__search img').click(function(event) {
		$('.menu__search').toggleClass('active');
	});
});