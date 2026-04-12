document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

document.getElementById("successMessage").innerText =
"✅ Your message has been submitted successfully!";

this.reset();

});