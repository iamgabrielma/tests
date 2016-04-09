var baseURL = 'http://225batonrouge.com';
var site = '225batonrouge';

casper.test.begin('Suite #3: Articles', function suiteOne(){

	casper.start(baseURL, function(){

		console.log('------------------- Checking Article Tiles and Content Tiles -------------------');
		if (this.visible('.article-tile-content')) {
			this.test.assert(true, 'Article Tile Image is rendering correctly');
		} else {
			this.test.assert(false, 'Article Tile Image is not rendering correctly');	
		}
		casper.test.assertElementCount('.article-tile-content', 3, '3of3 article tiles has been found.');	

		if (this.visible('.category-tile-content')) {
			this.test.assert(true, 'category Tile Image is rendering correctly');
		} else {
			this.test.assert(false, 'category Tile Image is not rendering correctly');	
		}
		casper.test.assertElementCount('.category-tile-content', 5, '5of5 category tiles has been found.');	



	});

	casper.run(function() {
        casper.test.done();
    });
});
