$(document).ready(
    function () {

        
            $("#p1").hide(0);
            $(".headingClass").hide(0);
       /* 
        $("#headimg").animate({
            opacity: 0.25,
            left: "+=50",
            height: "toggle"
        }, 5000, function () {
            // Animation complete.
            */


            $("#p1").slideDown("slow");
            $(".headingClass").slideDown("slow");
        });
       
        
    });