function Vehicle (planetSurfaceSize){
	var directions = ["NORTH", "EAST", "SOUTH", "WEST"]
	var currentDirection = 0;
	var currentPosition = {
		x:0,
		y:0
	}
	var planetSurface = [];

	for(var i = 0 ; i<planetSurfaceSize ; i++){
		planetSurface[i] = new Array(planetSurfaceSize);
	}

	var canMoveToPosition = function(position){
		if(planetSurface[position.x][position.y] ==" "){
			return true;
		}else{
			return false;
		}
	}
	var updateDirection = function(newDirection){
		if(newDirection ==="R"){
			if(currentDirection===3){
				currentDirection = 0;
				return;
			}else{
				currentDirection++	
			}
		}else{
			if(currentDirection===0){
				currentDirection = 3;
				return;
			}else{
				currentDirection--;
			}	
		}
	}

	var getNextPosition = function(moveForward){

		var previousPosition;
		previousPosition = currentPosition;
		
		console.log(previousPosition)
		console.log(currentPosition)
		if(!moveForward){
			var directionContainer = currentDirection; 
			
			if(currentDirection==0){
				currentDirection = 2
			}else if(currentDirection==1){
				currentDirection = 3
			}else if(currentDirection==2){
				currentDirection = 0
			}else{
				currentDirection = 1
			}
		}	

		switch(currentDirection){
			case 0:
				if(currentPosition.y + 1 == planetSurface[currentPosition.x].length){
					currentPosition.y = 0;
				}else{
					currentPosition.y++;
				}
				break;
			case 1:
				if(currentPosition.x + 1 === planetSurface.length){
					currentPosition.x = 0;
				}else{
					currentPosition.x++;
				}
				break;
			case 2:
				if(currentPosition.y - 1 < 0){
					currentPosition.y = planetSurface[currentPosition.x].length-1;
				}else{
					currentPosition.y--;
				}
				break;
			case 3:
				if(currentPosition.x -1 < 0 ){
					currentPosition.x = planetSurface.length-1;
				}else{
					currentPosition.x--;
				}
				break;
		}

		if(!moveForward){
			currentDirection= directionContainer; 
		}
		if(planetSurface[currentPosition.x][currentPosition.y]=="X"){
			console.log("Can't move due to an obstacle");
			return getNextPosition(false);
		}else{
			console.log(currentPosition)	
		}
		
	}

	return {
		setDirection : function(newDirection) {
			updateDirection(newDirection);
		},
		getDirection : function(){
			return directions[currentDirection]
		},
		getCurrentPosition : function(){
			return currentPosition;
		},
		advance : function(way){
			if(way==="F"){
				return getNextPosition(true);
			}else{
				return getNextPosition(false);	
			}
			
		},
		canMove : function(){
			return canMoveToPosition(position);
		},
		setObstacle : function(x, y){
			planetSurface[x][y] = "X"
		},
		parseCommand : function (string){
			
			for(var i = 0 ; i<string.length; i++){
				if(string[i] ==="F"){
					getNextPosition(true);
				}else if(string[i] ==="B"){
					getNextPosition(false);
				}else{
					updateDirection(string[i]);
				}

			}
		}
	}
}
