class hogarCovim {
    constructor(metros, precio){
        this.metros = Number(metros)
        this.precio = precio

        this.obtenerMetros = function() {
           this.metros = inputMetros.value
            if(this.metros < 24 | this.metros > 98) {
                this.metros = alert('Los datos ingresados no son admisibles, vuelva a ingresar los datos.')
                this.metros = ""
            } else {
                this.metros = Number(this.metros)
            }
            document.querySelector("#mtsIngresados").innerHTML = this.metros;
            document.querySelector("#verMetrosIngresados").innerHTML = this.metros + " m²";
            document.querySelector("#m2Final").innerHTML = this.metros + " m²";
        }

        this.presupuesto = Number
        this.calcularPresupuesto = function() {
            this.presupuesto = this.metros * 32400 //precio del m2
            document.querySelector('#precioFinal').innerHTML = "$ " +  this.presupuesto.toLocaleString()
            document.querySelector('#verPrecioFinal').innerHTML = "$ " +  this.presupuesto.toLocaleString()
            document.querySelector('#presupuestoFinal').innerHTML = "$ " +  this.presupuesto.toLocaleString()
        }

        this.precioFinanciado = Number
        this.totalFinanciar = function() {
           this.precioFinanciado = (this.presupuesto * 30) / 100
           document.querySelector('#financiadoTotal').innerHTML = "$ " + this.precioFinanciado.toLocaleString()
           document.querySelector('#financiacionFinal').innerHTML = "$ " + this.precioFinanciado.toLocaleString()
        }

        
    }
}

/* ======== LOCAL STORAGE ======== */
function guardarDatosIngresados() {
    let datosForm = {
        nombre: document.querySelector('#nombreApellido').value,
        localidad: document.querySelector('#localidad').value,
        email: document.querySelector('#email').value,
        aclaracion: document.querySelector('#aclaracion').value,

        metrosIngresados: h.metros,
        presupuestoObtenido: h.presupuesto,
        precioFinanciado: h.precioFinanciado,
        cantidadCuotas: selectCuotas.options[selectCuotas.selectedIndex].value,
        precioCuota: valorCuota.toFixed(0)
    }
    let datos = []
    if (localStorage.getItem('datos')) {
        datos = JSON.parse(localStorage.getItem('datos'))
    }
    datos.push(datosForm)
    localStorage.setItem('datos', JSON.stringify(datos))
}

/* ======== menu mobile ========== */
$('#menuOpen').click(function () { 
    $('#menu').slideDown(600);
    $('#menuOpen').fadeOut();
    $('#menuClose').fadeIn();
});

$('#menuClose').click(function () { 
    $('#menu').slideUp(600);
    $('#menuClose').fadeOut();
    $('#menuOpen').fadeIn();
});