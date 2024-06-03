function validateForm() {
    var name =
    document.getElementById("name").value;
    var email =
    document.getElementById("email").value;
    var message =
    document.getElementById("message").value;

    //Check if name is empty
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }

    //Check if email is empty
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }

    //Check if email is valid
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email address");
        return false;
    }

    //Check if message is empty
    if (message == "") {
        alert("Message must be filled out");
        return false;
    }

    //Validation passed
    return true;
}