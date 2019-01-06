$(document).ready(function () {
    $('#data').countdown('2019/08/23', function (event) {
        $(this).html(event.strftime('%D Dias, %H Horas, %M Minutos e %S Segundos'));
    });
});