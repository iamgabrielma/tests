var baseURL = 'http://inregister.com';
var site = 'inregister';

var links = [];
var paginationLinks = [];

casper.test.begin('Suite #5: Checking Must-Read Block', function suiteOne(){

	casper.start(baseURL, function(){

		console.log('------------------- Checking Sidebar Must-Read Block Elements -------------------');
		
		if (this.resourceExists('avenue_rouge.png')) {
	        this.test.assert(true, 'Avenue Rouge logo is rendering correctly');	
	    } else {
	        this.test.assert(false, 'Avenue Rouge logo is not rendering correctly');	
	    }
	    casper.test.assertElementCount('.must-read-block', 4, '4of4 must-read blocks has been found.');	
	});


	casper.run(function() {
        casper.test.done();
    });
});
