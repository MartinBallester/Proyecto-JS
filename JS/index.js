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

function totalPagar (){
    let totalValor = parseInt(cantidad.value) * valorTicket;

    if(categoria.value == 1){
        totalValor = totalValor - (totalValor * descuentoEstudiante);
    }
    else if(categoria.value == 2){
        totalValor = totalValor - (totalValor * descuentoTrainee);
    }
    else if(categoria.value == 3){
        totalValor = totalValor - (totalValor * descuentoJunior);
    }
    
    totalCompra.innerHTML = `Total a pagar : $ ${totalValor}`;
    
}

botonResumen.addEventListener('click', totalPagar => {

    totalPagar.preventDefault();
})

botonBorrar.addEventListener('click', () => {
    totalCompra.innerHTML = 'Total a pagar : '
    cantidad.value = null;
    
})



