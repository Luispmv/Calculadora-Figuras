const radioInput = document.getElementById("radioInput")
const enviarCirculo = document.getElementById("EnviarCirculo")
const resultadosCirculo = document.getElementById("results-circle")
const contenido = document.getElementById("content")
const resultadoText = document.getElementById("resultadoText")

enviarCirculo.addEventListener("click", function(event){
    event.preventDefault()
})
enviarCirculo.addEventListener("click", areaCirculo)

function areaCirculo(){
    const pi = Math.PI;
    const radio = radioInput.value
    const resultado = pi * Math.pow(radio, 2)
    const resultadoFinal = Math.floor(resultado)
    contenido.style.display = "none"
    resultadosCirculo.style.display = "grid"
    resultadoText.innerText = "Area del Circulo: " + resultadoFinal
    return resultadoFinal
}

