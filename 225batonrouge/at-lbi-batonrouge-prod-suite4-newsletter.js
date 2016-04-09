var baseURL = 'http://225batonrouge.com';
var site = '225batonrouge';

casper.test.begin('Suite #4: newsletter', function(){

	casper.start(baseURL, function(){

		console.log('------------------- Checking Newsletter -------------------');
		if (this.visible('.front-newsletter-box')) {
			this.test.assert(true, 'newsletter box is rendering correctly');
		} else {
			this.test.assert(false, 'newsletter box is not rendering correctly');	
		}
		casper.test.assertElementCount('.front-newsletter-box', 2, 'newsletter box x2 has been found.');	



	});

	casper.run(function() {
        casper.test.done();
    });
});
