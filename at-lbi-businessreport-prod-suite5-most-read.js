var baseURL = 'http://businessreport.com';
var site = 'businessreport';

casper.test.begin('Suite #5: Checking Most Read Block', function suiteOne(){

	casper.start(baseURL, function(){
	    casper.test.assertElementCount('.most-read', 1, 'Most read block has been found.');	
	});

	casper.run(function() {
        casper.test.done();
    });
});
