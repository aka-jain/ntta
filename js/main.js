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

        if(topPos > 0){
            $('header nav').css({
                'background' : '#000',
                'box-shadow' : '0px 2px 2px #000'
            })
        }
        else{
            $('header nav').css({
                'background' : 'rgba(0,0,0,0)',
                'box-shadow' : '0px 2px 2px transparent'
            })
        }

    	$('.bg-main').offset({ top : topPos*0.6});
    })
})();
