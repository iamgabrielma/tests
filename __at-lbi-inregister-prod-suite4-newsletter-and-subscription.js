/* not passing through for some reason*/
var baseURL = 'http://inregister.com';
var site = 'inregister';

var links = [];
var paginationLinks = [];

casper.test.begin('Suite #4: Newsletter and subscription', function suiteOne(){

	casper.start(baseURL, function(){

		console.log('------------------- Checking Newsletter & Subscription Elements -------------------');

			if (this.visible('.newsletter-container')) {
				this.test.assert(true, 'Newsletter Container is rendering correctly');
			} else {
				this.test.assert(false, 'Newsletter Container is not rendering correctly');	
			}

			casper.then(function(){
				// 1/3 inregister_logo.png
				if (this.resourceExists('inregister_logo.png')) {
			        this.test.assert(true, '1/3 InRegister logo is rendering correctly');	
			    } else {
			        this.test.assert(false, 'InRegister logo is not rendering correctly');	
			    }
			    //2/3 #mce-EMAIL

			    //3/3 <input value="Submit" name="subscribe" class="btn btn-default" type="submit">
			});

	casper.run(function() {
        casper.test.done();
    });

	});
});

