window.onload = function(){

	var ball = function(){
		this.x = [];
		this.y = [];
		this.r = [];
		this.xVel = [];
		this.yVel = [];
		this.animate = function(){
			for(var s = 0; s < 1000; s++){
				this.x[s]+=this.xVel[s];
				this.y[s]+=this.yVel[s];
			}
		}
		this.collision = function(){
			for(var c = 0; c<1000; c++){
				if(this.x[c] > 330){
					this.xVel[c] *= -1;
				}

				else if(this.x[c] < 0){
					this.xVel[c] *= -1;
				}

				else if(this.y[c] < 0){
					this.yVel[c] *= -1;
				}

				else if(this.y[c] > 150){
					this.yVel[c] *= -1;
				}
			}
		}
	}

	function setColor(ctx,color){
		ctx.fillStyle = color;
	}

	function getCanvas(){
		return document.getElementById('canvas');
	}

	function getContext(canvas){
		return canvas.getContext('2d');
	}

	function drawCircle(ctx,x,y,r){
		ctx.beginPath();
		ctx.arc(x,y,r,0,2*Math.PI);
		ctx.fill();
	}

	function clearCanvas(ctx){
		ctx.clearRect(0,0,1000,1000);
	}

	function generateRandom(min,max){
		return Math.floor(Math.random() * max) + min ;
	}

	setTimeout(actionPerformed,25);

	var ball = new ball();
	var numberOfBalls = 2;

	loadObject(ball,numberOfBalls);

	var colors = ['blue','green','red','orange','yellow','purple','pink','white'];

	function loadObject(ball,numberOfBalls){
		for(var g=0; g<numberOfBalls; g++){
			if(
				ball.x[g]!=null 
				&& ball.y[g] !=null 
				&& ball.r[g] !=null 
				&& ball.xVel[g] !=null
				&& ball.yVel[g] !=null
			  ){
			   
			   }else{
			   		var x = generateRandom(1,250);
					var y = generateRandom(1,200);
					var r = generateRandom(1,10);
					var xVel = generateRandom(-1,1);
					var yVel = generateRandom(-1,1);
					ball.x[g] = x;;
					ball.y[g]=y;
					ball.r[g]=r;
					ball.xVel[g]=xVel;
					ball.yVel[g]=yVel;
			   }
		}
	}

	document.getElementById('plus').onclick=function(){
		numberOfBalls+=5;
		loadObject(ball,numberOfBalls);
	}

	document.getElementById('minus').onclick=function(){
		numberOfBalls-=5;
		loadObject(ball,numberOfBalls);
	}

	function actionPerformed(){

		var canvas = getCanvas();
		var ctx = getContext(canvas);

		clearCanvas(ctx);

		var cLength = colors.length;
		var c = 0;
		for(var i = 0; i<numberOfBalls; i++){
			if(c>cLength)
				c = 0;
			setColor(ctx,colors[c]);
			drawCircle(ctx,ball.x[i],ball.y[i],ball.r[i]);
			c++;
		}

		ball.animate();
		ball.collision();

		setTimeout(actionPerformed,25)
		
	}


}
