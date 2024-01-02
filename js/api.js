// elementos del HTML
let divPersonajes = document.getElementById('personajes');

    // botones Paginado
let botonPrimeraPagina = document.getElementById('primeraPagina');
let botonAnteriorPagina = document.getElementById("anterior");
let botonSiguientePagina = document.getElementById("siguiente");
let botonUltimaPagina = document.getElementById('ultimaPagina'); 

let totalPersonajes;
let paginaActual=1;

// funcion para mostrar los personajes en el html
function mostrarEnElHtml (arrPersonajes) {
    // estamos limpiando lo que habia antes en el div
    divPersonajes.innerHTML='';
    // ahora le agregamos los personajes nuevos que queres mostrar
    arrPersonajes.forEach((itemPersonaje)=>{
        divPersonajes.innerHTML+=` <div class="personaje">
                                        <h3>Nombre: ${itemPersonaje.name}</h3>
                                        <p>Genero: ${itemPersonaje.gender}</p>
                                        <p>Especie: ${itemPersonaje.species}</p>
                                        <p>Estado: ${itemPersonaje.status}</p>
                                        <p>Origen: ${itemPersonaje.origin}</p>
                                        <p>Locación: ${itemPersonaje.location}</p>
                                        <img src=${itemPersonaje.image}>
                                    </div>`
    })
}


// pedido de info con fetch
function pedidoFetch (pagina) {
    fetch('https://rickandmortyapi.com/api/character/?page='+pagina)
    .then((data)=>{
        return data.json();
    }).then((data)=>{
        totalPersonajes = data.results;
        // personajes es un array de objetos
        mostrarEnElHtml(totalPersonajes);
    })
};

pedidoFetch(paginaActual);



// function controlPaginado (pagina){
// // agregar los controles de todas las situaciones posibles
// }

// Paginado
function siguientePagina () {
    paginaActual++;
    if(paginaActual===42){
        botonSiguientePagina.disabled=true
        botonUltimaPagina.disabled=true
    } else {
        botonAnteriorPagina.disabled=false;
        botonPrimeraPagina.disabled=false;
    }
    pedidoFetch(paginaActual);
    // console.log(paginaActual)
};

function anteriorPagina () {
    paginaActual--;
    pedidoFetch(paginaActual);
    // console.log(paginaActual)
};

function primeraPagina () {
    paginaActual=1;
    pedidoFetch(1)
    // console.log(paginaActual)
}

// 42 paginas
function ultimaPagina () {
    paginaActual=42;
    pedidoFetch(paginaActual);
    // console.log(paginaActual)
}



botonSiguientePagina.addEventListener('click',siguientePagina);
botonAnteriorPagina.addEventListener('click',anteriorPagina);
botonPrimeraPagina.addEventListener('click',primeraPagina);
botonUltimaPagina.addEventListener('click', ultimaPagina)