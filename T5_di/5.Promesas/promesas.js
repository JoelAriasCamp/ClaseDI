let promesa = new Promise((resolve, reject) => {            //estos dos parámetros son funciones
    //cuerpo de la promesa -> lo que quieres ejecutar y puede salir bien o mal
    //vamos a generar un aleatorio entre 0 y 10 -> sale mal si el num está entre 0 y 4,9
    setTimeout(() => {
        let aleatorio =Math.round(Math.random()*10,1);
        if(aleatorio>=5){
            //bien   
            resolve(aleatorio)     
        }else{
            //mal
            reject(`El número es demasiado pequeño: ${aleatorio}`)
        }
    }, 5000)        
});


//cuando termine
setInterval(() => {
    console.log("Ejecución en intervalo")
}, 1000)

resolucionPromesa();


//ahora hay que saber cual es el resultado cuando termine
//la función resolve, es el then y la reject es el catch
/*
promesa.then((res) => {
    console.log(`El parámetro generado es: ${res}`);
    return res;
})
.then((res1) => {
    setTimeout(() => {
        console.log("Ejecución de la segunda promesa: "+res1*2);
    },5000);
})
.catch((err) => {
    console.log(`El error es: ${err}`)});
*/
//se pueden encadenar varias promesas, si es resolve se lanza otra promesa por ejemplo


//
async function resolucionPromesa(){              //se marca función asincrona pq va a ir en segundo plano
    let resultado = await promesa;               //el await solo espera al resultado correcto, solo trata el return
    let resultadoDuplicado = await resultado;
    console.log(resultado);
}