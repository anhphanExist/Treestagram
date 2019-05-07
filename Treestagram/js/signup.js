$(document).ready(function () {
    $("#signup-btn").click(signupJS.signupOnClick);
});

let signupJS = Object.create({
    signupOnClick: function () {
        let email = $("#email-text-field").val().trim();
        let username = $("#username-text-field").val().trim();
        let password = $("#password-text-field").val().trim();
        $.ajax({
            method: "POST",
            url: `/api/User?email=${email}&username=${username}&password=${password}`,
            success: function (response) {
                alert("Create new user successful, log in");
                window.location.href = "../index.html";
            },
            fail: function () {
                alert("signup failed");
                console.log("post signup on click failed");
            }
        });
    }
});
