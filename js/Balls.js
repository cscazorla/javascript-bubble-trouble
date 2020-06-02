import Ball from './Ball.js'

export default class Balls {
    constructor(ctx, width) {
        this.ctx = ctx
        this.width = width
        this.items = []
        this.score = 0

        this.ctx.font = '24px Monospace'
        this.ctx.textAlign = 'center'
    }

    get total() {
        return this.items.length
    }

    ball(i) {
        return this.items[i]
    }

    children() {
        return this.items
    }

    add(level, x, y, vx, vy = 300) {
        this.items.push(new Ball(this.ctx, level, x, y, vx, vy))
    }

    checkShoot(x) {
        for (let i = 0; i < this.items.length; i++) {
            let ball = this.items[i]
            if (ball.enabled && Math.abs(ball.x - x) < ball.radius) {
                this.split(i)
                break
            }
        }
    }

    split(index) {
        let ball = this.items[index]
        this.score += 10 * (6 - ball.level)
        ball.enabled = 0
        if (ball.level > 1) {
            this.add(ball.level - 1, ball.x, ball.y, ball.vx, -200)
            this.add(ball.level - 1, ball.x, ball.y, -ball.vx, -200)
        }
    }

    render() {
        for (let ball of this.items) {
            if (ball.enabled) ball.render()
        }

        
        this.ctx.fillStyle = '#1d3557'
        this.ctx.fillText('Score: ' + this.score, this.width / 2, 40)
    }

    update(dt) {
        for (let ball of this.items) {
            if (ball.enabled) {
                ball.update(dt)
            }
        }
    }
    
}
