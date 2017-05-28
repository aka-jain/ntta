(function() {
    $('a[href^="#"]').click(function() {

        var the_id = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(the_id).offset().top
        }, 1000);

        return false;
    });

    $(window).scroll('on', function(){
    	var topPos = $(window).scrollTop();

    	$('.bg-main').offset({ top : topPos*0.6});
    })
})();
