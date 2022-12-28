class Navigate {
    constructor(
        nav,
        pages,
        loginButtom,
        logoffButton,
        registerButton,
        modals,
        modalCloseButton
    ) {
        this.nav = nav
        this.pages = pages
        this.loginButton = loginButtom
        this.logoffButton = logoffButton
        this.registerButton = registerButton
        this.modals = modals
        this.modalCloseButton = modalCloseButton
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

    initNavigation = () => {
        this.nav[0].addEventListener("click", () => {
            this.gotoLoginView()
        })

        this.nav[1].addEventListener("click", () => {
            this.gotoRegisterView()
        })

        this.logoffButton.addEventListener("click", () => {
            getUsers()
            this.gotoUnloggedView()
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

        this.modalCloseButton.addEventListener("click", () => {
            this.closeModal(this.modals[0])
        })
    }
}
