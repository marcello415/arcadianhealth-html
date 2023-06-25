
TextSizeController = function() {};
var t = TextSizeController;
var myTSC;

t.prototype.sizeList = ['small', 'medium', 'large'];
t.prototype.fontSizes = ['1em', '1.3em', '1.6em'];
t.prototype.h3Sizes = ['16px', '22px', '28px'];

t.prototype.init = function() {
	// Get the current size.
	var size = ($.cookie('textSize')!=null) ? $.cookie('textSize') : "small";
	
	// Set the size.
	this.setSize(size);
	
	// Set up callbacks.
	$("#textSizeControl a").bind("click", function(evt) {
		var id = $(evt.target).attr("rel");
		myTSC.setSize(id);
		evt.preventDefault();
	});
};

t.prototype.setSize = function(size) {
	var index;
	for (var i = 0; i < this.sizeList.length; i++) {
		if (this.sizeList[i] == size) {
			var index = i;
			this.activate(size);
		} else {
			this.deactivate(this.sizeList[i]);
		}
	}
	
	$(".zoomable").css("font-size",this.fontSizes[index]);
	$(".zoomable h3").css("font-size",this.h3Sizes[index]);
	$.cookie('textSize',size);
};

t.prototype.activate = function(size) {
	$("#textSizeControl a[rel='"+size+"']").each(function() {
			var p = $(this).parent();
			if (p.hasClass("inactive")) p.removeClass("inactive");
			if (!p.hasClass("active")) p.addClass("active");	
	});
};

t.prototype.deactivate = function(size) {
	$("#textSizeControl a[rel='"+size+"']").each(function() {	
			var p = $(this).parent();
			if (p.hasClass("active")) p.removeClass("active");	
			if (!p.hasClass("inactive")) p.addClass("inactive");
	});
	
};




// When DOM is ready.

$(document).ready(function(){
	// Center the main nav.
	var outerW = $("#mainNav").width();
	var innerW = $("#mainNav ul").width();
	var pad = Math.floor((outerW - innerW)/2);
	$("#mainNav ul").css({'float':'none',
						  'padding-left':pad + 'px'});
	
	// Set our font size zoom.
	myTSC = new TextSizeController();
	myTSC.init();
	
	// Draw the current year.
	$(".currentYear").text((new Date).getFullYear() + " ");				   
});
/*
     FILE ARCHIVED ON 21:20:40 Apr 28, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:13:07 Apr 04, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 328.463 (3)
  esindex: 0.013
  captures_list: 344.381
  CDXLines.iter: 11.153 (3)
  PetaboxLoader3.datanode: 183.071 (4)
  exclusion.robots: 0.234
  exclusion.robots.policy: 0.221
  RedisCDXSource: 1.941
  PetaboxLoader3.resolve: 325.448 (2)
  load_resource: 181.843
*/