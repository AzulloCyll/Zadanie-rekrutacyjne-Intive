const validateName = (input) => {
    // letters, numbers and -_\/[]; 6-16 chars; at least 5 letters and one number; no spaces
    const regex = new RegExp(
        "^(?=(?:.*[a-zA-Z]){5,})(?=(?:.*[0-9]){1,})([A-Za-z0-9-_\\]\\[\\/\\\\]{6,16})$"
    )
    return regex.test(input.value)
}

const validateEmail = (input) => {
    const regex = new RegExp(
        "^([A-Z|a-z|0-9](.|_){0,1})+[A-Z|a-z|0-9]@([A-Z|a-z|0-9])+((.){0,1}[A-Z|a-z|0-9]){2}.[a-z]{2,3}$"
    )
    return regex.test(input.value || input)
}

const validatePassword = (input) => {
    if (input.value.length < 6) {
        return false
    } else {
        return true
    }
}

const inputCompare = (input1, input2) => {
    return input1.value === input2.value ? true : false
}

const showErrors = (...inputs) => {
    const errors = document.getElementsByClassName("errors")
    hideAll(errors)

    if (!inputs[0]) {
        show(errors[0])
    }

    if (!inputs[1]) {
        show(errors[1])
    }

    if (!inputs[2]) {
        show(errors[3])
    }

    if (!inputs[3]) {
        show(errors[2])
        show(errors[4])
    }
    if (!inputs[4]) {
        show(errors[5])
    }
}

const validate = () => {
    // checking all fields of form
    const nameStatus = validateName(registerForm.name2)
    const emailStatus = validateEmail(registerForm.email)
    const email2Status = validateEmail(registerForm.email2)
    const emailCompareStatus = inputCompare(
        registerForm.email,
        registerForm.email2
    )
    const passwordStatus = validatePassword(registerForm.passwd2)

    const checkAll =
        nameStatus &&
        emailStatus &&
        email2Status &&
        emailCompareStatus &&
        passwordStatus

    showErrors(
        nameStatus,
        emailStatus,
        email2Status,
        emailCompareStatus,
        passwordStatus
    )

    // return validation status
    if (checkAll) {
        return true
    } else return false
}
