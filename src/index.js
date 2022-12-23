const main = document.querySelector("main .top")

const nav = document.querySelectorAll("body > header > nav > ul > li")
const navLogoff = document.querySelector(
    "body > header > nav > ul > li:last-child > span.button"
)

const loginButton = document.querySelector("body > main > div.login > button")

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

const generateDataArticles = async (element) => {
    let transactionData = await fetchTransactions()

    console.log(transactionData)

    transactionData.sort((a, b) => {
        return b.description.localeCompare(a.description)
    })

    element.innerHTML = ""

    for (data of transactionData) {
        const div = document.createElement("div")
        const p = document.createElement("p")
        p.innerHTML = `Title = ${data.description}, Amount = ${data.amount}`
        div.classList.add("transaction")
        div.append(p)
        element.prepend(div)
    }
}

// generateDataArticles(main)

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
    unsetHidden(nav[2])
})
