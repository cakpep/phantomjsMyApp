
var page = require('webpage').create();
var system = require('system') , t, address;


// if (system.args.length === 1) {
//   console.log('Usage: loadspeed.js <some URL>');
//   phantom.exit();
// }
page.onResourceRequested = function(request) {
	//console.log('Request ' + JSON.stringify(request, undefined, 4));
};
page.onResourceReceived = function(response) {
	//console.log('Receive ' + JSON.stringify(response, undefined, 4));
}; 

t = Date.now();
address = system.args[1];

var url = 'http://redawning.dev/';
// var url = 'http://localhost';
var SSbaseDir = 'screenshoot/error/';
page.open(url, function (status) {
	console.log(url);
	console.log("Status: " + status);
	if(status === "success") {
		//speed
	   t = Date.now() - t;
	   console.log('Loading ' + system.args[1]);
	   console.log('Loading time ' + t + ' msec');
	} else {
		page.render(SSbaseDir+'error_loading.png');
	    console.log('FAIL to load the address');
	    phantom.exit(); //close process
	}

	//check document title 
	var title = page.evaluate(function() {
	    return document.title;
	});	
	console.log('Page title is ' + title);

	//get text element by id
	var myCarousel = page.evaluate(function() {
      return document.getElementById('edit-submit--2').textContent;
    });	
    console.log('button = '+myCarousel);










  
	phantom.exit(); //close process
});