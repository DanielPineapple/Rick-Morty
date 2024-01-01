let divPersonajes = document.getElementById('personajes')


fetch ('https://rickandmortyapi.com/api/character')
.then((data)=>{
    return data.json();
}).then((data)=>{
    let personajes = data.results;
    personajes.forEach((itemPersonaje)=>{
        divPersonajes.innerHTML+= `                <div class="personaje">
                                                        <div class="tips">
                                                        <h3>Nombre: ${itemPersonaje.name}</h3>
                                                        <p>Género: ${itemPersonaje.gender}</p>
                                                        <img src=${itemPersonaje.image} alt="">
                                                    </div>`
    })
})