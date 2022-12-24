const nav = document.querySelectorAll("body > header > nav > ul > li")
const navLogoff = document.querySelector(
    "body > header > nav > ul > li:last-child > span.button"
)
const loginButton = document.querySelector("button.login-btn")
const mainPages = document.querySelectorAll("main > div")

const unsetHidden = (element) => {
    element.classList.remove("hidden")
}

const setHidden = (element) => {
    element.classList.add("hidden")
}

const hideAll = (elements) => {
    for (elem of elements) {
        elem.classList.add("hidden")
    }
}

const showAll = (elements) => {
    for (elem of elements) {
        elem.classList.remove("hidden")
    }
}

const setActive = (element) => {
    element.classList.add("active")
}

const unsetActiveAll = (elements) => {
    for (el of elements) {
        el.classList.remove("active")
    }
}

nav[0].addEventListener("click", () => {
    unsetActiveAll(nav)
    hideAll(mainPages)

    setActive(nav[0])
    unsetHidden(mainPages[1])
})

nav[1].addEventListener("click", () => {
    unsetActiveAll(nav)
    hideAll(mainPages)

    setActive(nav[1])
    unsetHidden(mainPages[2])
})

navLogoff.addEventListener("click", () => {
    unsetActiveAll(nav)
    hideAll(mainPages)
    showAll(nav)
    setHidden(nav[2])
    unsetHidden(mainPages[0])
})

loginButton.addEventListener("click", (e) => {
    e.preventDefault()
    unsetActiveAll(nav)
    hideAll(nav)
    hideAll(mainPages)
    unsetHidden(nav[2])
    unsetHidden(mainPages[3])
})
