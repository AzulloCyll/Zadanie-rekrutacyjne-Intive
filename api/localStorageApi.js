class LocalStorageApi {
    constructor() {
        this.currentUser = {
            login: "",
            email: "",
            password: "",
        }
        this.users = []
    }

    getUsers = () => {
        if (window.localStorage.getItem("users")) {
            this.users = [...JSON.parse(window.localStorage.getItem("users"))]
        }
    }

    getCurrentUser = () => {
        if (window.localStorage.getItem("currentUser")) {
            this.currentUser = JSON.parse(
                window.localStorage.getItem("currentUser")
            )
        }
    }

    setCurrentUser = (user) => {
        window.localStorage.setItem("currentUser", JSON.stringify(user))
        this.currentUser = user
    }

    deleteCurrentUser = () => {
        window.localStorage.removeItem("currentUser")
    }

    registerUser = (login, email, password) => {
        this.getUsers()

        const newUser = {
            login: login,
            email: email,
            password: crypt(login, password),
        }

        hideAll(errors)

        const isUserExist = this.checkIfUserExist(newUser, this.users)
        const isEmailExists = this.checkIfEmailExists(newUser, this.users)

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
                JSON.stringify(new Array(newUser, ...this.users))
            )
            changeUsername(newUser.login)
            this.setCurrentUser(newUser)
            navigation.gotoLoggedView()

            generateDataArticles(loggedDownPage)
        }
    }

    checkIfUserExist = (userToFind, users) => {
        let user = users.find((user) => userToFind.login === user.login)
        return user ? 1 : 0
    }

    checkIfEmailExists = (userToFind, users) => {
        let user = users.find((user) => userToFind.email === user.email)
        return user ? 1 : 0
    }

    checkIfPasswordCorrect = (userToFind, users) => {
        let foundByUser = users.find((user) => userToFind.login === user.login)
        let foundByEmail = users.find((user) => userToFind.login === user.email)

        if (foundByUser) {
            if (
                decrypt(foundByUser.login, foundByUser.password) ===
                userToFind.password
            )
                return 1
        }

        if (foundByEmail) {
            if (
                decrypt(foundByEmail.login, foundByEmail.password) ===
                userToFind.password
            )
                return 1
        }

        return 0
    }

    showData = (loggingUser) => {
        hideAll(errors)
        navigation.gotoLoggedView()
        this.setCurrentUser(loggingUser)
        changeUsername(loggingUser.login)

        generateDataArticles(loggedDownPage)
    }

    loginUser = (login, password) => {
        const loggingUser = {
            login: login,
            email: login,
            password: password,
        }

        const isUserExist = this.checkIfUserExist(loggingUser, this.users)
        const isEmailExist = this.checkIfEmailExists(loggingUser, this.users)
        const isPasswordCorrect = this.checkIfPasswordCorrect(
            loggingUser,
            this.users
        )
        const isLoginEmail = validateEmail(login)

        if (!isLoginEmail) {
            if (isUserExist && isPasswordCorrect) {
                this.showData(loggingUser)
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
                this.showData(loggingUser)
            } else if (!isEmailExist) {
                show(modals[1])
            } else {
                hideAll(errors)
                show(errors[9])
                show(modals[0])
            }
        }
    }

    init = () => {
        this.getUsers()
        this.getCurrentUser()
        changeUsername(this.currentUser.login)

        document.addEventListener("DOMContentLoaded", () => {
            if (this.currentUser && this.currentUser.login !== "") {
                navigation.gotoLoggedView()

                generateDataArticles(loggedDownPage)
            }
        })
    }
}
