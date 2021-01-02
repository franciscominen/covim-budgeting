var h = new hogarCovim()
/* ============= CONTENEDOR INICIO CLICK PRESUPUESTO ============= */

$('#cardPresupuesto').click(function () {
    $('#contenedorInicio').fadeOut(function() {
        $('#loader').fadeIn(500, function() {
            
            setTimeout(()=> {
                $('#loader').fadeOut(300);
                $('#contenedorApp').fadeIn(500);
                $('#contenedorPresupuesto').fadeIn(500);
            }, 2000)
        });
    });
})

/* ============= CONTENEDOR PRESUPUESTO ============= */
$('#contenedorPresupuesto').css('display', 'none');

$('#btnIngresarMetros').addClass('btn__IngresarM2');
$('#btnIngresarMetros').click(function () { 
    h.obtenerMetros()
});

$('#btnCalcularPrecio').addClass('btn__presupuesto');
$('#btnCalcularPrecio').click(function () { 
    h.calcularPresupuesto()
    $('#btnFinanciacion').css('background-color', '#2D2D2D');
});

$('#btnFinanciar').addClass('btn__financiar');
$('#btnFinanciar').click(function () { 
    h.totalFinanciar()

});

$('#btnVolverInicio').click(function () { 
    $('#contenedorPresupuesto').fadeOut(300);
    $('#contenedorApp').fadeOut(300, () => {
        $('#contenedorInicio').show();
    });
});

$('#btnFinanciacion').click(function () { 

    if ($('#inputMetros').val() == 0) {

        alert('Procure ingresar correctamente todos los datos requeridos para poder obtener un presupuesto final.')

    } else {

        
        $('#contenedorPresupuesto').fadeOut(300, () => {
            $('#contenedorFinanciacion').fadeIn(500);
        });
           
    }       
});

$('#resetPresupuesto').click(function () { 
    $('#precioFinal').html("");
    $('#mtsIngresados').html("");
    $('#inputMetros').val('');
    $('#btnFinanciacion').css('background-color', 'gray');
});

/* ============= CONTENEDOR FINANCIACION ============= */

$('#contenedorFinanciacion').css('display', 'none');

$('#btnVolverPresupuesto').addClass('btn__volverPresupuesto');
$('#btnVolverPresupuesto').click(function () { 
    $('#contenedorFinanciacion').fadeOut(300, () => {
        $('#contenedorPresupuesto').fadeIn();
    });
});

cuotas = [12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84]
var selectCuotas = document.querySelector('#selectCuotas')
    cuotas.forEach((cuota)=>{
    let opcion = `<option value='${cuota}'>${cuota}</option>`
    selectCuotas.innerHTML += opcion
    })
    var valorCuota = h.precioFinanciado / selectCuotas.options[selectCuotas.selectedIndex].value
    function calcularCuotas() {
            valorCuota = h.precioFinanciado / selectCuotas.options[selectCuotas.selectedIndex].value
            document.querySelector('#valorCuota').innerHTML = "$ " + valorCuota.toFixed(0);
            document.querySelector('#precioCuotaFinal').innerHTML = "$ " + valorCuota.toFixed(0);
            document.querySelector('#cuotasFinal').innerHTML = selectCuotas.options[selectCuotas.selectedIndex].value
    }
    $('#btnCuotas').click(function () { 
        calcularCuotas()
        $('#btnFinalizar').css('background-color', '#2D2D2D');
    });
    $('#btnCuotas').addClass('btn__cuotas');

$('#btnFinalizar').addClass('btn__finalizar');
$('#btnFinalizar').click(function () { 
    $('#contenedorFinanciacion').fadeOut(300, () => {
        $('#contenedorApp').fadeOut(300, () => {
            $('#loader').fadeIn(500, function() {
                setTimeout(()=> {
                    $('#loader').fadeOut(300);
                    $('#contenedorUltimo').css('display', 'flex');
                }, 2000)
            });
        });
    });
});

/* ============= CONTENEDOR FORM ============= */

$('#contenedorForm').submit(function () { 
    alert("Su presupuesto fue enviado correctamente, nos contactaremos con usted en las proximas 24hs.");
});

$('#btnVolver').click(function () { 
    $('#contenedorUltimo').fadeOut( () => {
        $('#contenedorApp').fadeIn();
        $('#contenedorFinanciacion').fadeIn();
    });
});

window.addEventListener('offline', function() {
    document.getElementById("btnEnviar").classList.add("offline"); // No pude hacer que funcione si agregar !important a la class
}) 