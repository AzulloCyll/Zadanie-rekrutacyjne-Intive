const show = (element) => {
    element.classList.remove("hidden")
}

const hide = (element) => {
    element.classList.add("hidden")
}

const hideAll = (elements) => {
    for (let elem of elements) {
        elem.classList.add("hidden")
    }
}

const showAll = (elements) => {
    for (let elem of elements) {
        elem.classList.remove("hidden")
    }
}

const changeUsername = (userName) => {
    document.querySelector(".username").innerHTML = userName
}
