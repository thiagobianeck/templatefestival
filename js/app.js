$(document).ready(function () {
    $('#data').countdown('2019/08/23', function (event) {
        $(this).html(event.strftime('<span>%D</span> Dias, <span>%H</span> Horas, <span>%M</span> Minutos e <span>%S</span> Segundos'));
    });
});