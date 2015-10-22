var canvashack = {
	openPreview: function() {
		// open the document preivew (if it's there)
		return $('#preview_frame').contents().find('.content-box').find('.col-xs-5.align-right').find('a')[0].click();
	},
	
	delayOpenPreview: function() {
		// not sure why I need to have the second delay -- but if I don't the document downloads, rather than previews
		return $('#preview_frame').load(window.setTimeout(this.openPreview, 1000));
	}
};