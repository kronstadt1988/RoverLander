ROVER 

1- How to Run the tests :
	
	1- You must have Karma globally to run the tests.
	2- Under rover folder, run karma start karma.conf.js

2- Vehicle Class

	Constructor : One parameter. Size of the planet. (Every planet is a Matrix)

	Private Methods :
		getNextPosition() : Takes one parameter, true, to go forward or false to go backwards

		updateDirection(): Call back for setDirection() public Method

	Public Methods:

		parseCommand() : Takes a String to parse all the required commands. 

			Example : 
				var vehicle = new Vehicle(3);

				vehicle.parseCommand("FFRFF"); // Will result in position (2,2) because:
					
					F ==> Moves from (0, 0) to the North. Final position ==> (1,0)
					F ==> Moves from (1, 0) to the North. Final position ==> (2,0)
					R ==> Turns the direction to the Right, heading East
					F ==> Moves from (2, 0) to the East. Final position ==> (2,1)
					F ==> Moves from (2, 1) to the East. Final position ==> (2,2)

		setObstacle() : Takes two parameters, X and Y to introduce an obstacle into the Planet Matrix.

		advance () : Takes one parameter, "F" to go forward or "B" to go backwards.

		getCurrentPosition() : Which  returns the current position of the Vehicle into the Planet Matrix.

		setDirection () : Takes one parameter, "R" to turn Right or "L" to turn Left.

		getDirection(): Gets the current Direction (e.g : "NORTH").

3- Getting on with Vehicle object

	If we want to play with the vehicle, we've got two options:

	1- Use the parseCommand method which is able to handle "complex" commands with more than one movement

		var vehicle = new Vehicle(5) // Planet of 5 X 5 size. 

		vehicle.parseCommand("FFR")


	2- Use one command each time

		var vehicle = new Vehicle(5);

		vehicle.advance("F")
		vehicle.advance("F")
		vehicle.setDirection("R")

	3- Obstacles:

		If you set an obstacle:

		var vehicle = new Vehicle(5);

		vehicle.setObstacle(0,1)

		vehicle.advance("F")

		The console will return that you are not able to move to that position