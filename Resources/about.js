exports.aboutView = function() {
	
	var config = require('config');
	var contentView = Ti.UI.createView({
		backgroundColor : "#fff",
		viewType : 'about_list',
		height : Ti.UI.FILL
	});

	var container = Ti.UI.createView({
		backgroundColor : "#fff",
		height : Ti.UI.SIZE
	});
	contentView.add(container);


	var view3Container = Ti.UI.createView({
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		top : '80dp',
		backgroundColor : '#fff',
		zIndex : 1
	});
	container.add(view3Container);

	var view3 = Ti.UI.createScrollView({
		width : '279dp',
		backgroundColor : "#fff",
		height : Ti.UI.FILL,
		layout : 'vertical',
		showVerticalScrollIndicator : false
	});
	view3Container.add(view3);
	
	var responseString2 = {};
	
	var aboutPrgmRulesJsonFile = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, 'jsonData/ar/about_prgm_rules_common.json');
	
    var responseString2 = {};
	if (aboutPrgmRulesJsonFile.exists()) {
		var aboutPrgmRulesJson = aboutPrgmRulesJsonFile.read();
	    responseString2 = JSON.parse(aboutPrgmRulesJson);
	}


	var separator5 = Ti.UI.createView({
		top : '0dp',
		left : '0dp',
		right : '0dp',
		backgroundColor : "#ccc",
		height : 1
	});
	view3.add(separator5);

	var topicView2 = [], qaView2 = [], previousIndex2 = null;
	for (var i = 0, tlen = responseString2.faqs.ar.length; i < tlen; i++) {
		topicView2[i] = Ti.UI.createView({
			topicId : i,
			top : '0dp',
			left : '0dp',
			right : '0dp',
			backgroundColor : "#fff",
			height : '40dp'
		});
		view3.add(topicView2[i]);

		var topView2 = Ti.UI.createView({
			left : '0dp',
			right : '0dp',
			top : '10dp',
			bottom : '10dp',
			//layout : 'horizontal',
			height : Ti.UI.SIZE
		});
		topicView2[i].add(topView2);

		var topImg2 = Ti.UI.createLabel({
			right : '10dp',
			height : '15dp',
			width : '15dp',
		});
		topicView2[i].topImg2 = topImg2;
		topView2.add(topImg2);

		var topicTitle2 = Ti.UI.createLabel({
			topicId : i,
			right : '45dp',
			text : responseString2.faqs.ar[i].topic,
			textAlign : 'right',
			color : '#000',
			height : Ti.UI.SIZE,
			font : {
				fontSize : '14dp',
				fontFamily : config.customFont.GESSText_Medium()
			}
		});
		topView2.add(topicTitle2);

		var separator6 = Ti.UI.createView({
			bottom : '0dp',
			left : '0dp',
			right : '0dp',
			backgroundColor : "#ccc",
			height : '1dp'
		});
		topicView2[i].add(separator6);

	
		qaView2[i] = Ti.UI.createView({
			top : '0dp',
			left : '0dp',
			right : '0dp',
			backgroundColor : "#fff",
			height : (i == 0) ? Ti.UI.SIZE : '0dp',
			layout : 'vertical',
			zIndex : 2
		});
		view3.add(qaView2[i]);

		var ansText2 = Ti.UI.createLabel({
			right : '0dp',
			left : '0dp',
			top : '13dp',
			textAlign : 'right',
			text : responseString2.faqs.ar[i].content,
			color : '#444444',
			height : Ti.UI.SIZE,
			bottom : '5dp',
			font : {
				fontSize : '12dp',
				fontFamily : config.customFont.Arial()
			}
		});
		qaView2[i].add(ansText2);

		if (i < tlen - 1) {
			var separator7 = Ti.UI.createView({
				bottom : '0dp',
				left : '0dp',
				right : '0dp',
				backgroundColor : "#ccc",
				height : '1dp'
			});
			qaView2[i].add(separator7);
		}

	}
	return contentView;
};