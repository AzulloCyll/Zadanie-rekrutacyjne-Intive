const searchByDescription = (data, input) => {
    return data.filter((item) => {
        return (
            item.description.toLowerCase().includes(input.toLowerCase()) && item
        )
    })
}

const searchAndReturn = (transactions, searchText) => {
    return searchText !== undefined
        ? [...searchByDescription(transactions, searchText)]
        : [...transactions]
}

const initSearch = () => {
    const searchInput = document.getElementById("search")
    const searchButton = document.querySelector(".search-btn")

    const elementWithData = document.querySelector(
        "main > div.logged > div.downPage > div.data"
    )

    searchButton.addEventListener("click", () => {
        generateDataArticles(
            elementWithData,
            localStorageApi.currentUser,
            searchInput.value
        )
    })
    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            generateDataArticles(
                elementWithData,
                localStorageApi.currentUser,
                searchInput.value
            )
        }
    })
}
