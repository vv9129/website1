const element1 = document.getElementById('element1')
const element2 = document.getElementById('element2')
const element3 = document.getElementById('element3')
const element4 = document.getElementById('element4')



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
        positionY = positionY + 5
    }
    else if (event.key == 'ArrowUp') {
        positionY = positionY - 5
    }
    else if (event.key == 'ArrowLeft') {
        positionX = positionX + 5
    }
    else if (event.key == 'ArrowRight') {
        positionX = positionX - 5
    }
    element3.style.top = `${positionY}px`
    element3.style.right = `${positionX}px`

})

element4.addEventListener('click', ()=>{
    element4.style.width = "10px"
    element4.style.height = "10px"
    element4.innerHTML = ""
    element.style.opacity = .3
})

document.addEventListener('keyup', (event)=>{
    if (event.key == 'j') {
        element4.style.width = "300px"
        element4.style.height = "50px"
        element4.innerHTML = "<h4>Click me to make me small <br> Press 'j' to brick me back.</h4>"
        element.style.opacity = 1
    }
})


const list = ['running', 'paused']
let index = 0
element5.addEventListener('click', ()=>{
    element5.style.animationPlayState = list[index]
    index = (index + 1) % 2
})


