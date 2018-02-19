function login() {

  var bla = $('#txt_name').val();

    var email = $('#email').val();
    var password = $('#password').val();

    var data = {
      "Email": email,
      "Password": password
    }

    var settings = {
      "async": true,
      "url": "http://localhost:5000/auth/login",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
      },
      "data": JSON.stringify(data)
    }

    $.ajax(settings).done(function (response) {
      localStorage.setItem('token', response.token);
      location.href = "/dashboard";

    }).fail(function (err) {
        console.log(err);
        //todo error reporting to UI
    });

}


$("#password").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#login-btn").click();
    }
});
$("#email").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#login-btn").click();
    }
});
