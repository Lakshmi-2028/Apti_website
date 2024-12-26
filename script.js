// document.addEventListener("DOMContentLoaded", function() {
//     const submitBtn = document.getElementById("submit-btn");
//     const loginForm = document.getElementById("login-form");

//     submitBtn.addEventListener("click", function() {
//         // Get the email and password values from the form
//         const email = document.getElementById("email").value;
//         const password = document.getElementById("password").value;

//         // Perform any validation if needed

//         // Example: Check if email and password are not empty
//         if (email.trim() === "" || password.trim() === "") {
//             alert("Please enter both email and password");
//             return;
//         }

//         // If validation passes, you can submit the form or perform any other action
//         // For now, let's just log the email and password
//         console.log("Email:", email);
//         console.log("Password:", password);

//         // Here you can submit the form using AJAX or any other method
//         // For demonstration purposes, let's prevent the default form submission
//         loginForm.submit();
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submit-btn");

    submitBtn.addEventListener("click", function () {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Retrieve registered user data from localStorage
        const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

        if (!registeredUser) {
            alert("No user found. Please sign up first.");
            return;
        }

        // Validate credentials
        if (email === registeredUser.email && password === registeredUser.password) {
            alert("Login successful!");
            
            // Redirect to home page after 1 second
            setTimeout(() => {
                window.location.href = "index.html"; // Replace with your home page file
            }, 1000); // 1000 milliseconds = 1 second

        } else {
            alert("Invalid email or password.");
        }
    });
});
