(function() {
    const userId = document.getElementById("userID") as HTMLInputElement;
    const passwordID = document.getElementById("passwordID") as HTMLInputElement;
    const cancel = document.getElementById("cancelBtnID") as HTMLButtonElement;
    const login = document.getElementById("loginBtnID") as HTMLButtonElement;
    const error = document.getElementById("errorID") as HTMLSpanElement;

    login.addEventListener("click", function() {
        validateInput(userId);
        validateInput(passwordID);

        let validated: boolean = false;

        if (userId.value !== "testuser" && validateInput(userId)) {
            userId.style.backgroundColor = "red";
            error.innerText = "Incorrect id"; // not sure why this works
        }

        if (passwordID.value !== "mypassword" && validateInput(passwordID)) {
            passwordID.style.backgroundColor = "red";
            error.innerText = "Incorrect password"
        }

        
    })

    cancel.addEventListener("click", function() {
        userId.value = "";
        passwordID.value = "";
        userId.style.backgroundColor = "white";
        passwordID.style.backgroundColor = "white";
        error.innerText = "";
    })


    function validateInput(input: HTMLInputElement) {
        input.style.backgroundColor = "white";
        let validated: boolean = false;

        if (input.value.trim() === "") {
            input.style.backgroundColor = "yellow";
            error.innerText = "Please enter the correct information";
            validated = false;
        } else validated = true;
    
        return validated;
    }


})();