$(document).ready(function() {
 $('#firstForm').submit(function(e) {
    e.preventDefault();
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var gender= $('#gender').val();
    var address= $('#address').val();
    var num=$('#num').val();
    $(".error").remove();

    if (firstName.length < 1) {
      $('#firstName').after('<span class="error">This field is required</span>');
    }
    if (lastName.length < 1) {
      $('#lastName').after('<span class="error">This field is required</span>');
    }
    if (email.length < 1) {
      $('#email').after('<span class="error">This field is required</span>');
    } else {
      var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#email').after('<span class="error">Enter a valid email</span>');
      }
    }
    if (password.length < 5) {
      $('#password').after('<span class="error">Password must be at least 5 characters long</span>');
    }
      if (gender.length < 2) {
      $('#gender').after('<span class="error">This field is required</span>');
}
      if (address.length < 20) {
      $('#address').after('<span class="error">This field is required</span>');
}
     if (num.length < 1) {
      $('#num').after('<span class="error">This field is required</span>');
    } else {
      var re = /^\d{10}$/;
      var validEmail = re.test(num);
      if (!validNum) {
        $('#num').after('<span class="error">Enter a valid phonenumber</span>');
      }
    }
    
  });

});