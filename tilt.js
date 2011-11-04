$(document).ready(function () {
    $('body').html('').append('<div id="rotateDiv"><iframe id="rotateFrame" src="' + window.location.href + '" \></div>');
    $('div#rotateDiv').css({
        'transform': 'rotate(0.5deg)',
        'transform-origin': 'center center',
        '-webkit-transform': 'rotate(0.5deg)',
        '-webkit-transform-origin': 'center center',
        '-moz-transform': 'rotate(0.5deg)',
        '-moz-transform-origin': 'center center',
        '-o-transform': 'rotate(0.5deg)',
        '-o-transform-origin': 'center center',
        '-ms-transform': 'rotate(0.5deg)',
        '-ms-transform-origin': 'center center',
    });
//    $('iframe#rotateFrame').css({
//        'width': '100%',
//        'height': '100%'
//    });
    $('body').css({
        'width': '99%',
        'height': '97%'
    });
});
