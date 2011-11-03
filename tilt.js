$(document).ready(function () {
    $('body').html('').append('<div id="rotateDiv"><iframe src="' + window.location.href + '" \></div>');
    $('#rotateDiv').css({
        '-webkit-transform': 'rotate(5deg)',
        '-moz-transform': 'rotate(5deg)',
        '-o-transform': 'rotate(5deg)',
        '-ms-transform': 'rotate(5deg)'
    });
