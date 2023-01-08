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
    document.querySelector(".search-btn").addEventListener("click", () => {
        generateDataArticles(loggedDownPage, searchInput.value)
    })
}
