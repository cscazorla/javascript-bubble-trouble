export default class Floor {
    constructor(ctx, x, y, width, height) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.colour = '#e63946'
    }

    render() {
        this.ctx.beginPath()
        this.ctx.fillStyle = this.colour
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
        this.ctx.fill()
    }
}
