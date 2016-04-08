/* Suite51 -> entertainment page, infinite scrolling + sponsored content*/
/* Suite52 -> food page, infinite scrolling + newsletters*/
/* Suite53 -> style page, infinite scrolling + newsletters*/
/* Suite54 -> community page, infinite scrolling + newsletters*/
/* Suite55 -> events page, infinite scrolling + newsletters*/

var baseURL = 'http://225batonrouge.com/entertainment';
var site = '255batonrouge';

casper.test.begin('Suite #51: Checking entertainment page at '+ site, function suiteOne(){

	casper.start(baseURL, function(){

		console.log('articles loaded: ' + this.getElementsInfo('.article-tile-content').length);
		console.log('waiting 3 more seconds...');

		casper.waitFor(function(){
			
			this.scrollToBottom();
			this.wait(3000, function(){
				console.log('waiting 3 more seconds...');
			});
			return true;

		}, function(){
					
			console.log('articles loaded: ' + this.getElementsInfo('.article-tile-content').length);
			console.log('waiting 3 more seconds...');
			this.scrollToBottom();
			this.wait(5000, function(){
					
				console.log('articles loaded: ' + this.getElementsInfo('.article-tile-content').length);
			});
		});

		casper.then(function(){
			
				if (this.getElementsInfo('.article-tile-content').length > 25) {
					casper.test.assert(true, "infinite scrolling is working, articles loaded: " + this.getElementsInfo('.article-tile-content').length);
				} else {
					casper.test.assert(false, "infinite scrolling is not working properly, articles loaded: " + this.getElementsInfo('.article-tile-content').length);
				}
		});

		casper.then(function(){
			casper.test.assertElementCount('.sponsored-article-tile-text', 2, 'Sponsored content has been found too within the loaded articles.');	
		});
	});

	casper.run(function() {
        casper.test.done();
    });
});