const container = document.getElementById('container')
const text = document.getElementById('text')

breatheAnimation()
setInterval(breatheAnimation, 10000)

function breatheAnimation() {
    text.innerHTML = 'breathe in'
    container.classList.remove('shrink')
    container.classList.add('grow')

    setTimeout(() => {
        text.innerHTML = 'hold'
    }, 4000)

    setTimeout(() => {
        text.innerHTML = 'breathe out'
        container.classList.remove('grow')
        container.classList.add('shrink')
    }, 6000)
}

breatheAnimation()
breatheAnimation()
