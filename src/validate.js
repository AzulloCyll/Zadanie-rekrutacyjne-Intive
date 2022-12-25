const loginForm = document.getElementById("register")
const registerButton = document.querySelector(".register-btn")
const errors = document.getElementsByClassName("errors")

const validateName = (input) => {
    const regex = new RegExp("^.{6,16}$") //all chars 6-16
    return regex.test(input.value)
}

const validateEmail = (input) => {
    const regex = new RegExp(
        "^([A-Z|a-z|0-9](.|_){0,1})+[A-Z|a-z|0-9]@([A-Z|a-z|0-9])+((.){0,1}[A-Z|a-z|0-9]){2}.[a-z]{2,3}$"
    )
    return regex.test(input.value)
}

const inputCompare = (input1, input2) => {
    if (input1.value !== input2.value) {
        console.log("e-maile niezgodne")
        unsetHidden(errors[2])
        unsetHidden(errors[4])
        return false
    } else {
        setHidden(errors[2])
        setHidden(errors[4])
        return true
    }
}

const showErrors = (...inputs) => {
    for (error of errors) {
        setHidden(error)
    }

    if (!inputs[0]) {
        unsetHidden(errors[0])
    }

    if (!inputs[1]) {
        unsetHidden(errors[1])
    }

    if (!inputs[2]) {
        unsetHidden(errors[3])
    }

    if (!inputs[3]) {
        unsetHidden(errors[2])
        unsetHidden(errors[4])
    }
}

const validate = () => {
    // checking fields of form
    const nameStatus = validateName(loginForm.name2)
    const emailStatus = validateEmail(loginForm.email)
    const email2Status = validateEmail(loginForm.email2)
    const emailCompareStatus = inputCompare(loginForm.email, loginForm.email2)

    showErrors(nameStatus, emailStatus, email2Status, emailCompareStatus)
}

registerButton.addEventListener("click", () => {
    validate()
})
