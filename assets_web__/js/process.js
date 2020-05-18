


$(".joinCommunityForm").on("submit", function(e) {
    e.preventDefault();
    $(this).LoadingOverlay("show");

    var post_path = $(this).attr('action');
    var contents = $(this).serialize();
//
    // alert(contents);
    $.post(post_path,  contents, function(result){

        $('.joinCommunityForm').LoadingOverlay("hide");

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

    });

});







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

                window.location.href = $('#path_to_register_step_two').val();
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
                message: "Something is wrong, make sure your image is not too large please, try again later..",
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

              if(result['message'] === 'Campaign published successfully'){

                  window.location.href = $('#path_to_my_campaign').val();

              }

                $('.campaignCreateButton').LoadingOverlay("hide");


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
                message: "Something is wrong, make sure your image is not too large please, try again later..",
                position: "topCenter"

            });
        }

    });

});





$(".CommunitylocationFilterForm").on("submit", function(e) {
    e.preventDefault();
    $(this).LoadingOverlay("show");

    var post_path = $(this).attr('action');
    var contents = $(this).serialize();
//
    $.post(post_path,  contents, function(result){
        if(result['status'] === 'success'){
            iziToast.success({
                title: 'OK',
                message: result['message'],
                position: "topCenter"
            });
            // take him to the register page

            window.location.href = $('#path_to_explore_community_business').val();

        }else{

            iziToast.error({
                title: 'Error',
                message: result['message'],
                position: "topCenter"
            });
            $('.CommunitylocationFilterForm').LoadingOverlay("hide");

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
                message: "Something is wrong, make sure your image is not too large please, try again later..",
                position: "topCenter"

            });
        }

    });

});







$("#business_delete_btn").on("click", function(e) {

    var id = $(this).data('id');
    var status = $(this).data('status');
    var post_path = $(this).data('post_path');
    var contents = {
        id :  id,
        status : status
    };

    let my_answer = prompt('Are you sure you want to delete this business, if yes, what is 1 + 99 ', 10);

if(my_answer==100) {
    $.post(post_path, contents, function (result) {

        if (result['status'] === 'success') {
            iziToast.success({
                title: 'OK',
                message: result['message'],
                position: "topCenter"
            });

            location.reload()
        } else {
            iziToast.error({
                title: 'Error',
                message: result['message'],
                position: "topCenter"
            });

        }

    });
}else{
    iziToast.error({
        title: 'Error',
        message: "Delete has failed simple mathematics",
        position: "topCenter"
    });

}

});







$(".createCommunityForm").on("submit", function(e) {
    e.preventDefault();
    $(".createCommunityFormButton").LoadingOverlay("show");

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
            $('.createCommunityFormButton').LoadingOverlay("hide");

        }

    });

});





/*

$(".updateCommunityDetails").on("submit", function(e) {
    e.preventDefault();
    $(".updateCommunityDetailsButton").LoadingOverlay("show");

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
            $('.updateCommunityDetailsButton').LoadingOverlay("hide");

        }

    });

});
*/






$(".updateCommunityDetailsButton").on("click", function(e) {
    e.preventDefault();
    //tinyMCE.triggerSave();

//    var action = $(this).data('action');

    $('.updateCommunityDetailsButton').LoadingOverlay("show");

    var post_path = $('.updateCommunityDetails').attr('action');
    $(this).LoadingOverlay("show");
    var fd = new FormData();
    var files = $('#banner_file')[0].files[0];
    fd.append('banner_file', files);

    var contents = $('.updateCommunityDetails').serialize();

    $.ajax({
        url: post_path + '?'+contents,
        type: 'post',
        data: fd,
        contentType: false,
        processData: false,
        success: function(result){
            $('.updateCommunityDetailsButton').LoadingOverlay("hide");

            if(result['status'] === 'success'){
                iziToast.success({
                    title: 'OK',
                    message: result['message'],
                    position: "topCenter"

                });
                location.reload();
                $('.updateCommunityDetailsButton').LoadingOverlay("hide");

            }else{
                iziToast.error({
                    title: 'Error',
                    message: result['message'],
                    position: "topCenter"

                });
                $('.updateCommunityDetailsButton').LoadingOverlay("hide");

            }


        },
        error: function (e) {
            //console.log("ERROR : ", e);
            $('.updateCommunityDetailsButton').LoadingOverlay("hide");
            iziToast.error({
                title: 'Error',
                message: "Something is wrong, make sure your image is not too large please, try again later..",
                position: "topCenter"

            });
        }

    });

});







$(".communityUploadLogoForm").on("submit", function(e) {
    e.preventDefault();
    $('.communityUploadLogoForm').LoadingOverlay("show");

    var post_path = $('.communityUploadLogoForm').attr('action');
    $(this).LoadingOverlay("show");
    var fd = new FormData();
    var files = $('#image_file')[0].files[0];
    fd.append('image_file', files);

    var contents = $('.communityUploadLogoForm').serialize();

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

            $('.communityUploadLogoForm').LoadingOverlay("hide");

        },
        error: function (e) {
            console.log("ERROR : ", e);
            $('.communityUploadLogoForm').LoadingOverlay("hide");
            iziToast.error({
                title: 'Error',
                message: "Something is wrong, make sure your image is not too large please, try again later..",
                position: "topCenter"

            });
        }

    });

});







$(".memberBusinessApproveButton").on("click", function(e) {

    $(this).LoadingOverlay("show");
    var business_id = $(this).data('business_id');
    var action = $(this).data('action');
    var member_id = $(this).data('member_id');

    var post_path = $('#member_business_approve_path').val();
    var community_id = $('#member_business_community_id').val();
    var contents = {
        business_id :  business_id,
        community_id :  community_id,
        member_id :  member_id,
        status :  action,
    };

    $.post(post_path,  contents, function(result){
        $('.memberBusinessApproveButton').LoadingOverlay("hide");
        if(result['status'] === 'success'){
            iziToast.success({
                title: 'OK',
                message: result['message'],
                position: "topCenter"
            });
            $('.business_id_'+business_id).html(action);

        }else{
            iziToast.error({
                title: 'Error',
                message: result['message'],
                position: "topCenter"
            });
            $('.memberBusinessApproveButton').LoadingOverlay("hide");

        }

    });

});
