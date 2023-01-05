const generateDataArticles = async (element) => {
    let transactionData = await fetchData()

    const { transactions, transacationTypes } = transactionData

    // transactions.sort((a, b) => {
    //     return b.description.localeCompare(a.description)
    // })

    const transactionsWithId = addId(transactions)
    console.log(transactionsWithId)

    element.innerHTML = ""

    //dopisać paski z datą na mobile
    for (transaction of transactions) {
        const article = document.createElement("article")
        article.classList.add("transaction")

        const date = document.createElement("span")
        date.classList.add("date", "hidden")
        date.innerHTML = transaction.date

        const icon = document.createElement("i")
        icon.classList.add("icon")
        icon.innerHTML = transaction.type

        const desc = document.createElement("span")
        desc.classList.add("description")
        desc.innerHTML = transaction.description

        const transactionTypeName = document.createElement("span")
        transactionTypeName.classList.add("type", "hidden")
        transactionTypeName.innerHTML = transaction.type

        const amount = document.createElement("span")
        amount.classList.add("amount")
        amount.innerHTML = transaction.amount

        const balance = document.createElement("span")
        balance.classList.add("balance", "hidden")
        balance.innerHTML = transaction.balance

        article.append(date, icon, desc, transactionTypeName, amount, balance)

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

const showElements = (...elements) => {
    for (let element of elements) {
        showAll(element)
    }
}

const hideElements = (...elements) => {
    for (let element of elements) {
        hideAll(element)
    }
}

const dates = document.getElementsByClassName("date")
const transactionTypeNames = document.getElementsByClassName("type")
const balances = document.getElementsByClassName("balance")

// RWD
addEventListener("resize", () => {
    if (window.innerWidth > 769) {
        console.log("mobile")
        showElements(dates, transactionTypeNames, balances)
    } else {
        console.log("desktop")
        hideElements(dates, transactionTypeNames, balances)
    }
})
