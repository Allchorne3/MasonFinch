$(document).ready(function(){
    //Open nav
    $('.nav-toggle').click(function(){
        $('.phone-nav').css("top", "0");
    });

    //close nav
    $('.nav-close').click(function(){
        $('.phone-nav').css("top", "-250px");
    });

    //close nav when link is clicked
    $('.phone-nav a').click(function(){
        $('.phone-nav').css("top", "-250px");
    });
});