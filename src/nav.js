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

    gotoLogin = () => {
        hideAll(this.pages)
        hide(this.nav[0])
        show(this.nav[1])
        show(this.pages[1])
    }

    gotoRegister = () => {
        hideAll(this.pages)
        hide(this.nav[1])
        show(this.nav[0])
        show(this.pages[2])
    }

    logoff = () => {
        hideAll(this.pages)
        showAll(this.nav)
        hide(this.nav[2])
        show(this.pages[0])
    }

    login = () => {
        hideAll(this.nav)
        hideAll(this.pages)
        show(this.nav[2])
        show(this.pages[3])

        generateDataArticles(main)
    }

    closeModal = (element) => {
        hide(element)
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

            loginUser(loginForm.name.value, loginForm.passwd.value)
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
