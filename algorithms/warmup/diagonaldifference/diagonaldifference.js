/// Hacker Rank - Warmup
/// Diagonal Difference
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

function diagonalDifference(matrix) {

	var leftDiagonal  = 0;
	var rightDiagonal = 0;

	// Left diagonal
	for(var index = 0; index < matrix.length; index++) {

		leftDiagonal += matrix[index][index];

	}

	// Right diagonal
	for(var index = 0; index < matrix.length; index++) {

		rightDiagonal += matrix[index][matrix.length - index - 1];

	}

	return Math.abs(leftDiagonal - rightDiagonal);

}

/// -------
/// Program

var number = 0;
var matrix = null;
var ready  = false;

rl.on('line', function(line) {

	if(number == 0) {

		number = parseInt(line)
	
		matrix = [];

	} else if (number > 0) {

		matrix.push(line.split(' ').map(Number));

		number--;

		ready = number == 0;

	}

	if(ready == true) {

		console.log(diagonalDifference(matrix));

		ready = false;

	}

});
