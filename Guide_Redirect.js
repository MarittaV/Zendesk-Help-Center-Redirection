var url = window.location.href;
//Replace YOURSUBDOMAIN with the location of your help center. For example, "support.company.com"
if (url.includes("YOURSUBDOMAIN.com/hc/en-us/articles/")) {

	//Replace YOURSUBDOMAIN with the location of your help center. For example, "support.company.com"
	//This captures the article ID generated by Zendesk Guide
	var titleId = url.replace('https://YOURSUBDOMAIN/hc/en-us/articles/','');

	//Checks for more than just ID number in URL (usually title of article in URL)
	if (titleId.includes("-")) {
		var currentId = titleId.substring(0, titleId.indexOf("-"));
	}
	//If nothing else, then titleId it is set to currentId variable
	else {
		var currentId = titleId;
	}

	//Initializes an object for external redirects and an object for Guide redirects
	var redirect = {};
	var external_redirect = {};

	//Internal Redirect Mapping - From a Zendesk Guide article to another Guide article
	//Redirect['old article id'] = new article id;
	//Redirect['1'] = 2;
	redirect['115004686443'] = 115004617366;

	//External Redirect Mapping
	external_redirect['115004730086'] = "https://developer.mixpanel.com/docs/http";

  //Redirects if needed -> Doesn't redirect if not. 
  if (currentId in redirect) {
	    if (typeof redirect[currentId] !== "undefined") {
	  		    newUrl = 'https://help.mixpanel.com/hc/en-us/articles/' + redirect[currentId];
	    	    window.location.replace(newUrl);
			}
  }

	else if (currentId in external_redirect) {
	    if (typeof external_redirect[currentId] !== "undefined") {
			    newExternalUrl = external_redirect[currentId];
			    window.location.replace(newExternalUrl);
		  }
  }


}