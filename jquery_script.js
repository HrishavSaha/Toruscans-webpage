$(document).ready(function(){
    $(".search-bar").focus(function(){
        $(".search-bar").attr('value', '');
        $(".search-bar").css('text-indent', '5px');
        $("#search-icon").css("display", 'none');
    })
    $(".search-bar").blur(function(){
        $(".search-bar").attr('value', 'Search');
        $(".search-bar").css('text-indent', '25px');
        $("#search-icon").css("display", 'initial');
    })
})