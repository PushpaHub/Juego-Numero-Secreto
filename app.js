//Definimos numeroScreto e intentos en la function, 
//aquí solo declaramos las variables
let numeroMaximo = 10;
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []; 

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log('intento ' + intentos);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos==1) ? 'vez' : 'veces'}`);
        //Eliminamos o removemos disabled del boton Reiniciar juego
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'Número secreto es menor'); 
        } else {
            asignarTextoElemento('p', 'Número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    //let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value = '';
    document.querySelector("#valorUsuario").value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    /*console.log('numeroGenerado = ' + numeroGenerado);
    console.log(listaNumerosSorteados);
    console.log(' length = ' + listaNumerosSorteados.length);*/

    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
        return;
    } else
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego de número secreto');
    asignarTextoElemento('p', 'Indica un número del 1 a ' + numeroMaximo);
    numeroSecreto = generarNumeroSecreto();
    console.log('numeroSecreto = ' + numeroSecreto);
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indiar mensaje de intevalo de numero
    //generar el numero aleatorio
    //iniciar el número de intentos
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

//varias lineas mejor encerramos en una funcion condicionesIniciales
//porque las vamos a llamar cada vez que reiniciamos el juego
//asignarTextoElemento('h1', 'Juego de número secreto');
//asignarTextoElemento('p', 'Indica un número del 1 a 10')
condicionesIniciales();