function Soma() {
    let valor1 = $('#valor1').val();
    let valor2 = $('#valor2').val();

    $.ajax({
        url: "/Calculadora/Soma",
        data: {
            valor1: valor1,
            valor2: valor2
        },
    }).done(function (response) {
        $('#total').val(response);
    });
}
function Subtrair() {
    let valor1 = $('#valor1').val();
    let valor2 = $('#valor2').val();

    $.ajax({
        url: "/Calculadora/Subtrair",
        data: {
            valor1: valor1,
            valor2: valor2
        },
    }).done(function (response) {
        $('#total').val(response);
    });
}
function Multiplicar() {
    let valor1 = $('#valor1').val();
    let valor2 = $('#valor2').val();

    $.ajax({
        url: "/Calculadora/Multiplicar",
        data: {
            valor1: valor1,
            valor2: valor2
        },
    }).done(function (response) {
        $('#total').val(response);
    });
}
function Dividir() {
    let valor1 = $('#valor1').val();
    let valor2 = $('#valor2').val();

    $.ajax({
        url: "/Calculadora/Dividir",
        data: {
            valor1: valor1,
            valor2: valor2
        },
    }).done(function (response) {
        $('#total').val(response);
    });
}


