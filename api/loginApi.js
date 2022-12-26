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
        document.querySelector(".username").innerHTML = currentUser.login
        loginButton.click()
    }
}

const setCurrenUser = (user) => {
    window.localStorage.setItem("currentUser", JSON.stringify(user))
}

const registerUser = (login, email, password) => {
    getUsers()

    const newUser = {
        login: login,
        email: email,
        password: password,
    }

    setCurrenUser(newUser)

    window.localStorage.setItem(
        "users",
        JSON.stringify(new Array(newUser, ...users))
    )
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
