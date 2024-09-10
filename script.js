(function () {
    var userId = document.getElementById("userID");
    var passwordID = document.getElementById("passwordID");
    var cancel = document.getElementById("cancelBtnID");
    var login = document.getElementById("loginBtnID");
    var error = document.getElementById("errorID");
    login.addEventListener("click", function () {
        validateInput(userId);
        validateInput(passwordID);
        var validated = false;
        if (userId.value !== "testuser" && validateInput(userId)) {
            userId.style.backgroundColor = "red";
            error.innerText = "Incorrect id"; // not sure why this works
        }
        if (passwordID.value !== "mypassword" && validateInput(passwordID)) {
            passwordID.style.backgroundColor = "red";
            error.innerText = "Incorrect password";
        }
    });
    cancel.addEventListener("click", function () {
        userId.value = "";
        passwordID.value = "";
        userId.style.backgroundColor = "white";
        passwordID.style.backgroundColor = "white";
        error.innerText = "";
    });
    function validateInput(input) {
        input.style.backgroundColor = "white";
        var validated = false;
        if (input.value.trim() === "") {
            input.style.backgroundColor = "yellow";
            error.innerText = "Please enter the correct information";
            validated = false;
        }
        else
            validated = true;
        return validated;
    }
})();
