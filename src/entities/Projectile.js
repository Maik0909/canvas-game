const midX = window.innerWidth/2, midY = window.innerHeight/2

export default class Projectile{

  constructor({x,y,radius,color,target = null,velocity = null, type = "classic"}) {
    super(x,y,radius,color)
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.target = target
    this.angle = null
    this.velocity = velocity ?? this.calcInitialVelocity()
    this.id = "_" + Math.random().toString(36).substring(2, 9)
    this.type = type  // ["classic","reverse","cross"]
    this.acceleration = this.target !== null ?  4 : this.accelerate()
  }

  draw(ctx){
    ctx.beginPath()
    ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
    ctx.fillStyle = this.color 
    ctx.fill()
  }
  accelerate(){
    return this.radius <= 5 ? 3.75 : this.radius  <= 10 ?  3.25 : this.radius <= 15 ? 
    3 : this.radius <= 25 ? 2.5 : this.radius <= 40 ? 2 : this.radius <= 60 ? 1.5 : 1  
  }

  update(){
    this.x += this.velocity.x //* (this.accelerate())
    this.y += this.velocity.y //* (this.accelerate())
  }

  isWithinRange(){

    return (this.x <= window.innerWidth + this.radius && 
    this.x+this.radius >= 0  && 
    this.y  <= window.innerHeight + this.radius && 
    this.y+this.radius >= 0 )

    // return (this.x + this.radius <= window.innerWidth && 
    //   this.x-this.radius > 0 && 
    //   this.y + this.radius <= innerHeight && 
    //   this.y-this.radius > 0 )
  }

  calcInitialVelocity(){
    this.angle = !this.target  ?  Math.atan2(midY-this.y,midX-this.x) : Math.atan2(this.target.y-this.y,this.target.x-this.x)
    return {
      x: Math.cos(this.angle) * this.accelerate(),
      y: Math.sin(this.angle) * this.accelerate(),
    }
  }
}