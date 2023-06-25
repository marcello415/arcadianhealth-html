var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function showError(errorCode) {
	var msg;
	switch (errorCode) {
		case "NO_YEAR":
			msg = '<span class="alert">Please select a <strong>plan year</strong>.</span>';
			break;
		case "NO_ZIP":
			msg = '<span class="alert">Please enter your <strong>zip code</strong>.</span>';
			break;
		case "BAD_ZIP":
			msg = '<span class="alert">Please enter a valid 5 digit <strong>zip code</strong>.</span>';
			break;
		case "NO_SERVICE":
			msg = '<span class="alert">We do not have health plan coverage in the zip code you entered.<br />Please <a href="contactus.html">contact us</a> for more information.</span>';
			break;
		case "SERVER_ERROR":
			msg = '<span class="alert">We\'re sorry, but there was a problem connecting to the server.<br />Please try again later.</span>';
			break;
	}
	if (msg != null) {
		$('#zipErrorMsg').html(msg).show('slow');
	}
}

function hideError() {
	$('#zipErrorMsg').hide('fast');
}


function showSearching() {
	$('.submitBtn').attr('src', 'images/searching.gif');
}
function hideSearching() {
	$('.submitBtn').attr('src', 'images/findplans.gif');
}

function buildResults(countyData, useParish) {
	var results = '<h1>Please Choose your ';
	results += useParish ? 'Parish' : 'County';
	results += '</h1>';
	for (var i = 0; i < countyData.length; i++) {
		var county = countyData[i];
		var url = 'location_select.php?county=' + county.name + '&url=' + county.url + '&group=' + county.group;
		results += '<p><a href="' + url + '">' + county.name + '</a></p>';
    //<p><a href="2010/Fayetteville/quickcompareplans.html">[County Name]</a>/<a href="2010/Fayetteville/quickcompareplans.html">[Parish]</a>[Zip]</p>
	}
	results += '<br /><p><b style="color:#0099CC;">Don&rsquo;t see your ';
	results += useParish ? 'parish' : 'county';
	results += '?</b><br />';
  results += 'If your county, parish, or zip code of residence is not in the list above, we do not carry plan coverage in all or part of your zip code. Please click <a href="javascript:showDiv(\'w5\',0)">Close</a> to close this window.</p>';

	return results;
}


$(document).ready(function() {
	$('#zipSearch').bind('submit', function(event) { 
		event.preventDefault(); 
																					
		// Validate
		if ($('input[name=planYear]').length) {
			// The plan year selector will only be shown if multiple plan years exist.
			var planYear = $('input[name=planYear]:checked').val();
			if ((planYear == "") || (planYear == undefined)) {
				showError('NO_YEAR');
				return;
			}
		}
		var zip = $('input.zipField').val();
		if ((zip == "") || (zip == undefined)) {
			showError('NO_ZIP');
			return;
		}
		var reZip = new RegExp(/(^\d{5}$)/);
		if (!reZip.test(zip)) {
			showError('BAD_ZIP');
			return;
		}
		
		// Update the submit button.
		showSearching();
		
		// Hide any error messages.
		hideError();
		
		// Submit.
		var dataStr = 'zipCode='+ zip;
		
		if ($('input[name=planYear]').length) {
			// If the planYear form element is present, add it to our req string.
			dataStr += '&planYear=' + planYear;
		}
 	
		$.ajax({
			type: "POST",
			url: "ajax/zipsearch.php",
			data: dataStr,
			dataType: "json",
			success: function(data) {
				if (data.msg=="NO_MATCH") {
					showError("NO_SERVICE");
				} else if (data.msg=="EXACT_MATCH") {
					window.location=data.url;
				} else if (data.msg=="MULTIPLE") {
					$('.zipcoderesults').html(buildResults(data.county, data.useParish));
					showDiv('w5',1);
				}
				hideSearching();
			},
			error: function() {
				showError("SERVER_ERROR");
				hideSearching();
			}
		});
		
	});
}); 



}
/*
     FILE ARCHIVED ON 17:08:49 Oct 20, 2010 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:13:14 May 19, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 71.532
  exclusion.robots: 0.07
  exclusion.robots.policy: 0.061
  RedisCDXSource: 0.509
  esindex: 0.007
  LoadShardBlock: 54.526 (3)
  PetaboxLoader3.datanode: 74.675 (4)
  load_resource: 116.728
  PetaboxLoader3.resolve: 57.762
*/