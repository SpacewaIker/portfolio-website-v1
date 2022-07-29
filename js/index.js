// Title/name animation
function nameEvent() {
    var firstName = $('#first-name');
    var lastName = $('#last-name');

    var scrollTop = window.pageYOffset;
    var endScroll = $(window).height() * 0.7;
    var scrollAmount = scrollTop < endScroll ? scrollTop : endScroll;

    var maxR = 97;
    var minR = 41;
    var maxG = 40;
    var minG = 0;
    var maxB = 255;
    var minB = 41;
    // first color: rgb(41 0 41)
    // second color: rgb(97 40 255)

    var red = minR + (maxR - minR) * scrollAmount / endScroll;
    var green = minG + (maxG - minG) * scrollAmount / endScroll;
    var blue = minB + (maxB - minB) * scrollAmount / endScroll;
    var color = 'rgb(' + red + ' ' + green + ' ' + blue + ')';

    firstName.css('color', color);
    lastName.css('color', color);

    if (window.matchMedia('(min-width: 768px)').matches) {
        // Large screen:

        var maxLNC = ($(window).width() - lastName.width()) * 0.15;
        var minLNC = 0;
        var maxFNC = ($(window).width() - firstName.width()) * 0.95;
        var minFNC = 0;

        var maxLNV = $(window).height() * 0.25 + $(window).width() * 0.25;
        var minLNV = 0;
        var maxFNV = $(window).height() * 0.25 + $(window).width() * 0.125;
        var minFNV = 0;

        var lastNameCentering = minLNC + (maxLNC - minLNC) * scrollAmount / endScroll;
        var firstNameCentering = minFNC + (maxFNC - minFNC) * scrollAmount / endScroll;
        var lastNameVertical = minLNV + (maxLNV - minLNV) * scrollAmount / endScroll;
        var firstNameVertical = minFNV + (maxFNV - minFNV) * scrollAmount / endScroll;

        lastName.css('right', lastNameCentering + 'px');
        firstName.css('left', firstNameCentering + 'px');
        lastName.css('bottom', -lastNameVertical + 'px');
        firstName.css('bottom', -firstNameVertical + 'px');
    } else {
        // Small screen:
        var maxLNV = $(window).width() * 1.6;
        var minLNV = -0.15 * $(window).width();
        var maxFNV = $(window).width() * 1.4;
        var minFNV = -0.35 * $(window).width();

        var lastNameVertical = minLNV + (maxLNV - minLNV) * scrollAmount / endScroll;
        var firstNameVertical = minFNV + (maxFNV - minFNV) * scrollAmount / endScroll;

        lastName.css('bottom', -lastNameVertical + 'px');
        firstName.css('bottom', -firstNameVertical + 'px');
    }
}

function seekTrack() {
    var track = $('#timeline-screen');
    var frame = $('#frame');
    var progressBar = $('#progress-bar');

    var elementTop = track[0].getBoundingClientRect().top;
    var vw = $(window).width() / 100;
    var vh = $(window).height() / 100;

    // var scrollBegin = 100 * vw;
    var scrollBegin = 0;
    var minVal = $(window).width() - $('#frame').outerWidth();

    if (elementTop < scrollBegin) {
        let translateWidth = elementTop - scrollBegin;
        translateWidth = translateWidth < minVal ? minVal : translateWidth;
        frame.css('transform', 'translateX(' + translateWidth + 'px)');
        progressBar.css('left', -translateWidth + 'px');
    } else {
        frame.css('transform', 'translateX(0px)');
        progressBar.css('left', '0px');
    }
}

function revealTimeline() {
    $('.circle').each(function (index, element) {
        if ($(this)[0].getBoundingClientRect().left < 0.5 * $(window).width()) {
            $(this).addClass('filled');
            $(this).parent().siblings('.bottom-row').children('p').addClass('on-top');
        } else {
            $(this).removeClass('filled');
            $(this).parent().siblings('.bottom-row').children('p').removeClass('on-top');
        }
    });
}

function validate() {
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var content = document.contactForm.content.value;
}

$(function () {
    /* timelineWidth should be equal to the length of all the content,
        plus the "padding" required to make the first and last items
        centered. This is equal to 2 * (50vw - 1/2 itemWidth) */
    let timelineWidth = 0;
    $('.timeline-section').each(function (index, element) {
        timelineWidth += $(this).outerWidth(true);
    });
    timelineWidth += $(window).width() - $($('.timeline-item')[0]).outerWidth(true);

    $('#frame').css('width', timelineWidth + 'px');
    $('#timeline-rail').css('width', timelineWidth + 'px');

    window.addEventListener('scroll', nameEvent);
    if (window.matchMedia('(min-width: 768px)').matches) {
        // Large screen:
        window.addEventListener('scroll', revealTimeline);
        window.addEventListener('scroll', seekTrack);
        $('#timeline-screen').css('height',
            ($(window).height() + timelineWidth - $(window).width()) + 'px');
    } else {
        // mobile:
        $('#camera').bind('scroll', revealTimeline);
    }

    nameEvent();
    seekTrack();
    revealTimeline();

    var typed = new Typed('#title-screen-animation', {
        stringsElement: '#typing-content',
        startDelay: 1000,
        typeSpeed: 20,
        showCursor: true,
    });
});