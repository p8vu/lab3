'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Fnuction that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").addClass("active");

	});
	$("a.thumbnail").click(projectClick)
	// Add any additional listeners here
	// example: $("#div-id").closestick(functionToCall);
}

function projectClick(e) {
	e.preventDefault();

	var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       $("project-description").fadeOut()
    }
}
