$(function(){
    workBelt();
    workBelt2();
});

$('#slider1').hide();
$('#slider2').hide();
$('#slider3').hide();

function workBelt(){
    $('#slider1-wrap').hover(function(){
        if ($('#slider1').is(':hidden')) {
            $('#slider1').slideDown(300)
            $('#slider1').css('top','100%');
        } else {
            $('#slider1').slideUp(300)
        }
    });
}

function workBelt2(){
    $('#2016majus').click(function(){
        $('.work-belt2').css('left','-100%');
        $('.work-wrap').show(400);
        $('.main-wrapper').fadeOut(400);
    });

    $('#2016aprilis').click(function(){
        $('.work-belt2').css('left','-100%');
        $('.work-wrap2').show(400);
        $('.main-wrapper').fadeOut(400);
    });

    $('#2016aprilis10').click(function(){
        $('.work-belt2').css('left','-100%');
        $('.work-wrap3').show(400);
        $('.main-wrapper').fadeOut(400);
    });

    $('.work-return').click(function(){
        $('.work-belt2').css('left','0%');
        $('.main-wrapper').fadeIn(400);
        $('.work-wrap').hide(400);
        $('.work-wrap2').hide(400);
        $('.work-wrap3').hide(400);
        $('#slider1').slideUp(300);
    });
}