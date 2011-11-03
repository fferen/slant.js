$(document).ready(function () {
    $('body').html('').append('<div id="rotateDiv"><iframe id="rotateFrame" src="' + window.location.href + '" \></div>');
    $('div#rotateDiv').css({
        '-webkit-transform': 'rotate(1deg)',
        '-moz-transform': 'rotate(1deg)',
        '-o-transform': 'rotate(1deg)',
        '-ms-transform': 'rotate(1deg)',
    });
    $('iframe#rotateFrame').css({
        'width': '100%',
        'height': '100%'
    });
    $('body').css({
        'width': '99%',
        'height': '99%'
    });
    alert('hello');
});
