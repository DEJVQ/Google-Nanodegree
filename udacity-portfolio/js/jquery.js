$(document).ready(function() {
    $("hr").css("width", "100%");
    $(".photoMe").css("width", "90%");

    $('.bar1').delay(200).queue(function (next) {
        $(this).css("width", "70%");
    });
    $('.bar2').delay(500).queue(function (next) {
        $(".bar2").css("width", "55%");
    });
    $('.bar3').delay(800).queue(function (next) {
        $(".bar3").css("width", "65%");
    });
    
    
});


