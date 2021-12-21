$(window).scroll(function () {
	let scrollValue = $(document).scrollTop();

	console.log(scrollValue);
    
    if(scrollValue > 500) { // 786
        $('#WeAre').fadeTo(1000, 0.0);
    }

    if(scrollValue > 1500) {
        $('#Major').fadeTo(1000, 0.0);
    }

});