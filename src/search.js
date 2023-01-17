const searchByDescription = (data, input) => {
    const foundData = []

    for (item of data) {
        if (item.description.toLowerCase().includes(input.toLowerCase())) {
            foundData.push(item)
        }
    }

    return foundData
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
