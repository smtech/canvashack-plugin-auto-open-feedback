var canvashack = {
    delayOpenPreview: function () {
        "use strict";
        try {
            // open the document preivew (if it's there)
            $('#preview_frame').contents().find('.modal_preview_link')[0].click();
        } catch (error) {
            // do nothing
        }

        try {
            // open the rubric, if it's there
            $('.assess_submission_link.rubric').click();
        } catch (error) {
            // do nothing
        }
    },

    openFeedback: function () {
        "use strict";
        // not sure why I need to have the second delay -- but if I don't the document downloads, rather than previews
        window.setTimeout(delayOpenPreview, 1000);
    }
};
