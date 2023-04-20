let contenido = document.querySelector("#contenido");
console.log(document.getElementsByClassName("tarjeta"));
// console.log(document.querySelectorAll('.tarjeta'));


fetch('https://digimon-api.vercel.app/api/digimon') 
.then(response => response.json())
.then(datos =>{
    tabla(datos);
})

.catch(function() {

});

function tabla(datos){
    contenido.innerHTML=""

    for (let temp of datos){
        contenido.innerHTML+=

        `
        <tr>
        <div class="card m-1">
            <img src="${temp.img}" class="card-img-top" alt="${temp.name}">
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

function toTop() {
    window.scrollTo(0, 0)
}

// function detalle(){
//     getElementById('imagen').style.transform= "scale(1.5)";
// }

