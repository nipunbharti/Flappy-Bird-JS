function Bird(){
	this.y = height/2;
	this.x = 64;
	this.gravity = 0.2;
	this.velocity = 0;
	this.lift = -10;
	this.show = () => {
		fill(255,255,0);
		ellipse(this.x, this.y, 32, 32);
	}

	this.update = () => {
		this.velocity += this.gravity
		this.velocity += 0.5;
		this.y += this.velocity;

		if(this.y > height){
			this.y = height;
			this.velocity = 0;
		}

		if(this.y < 0){
			this.y = 0;
			this.velocity = 0;
		}
	}

	this.liftUp = () => {
		this.velocity = this.lift;
		this.y += this.velocity;
	}
}