const generateDataArticles = async (element) => {
    let transactionData = await fetchData()

    const { transactions, transacationTypes } = transactionData

    transactions.sort((a, b) => {
        return b.description.localeCompare(a.description)
    })

    element.innerHTML = ""

    for (data of transactions) {
        const div = document.createElement("div")
        const p = document.createElement("p")
        p.innerHTML = `Title = ${data.description}, Amount = ${data.amount}`
        div.classList.add("transaction")
        div.append(p)
        element.prepend(div)
    }
}
