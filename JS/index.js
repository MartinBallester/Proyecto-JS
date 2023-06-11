const valorTicket = 200;
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const email = document.querySelector('#email');
const form = document.querySelector('#form');
const parrafo = document.querySelector('#alerta')
const imputs = document.querySelectorAll('#form imput')
let descuentoEstudiante = 0.8;
let descuentoTrainee = 0.5;
let descuentoJunior = 0.15;

const cantidad = document.querySelector('#cantidadEntrada');
const categoria = document.querySelector('#categoriaSelect');
const botonResumen = document.querySelector('#botonResumen');
const botonBorrar = document.querySelector('#borrar');
const totalCompra = document.querySelector('#totalCompra');

// function validar(evento){
//     evento.preventDefault();
// }

function totalPagar (evento){
    evento.preventDefault();
    let totalValor = parseInt(cantidad.value) * valorTicket;
    var emailValido = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var nombreValido = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    var cantidadValida= /^\d{1,3}$/;
    
    if(!nombre.value.match(nombreValido) ){
        swal("Error", "Por favor ingrese un nombre valido", "error");
    }
    else if(!apellido.value.match(nombreValido)){
        swal("Error", "Por favor ingrese un apellido valido", "error");
    }
    else if(!email.value.match(emailValido)){      
        swal("Error", "Por favor ingrese un email valido", "error");
    }
    else if(!cantidad.value.match(cantidadValida)){
        swal("Error", "Por favor ingrese una cantidad valida", "error");
    }
    else if(categoria.value == 0){
        swal("Error", "Por favor elija una categoria", "error");
    }  
    else if(categoria.value == 1){
        totalValor = totalValor;
    }
    else if(categoria.value == 2){
        totalValor = totalValor - (totalValor * descuentoEstudiante);
    }
    else if(categoria.value == 3){
        totalValor = totalValor - (totalValor * descuentoTrainee);
    }
    else if(categoria.value == 4){
        totalValor = totalValor - (totalValor * descuentoJunior);
    }
   
    totalCompra.innerHTML = `Total a pagar : $ ${totalValor}`;
    
}

botonResumen.addEventListener('click', totalPagar)
botonBorrar.addEventListener('click', () => {
    totalCompra.innerHTML = 'Total a pagar : $'
    cantidad.value = "";
    nombre.value = "";
    apellido.value = "";
    email.value = "";
    categoria.value = "0";
    
})




