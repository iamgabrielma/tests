var baseURL = 'http://businessreport.com';
var site = 'businessreport';
var links = [];

casper.test.begin('Suite #1: Checking pages', function suiteOne(){

	function getLinks(){
		links = document.querySelectorAll('a');
		return Array.prototype.map.call(links, function(e){
			return e.getAttribute('href');
		});
	}

	casper.start(baseURL, function(){

		console.log('starting...');
		links = links.concat(this.evaluate(getLinks));
		console.log('A total of ' + links.length + ' links have been found.');

		casper.then(function(){
			console.log('cleaning up links...and locating valid ones to check');
			var validElements = [];
			var re = new RegExp('https://www.businessreport.com\/.*');

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
