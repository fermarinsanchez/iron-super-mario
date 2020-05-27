class Background {
  constructor(ctx) {
    this._ctx = ctx

    this.x = 0
    this.y = 0

    this.vx = -2
    this.vy = 0

    this.ax = 0
    this.ay = 0

    this.w = this._ctx.canvas.width
    this.h = this._ctx.canvas.height

    this._img = new Image()
    this._img.src = 'http://www.vbforums.com/attachment.php?attachmentid=113103&d=1398112502'
  }

  draw() {
    // draw image in X context.drawImage(img,x,y,width,height);
    // draw image again in in X + ¿?
    this._ctx.drawImage(
      this._img,
      this.x,
      this.y,
      this._ctx.canvas.width,
      this._ctx.canvas.height
    )

    this._ctx.drawImage(
      this._img,
      this.x + this._ctx.canvas.width,
      this.y,
      this._ctx.canvas.width,
      this._ctx.canvas.height
    )
  }

  move() {
    this.vx += this.ax
    this.vy += this.ay

    this.x += this.vx
    this.y += this.vy

    // if image out of canvas.... restart!
    if ( this.x + this._ctx.canvas.width <= 0) {
      this.x = 0
    }
  }
}