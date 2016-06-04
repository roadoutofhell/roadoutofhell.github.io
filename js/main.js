$(function(){
    workBelt();
});

$('.slider').hide();

function workBelt(){
    $('#rad1').click(function(){
        $('#slider1').show();
        $('#slider3').hide();
        $('#slider2').hide();
    });

    $('#rad2').click(function(){
        $('#slider2').show();
        $('#slider1').hide();
        $('#slider3').hide();
    });

    $('#rad3').click(function(){
        $('#slider3').show();
        $('#slider1').hide();
        $('#slider2').hide();
    });
}