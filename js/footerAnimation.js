$(document).ready(function ($) {
    $('footer').animate({width: "80%"}, 1500, function () {
        let x = $('footer div').children();
        for (let i = 0; i < x.length; i++) {
            setTimeout(function () {
                $(x[i]).fadeIn("slow");
            }, 550 * i);
        }
        setTimeout(function () {
            $(x).fadeOut("slow");
        }, 550 * x.length);
        setTimeout(function () {
            $('footer').animate({width: "100%"}, 1000, function () {
                $(this).animate({height: "100%"}, 1000, function () {
                    $('.blackHeader').fadeIn(1000);
                });
            })
        }, 550*x.length + 550*(x.length-2));
    });
});