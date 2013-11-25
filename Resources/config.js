/* en custom fonts */
var customFont = new function() {
	var currentLanguage = Ti.App.Properties.getString("userLanguage","en");
	this.FuturaStd_Medium = function() {
		var fFamily = 'FuturaStd-Medium';
		return fFamily;
	};
	
	this.FuturaStd_CondensedLight = function() {
		var fFamily = 'FuturaStd-CondensedLight';
		return fFamily;
	};
	
	this.FuturaStd_CondensedMedium = function() {
		var fFamily = "FuturaStd-CondensedMedium";
		if(platform == "iphone"){
			fFamily = "Futura MdCn BT";
		}
		return fFamily;
	};
	
	this.FuturaStd_CondensedBold = function() {
		var fFamily = "FuturaStd-CondensedBold";
		if(platform == "iphone"){
			fFamily = 'FuturaStd-Bold';
		}
		return fFamily;
	};
	
	this.FuturaStd_Bold = function() {
		var fFamily = 'FuturaStd-Bold';
		return fFamily;
	};

	this.HelveticaNeue = function() {
		var fFamily = "HelveticaNeue";
		if(platform == "iphone"){
			fFamily = "Helvetica Neue";
			//fFamily = "HelveticaNeueLTStd-Roman";
		}
		return fFamily;
	};

	this.HelveticaNeue_Bold = function() {
		var fFamily = "HelveticaNeue-Bold";
		if(platform == "iphone"){
			fFamily = "Helvetica Neue";
			//fFamily = "HelveticaNeueLTStd-Bd";
		}
		return fFamily;
	};

	this.Arial = function() {
		var fFamily = "Arial";
		if(platform == "iphone"){
			fFamily = "Arial";
			//fFamily = "Arial";
		}
		return fFamily;
	};

	this.Arial_Bold = function() {
		var fFamily = "Arial-Bold";
		if(platform == "iphone"){
			fFamily = "Arial";
			//fFamily = "Arial Bold";
		}
		return fFamily;
	};
	
	this.GESSText_Medium = function() {
		var fFamily = 'GESSText-Medium';
		return fFamily;
	};
	
	//FuturaStd_CondensedLight
	this.GESSText_Light = function() {
		var fFamily = 'GESSText-Light';
		return fFamily;
	};
	
	//FuturaStd_Bold
	this.GESSText_Bold = function() {
		var fFamily = 'GESSText-Bold';
		return fFamily;
	};
};
exports.customFont = customFont;
var platform = Ti.Platform.osname;
exports.platform = platform; 
