
var flagCaptcha = '';

function init() {
  let customFrom = document.querySelector('#customFrom'),
  success = document.querySelector('#success'),
  errorMsg = document.querySelector('#errorMsg'),
  refreshCaptcha = document.querySelector('.refreshCaptcha');


  // Initialy set the value in captcha input
  captchaFn();
  
  // Init Form Validation using bouncer js.
  let fromValidation = new Bouncer('#customFrom', {
    disableSubmit: true,
    customValidations: {
      valueMismatch: function (field) {

        // Look for a selector for a field to compare
        // If there isn't one, return false (no error)
        var selector = field.getAttribute('data-bouncer-match');
        if (!selector) return false;

        // Get the field to compare
        var otherField = field.form.querySelector(selector);
        if (!otherField) return false;

        // Compare the two field values
        // We use a negative comparison here because if they do match, the field validates
        // We want to return true for failures, which can be confusing
        return otherField.value !== field.value;

      }
    },
    messages: {
      valueMismatch: function (field) {
        var customMessage = field.getAttribute('data-bouncer-mismatch-message');
        return customMessage ? customMessage : 'Please make sure the fields match.'
      }
    }
  });
  
  document.addEventListener('bouncerFormValid', function () {
    console.log('Form Valid successfully!');
    //window.location.reload();
    let updateRequest = new FormData();
    console.log(updateRequest, 'FORM_DATA');
    fetch('/form.php', {
      method: 'POST',
      body: updateRequest
    }).then((response) => response.text()).then((text) => {
      console.log(text);
    })
    
  }, false);



  
  // Detect a successful form validation
  // document.addEventListener('bouncerFormValid', function (event) {

  //   // The successfully validated form
  //   var form = event.target;
  //   console.log(form);
  //   // If `disableSubmit` is true, you might use this to submit the form with Ajax

  // }, false);


  // Refresh the captcha
  refreshCaptcha.addEventListener('click', captchaFn);
  // window.Parsley.addValidator('captcha', {
  //   validate: function(value) {
  //     return value === flagCaptcha;
  //   },
  //   messages: {
  //     en: 'Wrong input'
  //   }
  // })
  //customFrom.parsley();
  // customFrom.addEventListener('submit',function(e) {
  //   e.preventDefault();
  //   //$('#success').addClass('hide');
  //   // if ( fromValidation.isValid() ) {
  //   //   //$('#action').addClass('loading');
  //   //   // $.ajax({
  //   //   //   url:'form.php',
  //   //   //   method:'post',
  //   //   //   data : customFrom.serialize(),
  //   //   //   success:function(){
  //   //   //     // customFrom.trigger("reset");
  //   //   //     // $('#success').removeClass('hide');
  //   //   //     // $('#errorMsg').addClass('hide');
  //   //   //     // $('#action').removeClass('loading');
  //   //   //     // captchaFn();
  //   //   //     // setTimeout(function(){
  //   //   //     //   $('#success').addClass('hide');
  //   //   //     // }, 4000);
  //   //   //   },
  //   //   //   error:function(){
  //   //   //     // $('#success').addClass('hide');
  //   //   //     // $('#errorMsg').removeClass('hide');
  //   //   //     // $('#action').removeClass('loading');
  //   //   //   }
  //   //   // });
  //   // }
  // });
}

async function postData(){
  /*
   * We are still using the same file as before and we are still not touching
   * either the backend code or the actual form. We could grab 
   * the action-attribute from the form but it's easier to just put 
   * in the 'URL' here. We don't need to supply PORT or 'localhost'
   */
  const response = await fetch('/form.php', {
      method: 'POST',
      body: formattedFormData
  });
  /*
   * Because we are using `echo` inside of `handle_form.php` the response
   * will be a string and not JSON-data. Because of this we need to use
   * `response.text()` instead of `response.json()` to convert it to someting
   * that JavaScript understands
   */
  const data = await response.text();
  //This should later print out the values submitted through the form
  console.log(data);
}
const captchaFn = function() {
  flagCaptcha = Math.random().toString(36).substring(8);
  var captchaValue = document.getElementById('captchaValue'),
  setcaptcha = document.querySelector('#setcaptcha'),
  captchaValue2d = captchaValue.getContext('2d');

  captchaValue2d.clearRect(0, 0, captchaValue.width, captchaValue.height);
  captchaValue2d.font = 'bold 20px Arial';
  captchaValue2d.fillStyle = '#c72121'; 
  captchaValue2d.fillText(flagCaptcha, 8, 22);
  setcaptcha.value = flagCaptcha;
}
window.addEventListener('DOMContentLoaded', function(e) {
  init();
});


    