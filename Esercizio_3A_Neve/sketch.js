
let fiocchi

function setup() {
	createCanvas(windowWidth, windowHeight)

	fiocchi = []

	// crea una variabile composta (es. richiamabile tramite fiocchi[0].px)
	for(let i=0; i<500;i++){
		fiocchi[i] = {
			px : random(0, width),
			py : random(-80),
			dim :random(20,40),
			vel : random(1,6),
			col : color(random(200,255), random(50,100), random(200,255))
		}

	}

	
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	// allinea il punto di spawn al centro del carattere
	background(100)
	textAlign(CENTER, CENTER)
	
	
	for(let i=0; i<fiocchi.length;i++){
		fill(fiocchi[i].col)
		// randomizza il movimento di caduta del fiocco
		fiocchi[i].px = fiocchi[i].px+random(-1.5,1.5)
		fiocchi[i].py = fiocchi[i].py+fiocchi[i].vel
	
		// quando il fiocco supera la fine della finestra 
		// viene ripristinato in cima
		if(fiocchi[i].py > height) {
			fiocchi[i].py = 0
		}
		
		// stampa il fiocco
		textSize(fiocchi[i].dim)
		text("*", fiocchi[i].px,fiocchi[i].py)
		
			
	}

	
}