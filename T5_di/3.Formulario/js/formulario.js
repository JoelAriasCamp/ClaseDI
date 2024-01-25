let inputNombre = document.querySelector("#input-nombre")
let inputEdad = document.querySelector("#input-edad")
let inputFecha = document.querySelector("#input-fecha")
let selectOpcion = document.querySelector("#select-opcion")
let boton = document.querySelector("#boton-enviar")

boton.addEventListener("click", () => {
    console.log(inputNombre.value);
    console.log(inputEdad.value);
    console.log(new Date(inputFecha.value)); //Objeto fecha pq si no se guarda como un string y q si se guarda en una variable se pueda obtener lo q se quiera de ahi
    //let date = new Date(inputFecha.value)
    //date.getMonth
    console.log(selectOpcion.value)    
    let seleccionado = document.querySelector("input[type='radio']:checked");    
    //console.log(seleccionado.id);
    seleccionado.id == "radio-masculino" ? console.log("Seleccionado masculino") : console.log("Seleccionado femenino")
})