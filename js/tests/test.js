describe('Vehicle related tests', function(){
	it('Vehicle is able to set direction to the Right', function(){
		var vehicle = new Vehicle(2);
		// All vehicles are initialized by default as North for direction
		vehicle.setDirection("R");
		expect(vehicle.getDirection() === "EAST").toBeTruthy();
		
		vehicle.setDirection("R");
		expect(vehicle.getDirection() === "SOUTH").toBeTruthy();
		
		vehicle.setDirection("R");
		expect(vehicle.getDirection() === "WEST").toBeTruthy();
		
		vehicle.setDirection("R");
		expect(vehicle.getDirection() === "NORTH").toBeTruthy();
	});
	
	it('Vehicle is able to set direction to the Left', function(){
		var vehicle = new Vehicle(2);
		// All vehicles are initialized by default as North for direction

		vehicle.setDirection("L");
		expect(vehicle.getDirection() === "WEST").toBeTruthy();

		vehicle.setDirection("L");
		expect(vehicle.getDirection() === "SOUTH").toBeTruthy();

		vehicle.setDirection("L");
		expect(vehicle.getDirection() === "EAST").toBeTruthy();

		vehicle.setDirection("L");
		expect(vehicle.getDirection() === "NORTH").toBeTruthy();
	});

	it('Vehicle is able to move forward and update position', function(){
		var vehicle = new Vehicle(2);
		// All vehicles are initialized by default as North for direction

		vehicle.advance("F");
		expect(vehicle.getCurrentPosition().x == 0 && vehicle.getCurrentPosition().y ==1 ).toBeTruthy()
	});

	it('Vehicle is able to set direction a direction and update position', function(){
		var vehicle = new Vehicle(2);
		// All vehicles are initialized by default as North for direction

		vehicle.setDirection("R");
		vehicle.advance("F");

		expect(vehicle.getCurrentPosition().x == 1 && vehicle.getCurrentPosition().y == 0 ).toBeTruthy()
	});

	it('Vehicle is able to parse complex commands', function(){
		var vehicle = new Vehicle(3);
		// All vehicles are initialized by default as North for direction

		vehicle.parseCommand("FFF")

		expect(vehicle.getCurrentPosition().x == 0 && vehicle.getCurrentPosition().y == 0 ).toBeTruthy()
	});
	
})