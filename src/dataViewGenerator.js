const generateDataArticles = async (element) => {
    let transactionData = await fetchData()

    const { transactions, transacationTypes } = transactionData

    // transactions.sort((a, b) => {
    //     return b.description.localeCompare(a.description)
    // })

    const transactionsWithId = addId(transactions)
    console.log(transactionsWithId)
    console.log(transacationTypes)

    element.innerHTML = ""

    //dopisać paski z datą na mobile
    for (transaction of transactionsWithId) {
        const article = document.createElement("article")
        article.classList.add("transaction")

        const date = document.createElement("span")
        date.classList.add("date")
        date.innerHTML = transaction.date

        const icon = document.createElement("span")
        icon.classList.add("icon")
        icon.innerHTML = getIconByTransactionType(transaction.type)

        const desc = document.createElement("span")
        desc.classList.add("description")
        desc.innerHTML = transaction.description

        const transactionTypeName = document.createElement("span")
        transactionTypeName.classList.add("type")
        transactionTypeName.innerHTML = transaction.type

        const amount = document.createElement("span")
        amount.classList.add("amount")
        amount.innerHTML = transaction.amount

        const balance = document.createElement("span")
        balance.classList.add("balance")
        balance.innerHTML = transaction.balance

        article.append(date, icon, desc, transactionTypeName, amount, balance)
        article.id = `${transaction.id}`

        element.append(article)
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

const getIconByTransactionType = (transactionType) => {
    switch (transactionType) {
        case 1:
            return '<i style="color: green;" class="fa-solid fa-right-to-bracket"></i>'
            break

        case 2:
            return '<i style="color: red;" class="fa-solid fa-right-from-bracket"></i>'
            break

        case 3:
            return '<i style="color: green;" class="fa-solid fa-right-to-bracket"></i>'
            break

        case 4:
            return '<i style="color: red;" class="fa-solid fa-right-from-bracket"></i>'
            break
    }
}
