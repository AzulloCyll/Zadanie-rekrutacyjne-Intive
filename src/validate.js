const loginForm = document.getElementById("register")
const registerButton = document.querySelector(".register-btn")
const errors = document.getElementsByClassName("errors")

const validateName = (input) => {
    const regex = new RegExp("^.{6,16}$") //all chars 6-16

    if (input.value === "") {
        console.log("Pusty")
        return 0
    } else if (regex.test(input.value)) {
        console.log("Dobry")
        return 1
    } else {
        console.log("Zły")
        return 0
    }
}

const validatePassword = (input) => {
    const value = input.value
    console.log(value)
}

const passwdCompare = (input1, input2) => {
    if (input1.value !== input2.value) {
        console.log("hasla niezgodne")
        unsetHidden(errors[0])
        unsetHidden(errors[1])
        return 0
    } else {
        setHidden(errors[0])
        setHidden(errors[1])
        return 1
    }
}

registerButton.addEventListener("click", () => {
    validateName(loginForm.name2)
    validatePassword(loginForm.passwd2)
    validatePassword(loginForm.passwd3)
    const passwdCompareStatus = passwdCompare(
        loginForm.passwd2,
        loginForm.passwd3
    )
})
