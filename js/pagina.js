function pepeGuama() {
    var contenedor = document.getElementById("Alm")
    contenedor.style.display = "grid"
    contenedor.style.gridTemplateColumns = "25% 25% 25% 25%"


    var cuadro1 = document.createElement("div")
    var img1 = document.createElement("img")
    img1.style.width = "100%"
    img1.style.height = "100%"
    img1.src = "recursos/pesas-1-a-z.jpg"
    cuadro1.appendChild(img1)
    contenedor.appendChild(cuadro1)

    var cuadro2 = document.createElement("div")
    var imagenMt = document.createElement("img")
    imagenMt.style.width = "100%"
    imagenMt.style.height = "100%"
    imagenMt.src = "recursos/moto.jpg"
    cuadro2.appendChild(imagenMt)
    contenedor.appendChild(cuadro2)

    var cuadro3 = document.createElement("div")
    var Niña = document.createElement("img")
    Niña.style.width = "100%"
    Niña.style.height = "100%"
    Niña.src = "recursos/niña.jpg"
    cuadro3.appendChild(Niña)
    contenedor.appendChild(cuadro3)

    var cuadro4 = document.createElement("div")
    var Luffy = document.createElement("img")
    Luffy.style.width = "100%"
    Luffy.style.height = "100%"
    Luffy.src = "recursos/luffy.jpg"
    cuadro4.appendChild(Luffy)
    contenedor.appendChild(cuadro4)

    var cuadro5 = document.createElement("div")
    cuadro5.style.gridRow = "2 / 4"
    var Negra = document.createElement("img")
    Negra.style.width = "100%"
    Negra.style.height = "100%"
    Negra.src = "recursos/Captura de pantalla 2023-05-12 111929.jpg"
    cuadro5.appendChild(Negra)
    contenedor.appendChild(cuadro5)

    var cuadro6 = document.createElement("div")
    cuadro6.style.gridColumn = "2 / 4"
    var Fit = document.createElement("img")
    Fit.style.width = "100%"
    Fit.style.height = "100%"
    Fit.src = "recursos/fit.jpg"
    cuadro6.appendChild(Fit)
    contenedor.appendChild(cuadro6)

    var cuadro7 = document.createElement("div")
    cuadro7.style.backgroundColor = "black"
    cuadro7.style.gridColumn = "4 / 5"
    cuadro7.style.gridRow = "2 / 4"
    var divgrande = document.createElement("div")
    divgrande.style.margin = "10%"
    var formulario = document.createElement("form")
    cuadro7.appendChild(divgrande)
    var texto = document.createElement("h2")
    texto.innerText = "Book a Session"
    texto.style.color = "white"
    divgrande.appendChild(texto)
    divgrande.appendChild(formulario)

    
    var divInput1 = document.createElement("div")
    divInput1.style.padding = "3%"
    divInput1.style.border = "solid white 2px"
    var input1 = document.createElement("input")
    input1.style.color = "white"
    input1.style.width = "100%"
    input1.style.border = "0"
    input1.style.outline = "none"
    input1.placeholder = "Name"
    input1.style.backgroundColor = "black"
    divInput1.appendChild(input1)
    formulario.appendChild(divInput1)


    
    var divInput2 = document.createElement("div")
    divInput2.style.marginTop = "5%"
    divInput2.style.padding = "3%"
    divInput2.style.border = "solid white 2px"
    var input2 = document.createElement("input")
    input2.type = "email"
    input2.style.color = "white"
    input2.style.width = "100%"
    input2.style.border = "0"
    input2.style.outline = "none"
    input2.placeholder = "Email Address"
    input2.style.backgroundColor = "black"
    divInput2.appendChild(input2)
    formulario.appendChild(divInput2)

    
    var divInput3 = document.createElement("div")
    divInput3.style.marginTop = "5%"
    divInput3.style.padding = "3%"
    divInput3.style.border = "solid white 2px"
    var input3 = document.createElement("textarea")
    input3.rows = "11"
    input3.cols = "31"
    input3.style.color = "white"
    input3.style.border = "0"
    input3.style.resize = "none"
    input3.placeholder = "Message"
    input3.style.backgroundColor = "black"
    divInput3.appendChild(input3)
    formulario.appendChild(divInput3)

    var divBotonSend = document.createElement("div")
    divBotonSend.style.textAlign = "end"
    divBotonSend.style.width = "100%"
    divBotonSend.style.marginTop = "10%"
    var boton = document.createElement("input")
    boton.type = "button"
    boton.value = "Send Now"
    boton.style.paddingTop = "10px"
    boton.style.paddingBottom = "10px"
    boton.style.paddingLeft = "30px"
    boton.style.paddingRight = "30px"
    boton.style.backgroundColor = "red"
    boton.style.color = "white"

    divBotonSend.appendChild(boton)
    formulario.appendChild(divBotonSend)





    contenedor.appendChild(cuadro7)

    var cuadro8 = document.createElement("div")
    var Penultima = document.createElement("img")
    Penultima.style.width = "100%"
    Penultima.style.height = "100%"
    Penultima.src = "recursos/negro.jpg"
    cuadro8.appendChild(Penultima)
    contenedor.appendChild(cuadro8)

    var cuadro9 = document.createElement("div")
    var Ultima = document.createElement("img")
    Ultima.style.width = "100%"
    Ultima.style.height = "100%"
    Ultima.src = "recursos/ultima.jpg"
    cuadro9.appendChild(Ultima)
    contenedor.appendChild(cuadro9)




}