$(document).ready(function () {
    $('body').html('').append('<div id="rotateDiv"><iframe id="rotateFrame" src="' + window.location.href + '" \></div>');
    $('div#rotateDiv').css({
        '-webkit-transform': 'rotate(5deg)',
        '-moz-transform': 'rotate(5deg)',
        '-o-transform': 'rotate(5deg)',
        '-ms-transform': 'rotate(5deg)',
    });
    $('iframe#rotateFrame').css({
        'width': '100%',
        'height': '100%'
    });
    $('body').css({
        'width': '100%',
        'height': '100%'
    });
    alert('hello');
});
