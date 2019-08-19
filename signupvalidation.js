function Signupvalidation() {
  var ename = document.getElementById("empname").value;
  var mail = document.getElementById("email").value.trim();
  var contact = document.getElementById("phone").value;
  var username = document.getElementById("username").value;
  var add = document.getElementById("Address").value;
  var designation = document.getElementById("Designation").selectedIndex;
  var male = document.getElementById("mgender").checked;
  var female = document.getElementById("fgender").checked;
  var firstpassword = document.getElementById("password").value;
  var secondpassword = document.getElementById("confirmpassword").value;
  var charac = /^[A-Za-z]+$/;
  var isValid = true;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //only characters for name
  if (ename == "") {
    document.getElementById("nameerror").innerHTML = "Required Field";
    isValid = false;


  } else if (!ename.match(charac)) {
    document.getElementById("nameerror").innerHTML = "Enter characters only";
    isValid = false;
  }
  //gender selection
  if (male == false && female == false) {
    document.getElementById("gendererror").innerHTML = "Select  gender";
  }
  //designation selection
  if (designation == "0") {
    document.getElementById("Designationerror").innerHTML = "Select Designation";
  }

  //email

  if (mail == "") {
    document.getElementById("errormail").innerHTML = "Required Field";
    isValid = false;
  } else if (!mail.match(mailformat)) {
    document.getElementById("errormail").innerHTML = "Enter valid email format";
    isValid = false;

  }
  //mobilenumber
  var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (contact == "" && (!contact.match(/^\d{10}$/))) {
    document.getElementById("mblerror").innerHTML = "Required Field";
    isValid = false;
  } else if (!contact.match(phoneNum)) {
    document.getElementById("mblerror").innerHTML = "Mobilenumber should be 10 digits";
    isValid = false;
  }

  //alphanumeric for username
  var letters = /^[0-9a-zA-Z]+$/;
  if (username == "") {
    document.getElementById("errorusername").innerHTML = "Required Field";
    isValid = false;
  } else if (!username.match(letters)) {
    document.getElementById("errorusername").innerHTML = "Username should alphanumeric (e.g RS45679)";
    username.focus();
    isValid = false;
  }
  //address 
  var letters = /^[0-9a-zA-Z]+$/;
  if (add == "") {
    document.getElementById("addresserror").innerHTML = "Required Field";
    isValid = false;
  } else if (!add.match(letters)) {
    document.getElementById("addresserror").innerHTML = "it should be alphanumeric";
    username.focus();
    isValid = false;
  }

  //validate password
  if (firstpassword == "" || secondpassword == "") {
    document.getElementById("mismatcherror").innerHTML = "Fill the password Fields";
    isValid = false;
  }
  if (!firstpassword == secondpassword) {
    document.getElementById("mismatcherror").innerHTML = "password must be same!";
    isValid = false;
  }
  if (isValid) {


    var url = "Login.html?name=" + encodeURIComponent($("#empname").val()) + "&Designation=" + encodeURIComponent($("#Designation").val()) + "&Email=" + encodeURIComponent($("#email").val()) + "&Contact=" + encodeURIComponent($("#phone").val());
    window.location.href = url;
  }



}