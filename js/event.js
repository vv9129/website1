const element1 = document.getElementById('element1')
const element2 = document.getElementById('element2')
const element3 = document.getElementById('element3')


element1.addEventListener('click', ()=>{
    element1.innerHTML = "I've been clicked! <br> try double clicking me."
})

element1.addEventListener('dblclick', ()=>{
    element1.innerHTML = "I've been double clicked <br> try single clicking me."
})


element2.addEventListener('mouseover', ()=>{
    element2.style.color = "beige"
    element2.style.backgroundColor = "olive"
})

element2.addEventListener('mouseout', ()=>{
    element2.style.color = "rosybrown"
    element2.style.backgroundColor = "oldlace"
})

let positionY = 0;
let positionX = 0;

/*element to use when talking about the button, use document to talk about in general*/
document.addEventListener('keyup', (event)=>{
    console.log(event.key)

    if (event.key == 'ArrowDown') {

    }
})


