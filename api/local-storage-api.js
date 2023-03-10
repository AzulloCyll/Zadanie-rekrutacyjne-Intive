class LocalStorageApi {
    constructor() {
        this.currentUser = {
            login: "",
            email: "",
            password: "",
        }
        this.users = []
        this.elementWithData = document.querySelector(
            "main > div.logged > div.downPage > div.data"
        )
        this.modals = document.getElementsByClassName("modal")
        this.errors = document.getElementsByClassName("errors")
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
        return this.currentUser
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
            dataSet: randomFromMaxInteger(dataFile.length),
        }

        hideAll(this.errors)

        const isUserExist = this.checkIfUserExist(newUser, this.users)
        const isEmailExists = this.checkIfEmailExists(newUser, this.users)

        if (isUserExist && !isEmailExists) {
            show(this.errors[6])
            show(this.modals[0])
        }

        if (!isUserExist && isEmailExists) {
            show(this.errors[7])
            show(this.modals[0])
        }

        if (isUserExist && isEmailExists) {
            show(this.errors[6])
            show(this.errors[7])
            show(this.modals[0])
        }

        if (!isUserExist && !isEmailExists) {
            window.localStorage.setItem(
                "users",
                JSON.stringify(new Array(newUser, ...this.users))
            )
            changeUsername(newUser.login)
            this.setCurrentUser(newUser)
            navigation.gotoLoggedView()

            addCharts(localStorageApi.currentUser)
            generateDataArticles(this.elementWithData, this.currentUser)
        }
    }

    checkIfUserExist = (userToFind, users) => {
        const user = users.find((user) => userToFind.login === user.login)
        return user ? 1 : 0
    }

    checkIfEmailExists = (userToFind, users) => {
        const user = users.find((user) => userToFind.email === user.email)
        return user ? 1 : 0
    }

    checkIfPasswordCorrect = (userToFind, users) => {
        const foundByUser = users.find(
            (user) => userToFind.login === user.login
        )
        const foundByEmail = users.find(
            (user) => userToFind.login === user.email
        )

        if (foundByUser) {
            if (
                decrypt(foundByUser.login, foundByUser.password) ===
                userToFind.password
            )
                return foundByUser
        }

        if (foundByEmail) {
            if (
                decrypt(foundByEmail.login, foundByEmail.password) ===
                userToFind.password
            )
                return foundByEmail
        }

        return 0
    }

    showData = (user) => {
        hideAll(this.errors)
        navigation.gotoLoggedView()
        this.setCurrentUser(user)
        changeUsername(user.login)

        addCharts(localStorageApi.currentUser)
        generateDataArticles(this.elementWithData, this.currentUser)
    }

    loginUser = (login, password) => {
        const loggingUser = {
            login: login,
            email: login,
            password: password,
        }

        const isUserExist = this.checkIfUserExist(loggingUser, this.users)
        const isEmailExist = this.checkIfEmailExists(loggingUser, this.users)

        const isCredentialsGoodAndReturnUser = this.checkIfPasswordCorrect(
            loggingUser,
            this.users
        )

        const isLoginEmail = validateEmail(login)

        if (!isLoginEmail) {
            if (isUserExist && isCredentialsGoodAndReturnUser) {
                this.currentUser = isCredentialsGoodAndReturnUser

                this.showData(this.currentUser)
            }

            if (!isUserExist && !isCredentialsGoodAndReturnUser) {
                hideAll(this.errors)
                show(this.errors[8])
                show(this.modals[0])
            }

            if (isUserExist && !isCredentialsGoodAndReturnUser) {
                hideAll(this.errors)
                show(this.errors[9])
                show(this.modals[0])
            }
        } else {
            if (isEmailExist && isCredentialsGoodAndReturnUser) {
                this.currentUser = isCredentialsGoodAndReturnUser

                this.showData(this.currentUser)
            } else if (!isEmailExist) {
                // if login is email and not registered
                show(this.modals[1])
            } else {
                hideAll(this.errors)
                show(this.errors[9])
                show(this.modals[0])
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

                addCharts(localStorageApi.currentUser)
                generateDataArticles(this.elementWithData, this.currentUser)
            }
        })
    }
}
