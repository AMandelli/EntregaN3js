const d = document
const body = document.body
const head = document.head
const titulo = document.createElement("title")
const header = document.createElement("header")
const tituloHeader = document.createElement("h1")
const div = document.createElement("div")
const tituloDiv = document.createElement("h2")
const p = document.createElement("p")
const label = document.createElement("label")
const input = document.createElement("input")
const boton = document.createElement("button")
const actualizacion = 2.15
const declaracion = document.createElement("p")
const declaracionNegativa = document.createElement("p")
const volverACalcular = document.createElement("button")
const inputA = document.getElementById("input")


// titulo en el head
titulo.innerText = "Calculadora de alquileres"
head.appendChild(titulo)

// body
body.style.backgroundColor = "#5AF5C6"
body.appendChild(div)

// tarjeta de funcionalidad (calculadora de alquileres)
tituloDiv.innerText = "Calcular Alquiler"
p.innerText = "Ingrese el monto que desea calcular: "
div.appendChild(tituloDiv)
div.appendChild(p)
div.appendChild(label)
div.appendChild(input)
div.appendChild(boton)
div.appendChild(declaracion)
div.appendChild(declaracionNegativa)
div.style.backgroundColor = "white"
div.style.width = "300px"
div.style.height = "500px"
div.style.borderRadius = "10px"
div.style.margin = "auto"
// titulo div
tituloDiv.style.color = "black"
tituloDiv.style.textAlign = "center"
tituloDiv.style.fontSize = "35px"
tituloDiv.style.paddingTop = "40px"
// parrafo div
p.style.fontSize = "30px"
p.style.paddingLeft = "20px"
// input div
input.style.backgroundColor = "white"
input.style.marginLeft = "60px"
input.style.height = "30px"
input.type = "number"
input.id = "input"
input.placeholder = "ingrese monto"
// boton div
boton.innerText = "Calcular"
boton.style.marginLeft = "105px"
boton.style.marginTop = "20px"
boton.style.fontSize = "20px"
boton.type = "submit"
label.className = "label"
label.appendChild(input)
// parrafo monto actualizado
declaracion.style.fontSize = "20px"
declaracion.style.padding = "20px"


function consultar (){
    boton.onclick = () =>{
        const resultado = input.value * actualizacion
        declaracion.innerHTML = `El monto actualizado es de $${resultado}`
        localStorage.setItem("monto",JSON.stringify(resultado))
    }
}
consultar()

