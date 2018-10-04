let count = 0;
let interval;
$(document).ready(function($) {
    $('.dropDown').hover(function () {
            $('.menu__list', this).stop().slideDown(400);
        },
        function () {
            $('.menu__list', this).stop().slideUp(400);
        }
    );
    $(document).ready(function () {
         interval = setInterval("scroll_bg()",10);
    });
});

let bg_Offset = 0;
function scroll_bg(){
    bg_Offset = bg_Offset + 2;
    if (bg_Offset > 115) {
        bg_Offset = 0;
        if(count===3) {
            clearInterval(interval);
        } else {
            count++;
        }
    }
    $(".redLines").css("backgroundPosition", bg_Offset + "px 0px");
}