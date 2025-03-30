function clearForm() {
    document.getElementById("name").value = ""; 
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("comments").value = "";
}
function validateForm() {
    var names=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var subject=document.getElementById("subject").value;
    var comments=document.getElementById("comments").value;
    if (names.trim() == "") {
        alert("Please enter your name.");
        return false;
    }
    if (email.trim() == "") {
        alert("Please enter your email address.");
        return false;
    }
    // Simple email validation regex
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (subject.trim() == "") {
        alert("Please enter a subject.");
        return false;
    }
    if (comments.trim() == "") {
        alert("Please enter your comments.");
        return false;
    }
    return alert("Thank you for your message!");
}   
