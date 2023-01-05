const generateDataArticles = async (element) => {
    let transactionData = await fetchData()

    const { transactions, transacationTypes } = transactionData

    // transactions.sort((a, b) => {
    //     return b.description.localeCompare(a.description)
    // })

    const transactionsWithId = addId(transactions)
    console.log(transactionsWithId)

    element.innerHTML = ""

    for (transaction of transactions) {
        const div = document.createElement("div")
        div.classList.add("transaction")

        const icon = document.createElement("i")
        icon.classList.add("icon")
        icon.innerHTML = transaction.type

        const desc = document.createElement("span")
        desc.classList.add("description")
        desc.innerHTML = transaction.description

        const amount = document.createElement("span")
        amount.classList.add("amount")
        amount.innerHTML = transaction.amount

        div.append(icon, desc, amount)

        element.append(div)
    }
}

const addId = (transactions) => {
    const result = []
    for (let transaction of transactions) {
        let uniqueId = Math.floor(
            Math.random() * Math.floor(Math.random() * Date.now())
        )
        transaction = { ...transaction, id: uniqueId }
        result.push(transaction)
    }
    return result
}
