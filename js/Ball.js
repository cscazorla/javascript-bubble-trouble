export default class Ball {
    constructor(ctx, level, x, y, vx, vy = 300) {
        this.ctx = ctx
        this.level = level
        this.x = x
        this.y = y
        this.radius = 10 * this.level
        this.colours = ['#AAC7DA', '#8EB5CD', '#71A2C1', '#5590B4', '#457b9d']

        this.enabled = 1
        this.vx = vx
        this.vy = vy
        this.ay = 300
    }

    update(dt) {
        this.vy += this.ay * dt
        this.x += this.vx * dt
        this.y += this.vy * dt
    }

    resolveCollisionWithFloor(floor) {
        const dy = floor.y - this.y

        if (dy < this.radius) {
            this.y = floor.y - this.radius
            this.vy *= -1
        }
    }

    resolveCollisionWithWorldBounds(width) {
        if (this.x - this.radius <= 0) {
            this.x = this.radius
            this.vx *= -1
        }

        if (this.x + this.radius >= width) {
            this.x = width - this.radius
            this.vx *= -1
        }
    }

    hitPlayer(player) {
        const cx = Math.max(player.x, Math.min(this.x, player.x + player.width))
        const cy = Math.max(
            player.y,
            Math.min(this.y, player.y + player.height)
        )

        const dx = cx - this.x
        const dy = cy - this.y
        const squaredDist = Math.pow(dx, 2) + Math.pow(dy, 2)

        return squaredDist < Math.pow(this.radius, 2) ? true : false
    }

    render() {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
        this.ctx.fillStyle = this.colours[this.level - 1]
        this.ctx.fill()
    }
}
