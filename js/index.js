/* -------------------- *\
    GENERAL
\* -------------------- */

/**
 * Preloader
 */

$(window).load(function () {

    $('.preloader__img').fadeOut(500);
    setTimeout(function () {
        $('.preloader').addClass('active').delay(1000).fadeOut(500);
    }, 1000);



    // Add slimscroll to element
    $('#page-wrapper').slimscroll({
        height: '100%'
    });
});

$('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        $('#scrollUp').addClass('hideme');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
           
        }
    }
    
});

//$(window).scroll(function () {

//    //if ($('#main').is(':visible')) {
//    //    $('#scrollUp').addClass('hideme');
//    //}

//    if ($('#page-content').is(':visible')) {
//        $('#scrollUp').removeClass('hideme');
//    } else {
//        //$('#scrollUp').addClass('hideme');
//    }


//});

//$(window).scroll(function () {
//    $.doTimeout('scroll', 250, function () {
        
//        if ($('#page-content').is(':visible')) {
//                    $('#scrollUp').removeClass('hideme');
//                } else {
//                    //$('#scrollUp').addClass('hideme');
//                }

//    });
//});

//$(window).on("scroll", function () {

//    $("#scrollPosition").text == this.scrollPosition;
//    //if (this.scrollTop > 600) {
//    //    $('#scrollUp').removeClass('hideme');
//    //} else {
//    //    $('#scrollUp').addClass('hideme');
//    //}
//    });

//var wrap = $("#page-wrapper");

//wrap.on("scroll", function (e) {

//    if (this.scrollTop > 500) {
//        $('#scrollUp').removeClass('hideme');
//    } else {
//        $('#scrollUp').addClass('hideme');
//    }

//});

$(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
        $('#scrollUp').removeClass('hideme');
    } else {
        $('#scrollUp').addClass('hideme');
    }
});