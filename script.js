let emailInput = document.getElementById("email");
let emailError = document.getElementById("email-error");
var good = document.getElementById("success-message");
let button = document.getElementById("submit-btn");
var eisBoolean = false;
// Listen for input events on the email field
emailInput.addEventListener("input", () => {
    let email = emailInput.value;

    // Check if the email is valid
    if (email.length > 3 && email.includes("@") && email.includes(".")) {
        emailError.style.display = "none"; // Hide error if valid
		eisBoolean = true;
    } else {
        emailError.style.display = "block"; // Show error if invalid
    }
});

let passwordInput = document.getElementById("password");
let password_error = document.getElementById("password-error");

//checking the password
passwordInput.addEventListener("input",()=>{
	let pass = passwordInput.value;
	if(pass.length >= 8){
		password_error.style.display =  "none";
		if(eisBoolean){
			good.style.display = "block";
		}
	}
	else{
		password_error.style.display =  "block";
	}
});

button.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission

    if (confirm("Are you sure you want to submit?")) {
        alert("successful signup!"); // Show this alert after the user clicks "OK"
        document.getElementById("signup-form").submit(); // Submit the form manually
    } else {
        alert("Submission canceled."); // Show this alert if the user clicks "Cancel"
    }
});
