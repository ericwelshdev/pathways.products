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