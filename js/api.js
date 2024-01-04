// elementos del HTML
let divPersonajes = document.getElementById('personajes');

    // botones Paginado
let botonPrimeraPagina = document.getElementById('primeraPagina');
let botonAnteriorPagina = document.getElementById("anterior");
let botonSiguientePagina = document.getElementById("siguiente");
let botonUltimaPagina = document.getElementById('ultimaPagina'); 

let totalPersonajes;
let paginaActual=1;

// funcion para mostrar los personajes
function mostrarEnElHtml (arrPersonajes) {
    divPersonajes.innerHTML='';
    console.log(arrPersonajes);
    arrPersonajes.forEach((itemPersonaje)=>{
        divPersonajes.innerHTML+=` <div class="personaje hvr-wobble-to-bottom-right" data-aos="flip-left" data-aos-delay="200">
                                        <h3>Nombre: ${itemPersonaje.name}</h3>
                                        <p>Genero: ${itemPersonaje.gender}</p>
                                        <p>Especie: ${itemPersonaje.species}</p>
                                        <p>Estado: ${itemPersonaje.status}</p>
                                        <p>Origen: ${itemPersonaje.origin.name}</p>
                                        <p>Locación: ${itemPersonaje.location.name}</p>
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
        mostrarEnElHtml(totalPersonajes);
    })
};

// Paginado

pedidoFetch(paginaActual);

botonPrimeraPagina.disabled=true;
botonAnteriorPagina.disabled=true;


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
    
};

function anteriorPagina () {
    paginaActual--;
    pedidoFetch(paginaActual);
    
};

function primeraPagina () {
    paginaActual=1;
    pedidoFetch(1)
    botonAnteriorPagina.disabled=true;
    botonPrimeraPagina.disabled=true;
    botonSiguientePagina.disabled=false;
    botonUltimaPagina.disabled=false;

}

// 42 paginas
function ultimaPagina () {
    paginaActual=42;
    pedidoFetch(paginaActual);
    botonUltimaPagina.disabled=true;
    botonSiguientePagina.disabled=true;
    botonAnteriorPagina.disabled=false;
    botonPrimeraPagina.disabled=false;
}


botonSiguientePagina.addEventListener('click',siguientePagina);
botonAnteriorPagina.addEventListener('click',anteriorPagina);
botonPrimeraPagina.addEventListener('click',primeraPagina);
botonUltimaPagina.addEventListener('click', ultimaPagina)