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

            $('header li').each(function(i) {
                $(this).find('a').removeClass('active-link'); // This is your rel value
            });
            // $(".header li a").parent().siblings().find('a').removeClass('active-link')
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

     $("#scroll").on('click', function() {
        $(".header-link li").first().find('a').addClass('active-link');
    })

    $(window).on('hashchange', function() {
        if (window.location.hash == '') {
            $(".modal").fadeOut(300);
            // window.location.hash = "";
            $("body, html").css({
                'overflow': 'auto'
            })
        }
    });

    $(".cross").on('click', function() {
        $(".modal").fadeOut(300);
        window.location.hash = "";
        $("body, html").css({
            'overflow': 'auto'
        })
    })

    $(".header-link li a").click(function() {

        $(this).addClass('active-link')
        $(this).parent().siblings().find('a').removeClass('active-link')
    })


})();
