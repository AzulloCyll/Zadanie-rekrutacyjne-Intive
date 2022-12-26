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

    setCurrentUser(newUser)

    window.localStorage.setItem(
        "users",
        JSON.stringify(new Array(newUser, ...users))
    )

    changeUsername(newUser.login)
    navigation.login()
}

initUserApi = () => {
    document.addEventListener("DOMContentLoaded", () => {
        getUsers()
        getCurrentUser()

        console.log(users)
        console.log(currentUser)
    })
}

initUserApi()
