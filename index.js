// Ejercicio 1

function Ejercicio1(){const randomArray = [];
for(let i = 0; i < 5; i++){
    let num = Math.floor(Math.random() * 100)
    randomArray.push(num)
    randomArray.sort((a,b) => a < b ? -1 : 1)
}
const list = document.getElementById('listOne')
for (let i = 0; i < randomArray.length; i++) {
    let listElement = document.createElement('li')
    listElement.textContent = `${randomArray[i]}`
    list.appendChild(listElement)
}}
// Ejercicio 2

//a
const arr = [1,2,3,4,5,6]
const txt1 = document.getElementById('txt1')
let i = 0
string = ''
while(i < arr.length){
    string += arr[i]
    i++
    txt1.textContent = 'el array A es ' + string
}
// b
const txt2 = document.getElementById('txt2')
let string2 = ''
for(let i = 0 ; i < arr.length; i++){
    string2 += arr[i]
    txt2.textContent = 'el array B es ' + string2
}
// c
const txt3 = document.getElementById('txt3')

let string3 = ''
arr.forEach(item => {
    string3 += item
    txt3.textContent = 'el array C es ' + string3
})
// d y e
const arr2 = arr.map(item => {
    return item + 1
})
console.log(arr2)

// f
let reducer = (a , b) =>  a + b
let promedio = arr.reduce(reducer) / arr.length
console.log(promedio)


// Ejercicio 3 

const arr3 = [3,4,5,6,7,8,9,10]

 console.log(arr3.map(item => {
    return item ** 2
}))

// Ejercicio 4 

const arrMixto = [ 1, -4, 12, 0, -3, 29, -150]
const arrSumado = arrMixto
.filter(item => item > 0)
.reduce(reducer,0)

// Ejercicio 5

const nombres = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"]
// a
const nombres6Letras = nombres.filter(item  => item.length >= 6)
console.log(nombres6Letras)
// b
let nombresConM = nombres.filter(item => item.toLowerCase()[0] === 'm')
console.log(nombresConM)
// c
const nombresAlfabeticos = nombres.sort()
console.log(nombresAlfabeticos)
// d 
const inicialesNombres = nombres.map(item => {
    return item[0]
})
console.log(inicialesNombres)
// e
const mayusNombres = nombres.map(item => {
    return item.toLocaleUpperCase()
})
console.log(mayusNombres)
// g

const algunNombre = nombres.some(item => item.includes('J'))
console.log(algunNombre)
// Ejercicio 6

const arrColores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"]

function arrIncludes(element = prompt('')){
    return arrColores.includes(element)
}


// Ejercicio 7

function numerosPar(arr){
    return arr.filter(item => item % 2 == 0)
}



// Ejercicio 8
const vocales = ['a','e','i','o','u']
function palabrasVocales(arr){
   return arr.filter(item => vocales.includes(item.toLowerCase()[0]))
}


// Ejercicio 9
let auxVar;
const testArr = [1,2,3,4,5]

function indexReplace(arr, pos1, pos2){
   auxVar =  arr[pos1]
   arr[pos1] = arr[pos2]
   arr[pos2] = auxVar
   return arr
}
console.log(indexReplace(testArr, 0, 3))

// Ejercicio 10

const table = document.getElementById('table')

table.addEventListener('click', (x) => {
    x.target.classList.toggle('red');
    console.log(x.srcElement)
})

// Ejercicio 11

const listTwo = document.getElementById('listTwo')
listTwo.addEventListener('click', (x) => {
    x.target.classList.toggle('invisible');
    console.log(x.srcElement)
})

// Ejercicio 12

const filasTabla1 = document.querySelectorAll('.tabla1 div');

filasTabla1.forEach(fila => {
  fila.addEventListener('click', () => {
    fila.classList.toggle('blue')
  });
});

// Ejercicio 13
const btn1a = document.getElementById('notice__btn1')
const btn2b= document.getElementById('notice__btn2')
const btn3c = document.getElementById('notice__btn3')


btn1a.addEventListener('click', () => cambiarTamaño('notice__container1'))
btn2b.addEventListener('click', () => cambiarTamaño('notice__container2'))
btn3c.addEventListener('click', () => cambiarTamaño('notice__container3'))
function cambiarTamaño(clase){
    const element = document.getElementsByClassName(clase)
    for(let i = 0; i < element.length; i++){
        element[i].style.fontSize = '35px'
    }
}

// Ejercicio 15

const ancla = document.getElementById('ancla')

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')

btn1.addEventListener('click', () => {
    ancla.setAttribute('href', 'www.steam.com')
    ancla.textContent = 'STEAM'
})
btn2.addEventListener('click', () => {
    ancla.setAttribute('href', 'www.youtube.com')
    ancla.textContent = 'YOUTUBE'
})
btn3.addEventListener('click', () => {
    ancla.setAttribute('href', 'www.instagram.com')
    ancla.textContent = 'INSTAGRAM'
})


// Ejercicio 16

const strongElements = document.getElementsByTagName('strong');

for (let i = 0; i < strongElements.length; i++) {
     strongElements[i].addEventListener('click', (e) => {
      e.target.style.display = 'none';
     });
}

// Ejercicio 17 

const tabla = document.getElementById('tabla')

tabla.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'red'
})
tabla.addEventListener('mouseout', (e) => {
    e.target.style.backgroundColor = 'white';
  });