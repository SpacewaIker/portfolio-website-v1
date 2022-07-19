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

roundingFunction = function (scrollTop, goingDown) {
    var vh = $(window).height();
    const SCREENS = [
        0,
        vh * 1.1,
        vh * 2.14,
        vh * 2.77,
        vh * 3.38,
        vh * 3.99,
        vh * 4.61,
        vh * 5.22,
        vh * 5.83,
        vh * 6.44,
        vh * 7.05,
        vh * 7.67,
        vh * 8.28,
        vh * 8.89,
        vh * 9.50,
        vh * 10.12,
        vh * 11.09,
        vh * 12.12,
        vh * 12.42
    ]

    if (scrollTop < SCREENS[1]) {
        return goingDown ? SCREENS[1] : SCREENS[0];
    } else if (scrollTop < SCREENS[2]) {
        return goingDown ? SCREENS[2] : SCREENS[1];
    } else if (scrollTop < SCREENS[3]) {
        return goingDown ? SCREENS[3] : SCREENS[2];
    } else if (scrollTop < SCREENS[4]) {
        return goingDown ? SCREENS[4] : SCREENS[3];
    } else if (scrollTop < SCREENS[5]) {
        return goingDown ? SCREENS[5] : SCREENS[4];
    } else if (scrollTop < SCREENS[6]) {
        return goingDown ? SCREENS[6] : SCREENS[5];
    } else if (scrollTop < SCREENS[7]) {
        return goingDown ? SCREENS[7] : SCREENS[6];
    } else if (scrollTop < SCREENS[8]) {
        return goingDown ? SCREENS[8] : SCREENS[7];
    } else if (scrollTop < SCREENS[9]) {
        return goingDown ? SCREENS[9] : SCREENS[8];
    } else if (scrollTop < SCREENS[10]) {
        return goingDown ? SCREENS[10] : SCREENS[9];
    } else if (scrollTop < SCREENS[11]) {
        return goingDown ? SCREENS[11] : SCREENS[10];
    } else if (scrollTop < SCREENS[12]) {
        return goingDown ? SCREENS[12] : SCREENS[11];
    } else if (scrollTop < SCREENS[13]) {
        return goingDown ? SCREENS[13] : SCREENS[12];
    } else if (scrollTop < SCREENS[14]) {
        return goingDown ? SCREENS[14] : SCREENS[13];
    } else if (scrollTop < SCREENS[15]) {
        return goingDown ? SCREENS[15] : SCREENS[14];
    } else if (scrollTop < SCREENS[16]) {
        return goingDown ? SCREENS[16] : SCREENS[15];
    } else if (scrollTop < SCREENS[17]) {
        return goingDown ? SCREENS[17] : SCREENS[16];
    } else if (scrollTop < SCREENS[18]) {
        return goingDown ? SCREENS[18] : SCREENS[17];
    
    } else {
        return scrollTop;
    }
}

// $(window).scrollEnd(function () {
//     scrollMagnet(roundingFunction);
// }, 100);

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