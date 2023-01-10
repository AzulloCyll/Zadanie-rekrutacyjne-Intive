const ctx1 = document.getElementById("graph1")

const addChart = async (ctx) => {
    const data = await fetchData()

    const { transactions } = data

    const allTransactionsCount = transactions.length
    const transactionTypesCount =
        getNumberOfUniqueTransactionTypes(transactions)

    console.log(
        percentageOfTypeData(
            transactions,
            transactionTypesCount,
            allTransactionsCount
        )
    )

    const config = {
        type: "bar",
        data: {
            labels: transactions.map((row) => row.type),
            datasets: [{ label: "ttt", row: (row) => row.amount }], /// ????
        },
    }

    new Chart(ctx, config)
}

const getNumberOfTransactionsByType = (type, transactions) => {
    const result = []

    for (let transaction of transactions) {
        if (transaction.type === type) {
            result.push(transaction.type)
        }
    }

    return result.length
}

const getNumberOfUniqueTransactionTypes = (transactions) => {
    const result = []

    for (let transaction of transactions) {
        if (!result.includes(transaction.type)) {
            result.push(transaction.type)
        }
    }

    return result.length
}

const percentageOfTypeData = (
    transactions,
    transactionTypesCount,
    allTransactionsCount
) => {
    const result = []

    for (let index = 1; index <= transactionTypesCount; index++) {
        const amount = getNumberOfTransactionsByType(index, transactions)
        const percentage = (amount / allTransactionsCount) * 100

        const item = {
            type: index,
            amount: amount,
            percentage: percentage,
        }

        result.push(item)
    }

    return result
}

addChart(ctx1)
