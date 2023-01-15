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

const randomFromMaxInteger = (number) => {
    const min = 0
    const max = number
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const getDataFromDataObjectByNumber = (data, number) => {
    return data[number] ? data[number] : false
}

const getNumber = randomFromMaxInteger(dataFile.length)
const dataSelected = getDataFromDataObjectByNumber(dataFile, getNumber)
