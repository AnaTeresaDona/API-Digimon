let contenido = document.querySelector("#contenido");


fetch('https://digimon-api.vercel.app/api/digimon') 
.then(response => response.json())
.then(datos =>{
    tabla(datos);
})

function tabla(datos){
    contenido.innerHTML=""

    for (let temp of datos){
        contenido.innerHTML+=

        `
        <tr>
        <div class="card m-1" style="width: 15rem;"  onclick="agrandarImagen()" onmouseout="retornarImagen()" >
            <img src="${temp.img}" class="card-img-top imagen" alt="${temp.name}">
            <div class="card-body">
            <hr>
            <ul class="list-group list-group-flush">
            <li><h5 class="card-title text-center">${temp.name}</h5></li>    
            <li class="list-group-item text-center">${temp.level}</li>
            </ul>
            </div>
        </div>
        </tr>       
        `

    }
}

