const URL = "https://api.jsonbin.io/v3/b/63a092ab15ab31599e2045be"
const auth = "$2b$10$5pBRUbFRKdKft/b8qSQ3IeyPQgQ8CLXlvgoQA6GdpYvdWva.pOfGS"

const fetchTransactions = () =>
    fetch(URL, {
        headers: {
            "x-access-key": auth,
        },
    })
        .then((res) => res.json())
        .then((data) => {
            return data.record.transactions
        })
        .catch((err) => console.log(err))

const fetchTransactionTypes = () =>
    fetch(URL, {
        headers: {
            "x-access-key": auth,
        },
    })
        .then((res) => res.json())
        .then((data) => {
            return data.record.transacationTypes // literówka na serwerze
        })
        .catch((err) => console.log(err))
