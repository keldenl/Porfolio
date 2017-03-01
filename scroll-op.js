function fader() {
    var r = $('.timeline'),
        wh = $(window).height(),
        dt = $(document).scrollTop(),
        redView  = wh - (r.offset().top - dt),
        op;
    if (redView > 0) {
        op = (2 / (wh + r.height()) * redView);
        if (op < 1)
            r.css({opacity: op});
    }
}
// Event on scroll
$(document).bind('scroll', fader);
