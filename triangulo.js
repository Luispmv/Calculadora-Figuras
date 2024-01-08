const main = document.getElementById("initial-content")
const baseInput = document.getElementById("base")
const alturaInput = document.getElementById("altura")
const btnTriangulo = document.getElementById("EnviarTriangulo")
const resultsContainer = document.getElementById("results-container")
const Rtxt = document.getElementById("text-results")

btnTriangulo.addEventListener("click", function(event){
    event.preventDefault()
})
btnTriangulo.addEventListener("click", areaTriangulo)

function areaTriangulo(){
    const base = baseInput.value
    const altura = alturaInput.value
    const resultado = base * (altura/2)
    main.style.display = "none"
    resultsContainer.style.display = "grid"
    Rtxt.innerText = "Area del Triangulo: " + resultado
    return resultado
}