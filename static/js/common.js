$('.nav-btn').on('click', function (e) {
    var $this = $(this);
    $this.toggleClass('is-open');
    $('.nav').toggleClass('is-open');
});
$(document).mouseup(function (e){
    var nav = $('.nav , .nav-btn');
    if (!nav.is(e.target)
        && nav.has(e.target).length === 0) {
        nav.removeClass('is-open');
    }
});