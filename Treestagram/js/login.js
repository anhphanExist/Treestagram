$(document).ready(function () {
    $("#login-btn").click(loginJS.loginOnClick);
});

let loginJS = Object.create({
    loginOnClick: function () {
        let username = $("#username-text-field").val().trim();
        let password = $("#password-text-field").val().trim();
        $.ajax({
            method: "GET",
            url: `/api/User?username=${username}&password=${password}`,
            success: function (response) {
                if (response) {
                    window.location.href = "/views/newfeed.html";
                }
                else {
                    alert("Wrong username or password !!");
                }
            },
            fail: function () {
                alert("Please input your username and password");
                console.log("fail to login");
            }
        });
    }
});

function fuckLogin() {
    window.location.href = "/views/newfeed.html";
    console.log("FUCK LOGIN");
}