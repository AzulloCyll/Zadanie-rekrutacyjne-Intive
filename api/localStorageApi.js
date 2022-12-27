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

        if (currentUser) {
            changeUsername(currentUser.login)
            navigation.login()
        }
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

    if (!isUserExist && !isEmailExists) {
        window.localStorage.setItem(
            "users",
            JSON.stringify(new Array(newUser, ...users))
        )
        changeUsername(newUser.login)
        setCurrentUser(newUser)
        navigation.login()
    } else {
        navigation.unsetHidden(modals[0])
    }
}

const checkIfUserExist = (currentUser, users) => {
    for (let user of users) {
        if (currentUser.login === user.login) {
            console.log("user exists")
            navigation.unsetHidden(errors[6])
            return 1
        } else return 0
    }
}

const checkIfEmailExists = (currentUser, users) => {
    for (let user of users) {
        if (currentUser.email === user.email) {
            console.log("email exists")
            navigation.unsetHidden(errors[7])
            return 1
        } else return 0
    }
}

initUserApi = () => {
    document.addEventListener("DOMContentLoaded", () => {
        getUsers()
        getCurrentUser()
    })
}
