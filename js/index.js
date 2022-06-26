
window.addEventListener('scroll', nameEvent);

nameEvent();

// Title/name animation
function nameEvent() {
    var firstName = $('#first-name');
    var lastName = $('#last-name');

    var scrollTop = window.pageYOffset;
    var endScroll = $(window).height() * 0.7;
    var scrollAmount = scrollTop < endScroll ? scrollTop : endScroll;

    if (window.matchMedia('(min-width: 768px)').matches) {
        // Large screen:

        var maxLNC = ($(window).width() - lastName.width()) * 0.4;
        var minLNC = 0;
        var maxFNC = ($(window).width() - firstName.width()) * 0.95;
        var minFNC = 0;

        var maxLNV = $(window).width() * 0.375;
        var minLNV = 0;
        var maxFNV = $(window).width() * 0.285;
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
        var maxLNV = $(window).width() * 3;
        var minLNV = 0;
        var maxFNV = $(window).width() * 4;
        var minFNV = 0;

        var lastNameVertical = minLNV + (maxLNV - minLNV) * scrollAmount / endScroll;
        var firstNameVertical = minFNV + (maxFNV - minFNV) * scrollAmount / endScroll;

        lastName.css('bottom', -lastNameVertical + 'px');
        firstName.css('bottom', -firstNameVertical + 'px');
    }
}

roundingFunction = function (scrollTop, goingDown) {
    var vh = $(window).height();
    const SCREEN_ONE = 0;
    const SCREEN_TWO = vh * 1.1;
    const SCREEN_THREE = vh * 2.15;

    if (scrollTop < SCREEN_TWO) {
        return goingDown ? SCREEN_TWO : SCREEN_ONE;
    } else if (scrollTop < SCREEN_THREE) {
        return goingDown ? SCREEN_THREE : SCREEN_TWO;
    } else {
        return scrollTop;
    }
}

$(window).scrollEnd(function () {
    scrollMagnet(roundingFunction);
}, 100);