var baseURL = 'http://businessreport.com';
var site = 'businessreport';

casper.test.begin('Suite #2: Header', function suiteOne(){

	casper.start(baseURL, function(){

			console.log('---- Checking Header Elements ----');

			if (this.visible('.header-logo')) {
				this.test.assert(true, '1/3 Logo is rendering correctly');
			} else {
				this.test.assert(false, 'Logo is not rendering correctly');	
			}
			if (this.visible('.header-search')) {
				this.test.assert(true, '2/3 Search bar is rendering correctly');
			} else {
				this.test.assert(false, 'Search bar is not rendering correctly');	
			}
			if (this.visible('.header-social')) {
				this.test.assert(true, '3/3 Social media icons are rendering correctly');
			} else {
				this.test.assert(false, 'Social media icons are not rendering correctly');	
			}

			var i = 1;
			var navTopLabels = ['Home', 'Business', 'Politics','Real Estate','Daily Report AM', 'Daily Report PM', 'Events'];
			console.log('Are pages visible and clickable?');
			
			casper.each(navTopLabels, function(self, navTopLabel){
				
				if (casper.clickLabel(navTopLabel, 'a') == true) {
					this.test.assert(true, 'Page: ' + i + 'of' + navTopLabels.length + ' ' + navTopLabel + ' -> ' + casper.clickLabel(navTopLabel, 'a'));
				}
				i++;
			});
		});

	casper.run(function() {
        casper.test.done();
    });
});