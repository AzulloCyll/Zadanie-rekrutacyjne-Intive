const addCharts = async (currentUser) => {
    const ctx1 = document.getElementById("graph1")
    const ctx2 = document.getElementById("graph2")

    const langNav = document.querySelectorAll(".lang > a")
    const PL = langNav[0]
    const EN = langNav[1]

    let transactions = []
    const dataSet = getDataFromDataObjectByNumber(dataFile, currentUser.dataSet)

    const labels = getLabelsByLanguage(lang)
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

    //second graph
    const days = getDates(transactions)
    const balanceFromLastTransactionOfDay = getLastTransactionsOfDayBalance(
        days,
        transactions
    )

    const config1 = {
        type: "doughnut",
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
            layout: {
                padding: {
                    top: 50,
                    bottom: 50,
                    right: 0,
                    left: 0,
                },
            },
            plugins: {
                legend: {
                    position: "right",
                },
                title: {
                    display: true,
                    position: "top",
                    text: "Transakcje według typu",
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
            layout: {
                padding: 40,
            },
            aspectRatio: 1.2,
            plugins: {
                legend: {
                    display: false,
                    position: "top",
                },
                title: {
                    display: true,
                    text: "Saldo na koniec dnia",
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

    chart1 = await new Chart(ctx1, config1)
    chart2 = await new Chart(ctx2, config2)

    PL.onclick = () => {
        updateChart1(chart1, labelsPL, dataToView1, "Transakcje według typu")
        updateChart2(chart2, "Saldo na koniec dnia")
    }

    EN.onclick = () => {
        updateChart1(chart1, labelsEN, dataToView1, "Transactions by type")
        updateChart2(chart2, "End of the day balance")
    }
}

const updateChart1 = (chart, labels, data, text) => {
    const result = []
    for (let item of data) {
        result.push(labels[item.type])
    }
    chart.config.data.labels = result
    chart.config.options.plugins.title.text = text
    chart.update()
}

const updateChart2 = (chart, text) => {
    chart.config.options.plugins.title.text = text
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
