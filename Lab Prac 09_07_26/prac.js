let totalCount = 0;

function registration() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
   const pass = document.getElementById("pass").value;
   const phn = document.getElementById("phn").value;

  let hasNameError = true;
  let hasEmailError = true;
  let hasPassError = true;
  let hasphnError = true;

  if (!name) {
    document.getElementById("nameError").innerHTML = "Name can not be empty";
    document.getElementById("nameError").style.color = "red";
    hasNameError = true;
  } else if (name.length < 3) {
    document.getElementById("nameError").innerHTML =
      "Name must be at least 3 char";
    document.getElementById("nameError").style.color = "red";
    hasNameError = true;
  } else {
    document.getElementById("nameError").innerHTML = "";
    hasNameError = false;
  }

  if (!email) {
    document.getElementById("emailError").innerHTML =
      "Email is a required fireld";
    document.getElementById("nameError").style.color = "red";
    hasEmailError = true;
  } else if (!email.includes("@")) {
    document.getElementById("emailError").innerHTML =
      "Please provide a valid email address";
    document.getElementById("nameError").style.color = "red";
    hasEmailError = true;
  } else {
    document.getElementById("emailError").innerHTML = "";
    hasEmailError = false;
  }

    if (!pass) {
    document.getElementById("passError").innerHTML = "passw can not be empty";
    document.getElementById("passError").style.color = "red";
    hasPassError = true;
  } else if (pass.length < 8) {
    document.getElementById("passError").innerHTML =
      "Password must be at least 8 char";
    document.getElementById("passError").style.color = "red";
    hasPassError = true;
  } else {
    document.getElementById("passError").innerHTML = "";
    hasPassError = false;
  }


    if (!phn) {
    document.getElementById("phnError").innerHTML = "phone num can not be empty";
    document.getElementById("phnError").style.color = "red";
    hasphnError = true;
  } else if (phn.length != 11) {
    document.getElementById("phnError").innerHTML =
      "Phone Number must be 11 char";
    document.getElementById("phnError").style.color = "red";
    hasphnError = true;
  } else {
    document.getElementById("phnError").innerHTML = "";
    hasphnError = false;
  }



  if (!hasNameError && !hasEmailError && !hasPassError && !hasphnError) {
    document.getElementById("totalRegistrations").innerHTML = ++totalCount;
  }
  return false;
}