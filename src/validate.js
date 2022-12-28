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

    showErrors(
        nameStatus,
        emailStatus,
        email2Status,
        emailCompareStatus,
        passwordStatus
    )

    // set validation status
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
