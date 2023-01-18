const URL = "https://api.npoint.io/38edf0c5f3eb9ac768bd"

const fetchData = () =>
    fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            return data
        })
        .catch((err) => console.log(err))
