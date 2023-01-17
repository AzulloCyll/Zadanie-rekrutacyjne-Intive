class Navigate {
    constructor(
        pages,
        loginButton,
        registerButton,
        modals,
        modal1RegisterButton,
        modalXButtons
    ) {
        this.nav = document.querySelectorAll("body > header > nav > ul > li")
        this.pages = pages
        this.loginButton = loginButton
        this.logoffButton = document.querySelector(".logoff-btn")
        this.registerButton = registerButton
        this.modals = modals
        this.registerModalBackBtn = document.querySelector(".registerModalBack-btn")
        this.adModalBackBtn = document.querySelector(".adModalBack-btn")
        this.modal1RegisterButton = modal1RegisterButton
        this.modalXButtons = modalXButtons
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

        this.registerModalBackBtn.addEventListener("click", () => {
            this.closeModal(this.modals[0])
        })

        this.adModalBackBtn.addEventListener("click", () => {
            this.closeModal(this.modals[1])
        })

        // go to registration button
        this.modal1RegisterButton.addEventListener("click", () => {
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
