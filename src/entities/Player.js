
import Circle from './Circle.js'

export default class Player extends Circle {

  constructor(x,y){
    super(x,y,30,"transparent")
    this.r2 = this.radius*2
    this.fillCircleColor = "#2D1149"
    this.fillCharColor = "#5131CC"
  }
  
}



