/// Hacker Rank - Warmup
/// Staircase
/// Author: Carlos L. Cuenca
/// Date: 10/26/2020

/// -------------------
/// stdin Configuration

const readline = require("readline")
const rl = readline.createInterface({

	input: process.stdin,
	output: process.stdout,
	terminal: false

});

/// --------------------
/// Function Definitions

function staircase(number) {

	var returnString = "";

	for(var line = 1; line <= number; line++) {

		for(var space = 0; space < number - line; space++) {

			returnString += ' ';

		}

		for(var symbol = 0; symbol < line; symbol++) {

			returnString += '#';

		}

		if(line < number) returnString += '\n';

	}

	console.log(returnString);

}

/// -------
/// Program

rl.on('line', function(line) {

	var number = parseInt(line);

	staircase(number);

});
