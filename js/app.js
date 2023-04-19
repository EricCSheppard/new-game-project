
const game = document.getElementById('canvas')

const ctx = game.getContext('2d')

game.setAttribute('width', getComputedStyle(game)['width'])
game.setAttribute('height', getComputedStyle(game)['height'])

game.height = 400
game.width = 600

// Create class for pokers

class Poker {
    constructor(x, y, width, height, color) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.speedX = 0
        this.speedY = 0
        this.color = color
        this.poking = false
        this.render = function () {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
}

// create class for objects

class Object {
    constructor(x, y, width, height, color) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
        this.poked = false
        this.render = function () {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
}

// Creates the pokers

const poker1 = new Poker(
    10,
    200,
    100,
    20,
    'maroon'
)

const poker2 = new Poker(
    400,
    200,
    100,
    20,
    'yellow'
)

// Creates the objects

const objectTop = new Object(
    200,
    100,
    50,
    50,
    'purple'
)

const objectMid = new Object(
    200,
    200,
    50,
    50,
    'purple'
)

const objectBot = new Object(
    200,
    300,
    50,
    50,
    'purple'
)


// Game Loop

const gameLoop = () => {
    ctx.clearRect(0,0, game.width, game.height)
    poker1.render()
    poker2.render()
    objectBot.render()
    objectMid.render()
    objectTop.render()
    // poker1.speedX += 1

}

// Interval 

let gameInterval

const runGameLoop = () => {
    gameInterval = setInterval(gameLoop, 30)
}

runGameLoop()