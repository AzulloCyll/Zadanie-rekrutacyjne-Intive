const addCharts = async (ctx1, ctx2, currentUser) => {
    let transactions = []
    const dataSet = getDataFromDataObjectByNumber(dataFile, currentUser.dataSet)

    const labels = getLabelsByLanguage(lang)

    console.log(labels)
    const labelsPL = dictionary.pl.transactionTypes
    const labelsEN = dictionary.en.transactionTypes

    if (dataSet) {
        transactions = [...dataSet]
    } else if (currentUser.login !== "") {
        const data = await fetchData()
        console.log("No saved data found -> fetching data from server")
        transactions = data.transactions
    }

    const allTransactionsCount = transactions.length

    const dataToView1 = percentageOfTypeData(
        transactions,
        allTransactionsCount,
        labels
    )

    const days = getDates(transactions)
    const balanceFromLastTransactionOfDay = getLastTransactionsOfDayBalance(
        days,
        transactions
    )

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
            labels: [...dataToView1.map((item) => item.label)],
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
                    backgroundColor: balanceFromLastTransactionOfDay.map(
                        (item) => {
                            if (item > 0) {
                                return "rgb(34,139,34)"
                            } else return "rgb(220,20,60)"
                        }
                    ),
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

    const chart1 = await new Chart(ctx1, config1)
    const chart2 = await new Chart(ctx2, config2)

    const addListeners = () => {
        PL.onclick = () => {
            updateChart1Labels(chart1, labelsPL, dataToView1)
        }

        EN.onclick = () => {
            updateChart1Labels(chart1, labelsEN, dataToView1)
        }
    }
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

const getLabelsByLanguage = () => {
    if (lang === "pl") {
        return dictionary.pl.transactionTypes
    }

    if (lang === "en") {
        return dictionary.en.transactionTypes
    }
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

const percentageOfTypeData = (transactions, allTransactionsCount, labels) => {
    const result = []

    for (let index = 1; index <= 4; index++) {
        const amount = getNumberOfTransactionsByType(index, transactions)
        const percentage = (amount / allTransactionsCount) * 100
        const type = index.toString()

        const item = {
            type,
            amount,
            percentage,
            label: labels[index],
        }

        if (percentage > 0) result.push(item)
    }

    return result
}
