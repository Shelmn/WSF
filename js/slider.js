var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 7000;
var translateWidth = 0;

$(document).ready(function() {
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function () {
        clearInterval(switchInterval);
    });

    $('#next-btn').click(function () {
        clearInterval(switchInterval);
        nextSlide();
    });
});

function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
        $('.slideScroll div').animate({left: "0"}, 500);
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        $('.slideScroll div').animate({left: 10*slideNow+"px"}, 500);
        slideNow++;
    }
    $(".slideNum p").fadeOut().fadeIn(10, function () {
        $(this).text("0"+slideNow);
    });
}


