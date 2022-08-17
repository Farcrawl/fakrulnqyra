
$form =  jQuery('.acf-form-ajax');
$form.on('submit', function (event) {
    event.preventDefault();
});

form_data = [];
$form.find('.acf-form-submit .acf-button').on('click', function () {
    this.blur();
    $form.find('.acf-spinner').css('display','block');
    args = {
        form: $form,
        reset: true,
        success: function ($form, validator) {

            let $fileInputs = jQuery('input[type="file"]:not([disabled])', $form)
            $fileInputs.each(function (i, input) {
                if (input.files.length > 0) {
                    return;
                }
                jQuery(input).prop('disabled', true);
            })

            var formData = new FormData($form[0]);

            // Re-enable empty file $fileInputs
            $fileInputs.prop('disabled', false);

            acf.lockForm($form);

            jQuery.ajax({
                url: window.location.href,
                method: 'post',
                data: formData,
                cache: false,
                processData: false,
                contentType: false
            }).done(response => {
                acf.unlockForm($form);   
            });

            var $notice = validator.get('notice').$form;
            $notice.appendTo('.components-notice-list');
            $notice.find('.acf-notice-dismiss').removeClass('small');
        }
    }

    acf.validateForm(args);
    $form.find('.acf-spinner').css('display','none');
});
