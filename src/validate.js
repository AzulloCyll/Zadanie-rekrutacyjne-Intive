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

const validatePassword = (input) => {
    if (input.value.length < 6) {
        return false
    } else {
        return true
    }
}

const inputCompare = (input1, input2) => {
    if (input1.value !== input2.value) {
        return false
    } else {
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
    if (!inputs[4]) {
        unsetHidden(errors[5])
    }
}

const validate = () => {
    // checking fields of form
    const nameStatus = validateName(loginForm.name2)
    const emailStatus = validateEmail(loginForm.email)
    const email2Status = validateEmail(loginForm.email2)
    const emailCompareStatus = inputCompare(loginForm.email, loginForm.email2)
    const passwordStatus = validatePassword(loginForm.passwd2)

    showErrors(
        nameStatus,
        emailStatus,
        email2Status,
        emailCompareStatus,
        passwordStatus
    )

    // over validation status
    if (
        nameStatus &&
        emailStatus &&
        email2Status &&
        emailCompareStatus &&
        passwordStatus
    ) {
        return true
    } else return false
}

registerButton.addEventListener("click", () => {
    const validationStatus = validate()
    console.log(validationStatus)
})
