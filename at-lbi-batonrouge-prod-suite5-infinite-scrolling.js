// change baseURL for a dynamic array method as there is more than one page with infinite scrolling
// entertainment, food, style, community, events (no IS at home, no IS at best of 225)

/* update: in any case, as the general idea was to split the tests in different suites I can run a different IS test for each involved page even if is not DRY*/
/* IS1 -> entertainment, IS + sponsored content*/
/* IS2 -> food, IS + newsletters*/
/* IS3 -> style, IS + newsletters*/
/* IS4 -> community, IS + newsletters*/
/* IS5 -> events, IS + newsletters*/
/* home, bestof225 check separate stuff*/

//var baseURL = 'http://225batonrouge.com/entertainment';
var baseURL = 'http://225batonrouge.com/';
var site = '255batonrouge';

//var pagesWithInfiniteScrolling = ['Entertainment','Food','Style','Community','Events'];

casper.test.begin('Suite #5: Checking Infinite Scrolling', function suiteOne(){

	casper.start(baseURL, function(){

		
		//console.log('articles loaded: ' + this.getElementsInfo('.article-tile-content').length);
		//console.log('Scrolling to bottom and waiting 3 seconds...');		
		var i = 1;
		//var pagesWithInfiniteScrolling = ['Entertainment','Food','Style','Community','Events'];

		var pagesWithInfiniteScrolling = ['http://225batonrouge.com/entertainment','http://225batonrouge.com/food'];
		casper.each(pagesWithInfiniteScrolling, function(self, pagesWithInfiniteScrolling){
			


				console.log('articles loaded: ' + this.getElementsInfo('.article-tile-content').length + ' at ' + pagesWithInfiniteScrolling);
				console.log('waiting 3 more seconds...');
				
				casper.waitFor(function(){
			
					this.scrollToBottom();
					this.wait(3000, function(){
						console.log('waiting 3 more seconds...');
					});
					return true;

				}, function(){
					
					console.log('articles loaded: ' + this.getElementsInfo('.article-tile-content').length + ' at ' + pagesWithInfiniteScrolling);
					console.log('waiting 3 more seconds...');
					this.scrollToBottom();
					this.wait(5000, function(){
					
						console.log('articles loaded: ' + this.getElementsInfo('.article-tile-content').length + ' at ' + pagesWithInfiniteScrolling);
					});
				});
			//});
		});



		// casper.then(function(){
			
		// 		if (this.getElementsInfo('.article-tile-content').length > 25) {
		// 			casper.test.assert(true, "infinite scrolling is working, articles loaded: " + this.getElementsInfo('.article-tile-content').length);
		// 		} else {
		// 			casper.test.assert(false, "infinite scrolling is not working properly, articles loaded: " + this.getElementsInfo('.article-tile-content').length);
		// 		}
		// });
		
		/* Looks like there is no sponsored content in each page with infinite scrolling, so far: entertainment*/		
		// casper.then(function(){
		// 	casper.test.assertElementCount('.sponsored-article-tile-text', 2, 'Sponsored content has been found too within the loaded articles.');	
		// });


	});

	casper.run(function() {
        casper.test.done();
    });
});
