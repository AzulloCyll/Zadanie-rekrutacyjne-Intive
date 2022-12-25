const nav = document.querySelectorAll("body > header > nav > ul > li")
const mainPages = document.querySelectorAll("main > div")
const loginButton = document.querySelector("button.login-btn")
const logoffButton = document.querySelector(
    "body > header > nav > ul > li:last-child > span.button"
)

class Navigate {
    constructor(nav, pages, loginButtom, logoffButton) {
        this.nav = nav
        this.pages = pages
        this.loginButton = loginButtom
        this.logoffButton = logoffButton
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
        console.log(elements)
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
        })

        this.loginButton.addEventListener("click", (e) => {
            e.preventDefault()
            this.login()
        })
    }
}

const navigation = new Navigate(nav, mainPages, loginButton, logoffButton)
navigation.initNavigation()
