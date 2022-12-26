const changeUsername = (userName) => {
    document.querySelector(".username").innerHTML = userName
}

const generateDataArticles = async (element) => {
    let transactionData = await fetchTransactions()

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
