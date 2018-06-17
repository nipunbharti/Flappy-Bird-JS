var bird;
var pipes = [];
function setup(){
	createCanvas(400, 600);
	bird = new Bird();
	pipes.push(new Pipe()); 
}

function draw(){
	background(0,255,182);

	for(var i=0;i<pipes.length;i++){
		pipes[i].show();
		pipes[i].update();
		if(pipes[i].off()){
			pipes.slice(i,1);
		}
		if(pipes[i].hits(bird)){
			location.reload();
			alert(pipes.length-1);
		}
	}

	bird.show();
	bird.update();

	if(frameCount%40 == 0){
		pipes.push(new Pipe()); 
	}
}

function keyPressed(){
	if(key == " "){
		bird.liftUp();
	}
}