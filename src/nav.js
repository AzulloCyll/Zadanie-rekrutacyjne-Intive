class Navigate {
    constructor() {
        this.nav = document.querySelectorAll("body > header > nav > ul > li")
        this.pages = document.querySelectorAll("main > div")
        this.loginButton = document.querySelector("button.login-btn")
        this.logoffButton = document.querySelector(".logoff-btn")
        this.registerButton = document.querySelector(".register-btn")
        this.modals = document.getElementsByClassName("modal")
        this.loginAndRegisterModalBackBtn = document.querySelector(
            ".loginRegisterModalBack-btn"
        )
        this.adModalBackBtn = document.querySelector(".adModalBack-btn")
        this.adModalRegisterButton = document.querySelector(".register2-btn")
        this.modalXButtons = document.querySelectorAll(".x-button")
    }

    gotoLoginView = () => {
        hideAll(this.pages)
        hide(this.nav[0])
        show(this.nav[1])
        show(this.pages[1])
    }

    gotoRegisterView = () => {
        hideAll(this.pages)
        hide(this.nav[1])
        show(this.nav[0])
        show(this.pages[2])
    }

    gotoUnloggedView = () => {
        hideAll(this.pages)
        showAll(this.nav)
        hide(this.nav[2])
        show(this.pages[0])
    }

    gotoLoggedView = () => {
        hideAll(this.nav)
        hideAll(this.pages)
        show(this.nav[2])
        show(this.pages[3])
    }

    closeModal = (element) => {
        hide(element)
    }

    clean = () => {
        // cleaning form inputs
        loginForm.name.value = ""
        loginForm.passwd.value = ""
        registerForm.name2.value = ""
        registerForm.email.value = ""
        registerForm.email2.value = ""
        registerForm.passwd2.value = ""

        // destroying charts
        chart1.destroy()
        chart2.destroy()

        // refreshing sort button
        sorted = undefined
        document.querySelectorAll(".sort-btn span")[1].innerHTML = ""

        // cleanig data page
        document.querySelector(".data").innerHTML = "Loading"
    }

    init = () => {
        this.nav[0].addEventListener("click", () => {
            this.gotoLoginView()
        })

        this.nav[1].addEventListener("click", () => {
            this.gotoRegisterView()
        })

        this.logoffButton.addEventListener("click", () => {
            localStorageApi.getUsers()
            localStorageApi.deleteCurrentUser()

            this.clean()
            this.gotoUnloggedView()
        })

        this.loginButton.addEventListener("click", (e) => {
            e.preventDefault()
            localStorageApi.loginUser(
                loginForm.name.value,
                loginForm.passwd.value
            )
        })

        this.registerButton.addEventListener("click", () => {
            const validationStatus = validate()

            if (validationStatus)
                localStorageApi.registerUser(
                    registerForm.name2.value,
                    registerForm.email.value,
                    registerForm.passwd2.value
                )
        })

        this.loginAndRegisterModalBackBtn.addEventListener("click", () => {
            this.closeModal(this.modals[0])
        })

        this.adModalBackBtn.addEventListener("click", () => {
            this.closeModal(this.modals[1])
        })

        // go to registration button
        this.adModalRegisterButton.addEventListener("click", () => {
            this.closeModal(this.modals[1])
            registerForm.email.value = loginForm.name.value
            navigation.gotoRegisterView()
        })

        // x buttons on modals
        this.modalXButtons.forEach((button) => {
            button.addEventListener("click", () => {
                this.closeModal(this.modals[0])
                this.closeModal(this.modals[1])
            })
        })
    }
}
