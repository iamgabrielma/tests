var baseURL = 'http://businessreport.com';
var site = 'businessreport';

casper.test.begin('Suite #3: Footer', function suiteOne(){

	casper.start(baseURL, function(){

			console.log('---- Checking Footer Elements ----');
			var i = 1;
			var footerLabels = ['About Us', 'Contact Us', 'Terms of Use','Privacy Policy','Circulation', 'Advertising'];
			casper.each(footerLabels, function(self, footerLabel){
				if (casper.clickLabel(footerLabel, 'a') == true) {
					this.test.assert(true, i + '/' + footerLabels.length + ' ' + footerLabel + ' -> ' + casper.clickLabel(footerLabel, 'a'));
				}
				i++;
			});
		});

	casper.run(function() {
        casper.test.done();
    });
});