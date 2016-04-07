
var baseURL = 'http://inregister.com';
var site = 'inregister';

var links = [];
var paginationLinks = [];

casper.test.begin('Suite #4: Newsletter and subscription', function suiteOne(){

	casper.start(baseURL, function(){

		console.log('------------------- Checking Newsletter & Subscription Elements -------------------');

			if (this.visible('newsletter-container')) {
				this.test.assert(true, 'Test 1/1 Newsletter Container is rendering correctly');
			} else {
				this.test.assert(false, 'Newsletter Container is not rendering correctly');	
			}

			casper.then(function(){

			});

	casper.run(function() {
        casper.test.done();
    });

	});
});

