const loginForm = document.getElementById("register")
const registerButton = document.querySelector(".register-btn")
const errors = document.getElementsByClassName("errors")

const validateName = (input) => {
    const regex = new RegExp("^.{6,16}$") //all chars 6-16

    if (regex.test(input.value)) {
        setHidden(errors[0])
        return 1
    } else {
        unsetHidden(errors[0])
        return 0
    }
}

const validateEmail = (input) => {
    const regex = new RegExp(
        "^([A-Z|a-z|0-9](.|_){0,1})+[A-Z|a-z|0-9]@([A-Z|a-z|0-9])+((.){0,1}[A-Z|a-z|0-9]){2}.[a-z]{2,3}$"
    )

    console.log(regex)

    console.log(regex.test(input.value))
    if (regex.test(input.value)) {
        setHidden(errors[1])
        return 1
    } else {
        unsetHidden(errors[1])
        return 0
    }
}

const inputCompare = (input1, input2) => {
    if (input1.value !== input2.value) {
        console.log("e-maile niezgodne")
        unsetHidden(errors[2])
        unsetHidden(errors[4])
        return 0
    } else {
        setHidden(errors[2])
        setHidden(errors[4])
        return 1
    }
}

registerButton.addEventListener("click", () => {
    const name = validateName(loginForm.name2)
    validateEmail(loginForm.email)

    const passwdCompareStatus = inputCompare(loginForm.email, loginForm.email2)
})
