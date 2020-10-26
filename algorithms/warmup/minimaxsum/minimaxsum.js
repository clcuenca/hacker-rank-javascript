/// Hacker Rank - Warmup
/// Mini Max Sum
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

function miniMaxSum(array) {

	var minimumSum = 9999999999;
	var maximumSum = -9999999999;
	var n 		   = array.length;
	var choose     = 4;

	if(n < choose) return;

	var combinations = [];

	for(var j = 0; j < choose; j++) {

		combinations.push(j);

	}

	combinations.push(n);
	combinations.push(0);

	var j = 0;

	while(j < choose) {

		var sum = 0;

		for(var index = 0; index < choose; index++) {

			sum += array[combinations[index]];

		}

		if(sum < minimumSum) minimumSum = sum;
		if(sum > maximumSum) maximumSum = sum;

		j = 0

		while(combinations[j] + 1 == combinations[j + 1]) {

			combinations[j] = j;

			j++;

		}

		combinations[j]++;

	}

	console.log(minimumSum.toString() + " " + maximumSum.toString());

}

/// -------
/// Program

rl.on('line', function(line) {

	var array = line.split(' ').map(Number);



});
