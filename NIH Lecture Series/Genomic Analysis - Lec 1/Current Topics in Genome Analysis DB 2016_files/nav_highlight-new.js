//This version is less bloated than the original, requiring fewer lines of code to function properly.  It will also properly highlight dynamically created pages, anchors, etc.
function highlightCurrentNavLink()
{
	var currentLocation = document.location.href;
	var targetNode;

	targetNode = document.getElementById("nav");
	
	links = targetNode.getElementsByTagName("a");

	for (i=0; i<links.length; i++) {
		linkHref = links[i].href;
		
		if (linkHref==currentLocation) {
			links[i].setAttribute("className", "highlight");
			links[i].setAttribute("class", "highlight");      
		}
	}
}

// Automatically execute the highlight function upon window.onload without overwriting currently assigned onload functions
function addLoadEvent(func)
  {	
  	var oldonload = window.onload;
	if (typeof window.onload != 'function')
		{
	    window.onload = func;
		}
	else
    	{
		window.onload = function()
			{
			oldonload();
			func();
		    }
		}
  }

addLoadEvent(highlightCurrentNavLink);