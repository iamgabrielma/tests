
var baseURL = 'http://225batonrouge.com';
var site = '225batonrouge';

var links = [];
var paginationLinks = [];

casper.test.begin('Suite #1: Checking scaffolding, links, images and general structure', function suiteOne(){

	function getLinks(){
		links = document.querySelectorAll('a');
		return Array.prototype.map.call(links, function(e){
			return e.getAttribute('href');
		});
	}

	casper.start(baseURL, function(){

		/* check all links */
		console.log('starting...');
		links = links.concat(this.evaluate(getLinks));
		console.log('A total of ' + links.length + ' links have been found.');
		// for (var i = links.length - 1; i >= 0; i--) {
		// 	console.log(links[i]);
		// }
		// checks valid links
		casper.then(function(){
			console.log('cleaning up links...and locating valid ones to check');
			var validElements = [];
			var re = new RegExp('http://www.225batonrouge.com\/.*');

			function replaceElement(element, index, array){
				if (re.test(element)) {
					validElements.push(array[index]);
				}
			}
			links.forEach(replaceElement);

			console.log('A total of ' + validElements.length + ' links to pages have been found.');		
		});

	});

	casper.run(function() {
        casper.test.done();
    });
});
