let totalCount = 0;
let users = [];

let index = 0;
let hasfname = true;
let haslname = true;
let hasidError = true;
let hasemail = true;
let hascredit = true;
let hasdept = true;

function validationform() {

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const sid = document.getElementById("sid").value;
    const email = document.getElementById("email").value;
    const credit = document.getElementById("credit").value;
    const dept = document.getElementById("dept").value;

    if (!fname) {
        document.getElementById("fnameError").innerHTML = "First Name can not be empty";
        document.getElementById("fnameError").style.color = "red";
        hasfname = true;
    }
    else {
        document.getElementById("fnameError").innerHTML = "";
        hasfname = false;
    }

    if (!lname) {
        document.getElementById("lnameError").innerHTML = "Last Name can not be empty";
        document.getElementById("lnameError").style.color = "red";
        haslname = true;
    }
    else {
        document.getElementById("lnameError").innerHTML = "";
        haslname = false;
    }


    if (!email) {
        document.getElementById("emailError").innerHTML = "Email is a required";
        document.getElementById("emailError").style.color = "red";
        hasemail = true;
    }
    else if (!email.includes("@student.aiub.edu")) {
        document.getElementById("emailError").innerHTML = "Email should contain @student.aiub.edu.";
        document.getElementById("emailError").style.color = "red";
        hasemail = true;
    }
    else {
        document.getElementById("emailError").innerHTML = "";
        hasemail = false;
    }


    if (!sid) {
        document.getElementById("idError").innerHTML = "Student ID is a required";
        document.getElementById("idError").style.color = "red";
        hasidError = true;
    }
    else if (!sid.includes("-")) {
        document.getElementById("idError").innerHTML = "Please provide a valid ID ex:22-13456-2";
        document.getElementById("idError").style.color = "red";
        hasidError = true;
    }
    else {
        document.getElementById("idError").innerHTML = "";
        hasidError = false;
    }


    if (credit == "" || credit > 148 || credit < 0) {
        document.getElementById("creditError").innerHTML = "Invalid Credit";
        document.getElementById("creditError").style.color = "red";
        hascredit = true;
    }
    else {
        document.getElementById("creditError").innerHTML = "";
        hascredit = false;
    }


    if (!dept) {
        document.getElementById("deptError").innerHTML = "Department can not be empty";
        document.getElementById("deptError").style.color = "red";
        hasdept = true;
    }
    else {
        document.getElementById("deptError").innerHTML = "";
        hasdept = false;
    }

    return false;
}


function displayinfo() {

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const sid = document.getElementById("sid").value;
    const email = document.getElementById("email").value;
    const credit = document.getElementById("credit").value;
    const dept = document.getElementById("dept").value;

    validationform();

    if (!hasfname && !haslname && !hasidError && !hasemail && !hascredit && !hasdept) {

        users.push({
            firstname: fname,
            lasttname: lname,
            id: sid,
            emaill: email,
            creditt: credit,
            deptt: dept
        });

        let output = "";

        for (let i = 0; i < users.length; i++) {

            output += " "+ "<br>";
            output += " "+ "<br>";
            output += "First Name : " + users[i].firstname + "<br>";
            output += "Last Name : " + users[i].lasttname + "<br>";
            output += "Student ID : " + users[i].id + "<br>";
            output += "Email : " + users[i].emaill + "<br>";
            output += "Credit Completed : " + users[i].creditt + "<br>";
            output += "Department : " + users[i].deptt + "<br>";
        }

        document.getElementById("display").innerHTML = output;

        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("sid").value = "";
        document.getElementById("email").value = "";
        document.getElementById("credit").value = "";
        document.getElementById("dept").selectedIndex = 0;
    }

    return false;
}