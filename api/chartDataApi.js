const ctx1 = document.getElementById("graph1")

const addChart = async (ctx) => {
    const data = await fetchData()

    const { transactions } = data

    const allTransactionsCount = transactions.length
    const transactionTypesCount =
        getNumberOfUniqueTransactionTypes(transactions)

    const dataToView = percentageOfTypeData(
        transactions,
        transactionTypesCount,
        allTransactionsCount
    )

    console.log([...dataToView])

    const config = {
        type: "pie",
        data: {
            datasets: [{ data: dataToView.map((item) => item.percentage) }],
            labels: ["type1", "type2", "type3", "type4"],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "right",
                },
                title: {
                    display: true,
                    text: "Chart.js Pie Chart",
                    position: "bottom",
                },
            },
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
            index,
            percentage,
        }

        result.push(item)
    }

    console.log(result)
    return result
}

addChart(ctx1)
