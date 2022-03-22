// get in touch form
function send() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message").value;
    
    // form validation
    if (name.length == "" || name.length <= 2) {
        alert("Kindly Input Name!!!");
    } else if
        (email.length == "") {
        alert("Please enter your email");
    } else if
        (password.length < 8) {
        alert("Please enter your Password!");
    } else if
        (message.length == "") {
        alert("Enter your message");
    } else
        alert("Dear " + name + " We have received your message"  + " Thankyou so much for Reaching to Us. " +  " We're committed to serving you anytime,anywhere.");
}