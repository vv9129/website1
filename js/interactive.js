const box = document.querySelector('.box')

const colors = ['lightcoral', 'lightsalmon', 'lemonchiffon', 'lightgreen', 'paleturquoise', 'plum']
let index = 0

box.addEventListener('click', ()=> {
    box.style.backgroundColor = colors[index]
    index = index + 1

})
