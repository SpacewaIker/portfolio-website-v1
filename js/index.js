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

        // var maxLNV = $(window).width() * 0.4;
        var maxLNV = $(window).height() * 0.675;
        var minLNV = 0;
        // var maxFNV = $(window).width() * 0.3;
        var maxFNV = $(window).height() * 0.475;
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

    var scrollBegin = 100;//vh
    var minVal = $(window).width() - $('#frame').outerWidth();

    if (elementTop < scrollBegin * vh) {
        let translateWidth = elementTop - scrollBegin * vh;
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
        } else {
            $(this).removeClass('filled');
        }
    });
}

function validate() {
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var content = document.contactForm.content.value;
}

let timelineMaxScroll;
$(function () {
    timelineMaxScroll = ($(window).width() + $('.timeline-item').last().outerWidth()) / 2;
    let timelineWidth = 0;
    $('.timeline-section').each(function (index, element) {
        timelineWidth += $(this).outerWidth(true);
    });
    timelineMaxScroll -= timelineWidth;

    $('#timeline-rail').css('width', $('#frame').outerWidth());

    window.addEventListener('scroll', nameEvent);
    window.addEventListener('scroll', seekTrack);
    window.addEventListener('scroll', revealTimeline);

    nameEvent();
    seekTrack();


    if (window.matchMedia("(max-width: 768px)").matches) {
        var el = document.createElement('div');
        el.id = 'overfill';
        var el2 = document.createElement('div');
        el2.setAttribute('style', 'height: calc(100vh - ' + $(window).height() + 'px);');
        el.appendChild(el2);
        document.body.appendChild(el);
    }
});