//var config = require('lbi-config.json');
//var baseURL = config.urlProduction;
//var site = config.site;
var baseURL = 'http://225batonrouge.com';
var site = '225batonrouge';

var socialLinks = [];
var paginationLinks = [];

casper.test.begin('Suite #2: Header', function suiteOne(){

	function getSocialLinks(){
		socialLinks = document.querySelectorAll('.social-link');
		return Array.prototype.map.call(socialLinks, function(e){
			return e.getAttribute('href');
		});
	}

	casper.start(baseURL, function(){

			console.log('------------------- Checking Header Elements -------------------');

			if (this.visible('.logo-225')) {
				this.test.assert(true, 'Test 1/3 Logo is rendering correctly');
			} else {
				this.test.assert(false, 'Logo is not rendering correctly');	
			}
			
			socialLinks = socialLinks.concat(this.evaluate(getSocialLinks));
			if (socialLinks.length > 3) {
				this.test.assert(true, 'Test 2/3 social links are rendering correctly');
			} else {
				this.test.assert(false, 'social links are not rendering correctly');	
			}
			// console.log('A total of ' + socialLinks.length + ' links have been found.');
			// for (var i = socialLinks.length - 1; i >= 0; i--) {
			// 	console.log(socialLinks[i]);
			// }			

			if (this.visible('#js-header-search-button')) {
				this.test.assert(true, 'Test 3/3 js-header-search-button is rendering correctly');
			} else {
				this.test.assert(false, 'js-header-search-button not rendering correctly');	
			}

			// var i = 1;
			// //console.log('------------------- Checking Top Navigation: Visible and Clickable? -------------------');
			// var navTopLabels = ['Main', 'Features', 'Style','Homes','Weddings', 'Cuisine', 'Events', 'Advertising', 'About Us'];
			// console.log('Are pages visible and clickable?');
			// casper.each(navTopLabels, function(self, navTopLabel){
			// 	if (casper.clickLabel(navTopLabel, 'a') == true) {
			// 		this.test.assert(true, 'Test 4/5 Page: ' + i + 'of' + navTopLabels.length + ' ' + navTopLabel + ' -> ' + casper.clickLabel(navTopLabel, 'a'));
			// 	}
			// 	i++;
			// });

			// if (this.visible('.splitter-container')) {
			// 	this.test.assert(true, 'Test 5/5 Splitter container is rendering correctly');
			// } else {
			// 	this.test.assert(false, 'Splitter container is not rendering correctly');	
			// }

		});

		// casper.then(function(){

		// 	console.log('------------------- Checking Featured Article -------------------');

		// 	if (this.visible('.big-article-image')) {
		// 		this.test.assert(true, '1/2 Featured article image is rendering correctly');
		// 	} else {
		// 		this.test.assert(false, 'Featured article image is not rendering correctly');	
		// 	}
		// 	if (this.visible('.big-article-title')) {
		// 		this.test.assert(true, '2/2 Featured article title is rendering correctly');
		// 	} else {
		// 		this.test.assert(false, 'Featured article title is not rendering correctly');	
		// 	}
		// });

		// casper.then(function(){
		// 	console.log('------------------- Checking 10 Articles Display -------------------');
		// 	casper.test.assertElementCount('.article-list-article', 10, '10 articles has been found.');
		// });

		casper.then(function(){
			var i = 1;
			console.log('------------------- Checking Top Navigation: Visible and Clickable? -------------------');
			var navTopLabels = ['Home','Entertainment','Food','Style','Community','Best of 225','Events'];
			casper.each(navTopLabels, function(self, navTopLabel){
				if (casper.clickLabel(navTopLabel, 'a') == true) {
					this.test.assert(true, i + '/' + navTopLabels.length + ' ' + navTopLabel + ' -> ' + casper.clickLabel(navTopLabel, 'a'));
				}
				i++;
			});
		});

		// casper.then(function(){
		// 	var i = 1;
		// 	console.log('------------------- Checking Footer Items: Visible and Clickable? -------------------');
		// 	var footerLabels = ['About Us', 'Contact Us', 'Terms of Use','Privacy Policy','Circulation', 'Advertising'];
		// 	casper.each(footerLabels, function(self, footerLabel){
		// 		if (casper.clickLabel(footerLabel, 'a') == true) {
		// 			this.test.assert(true, i + '/' + footerLabels.length + ' ' + footerLabel + ' -> ' + casper.clickLabel(footerLabel, 'a'));
		// 		}
		// 		i++;
		// 	});
			
		// });

	//});

	casper.run(function() {
        casper.test.done();
    });
});

// casper.test.begin('Suite #2: Checking widgetized areas',function suiteTwo(){
// 	/* WORK IN PROGRESS -> FILE: pagination-tests.js*/ 
// 	function getPaginationLinks(){
// 		paginationLinks = document.querySelectorAll('a.page-numbers');
// 		return Array.prototype.map.call(paginationLinks, function(e){
// 			return e.getAttribute('href');
// 		});
// 	}

// 	casper.start(config.urlProduction, function(){

// 		console.log('------------------- Checking Pagination -------------------');

// 		paginationLinks = paginationLinks.concat(this.evaluate(getPaginationLinks));
// 	 	console.log('There are ' + paginationLinks.length + ' pagination links:');

// 	 	for (var i = paginationLinks.length; i > 0; i--) {
// 		 	if (paginationLinks[i] == undefined) {
// 		 		console.log('· current page-number')
// 		 	} else {
// 		 		console.log('· ' + paginationLinks[i]);	
// 		 	}
// 	 	}

// 	});

// 	casper.run(function() {
//         casper.test.done();
//     });
// });

// casper.test.begin('Suite #3: Checking infinite scrolling',function suiteThree(){
// 	casper.start(config.urlProduction, function(){

// 	});

// 	casper.run(function() {
//         casper.test.done();
//     });
// });