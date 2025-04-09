const windowHeight = window.innerHeight
const windowWidth = window.innerWidth


const ball = document.createElement('div')
document.body.appendChild(ball)
const ballRadius = 40
let ballXPosition = windowWidth / 2 - ballRadius
let ballYPosition = windowHeight / 2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYDirection = 1

const LPaddle = document.createElement('div')
document.body.appendChild(LPaddle)
let LPaddleWidth = 20
let LPaddleHeight = 100
let LPaddleSpeed = 10
let LPaddleYPosition = windowHeight / 2 - LPaddleHeight / 2
let LPaddleXPosition = 70

let score = 0 // Display score and increase score by 1 every time ball hits the paddle
let level = 1 // display level and increase level by 1 every 10 scores
// as level increase, increase ball speed
// if ball gets past the paddle, end the game: ball can stop or disappear
// optional: sound fx

const scoreText = document.createElement('div')
document.body.appendChild(scoreText)

const levelText = document.createElement('div')
document.body.appendChild(levelText)

createBall()

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
    let ballTop = ballYPosition
    let ballBottom = ballYPosition + 2 * ballRadius
    let ballLeft = ballXPosition
    let LPaddleTop = LPaddleYPosition
    let LPaddleBottom = LPaddleYPosition + LPaddleHeight
    let LPaddleRight = LPaddleXPosition + LPaddleWidth

    if((ballBottom >= LPaddleTop) && (ballTop <= LPaddleBottom) && (ballLeft <= LPaddleRight) && (ballXDirection == -1) ){
            ballXDirection = ballXDirection * -1
            updateText()
        }
}


function createBall(){
    ball.style.height = `${2*ballRadius}px`
    ball.style.width = `${2*ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "#960058"
    ball.style.position = "absolute"
    ball.style.top = `${windowHeight/2 - ballRadius}px`
    ball.style.left = `${windowWidth/2 - ballRadius}px`
}

createLPaddle()
function createLPaddle() {
    LPaddle.style.height = `${LPaddleHeight}px`
    LPaddle.style.width = `${LPaddleWidth}px`
    LPaddle.style.backgroundColor = '#8f9600'
    LPaddle.style.position = 'absolute'
    LPaddle.style.left = `${LPaddleXPosition}px`
    LPaddle.style.top = `${LPaddleYPosition}px`
}

wKey = false
sKey = false

document.addEventListener('keydown', (event)=> {
    if (event.key == 'w') {
        wKey = true
        console.log(wKey)
    }
    if (event.key == 's') {
        sKey = true
    }
})

document.addEventListener('keyup', (event) => {
    if (event.key == 'w') {
        console.log(wKey)
        wKey = false
    }
    if (event.key == 's') {
        sKey = false
    }
})

function moveLPaddle(){
    if(wKey == true && LPaddleYPosition > 0){
        LPaddleYPosition = LPaddleYPosition - LPaddleSpeed
    }
    if (sKey == true && LPaddleYPosition < windowHeight - LPaddleHeight) {
        LPaddleYPosition = LPaddleYPosition + LPaddleSpeed
    }
    LPaddle.style.top = `${LPaddleYPosition}px`
}

function animate(){
    moveBall()
    moveLPaddle()
    requestAnimationFrame(animate)

}

animate()


function createText(){
    scoreText.innerHTML = `SCORE: ${score}`
    scoreText.style.position = 'absolute'
    scoreText.style.top = '30px'
    scoreText.style.left = '50px'
    scoreText.style.color = 'black'
    scoreText.style.fontSize = '30px'

    levelText.innerHTML = `LEVEL: ${level}`
    levelText.style.position = 'absolute'
    levelText.style.top = '30px'
    levelText.style.right = '50px'
    levelText.style.fontSize = '30px'
}

function updateText(){
    score = score + 1
    scoreText.innerHTML = `SCORE: ${score}`

    if (score % 10 == 0){
        level = level + 1
        levelText.innerHTML = `LEVEL: ${level}`
        document.body.style.backgroundColor = '#ffe7c7'
    }

}

createText()


