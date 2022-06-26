{
    let lastScrollTop = window.pageYOffset;
    function scrollMagnet(roundingFunction) {
        var scrollTop = window.pageYOffset;

        // ~one scrollwheel click on PC
        var offset = window.matchMedia("(min-width: 700px)").matches ? 100 : 300;

        if (Math.abs(lastScrollTop - scrollTop) > offset) {
            scrollTop = roundingFunction(scrollTop, scrollTop > lastScrollTop);
        }

        window.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
        });
        lastScrollTop = scrollTop;
    }
}

// extension:
$.fn.scrollEnd = function (callback, timeout) {
    $(this).on('scroll', function () {
        var $this = $(this);
        if ($this.data('scrollTimeout')) {
            clearTimeout($this.data('scrollTimeout'));
        }
        $this.data('scrollTimeout', setTimeout(callback, timeout));
    });
};
