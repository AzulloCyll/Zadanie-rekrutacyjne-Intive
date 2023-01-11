const addCharts = async (ctx1, ctx2) => {
    const data = await fetchData()

    const { transactions } = data

    const labelsEN = dictionary.en.transactionTypes
    const labelsPL = dictionary.pl.transactionTypes

    const allTransactionsCount = transactions.length
    const transactionTypesCount =
        getNumberOfUniqueTransactionTypes(transactions)

    const dataToView = percentageOfTypeData(
        transactions,
        transactionTypesCount,
        allTransactionsCount,
        labelsPL
    )

    const config1 = {
        type: "pie",
        data: {
            datasets: [
                {
                    data: dataToView.map((item) => item.percentage),
                    backgroundColor: [
                        "rgb(34,139,34)",
                        "rgb(220,20,60)",
                        "rgb(34,139,34)",
                        "rgb(220,20,60)",
                    ],
                },
            ],
            labels: [...dataToView.map((item) => item.type)],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "right",
                },
            },
        },
    }

    PL.addEventListener("click", () => {
        updateChartLabels(chart1, labelsPL)
    })

    EN.addEventListener("click", () => {
        updateChartLabels(chart1, labelsEN)
    })

    const chart1 = new Chart(ctx1, config1)
}

const updateChartLabels = (chart, labels) => {
    chart.config.data.labels = Object.values(labels)
    chart.update()
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
    allTransactionsCount,
    transacationTypes
) => {
    const result = []

    for (let index = 1; index <= transactionTypesCount; index++) {
        const amount = getNumberOfTransactionsByType(index, transactions)
        const percentage = (amount / allTransactionsCount) * 100
        const type = getDescriptionByTransactionType(transacationTypes, index)

        const item = {
            type,
            percentage,
        }

        result.push(item)
    }
    return result
}

addCharts(ctx1)
