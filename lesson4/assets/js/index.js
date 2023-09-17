const btn = document.querySelector('button')
let darkMode = localStorage.getItem('darkMode')

const enableDarkmode = () => {
    document.body.classList.add('dark')
    localStorage.setItem('darkMode', 'menim dark modum aktivdi')
}


const disabledDarkMode = () => {
    document.body.classList.remove('dark')
    localStorage.setItem('darkMode', null)
}

if (darkMode === 'menim dark modum aktivdi') {
    enableDarkmode()
}


const changeMode = () => {
    let darkMode = localStorage.getItem('darkMode')

    if (darkMode === 'menim dark modum aktivdi') {
        disabledDarkMode()
    }
    else {
        enableDarkmode()
    }
}

btn.addEventListener('click', changeMode)


let arr = [12, 24, 45]

let person = {
    name:'cf',
    age : 3
}

localStorage.setItem('MyArray', JSON.stringify(person))

console.log(JSON.parse(localStorage.getItem("MyArray")));

let a = 23.4567

console.log(a.toFixed(1));
console.log(a.toPrecision(3));

console.log(Math.floor(Math.random() * 10));