export default class Player {
    constructor(ctx, x, y, width, height) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.colour = '#1d3557'
        this.render_shot = 0
    }

    shoot() {
        this.render_shot = 1
    }

    render() {
        // Player
        this.ctx.beginPath()
        this.ctx.fillStyle = this.colour
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
        this.ctx.fill()

        // Shot
        if (this.render_shot) {
            this.render_shot = 0
            this.ctx.beginPath()
            this.ctx.moveTo(this.x + this.width/2, this.y)
            this.ctx.lineTo(this.x, 0)
            this.ctx.strokeStyle = this.colour
            this.ctx.lineWidth = 2
            this.ctx.stroke()
        }
    }
}
