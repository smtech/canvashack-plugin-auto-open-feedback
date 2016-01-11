var canvashack = {
	delayOpenPreview: function() {
		// open the document preivew (if it's there)
		$('#preview_frame').contents().find('.content-box').find('.col-xs-5.align-right').find('a')[0].click();

		// open the rubric, if it's there
		$('.assess_submission_link.rubric').click();
	},
	
	openFeedback: function() {
		// not sure why I need to have the second delay -- but if I don't the document downloads, rather than previews
		window.setTimeout(this.delayOpenPreview, 1000);
	}
};
