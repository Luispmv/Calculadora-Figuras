const initialContent = document.getElementById("initial-content")
const btnCuadrado = document.getElementById("enviarCuadrado")
const lado1 = document.getElementById("lado1")
const lado2 = document.getElementById("lado2")
const resultsContainer = document.getElementById("resultados-container")
const resultadosTexto = document.getElementById("textR")

btnCuadrado.addEventListener("click", function(event){
    event.preventDefault()
})
btnCuadrado.addEventListener("click", AreaCuadrado)

function AreaCuadrado(){
    const primeroLado = lado1.value
    const segundoLado = lado2.value
    const resultado = primeroLado * segundoLado
    initialContent.style.display = "none"
    resultsContainer.style.display = "grid"
    resultadosTexto.innerText = "Area del Cuadrado: " + resultado
    return resultado
}
