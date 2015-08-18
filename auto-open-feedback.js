function openPreview() {
	// open the document preivew (if it's there)
	$('#preview_frame').contents().find('.content-box').find('.col-xs-5.align-right').find('a')[0].click();
	
}

function delayOpenPreview() {
	// not sure why I need to have the second delay -- but if I don't the document downloads, rather than previews
	$('#preview_frame').load(window.setTimeout(openPreview, 1000));
}