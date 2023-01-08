const articles = document.getElementsByTagName("article")

const generateDataArticles = async (element) => {
    let transactionData = await fetchData()

    const { transactions, transacationTypes } = transactionData

    const transactionsWithId = addId(transactions)
    console.log(transactionsWithId)
    console.log(transacationTypes)

    element.innerHTML = ""

    //dopisać paski z datą na mobile

    const dateArray = []

    for (transaction of transactionsWithId) {
        if (!dateArray.includes(transaction.date)) {
            generateLineWithDate(transaction, element)
            dateArray.push(transaction.date)
        }

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
        transactionTypeName.classList.add("type", `type${transaction.type}`)
        transactionTypeName.innerHTML = getDescriptionByTransactionType(
            transacationTypes,
            transaction.type
        )

        const amount = document.createElement("span")
        amount.classList.add("amount")
        amount.innerHTML = transaction.amount

        const balance = document.createElement("span")
        balance.classList.add("balance")
        balance.innerHTML = `<span>Saldo: </span>${transaction.balance}`

        article.append(date, icon, desc, transactionTypeName, amount, balance)
        article.id = `${transaction.id}`

        element.append(article)
    }

    addEventListeners(articles)
}

const addEventListeners = (articles) => {
    for (article of articles) {
        article.addEventListener("click", (e) => {
            console.log(e.currentTarget.id)
            closeAllTransactions(articles)
            openTransactionById(articles, e.currentTarget.id)
        })
    }
}

const openTransactionById = (articles, id) => {
    for (let article of articles) {
        if (article.id === id) {
            article.classList.add("open")
            const balance = article.getElementsByClassName("balance")[0]
            const transactionType = article.getElementsByClassName("type")[0]

            balance.style.display = "inline-block"
            transactionType.style.display = "inline-block"
        }
    }
}

const closeAllTransactions = (articles) => {
    for (let article of articles) {
        article.classList.remove("open")

        const balance = article.getElementsByClassName("balance")[0]
        const transactionType = article.getElementsByClassName("type")[0]

        balance.style.display = "none"
        transactionType.style.display = "none"
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

const getDescriptionByTransactionType = (
    transacationTypes,
    transactionType
) => {
    return transacationTypes[transactionType]
}

const generateLineWithDate = (transaction, element) => {
    const div = document.createElement("div")
    div.classList.add("line")

    const hr = document.createElement("hr")
    hr.classList.add("hr")

    const dateMobile = document.createElement("span")
    dateMobile.classList.add("dateMobile")
    dateMobile.innerHTML = transaction.date

    div.append(hr, dateMobile)
    element.append(div)
}
