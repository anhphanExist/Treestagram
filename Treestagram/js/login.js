$(document)ready(function () {
    $("#login-btn").click(loginOnClick);
});

function loginOnClick() {
    let username = $("#username-text-field").val().trim();
    let password = $("#password-text-field").val().trim();
    $.ajax({
        method: "GET",
        url: `/api/User?userName=${username}&passWord=${password}`,
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
        }
    });
}