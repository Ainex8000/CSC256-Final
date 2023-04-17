//document.addEventListener("DOMContentLoaded", function() {
  //  forms.name = document.getElementById('name');
    //forms.email = document.getElementById('email');
//})

// Display information to the contact.html page
function addInfo() {
    document.getElementById("linkedin").innerHTML = "xenia-denoyer";
    document.getElementById("github").innerHTML = "Ainex8000";
    document.getElementById("email").innerHTML = "xendenoy@uat.edu";
}

// Initialize info on page load
window.addEventListener("load", addInfo);