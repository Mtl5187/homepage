// // ------------------------------------------------------------------
// // hero edits
// // ------------------------------------------------------------------

// Header
var headerHeight = $('header').outerHeight();
$('.body-container').css('padding-top', headerHeight);

// Homepage


// Accordion
 $('.accordion').closest('section').addClass('accordion-container');
(function ($) {
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function (j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);

//Team Content Title
$('.team-title').prependTo('.homepage .section_TeamList .o-container.c-customsection__container');


//Helpful Content Title
$('.helpful-title').prependTo('.homepage #section_7 .o-container.c-customsection__container');

// Logo Resize
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 20) {
        $("header.c-header.c-header-modern").addClass("headerbg");
    } else {
        $("header.c-header.c-header-modern").removeClass("headerbg");
    }
  });



// Footer

$('.c-socialMedia').appendTo('.contact-section2');
// Add Call
$('<h2>CALL</h3>').insertBefore('.moonlight-phone:first-of-type');
// Add Vist
$('<h2>VISIT</h3>').prependTo('.moonlight-address_block');
// Add Connect
$('<h2>CONNECT</h3>').appendTo('.moonlight-address_block');
// $('.homepage #section_10').insertBefore('#section_0');
