const sortByTransactionType = (data, vector) => {
    switch (vector) {
        case "asc":
            return data.sort((a, b) => a.type - b.type)
            break

        case "desc":
            return data.sort((a, b) => b.type - a.type)
            break

        default:
            break
    }
}

const initSortButton = () => {
    sortButton.addEventListener("click", (e) => {
        const sortButtonIcon = sortButton.getElementsByTagName("span")[1]
        if (sorted === undefined) {
            sorted = e.currentTarget.getAttribute("data-vector")
            generateDataArticles(loggedDownPage)
            sortButtonIcon.innerHTML = "<i class='fa-solid fa-caret-up'></i>"
        } else if (sorted === "asc") {
            sorted = "desc"
            e.currentTarget.setAttribute("data-vector", "asc")
            generateDataArticles(loggedDownPage)
            sortButtonIcon.innerHTML = "<i class='fa-solid fa-caret-down'></i>"
        } else if (sorted === "desc") {
            sorted = "asc"
            e.currentTarget.setAttribute("data-vector", "desc")
            generateDataArticles(loggedDownPage)
            sortButtonIcon.innerHTML = "<i class='fa-solid fa-caret-up'></i>"
        }
    })
}
