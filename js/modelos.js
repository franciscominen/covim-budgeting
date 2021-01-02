/* ========= AJAX MODELOS ========== */
let modeloCard = "";
let contenidoJSON = []

function cargoModelos() {
   $.ajax({
      url: "js/modelos.json",
      dataType: "json",
      success: function(response) {
         contenidoJSON = response
         $.each(contenidoJSON, function(i) {

            modeloCard += `<div class="modelo__card" id="modeloCard">

                                <img src="${contenidoJSON[i].imagen}">

                                <div class="container__datos">
                                    <h3> <span>${contenidoJSON[i].modelo}</span> </h3>
                                    <ul>
                                        <li>
                                            <p> <img src="img/modelos/metros.png"> <span>${contenidoJSON[i].metroscuadrados}</span></p>
                                        </li>
                                        <li>
                                            
                                            <p> <img src="img/modelos/dormitorio.png"> Dormitorios: <span>${contenidoJSON[i].dormitorios}</span></p>
                                        </li>
                                        <li>
                                            <p> <img src="img/modelos/banio.png"> Baños: <span>${contenidoJSON[i].banios}</span></p>
                                        </li>
                                        <li>
                                            <p> <img src="img/modelos/cocina.png"> <span>${contenidoJSON[i].cocinaComedor}</span></p>
                                        </li>
                                        <li>
                                            <p> <img src="img/modelos/living.png"> <span>${contenidoJSON[i].living}</span></p>
                                        </li>
                                        <li>
                                            <p> <img src="img/modelos/lavadero.png"> Lavadero: <span>${contenidoJSON[i].lavadero}</span></p>
                                        </li>
                                        <li>
                                            <p> <img src="img/modelos/cochera.png"> <span>${contenidoJSON[i].cochera}</span></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>`
         })
         $("#contenedorModelos").html(modeloCard)
      },
      error: function() {
        console.error("Ocurrió un error... :(")
        modeloCard = `<h1>Ocurrio un error inesperado. Por favor, vuelva a cargar la pagina.</h1>`
        $("#contenedorModelos").html(modeloCard)
     } 
   })
}

setTimeout(() => {
    cargoModelos()
       $('#contenedorModelos').fadeIn("500", function() {
          $('#loader').fadeOut(300)
       })
       $('#modeloCard').slideUp(500);
 }, 3000)
