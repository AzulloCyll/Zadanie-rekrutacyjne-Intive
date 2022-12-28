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
    if (window.localStorage.getItem("users")) {
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

    const isUserExist = checkIfUserExist(newUser, users)
    const isEmailExists = checkIfEmailExists(newUser, users)

    if (!isUserExist && isEmailExists) {
        hideAll(errors)
        show(errors[7])
    }

    if (isUserExist && isEmailExists) {
        hideAll(errors)
        show(errors[6])
    }
    if (!isUserExist && !isEmailExists) {
        hideAll(errors)
        window.localStorage.setItem(
            "users",
            JSON.stringify(new Array(newUser, ...users))
        )
        changeUsername(newUser.login)
        setCurrentUser(newUser)

        navigation.gotoLoggedView()

        generateDataArticles(main)
    } else {
        show(modals[0])
    }
}

const checkIfUserExist = (userToFind, users) => {
    let user = users.find((user) => userToFind.login === user.login)
    return user ? 1 : 0
}

const checkIfPasswordCorrect = (userToFind, users) => {
    let user = users.find((user) => userToFind.login === user.login)

    if (user) {
        if (user.password === userToFind.password) {
            return 1
        } else return 0
    }
}

const checkIfEmailExists = (emailToFind, users) => {
    for (let user of users) {
        if (emailToFind.email === user.email) {
            show(errors[7])
            return 1
        } else return 0
    }
}

const loginUser = (login, password) => {
    const loggingUser = {
        login: login,
        password: password,
    }

    const isUserExist = checkIfUserExist(loggingUser, users)
    const isPasswordCorrect = checkIfPasswordCorrect(loggingUser, users)

    if (isUserExist && isPasswordCorrect) {
        hideAll(errors)
        navigation.gotoLoggedView()
        setCurrentUser(loggingUser)
        changeUsername(loggingUser.login)
        generateDataArticles(main)
    }

    if (isUserExist && !isPasswordCorrect) {
        hideAll(errors)
        show(errors[9])
        show(modals[0])
    }

    if (!isUserExist) {
        hideAll(errors)
        show(errors[8])
        show(modals[0])
    }
}

initUserApi = () => {
    getUsers()
    getCurrentUser()

    document.addEventListener("DOMContentLoaded", () => {
        if (currentUser && currentUser.login !== "") {
            navigation.gotoLoggedView()

            generateDataArticles(main)
        }
    })
}
