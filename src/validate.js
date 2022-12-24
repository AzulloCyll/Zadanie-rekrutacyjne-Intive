const validateName = (input) => {
    const value = input.value
    console.log(value)
}

const loginForm = document.getElementById("register")

const registerButton = document.querySelector(".register-btn")

registerButton.addEventListener("click", () => {
    validateName(loginForm.name2)
})
