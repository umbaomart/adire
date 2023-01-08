window.helperModal = {
    open: function(elem) {
		var modalId = elem.attr('data-modal-id');
		var modal = $('#' + modalId);

		modal.addClass('is-active');

		helperModal.close('.modal-wrapper', modal);
		helperModal.close('.modal-close', modal);
		helperModal.close('.modal-cancel', modal);
	},

	getId: function(elem) {
		var modalId = elem.attr('data-modal-id');
		var modal = $('#' + modalId);

		helperModal.close('.modal-wrapper', modal);
		helperModal.close('.modal-close', modal);
		helperModal.close('.modal-cancel', modal);

		return modal;
	},

	close: function(trigger, elem) {
		elem.on('click', trigger, function() {
       		elem.removeClass('is-active');
       		return false;
       	});
	}
};