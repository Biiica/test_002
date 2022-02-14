
var ball
var balls=[]
var bullets =[]
var shipP
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	for (var i=0;i<80;i++){
		let ball = new Ball({
			r: random(100),
			p: createVector(random(width),random(height))
		})
		balls.push(ball)
	}
	shipP = createVector(width/2,height/2)
}
function windowResized(){
	resizeCanvas(windowWidth,windowHeight)
}

function draw() {
	background(0)
	if (keyIsPressed){
		if (key=="ArrowLeft"){
			shipP.x-=5
		}
		if (key=="ArrowRight"){
			shipP.x+=5
		}
		if (key=="ArrowUp"){
			shipP.y-=5
		}
		if (key=="ArrowDown"){
			shipP.y+=5
		}
		
	}
	for(ball of balls){
		ball.update()         
		ball.draw()
// 		if(ball.isBallInRange()){
// 			ball.color = "#41f25e"
// 			ball.setMode("crazy")
// 		}
		  for(let bullet of bullets){
				if(!ball.dead && !bullet.dead){
					let hitResults = ball.isBallInRange(bullet.p.x,bullet.p.y)
					if(hitResults){
						ball.color = "#41f25e"
						ball.dead = true
						bullet.dead = true
				}
			}
					
			}
		
	}
  for(let bullet of bullets){
		bullet.update()
		bullet.draw()
	}
	rectMode(CENTER)
	fill("#ffc03a")
	rect(shipP.x,shipP.y,50)
}
function mousePressed(){
	let bullet = new Bullet({})
	bullets.push(bullet)
	// let ball = new Ball({
	// 		r:random(10,100),
	// 		p:createVector(mouseX,mouseY)
	// 	})
	// 	balls.push(ball)
	// for(ball of balls){
	// 	ball.setHappy()
	// 	ball.escape()
	// 	if (ball.isBallInRange()){
	// 		ball.color = "#41f25e"
	// 		ball.setMode("crazy")
	// 	}
		
}
function keyPressed(){
	if(key==" "){
		let bullet = new Bullet({})
	bullets.push(bullet)
	}
	
}