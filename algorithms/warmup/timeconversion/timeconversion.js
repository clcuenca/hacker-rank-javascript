/// Hacker Rank - Warmup
/// Time Conversion
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

function timeConversion(time) {

    var hours      = parseInt(time[0] + time[1]);
    var minutes    = parseInt(time[3] + time[4]);
    var seconds    = parseInt(time[6] + time[7]);
    var timePeriod = (time[8] + time[9]);

    var newTime = "";

    hours = hours % 12;

    if (timePeriod == "PM") {

    	hours += 12;

    }

    if (hours < 10) {

    	newTime += ("0" + hours.toString());

    } else {

    	newTime += hours.toString();

    }

    newTime += ":"

    if (minutes < 10) {

    	newTime += ("0" + minutes.toString());

    } else {

    	newTime += minutes.toString();

    }

    newTime += ":"

    if(seconds < 10) {

    	newTime += ("0" + seconds.toString());

    } else {

    	newTime += seconds.toString();

    } 

    return newTime

}

/// -------
/// Program

rl.on('line', function(line) {

	var array = line.split(' ').map(Number);

});
