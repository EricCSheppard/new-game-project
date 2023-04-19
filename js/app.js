
const game = document.getElementById('canvas')

const ctx = game.getContext('2d')

game.setAttribute('width', getComputedStyle(game)['width'])
game.setAttribute('height', getComputedStyle(game)['height'])

game.height = 800

// Create class for pokers

class Poker {
    constructor(x, y, width, height, color) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
        this.poking = false
        this.render = function () {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
}

// Creates the pokers

const poker1 = new Poker(
    10,
    10,
    100,
    300,
    'maroon'
)


// Game Loop

const gameLoop = () => {
    ctx.clearRect(0,0, game.width, game.height)
    poker1.render()

}

// Interval 

let gameInterval

const runGameLoop = () => {
    gameInterval = setInterval(gameLoop, 30)
}

runGameLoop()