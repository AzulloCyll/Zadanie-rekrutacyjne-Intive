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

    const elementWithData = document.querySelector(
        "main > div.logged > div.downPage > div.data"
    )
    const sortButton = document.querySelector(".sort-btn")


    sortButton.addEventListener("click", (e) => {
        const sortButtonIcon = sortButton.querySelectorAll("span")[1]
        
        if (sorted === "asc") {
                sorted = "desc"
                e.currentTarget.parentElement.setAttribute("data-vector", "asc")
                generateDataArticles(elementWithData, localStorageApi.currentUser)
                sortButtonIcon.innerHTML = "<i class='fa-solid fa-caret-down'></i>"
            } else if (sorted === "desc") {
                sorted = "asc"
                e.currentTarget.parentElement.setAttribute("data-vector", "desc")
                generateDataArticles(elementWithData, localStorageApi.currentUser)
                sortButtonIcon.innerHTML = "<i class='fa-solid fa-caret-up'></i>"
            }
        })
}
