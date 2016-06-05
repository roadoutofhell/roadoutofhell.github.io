$(function(){
    workBelt();
});

$('#slider1').hide();
$('#slider2').hide();
$('#slider3').hide();

function workBelt(){
    $('#slider1-wrap').click(function(){
        if ($('#slider1').is(':hidden')) {
            $('#slider1').show(300)
            $('#slider1').css('top','100%');
        } else {
            $('#slider1').hide()
            $('#slider1').css('top','-100%');
        }
    });

    $('#slider2-wrap').click(function(){
        if ($('#slider2').is(':hidden')) {
            $('#slider2').show(300)
            $('#slider2').css('top','100%');
        } else {
            $('#slider2').hide()
            $('#slider2').css('top','-100%');
        }
    });

    $('#slider3-wrap').click(function(){
        if ($('#slider3').is(':hidden')) {
            $('#slider3').show(300)
            $('#slider3').css('top','100%');
        } else {
            $('#slider3').hide()
            $('#slider3').css('top','-100%');
        }
    });
}