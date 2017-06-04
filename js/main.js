(function() {
    $('a[href^="#"]').click(function() {

        var the_id = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(the_id).offset().top - 30
        }, 1000);

        return false;
    });

    $(window).scroll('on', function() {
        var topPos = $(window).scrollTop();

        if (topPos > 0) {
            $('header nav').css({
                'background': '#000',
                'box-shadow': '0px 2px 2px #000'
            })
        } else {
            $('header nav').css({
                'background': 'rgba(0,0,0,0)',
                'box-shadow': '0px 2px 2px transparent'
            })
        }

        $('.bg-main').offset({ top: topPos * 0.6 });
    })

    $(".view-gal").on('click', function() {
        window.location.hash = "gallery";
        $(".modal").fadeIn(300);
        $("body, html").css({
            'overflow': 'hidden'
        })
    })

    $(window).on('hashchange', function() {
        if(window.location.hash == ''){
            window.location.href = "";
        }
    });

    $(".cross").on('click', function() {
        $(".modal").fadeOut(300);
        window.location.href = "";
        $("body, html").css({
            'overflow': 'auto'
        })
    })
})();
