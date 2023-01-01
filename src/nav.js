class Navigate {
    constructor(
        nav,
        pages,
        loginButtom,
        logoffButton,
        registerButton,
        modals,
        modal0CloseButton,
        modal1CloseButton,
        modal1RegisterButton,
        xButtons
    ) {
        this.nav = nav
        this.pages = pages
        this.loginButton = loginButtom
        this.logoffButton = logoffButton
        this.registerButton = registerButton
        this.modals = modals
        this.modal0CloseButton = modal0CloseButton
        this.modal1CloseButton = modal1CloseButton
        this.modal1RegisterButton = modal1RegisterButton
        this.xButtons = xButtons
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

        this.modal0CloseButton.addEventListener("click", () => {
            this.closeModal(this.modals[0])
        })

        this.modal1CloseButton.addEventListener("click", () => {
            this.closeModal(this.modals[1])
        })

        this.modal1RegisterButton.addEventListener("click", () => {
            this.closeModal(this.modals[1])
            registerForm.email.value = loginForm.name.value
            navigation.gotoRegisterView()
        })

        this.xButtons.forEach((button) => {
            button.addEventListener("click", () => {
                this.closeModal(this.modals[0])
                this.closeModal(this.modals[1])
            })
        })
    }
}
