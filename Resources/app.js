// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'arabic text cut off',
    backgroundColor:'#fff'
});
var mainView = Ti.UI.createView({
	width : Ti.UI.FILL,
	height : Ti.UI.FILL,
	backgroundColor : "FFF"
});
win1.add(mainView);

var about = require('about');
var aboutView = about.aboutView();
mainView.add(aboutView);


win1.open();
