

$(".businessProfileUpdateForm").on("submit", function(e) {
    e.preventDefault();
    $(this).LoadingOverlay("show");

    var post_path = $(this).attr('action');
    var contents = $(this).serialize();
//
   // alert(contents);
    $.post(post_path,  contents, function(result){
        if(result['status'] === 'success'){
            iziToast.success({
                title: 'OK',
                message: result['message'],
                position: "topCenter"
            });
            // take him to the register page
            location.reload();

        }else{

            iziToast.error({
                title: 'Error',
                message: result['message'],
                position: "topCenter"
            });
            $('.businessProfileUpdateForm').LoadingOverlay("hide");

        }

    });

});



$(".getStartedWithEmail").on("submit", function(e) {
    e.preventDefault();
    $('.get_started_section').LoadingOverlay("show");

    var post_path = $('.getStartedWithEmail').attr('action');
    var contents = $('.getStartedWithEmail').serialize();

    $.post(post_path,  contents, function(result){
        if(result['status'] === 'success'){
            iziToast.success({
                title: 'OK',
                message: result['message'],
                position: "topCenter"
            });
            // take him to the register page
            window.location.href = $('#path_to_register').val();

        }else{

            iziToast.error({
                title: 'Error',
                message: result['message'],
                position: "topCenter"
            });
            $('.get_started_section').LoadingOverlay("hide");

        }

    });

});

$(".logInWithEmailForm").on("submit", function(e) {
    e.preventDefault();
    $('.get_started_section').LoadingOverlay("show");

    var post_path = $('.logInWithEmailForm').attr('action');
    var contents = $('.logInWithEmailForm').serialize();

    $.post(post_path,  contents, function(result){
        if(result['status'] === 'success'){
            iziToast.success({
                title: 'OK',
                message: result['message'],
                position: "topCenter"
            });
            // take him to the feeds page.
            window.location.href = $('#path_to_feeds').val();

        }else{

            iziToast.error({
                title: 'Error',
                message: result['message'],
                position: "topCenter"
            });
            $('.get_started_section').LoadingOverlay("hide");

        }

    });

});

$(".registerForm").on("submit", function(e) {
    e.preventDefault();
    $('.registerSubmitButton').LoadingOverlay("show");

    var post_path = $('.registerForm').attr('action');
    var contents = $('.registerForm').serialize();

    $.post(post_path,  contents, function(result){

       // console.log("HHAHAHA", result);
        if(result['status'] === 'success'){
            iziToast.success({
                title: 'OK',
                message: result['message'],
                position: "topCenter"
            });

        /*    if(result['data']['user_type'] === 'Business'){
                // user not completed registration
                window.location.href = $('#path_to_register_business').val();
            }else{*/

                window.location.href = $('#path_to_register_step_two').val();
             //   window.location.href = $('#path_to_feeds').val();
          //  }


        }else{

           iziToast.error({
                title: 'Error',
                message: result['message'],
                position: "topCenter"
            });
            $('.registerSubmitButton').LoadingOverlay("hide");


        }

    });

});

$(".registerStepTwoForm").on("submit", function(e) {
    e.preventDefault();
    $('.registerSubmitButton').LoadingOverlay("show");

    var post_path = $('.registerStepTwoForm').attr('action');
    var contents = $('.registerStepTwoForm').serialize();

    $.post(post_path,  contents, function(result){

        // console.log("HHAHAHA", result);
        if(result['status'] === 'success'){
            iziToast.success({
                title: 'OK',
                message: result['message'],
                position: "topCenter"
            });

            if(result['data']['user_type'] === 'Business'){
                // user not completed registration
                window.location.href = $('#path_to_register_business').val();
            }else{

                window.location.href = $('#path_to_feeds').val();
            }


        }else{

            iziToast.error({
                title: 'Error',
                message: result['message'],
                position: "topCenter"
            });
            $('.registerSubmitButton').LoadingOverlay("hide");

        }

    });

});



$(".businessRegistrationForm").on("submit", function(e) {
    e.preventDefault();
    $('.businessRegistrationButton').LoadingOverlay("show");

    var post_path = $('.businessRegistrationForm').attr('action');
    var contents = $('.businessRegistrationForm').serialize();

    $.post(post_path,  contents, function(result){

        if(result['status'] === 'success'){
            iziToast.success({
                title: 'OK',
                message: result['message'],
                position: "topCenter"
            });

                window.location.href = $('#path_to_feeds').val();

        }else{
            iziToast.error({
                title: 'Error',
                message: result['message'],
                position: "topCenter"
            });
            $('.businessRegistrationButton').LoadingOverlay("hide");

        }

    });

});







/*

$(".campaignCreateForm").on("submit", function(e) {
    e.preventDefault();
    $('.campaignCreateButton').LoadingOverlay("show");

    var post_path = $('.campaignCreateForm').attr('action');
    $(this).LoadingOverlay("show");
    var fd = new FormData();
    var files = $('#banner_file')[0].files[0];
    fd.append('banner_file', files);

    var contents = $('.campaignCreateForm').serialize();

    $.ajax({
        url: post_path + '?'+contents,
        type: 'post',
        data: fd,
        contentType: false,
        processData: false,
        success: function(result){

            if(result['status'] === 'success'){
                iziToast.success({
                    title: 'OK',
                    message: result['message'],
                    position: "topCenter"

                });

            }else{
                iziToast.error({
                    title: 'Error',
                    message: result['message'],
                    position: "topCenter"

                });

            }

            $('.campaignCreateButton').LoadingOverlay("hide");

        },
        error: function (e) {
            console.log("ERROR : ", e);
            $('.campaignCreateButton').LoadingOverlay("hide");
            iziToast.error({
                title: 'Error',
                message: "Something is wrong, please, try again later..",
                position: "topCenter"

            });
        }

    });

});
*/






$(".donateFundForm").on("submit", function(e) {
    e.preventDefault();
    $('.donateFundButton').LoadingOverlay("show");

    var post_path = $('.donateFundForm').attr('action');
    var contents = $('.donateFundForm').serialize();

    $.post(post_path,  contents, function(result){

        if(result['status'] === 'success'){
            iziToast.success({
                title: 'OK',
                message: result['message'],
                position: "topCenter"
            });

            window.location.href = $('#my_donation_paths').val() + '?did=' + result['data']['_id'] ;

        }else{
            iziToast.error({
                title: 'Error',
                message: result['message'],
                position: "topCenter"
            });
            $('.donateFundButton').LoadingOverlay("hide");

        }

    });

});




$(".confirmADonationButton").on("click", function(e) {
    e.preventDefault();
    $(this).LoadingOverlay("show");
    var id = $(this).data('id');

    var post_path = $('#confirmDonationPath').val();
    var contents = {
        id :  id

    };

    $.post(post_path,  contents, function(result){

        if(result['status'] === 'success'){
            iziToast.success({
                title: 'OK',
                message: result['message'],
                position: "topCenter"
            });

            location.reload()
        }else{
            iziToast.error({
                title: 'Error',
                message: result['message'],
                position: "topCenter"
            });
            $('.confirmADonationButton').LoadingOverlay("hide");

        }

    });

});

$(".donateMaterialForm").on("submit", function(e) {
    e.preventDefault();
    $('.donateFundButton').LoadingOverlay("show");

    var post_path = $('.donateMaterialForm').attr('action');
    var contents = $('.donateMaterialForm').serialize();
    $.post(post_path,  contents, function(result){
//
        if(result['status'] === 'success'){
            iziToast.success({
                title: 'OK',
                message: result['message'],
                position: "topCenter"
            });

            window.location.href = $('#my_donation_paths').val() + '?did=' + result['data']['_id'] ;

        }else{
            iziToast.error({
                title: 'Error',
                message: result['message'],
                position: "topCenter"
            });
            $('.donateFundButton').LoadingOverlay("hide");

        }

    });

});








$(".businessUploadLogoForm").on("submit", function(e) {
    e.preventDefault();
    $('.businessUploadLogoForm').LoadingOverlay("show");

    var post_path = $('.businessUploadLogoForm').attr('action');
    $(this).LoadingOverlay("show");
    var fd = new FormData();
    var files = $('#image_file')[0].files[0];
    fd.append('image_file', files);

    var contents = $('.businessUploadLogoForm').serialize();

    $.ajax({
        url: post_path + '?'+contents,
        type: 'post',
        data: fd,
        contentType: false,
        processData: false,
        success: function(result){

            if(result['status'] === 'success'){
                iziToast.success({
                    title: 'OK',
                    message: result['message'],
                    position: "topCenter"

                });

                location.reload();
            }else{
                iziToast.error({
                    title: 'Error',
                    message: result['message'],
                    position: "topCenter"

                });

            }

            $('.businessUploadLogoForm').LoadingOverlay("hide");

        },
        error: function (e) {
            console.log("ERROR : ", e);
            $('.businessUploadLogoForm').LoadingOverlay("hide");
            iziToast.error({
                title: 'Error',
                message: "Something is wrong, please, try again later..",
                position: "topCenter"

            });
        }

    });

});








$(".campaignCreateButton").on("click", function(e) {
    e.preventDefault();
    //tinyMCE.triggerSave();

    var action = $(this).data('action');

    $('.campaignCreateButton').LoadingOverlay("show");

    var post_path = $('.campaignCreateForm').attr('action');
    $(this).LoadingOverlay("show");
    var fd = new FormData();
    var files = $('#banner_file')[0].files[0];
    fd.append('banner_file', files);

    var contents = $('.campaignCreateForm').serialize();

    $.ajax({
        url: post_path + '?'+contents + '&action=' +action,
        type: 'post',
        data: fd,
        contentType: false,
        processData: false,
        success: function(result){

            if(result['status'] === 'success'){
                iziToast.success({
                    title: 'OK',
                    message: result['message'],
                    position: "topCenter"

                });

                location.reload();

            }else{
                iziToast.error({
                    title: 'Error',
                    message: result['message'],
                    position: "topCenter"

                });

            }

            $('.campaignCreateButton').LoadingOverlay("hide");

        },
        error: function (e) {
            console.log("ERROR : ", e);
            $('.campaignCreateButton').LoadingOverlay("hide");
            iziToast.error({
                title: 'Error',
                message: "Something is wrong, please, try again later..",
                position: "topCenter"

            });
        }

    });

});




$(".locationFilterForm").on("submit", function(e) {
    e.preventDefault();
    $(this).LoadingOverlay("show");

    var post_path = $(this).attr('action');
    var contents = $(this).serialize();

    $.post(post_path,  contents, function(result){
        if(result['status'] === 'success'){
            iziToast.success({
                title: 'OK',
                message: result['message'],
                position: "topCenter"
            });
            // take him to the register page

            window.location.href = $('#path_to_explore').val();

        }else{

            iziToast.error({
                title: 'Error',
                message: result['message'],
                position: "topCenter"
            });
            $('.locationFilterForm').LoadingOverlay("hide");

        }

    });

});





$(".businessUploadBannerForm").on("submit", function(e) {
    e.preventDefault();
    $('.businessUploadBannerForm').LoadingOverlay("show");

    var post_path = $('.businessUploadBannerForm').attr('action');
    $(this).LoadingOverlay("show");
    var fd = new FormData();
    var files = $('#banner_file')[0].files[0];
    fd.append('banner_file', files);

    var contents = $('.businessUploadBannerForm').serialize();

    $.ajax({
        url: post_path + '?'+contents,
        type: 'post',
        data: fd,
        contentType: false,
        processData: false,
        success: function(result){

            if(result['status'] === 'success'){
                iziToast.success({
                    title: 'OK',
                    message: result['message'],
                    position: "topCenter"

                });

                location.reload();
            }else{
                iziToast.error({
                    title: 'Error',
                    message: result['message'],
                    position: "topCenter"

                });

            }

            $('.businessUploadBannerForm').LoadingOverlay("hide");

        },
        error: function (e) {
            console.log("ERROR : ", e);
            $('.businessUploadBannerForm').LoadingOverlay("hide");
            iziToast.error({
                title: 'Error',
                message: "Something is wrong, please, try again later..",
                position: "topCenter"

            });
        }

    });

});
