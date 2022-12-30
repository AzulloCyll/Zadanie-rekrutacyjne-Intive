let users = []

let currentUser = {
    login: "",
    email: "",
    password: "",
}

const getUsers = () => {
    if (window.localStorage.getItem("users")) {
        users = [...JSON.parse(window.localStorage.getItem("users"))]
    }
}

const getCurrentUser = () => {
    if (window.localStorage.getItem("currentUser")) {
        currentUser = JSON.parse(window.localStorage.getItem("currentUser"))
    }
}

const setCurrentUser = (user) => {
    window.localStorage.setItem("currentUser", JSON.stringify(user))
    currentUser = user
}

const deleteCurrentUser = () => {
    window.localStorage.removeItem("currentUser")
}

const registerUser = (login, email, password) => {
    getUsers()

    const newUser = {
        login: login,
        email: email,
        password: password,
    }

    hideAll(errors)

    const isUserExist = checkIfUserExist(newUser, users)
    const isEmailExists = checkIfEmailExists(newUser, users)

    console.log(isUserExist, isEmailExists)

    if (isUserExist && !isEmailExists) {
        show(errors[6])
        show(modals[0])
    }

    if (!isUserExist && isEmailExists) {
        show(errors[7])
        show(modals[0])
    }

    if (isUserExist && isEmailExists) {
        show(errors[6])
        show(errors[7])
        show(modals[0])
    }

    if (!isUserExist && !isEmailExists) {
        window.localStorage.setItem(
            "users",
            JSON.stringify(new Array(newUser, ...users))
        )
        changeUsername(newUser.login)
        setCurrentUser(newUser)

        navigation.gotoLoggedView()
        // generateDataArticles(main)
    }
}

const checkIfUserExist = (userToFind, users) => {
    let user = users.find((user) => userToFind.login === user.login)
    return user ? 1 : 0
}

const checkIfEmailExists = (userToFind, users) => {
    let user = users.find((user) => userToFind.email === user.email)
    return user ? 1 : 0
}

const checkIfPasswordCorrect = (userToFind, users) => {
    let foundByUser = users.find((user) => userToFind.login === user.login)
    let foundByEmail = users.find((user) => userToFind.login === user.email)

    if (foundByUser) {
        if (foundByUser.password === userToFind.password) return 1
    }

    if (foundByEmail) {
        if (foundByEmail.password === userToFind.password) return 1
    }

    return 0
}

const loginUser = (login, password) => {
    const loggingUser = {
        login: login,
        email: login,
        password: password,
    }

    const isUserExist = checkIfUserExist(loggingUser, users)
    const isEmailExist = checkIfEmailExists(loggingUser, users)
    const isPasswordCorrect = checkIfPasswordCorrect(loggingUser, users)
    const isLoginEmail = validateEmail(login)

    // console.log(
    //     "isUserExist:",
    //     isUserExist,
    //     "isEmailExist:",
    //     isEmailExist,
    //     "isPasswordCorrect:",
    //     isPasswordCorrect,
    //     "email:",
    //     isLoginEmail
    // )

    if (!isLoginEmail) {
        if (isUserExist && isPasswordCorrect) {
            hideAll(errors)
            navigation.gotoLoggedView()
            setCurrentUser(loggingUser)
            changeUsername(loggingUser.login)
            // generateDataArticles(main)
        }

        if (!isUserExist && !isPasswordCorrect) {
            hideAll(errors)
            show(errors[8])
            show(modals[0])
        }

        if (isUserExist && !isPasswordCorrect) {
            hideAll(errors)
            show(errors[9])
            show(modals[0])
        }
    } else {
        if (isEmailExist && isPasswordCorrect) {
            // get to other function
            hideAll(errors)
            navigation.gotoLoggedView()
            setCurrentUser(loggingUser)
            changeUsername(loggingUser.login)
            // generateDataArticles(main)
        } else if (!isEmailExist) {
            ///// tutaj <------------------------------------------------------
            console.log("pokazac")
        } else {
            hideAll(errors)
            show(errors[9])
            show(modals[0])
        }
    }
}

initUserApi = () => {
    getUsers()
    getCurrentUser()
    changeUsername(currentUser.login)

    document.addEventListener("DOMContentLoaded", () => {
        if (currentUser && currentUser.login !== "") {
            navigation.gotoLoggedView()

            // generateDataArticles(main)
        }
    })
}
