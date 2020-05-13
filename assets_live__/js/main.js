///Switch name of title on click of preferred account
var val;
var text;
var registerForm = document.getElementById("registerForm");
$('#selectUserType').hide();

  $('.radio-group .radio').click(function(){
    $(this).parent().find('.radio').removeClass('selected');
    $(this).addClass('selected');
    var val = $(this).attr('data-value');
    $('#selectUserType').show();
//alert(val);
    //console.log(val);

    switch (val) {
      case "donor":
        text = "Donor";
       // $('#neighbourhood').hide();
        break;
      case "business":
        text = "Business";
       // $('#neighbourhood').hide();
        break;
   /*   case "champion":
        text = "Neighbourhood Champion";
        $('#neighbourhood').show();
        break;*/
      default:
        text = "Business";
    }

//
   // document.getElementById("userType").innerHTML = text;
    $("#user_type_input").val(text);
});

