const main = document.querySelector("main");

const generateDataArticles = async (element) => {
  let transactionData = await fetchTransactions();

  // transactionData.sort((a,b)=> {transactionData.a })

  element.innerHTML = "";

  for (data of transactionData) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.innerHTML = `Title = ${data.description}`;
    div.classList.add("transaction");
    div.append(p);
    element.prepend(div);
  }
};

generateDataArticles(main);
