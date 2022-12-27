class Navigate {
    constructor(
        nav,
        pages,
        loginButtom,
        logoffButton,
        registerButton,
        modals,
        registerModalCloseButton
    ) {
        this.nav = nav
        this.pages = pages
        this.loginButton = loginButtom
        this.logoffButton = logoffButton
        this.registerButton = registerButton
        this.modals = modals
        this.registerModalCloseButton = registerModalCloseButton
    }

    unsetHidden = (element) => {
        element.classList.remove("hidden")
    }

    setHidden = (element) => {
        element.classList.add("hidden")
    }

    hideAll = (elements) => {
        for (let elem of elements) {
            elem.classList.add("hidden")
        }
    }

    showAll = (elements) => {
        for (let elem of elements) {
            elem.classList.remove("hidden")
        }
    }

    gotoLogin = () => {
        this.hideAll(this.pages)
        this.setHidden(this.nav[0])
        this.unsetHidden(this.nav[1])
        this.unsetHidden(this.pages[1])
    }

    gotoRegister = () => {
        this.hideAll(this.pages)
        this.setHidden(this.nav[1])
        this.unsetHidden(this.nav[0])
        this.unsetHidden(this.pages[2])
    }

    logoff = () => {
        this.hideAll(this.pages)
        this.showAll(this.nav)
        this.setHidden(this.nav[2])
        this.unsetHidden(this.pages[0])
    }

    login = () => {
        this.hideAll(this.nav)
        this.hideAll(this.pages)
        this.unsetHidden(this.nav[2])
        this.unsetHidden(this.pages[3])

        generateDataArticles(main)
    }

    closeModal = (element) => {
        this.setHidden(element)
    }

    initNavigation = () => {
        this.nav[0].addEventListener("click", () => {
            this.gotoLogin()
        })

        this.nav[1].addEventListener("click", () => {
            this.gotoRegister()
        })

        this.logoffButton.addEventListener("click", () => {
            this.logoff()
            deleteCurrentUser()
        })

        this.loginButton.addEventListener("click", (e) => {
            e.preventDefault()
            this.login()
        })

        this.registerButton.addEventListener("click", () => {
            const validationStatus = validate()

            if (validationStatus)
                registerUser(
                    registerForm.name2.value,
                    registerForm.email.value,
                    registerForm.passwd2.value
                )
        })

        this.registerModalCloseButton.addEventListener("click", () => {
            this.closeModal(this.modals[0])
        })
    }
}
