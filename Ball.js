class Ball{
	constructor(args){
		this.r= args.r || 50
		this.p= args.p || createVector(width/2,height/2)
		this.v= args.v || p5.Vector.random2D().mult(5)
		this.a= args.a || createVector(0,0)
		this.color = random(["#e63946","#f1faee","#a8dadc","#1d3557"])
		this.mode = random(["happy","sad"])
		this.rId = random(10000)
	}
	draw(){
		if (this.dead){
			return
		}
		push()
			translate(this.p.x,this.p.y)
			fill(this.color)
		  noStroke()
			ellipse(0,0,this.r)
		  if(this.mode=="happy"){
					fill(255)
					ellipse(0,0,this.r/2,this.r/2)
					fill(0)
					ellipse(0,0,this.r/3,this.r/3)
			
			}else{
					fill(255)
					arc(0,0,this.r/2,this.r/2,0,PI)
					fill(0)
					arc(0,0,this.r/3,this.r/3,0,PI)
			}
		  stroke(this.color)
			strokeWeight(6)
		  noFill()
			for(var o=0;o<8;o++){
					rotate(PI/3)
					beginShape()
						for(var i=0;i<10;i+=2){
							vertex(this.r/2+i*1.5,sin(i/5+-frameCount/5+this.rId)*20)
						}
					endShape()
				}
			
		pop()
	}
	update(){
		this.p.add(this.v)
		this.v.add(this.a)
		
		// let mouseV = createVector(mouseX,mouseY)
		// let delta = mouseV.sub(this.p).limit(2)
		// this.p.add(delta)
		
		if(this.mode=="happy"){
			this.p.y+=sin(frameCount/(10+this.rId/100))*5
		}
		
		// if(this.mode=="carzy"){
		// 	this.v.x+=random(-5,10)
		// 	this.v.y+=random(-5,10)
		// }
		
		
		this.v.mult(0.99)
    if(this.p.y>height){
			this.v.y = -abs(this.v.y)
		}
	}
	escape(){
	 this.v.x = random(-10,10)
	}
	setHappy(){
		this.mode="happy"
	}
	setMode(mode){
		this.mode=mode
	}
	isBallInRange(x,y){
		let d =dist(x,y,this.p.x,this.p.y)
		if(d<this.r){
			return true
		}else{
			return  false
		}
	}
}