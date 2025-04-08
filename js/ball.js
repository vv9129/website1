const windowHeight = window.innerHeight
const windowWidth = window.innerWidth


const ball = document.createElement('div')
document.body.appendChild(ball)
const LPaddle = document.createElement('div')
document.body.appendChild(LPaddle)
let LPaddleWidth = 20
let LPaddleHeight = 100
let LPaddleSpeed = 20


const ballRadius = 50

let ballXPosition = windowWidth / 2 - ballRadius
let ballYPosition = windowHeight / 2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYDirection = 1

let LPaddleYPosition = windowHeight / 2 - LPaddleHeight / 2

createBall()
setInterval(moveBall, 10)

function moveBall(){
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.left = `${ballXPosition}px`
    ball.style.top = `${ballYPosition}px`
    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius) {
        ballYDirection = ballYDirection * -1
    }
    if (ballXPosition < 0 || ballXPosition > windowWidth - 2 * ballRadius) {
        ballXDirection = ballXDirection * -1
    }
    //if (ball.style.top <= LPaddle.style.top && ball.style.bottom >= LPaddle.style.bottom && )
}


function createBall(){
    ball.style.height = `${2*ballRadius}px`
    ball.style.width = `${2*ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "pink"
    ball.style.position = "absolute"
    ball.style.top = `${windowHeight/2 - ballRadius}px`
    ball.style.left = `${windowWidth/2 - ballRadius}px`
}

createLPaddle()
function createLPaddle() {
    LPaddle.style.height = `${LPaddleHeight}px`
    LPaddle.style.width = `${LPaddleWidth}px`
    LPaddle.style.backgroundColor = 'blue'
    LPaddle.style.position = 'absolute'
    LPaddle.style.left = "50px"
    LPaddle.style.top = `${LPaddleYPosition}px`
}

document.addEventListener('keyup', (event)=> {
    if (event.key == 'w') {
        if (LPaddleYPosition <= 0) {
            LPaddleYPosition = 0
        }
        else {
            LPaddleYPosition = LPaddleYPosition - LPaddleSpeed
        }
    }
    if (event.key == 's') {
        if (LPaddleYPosition >= windowHeight - LPaddleHeight) {
            LPaddleYPosition = windowHeight - LPaddleHeight
        }
        else {
            LPaddleYPosition = LPaddleYPosition + LPaddleSpeed
        }
    }
    LPaddle.style.top = `${LPaddleYPosition}`
})
