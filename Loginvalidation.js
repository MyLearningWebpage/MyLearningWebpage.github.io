$(function () {
    var Username = $('#Uname').val();
    var password = $('#pswd').val();

    $("#Uname").keypress(function (e) {
        var keyCode = e.keyCode || e.which;
        $("#usererror").html("");
        var regex = /^[A-Za-z0-9]+$/;
        var isValid = regex.test(String.fromCharCode(keyCode));
        if (!isValid) {
            $("#usererror").html("Special characters not allowed");
        }
        return isValid;
    });


    $("#pswd").bind("keyup", function () {
        //TextBox left blank.
        if ($(this).val().length == 0) {
            $("#password_strength").html("");
            return;
        }

        //Regular Expressions.
        var regex = new Array();
        regex.push("[A-Z]"); //Uppercase Alphabet.
        regex.push("[a-z]"); //Lowercase Alphabet.
        regex.push("[0-9]"); //Digit.
        regex.push("[$@$!%*#?&]"); //Special Character.

        var passed = 0;

        //Validate for each Regular Expression.
        for (var i = 0; i < regex.length; i++) {
            if (new RegExp(regex[i]).test($(this).val())) {
                passed++;
            }
        }


        //Validate for length of Password.
        if (passed > 2 && $(this).val().length > 8) {
            passed++;
        }

        //Display status.
        var color = "";
        var strength = "";
        switch (passed) {
            case 0:
            case 1:
                strength = "Weak";
                color = "red";
                break;
            case 2:
                strength = "Good";
                color = "darkorange";
                break;
            case 3:
            case 4:
                strength = "Strong";
                color = "green";
                break;
            case 5:
                strength = "Very Strong";
                color = "darkgreen";
                break;
        }
        $("#password_strength").html(strength);
        $("#password_strength").css("color", color);
    });


    $("#loginbutton").click(function () {

        if (($("#Uname").val().length < 1) && ($("#pswd").val().length < 1)) {
            $('#usererror').html('<span class="error" style="color:red">Required Field</span>');
            $('#passworderror').html('<span class="error" style="color:red">Password should be 8 character</span>');
            event.preventDefault();

        } else {
            var name = GetParameterValues('name');
            var desig = GetParameterValues('Designation');
            var email = GetParameterValues('Email');
            var Contact = GetParameterValues('Contact');



            function GetParameterValues(param) {

                var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
                for (var i = 0; i < url.length; i++) {
                    var urlparam = url[i].split('=');
                    if (urlparam[0] == param) {
                        return urlparam[1];
                    }
                }

            }
            var urlnew = "Content.html?name=" + encodeURIComponent(name) + "&desig=" + encodeURIComponent(desig) + "&email=" + encodeURIComponent(email) + "&contact=" + encodeURIComponent(Contact);
            window.location = urlnew;
        }
    });


});