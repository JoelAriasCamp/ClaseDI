//METODO DE CONEXION SEA DIFERENTE A GET Y NECESITE PARAMS

let resultadosDiv = document.querySelector("#div-resultados")
let botonBuscar = document.querySelector("#boton-buscar")

let imagenDetalle = document.querySelector("#imagen-detalle")
let datosDetalle = document.querySelector("#datos-detalle")
let spanResultado = document.querySelector("#span-resultado")

// Variable para almacenar los resultados de la API
let resultadosApi = [];

botonBuscar.addEventListener("click", () => {

  let selectGenero = document.querySelector("#select-genero");
  let selectPais = document.querySelector("#select-pais");
  let inputNumero = document.querySelector("#input-numero"); 

  let url = `https://randomuser.me/api?results=${inputNumero.value}&gender=${selectGenero.value}&nat=${selectPais.value}`;

  fetch(url)
    .then((res) => {        //si una función de flecha solo tiene una linea, no se pone ni {} ni return
      return res.json();
    })
    .then((res1) => {
      //console.log(res1.results(o como se llame));
      resultadosApi = res1.results; // Almacena los resultados de la API
      resultadosDiv.innerHTML = `<h2 class="mb-4" style="text-align: center">
      Resultados: <span id="span-resultado">${inputNumero.value}</span>
      </h2>`; // Limpia los resultados anteriores
      resultadosApi.forEach((element) => {
        resultadosDiv.innerHTML += `<div class="col">
          <div class="card mb-4" style="width: 18rem">
            <img src="${element.picture.large}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${element.name.first} ${element.name.last}</h5>
              <p class="card-text">${element.email}</p>
              <button class="btn btn-primary btn-detalle" data-userid="${element.id.value}">Ver detalle</button>
            </div>
          </div>
        </div>`;
      });
    })
    .catch((err) => {
      console.error(err);
    });    
});

resultadosDiv.addEventListener("click", (event) => {
  if (event.target.classList.contains('btn-detalle')) {
    const userId = event.target.getAttribute('data-userid');  
    const userSelected = resultadosApi.find(user => user.id.value === userId);

    if (userSelected) {
      imagenDetalle.src = userSelected.picture.large;
      datosDetalle.innerHTML = `Nombre: ${userSelected.name.first} ${userSelected.name.last}<br>
                                Edad: ${userSelected.dob.age}<br>
                                Género: ${userSelected.gender}<br>
                                Movil: ${userSelected.cell}`;
    }
  }
});



/*
fetch(url).then((res) => {        
    return res.json();              
})
.then((res1) => {           //aqui tenemos guardado el json, pero solo queremos los users
    //sacar el nombre y apellido de todos los usuarios por consola 
    

    res1.results.forEach(element => {
        //console.log(element.firstName+" "+element.lastName);
        resultadosDiv.innerHTML += `<div class="col">
        <div class="card mb-4" style="width: 18rem">
          <img src="${element.picture.large}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${element.name.first} ${element.name.last}</h5>
            <p class="card-text">
              ${element.email}
            </p>
            <btn="#" id="" class="btn btn-primary">Ver detalle</a>
          </div>
        </div>
      </div>`
    }); 

});

//document.querySelector("button#id").addEventListener()
*/
