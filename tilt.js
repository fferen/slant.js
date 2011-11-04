$(document).ready(function () {
    $('body').html('').append('<iframe id="rotateFrame" src="' + window.location.href + '" \>');
    $('iframe#rotateFrame').css({
        'width': '100%',
        'height': '100%',
        'transform': 'rotate(0.5deg)',
        'transform-origin': '50% 50%',
        '-webkit-transform': 'rotate(0.5deg)',
        '-webkit-transform-origin': '50% 50%',
        '-moz-transform': 'rotate(0.5deg)',
        '-moz-transform-origin': '50% 50%',
        '-o-transform': 'rotate(0.5deg)',
        '-o-transform-origin': '50% 50%',
        '-ms-transform': 'rotate(0.5deg)',
        '-ms-transform-origin': '50% 50%'
    });
    $('body').css({
        'width': '100%',
        'height': '100%'
    });
});
