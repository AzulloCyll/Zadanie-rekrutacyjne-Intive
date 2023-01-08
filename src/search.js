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
    searchButton.addEventListener("click", () => {
        generateDataArticles(loggedDownPage, searchInput.value)
    })
}
