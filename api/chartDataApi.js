const addCharts = async (ctx1, ctx2) => {
    // const data = await fetchData()
    // const { transactions } = data

    const transactions = dataFile[2]

    const labelsEN = dictionary.en.transactionTypes
    const labelsPL = dictionary.pl.transactionTypes

    const allTransactionsCount = transactions.length

    const dataToView1 = percentageOfTypeData(transactions, allTransactionsCount)

    const days = getDates(transactions)
    const balanceFromLastTransactionOfDay = getLastTransactionsOfDayBalance(
        days,
        transactions
    )

    console.log(getDates(transactions))
    console.log(balanceFromLastTransactionOfDay)

    const config1 = {
        type: "pie",
        data: {
            datasets: [
                {
                    data: dataToView1.map((item) => item.percentage),
                    backgroundColor: [
                        ...dataToView1.map((item) => {
                            if (item.type % 2 !== 0) {
                                return "rgb(34,139,34)"
                            }
                            if (item.type % 2 === 0) {
                                return "rgb(220,20,60)"
                            }
                        }),
                    ],
                },
            ],
            labels: [...dataToView1.map((item) => item.type)],
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

    const config2 = {
        type: "bar",
        data: {
            datasets: [
                {
                    data: [...balanceFromLastTransactionOfDay],
                    backgroundColor: [
                        "rgb(34,139,34)",
                        "rgb(220,20,60)",
                        "rgb(34,139,34)",
                    ],
                },
            ],
            labels: [...days],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                    position: "top",
                },
            },
            scales: {
                x: {
                    border: {
                        display: true,
                    },
                    grid: {
                        display: true,
                        drawOnChartArea: true,
                        drawTicks: true,
                    },
                },
                y: {
                    border: {
                        display: false,
                    },
                    grid: {
                        color: (ctx) => {
                            if (ctx.tick.value === 0) return "#000000"
                        },
                    },
                },
            },
        },
    }

    PL.addEventListener("click", () => {
        updateChart1Labels(chart1, labelsPL, dataToView1)
    })

    EN.addEventListener("click", () => {
        updateChart1Labels(chart1, labelsEN, dataToView1)
    })

    const chart1 = new Chart(ctx2, config1) // change this
    const chart2 = new Chart(ctx1, config2)
}

const updateChart1Labels = (chart, labels, data) => {
    const result = []
    for (let item of data) {
        result.push(labels[item.type])
    }

    chart.config.data.labels = result
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

const getDates = (transactions) => {
    const result = []
    for (let transaction of transactions) {
        if (!result.includes(transaction.date)) {
            result.push(transaction.date)
        }
    }

    return result
}

const getLastTransactionsOfDayBalance = (days, transactions) => {
    const result = []
    for (let day of days) {
        const lastTransaction = transactions.find((item) => day === item.date)
        result.push(lastTransaction.balance)
    }
    return result
}

const percentageOfTypeData = (transactions, allTransactionsCount) => {
    const result = []

    for (let index = 1; index <= 4; index++) {
        const amount = getNumberOfTransactionsByType(index, transactions)
        const percentage = (amount / allTransactionsCount) * 100
        const type = index.toString()

        const item = {
            type,
            amount,
            percentage,
        }

        if (percentage > 0) result.push(item)
    }

    return result
}

addCharts(ctx1, ctx2)
