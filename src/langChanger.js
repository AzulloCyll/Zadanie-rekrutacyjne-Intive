const setLanguage = (lang, loginForm, registerForm) => {
    // navigation
    document.querySelectorAll("body > header > nav > ul > li")[0].innerHTML =
        dictionary[lang].nav.login
    document.querySelectorAll("body > header > nav > ul > li")[1].innerHTML =
        dictionary[lang].nav.register
    document.querySelector(".logoff-btn").innerHTML =
        dictionary[lang].buttons.logout
    document.querySelector(".loginRegisterModalBack-btn").innerHTML =
        dictionary[lang].buttons.back
    document.querySelector(".adModalBack-btn").innerHTML =
        dictionary[lang].buttons.back
    document.querySelector(".register2-btn").innerHTML =
        dictionary[lang].buttons.register

    // starting screen
    document.querySelector(".unlogged h1").innerHTML =
        dictionary[lang].text.unloggedH1
    document.querySelector(".unlogged p").innerHTML =
        dictionary[lang].text.unloggedP

    // login screen
    document.querySelector(".login h1").innerHTML =
        dictionary[lang].text.loginH1
    document.querySelector(".login p").innerHTML = dictionary[lang].text.loginP
    document.querySelector(".login label[for='name']").innerHTML =
        dictionary[lang].labels.login
    document.querySelector(".login label[for='passwd']").innerHTML =
        dictionary[lang].labels.passwd
    document.querySelector(".login-btn").innerHTML =
        dictionary[lang].buttons.login

    //register screen
    document.querySelector(".register H1").innerHTML =
        dictionary[lang].text.registerH1
    document.querySelector(".register label[for='name2']").innerHTML =
        dictionary[lang].labels.login
    document.querySelector(".register label[for='passwd2']").innerHTML =
        dictionary[lang].labels.passwd
    document.querySelector(".register label[for='email']").innerHTML =
        dictionary[lang].labels.email
    document.querySelector(".register label[for='email2']").innerHTML =
        dictionary[lang].labels.email2
    document.querySelector(".register-btn").innerHTML =
        dictionary[lang].buttons.register

    //placeholders
    loginForm.name.placeholder = dictionary[lang].placeholders.loginOrEmail
    loginForm.passwd.placeholder = dictionary[lang].placeholders.password
    registerForm.name2.placeholder = dictionary[lang].placeholders.name
    registerForm.passwd2.placeholder = dictionary[lang].placeholders.password
    registerForm.email.placeholder = dictionary[lang].placeholders.email
    registerForm.email2.placeholder = dictionary[lang].placeholders.retypeEmail

    // language changer
    document.querySelector(".lang span").innerHTML =
        dictionary[lang].text.language

    // errors
    document.querySelector("#register > div:nth-child(1) > div").innerHTML =
        dictionary[lang].errors.errorWrongName
    document.querySelector(
        "#register > div:nth-child(2) > div:nth-child(3)"
    ).innerHTML = dictionary[lang].errors.errorWrongEmail
    document.querySelector(
        "#register > div:nth-child(3) > div:nth-child(3)"
    ).innerHTML = dictionary[lang].errors.errorWrongEmail
    document.querySelector(
        "#register > div:nth-child(2) > div:nth-child(4)"
    ).innerHTML = dictionary[lang].errors.errorEmailNotMatch
    document.querySelector(
        "#register > div:nth-child(3) > div:nth-child(4)"
    ).innerHTML = dictionary[lang].errors.errorEmailNotMatch
    document.querySelector("#register > div:nth-child(4) > div").innerHTML =
        dictionary[lang].errors.errorPasswordToShort

    // modal errors
    document.querySelector(
        "body > div.modal > div > div:nth-child(1)"
    ).innerHTML = dictionary[lang].errors.errorUserExists
    document.querySelector(
        "body > div.modal > div > div:nth-child(2)"
    ).innerHTML = dictionary[lang].errors.errorEmailExists
    document.querySelector(
        "body > div.modal > div > div:nth-child(3)"
    ).innerHTML = dictionary[lang].errors.errorUserNotExists
    document.querySelector(
        "body > div.modal > div > div:nth-child(4)"
    ).innerHTML = dictionary[lang].errors.errorWrongPassword

    // information modal
    document.querySelector(".ad p").innerHTML = dictionary[lang].text.ad

    // logged screen
    const balances = document.querySelectorAll(".balance span")
    for (let balance of balances) {
        balance.innerHTML = dictionary[lang].text.balance
    }

    document.querySelector(".history").innerHTML = dictionary[lang].text.history

    // transaction types
    const types1 = document.querySelectorAll(".type1")
    for (const type of types1) {
        type.innerHTML = dictionary[lang].transactionTypes[1]
    }

    const types2 = document.querySelectorAll(".type2")
    for (const type of types2) {
        type.innerHTML = dictionary[lang].transactionTypes[2]
    }

    const types3 = document.querySelectorAll(".type3")
    for (const type of types3) {
        type.innerHTML = dictionary[lang].transactionTypes[3]
    }

    const types4 = document.querySelectorAll(".type4")
    for (const type of types4) {
        type.innerHTML = dictionary[lang].transactionTypes[4]
    }

    //after search
    const first = document.querySelector("p.not-found span.first")
    if (first) {
        first.innerHTML = dictionary[lang].text.notFoundFirst
    }

    const second = document.querySelector("p.not-found span.second")
    if (second) {
        second.innerHTML = dictionary[lang].text.notFoundSecond
    }

    const sortBackButton = document.querySelector(".sortBack-btn")
    if (sortBackButton) {
        sortBackButton.innerHTML = dictionary[lang].buttons.back
    }

    // sort
    const sortButton = document.querySelector(".sort-btn")
    const sortButtonText = sortButton.getElementsByTagName("span")[0]
    sortButtonText.innerHTML = dictionary[lang].text.sort

    // notice
    document.querySelector(".notice").innerHTML = dictionary[lang].text.notice
}

const initLanguageChanger = () => {
    PL.addEventListener("click", () => {
        lang = "pl"
        PL.classList.add("active")
        EN.classList.remove("active")
        setLanguage("pl", loginForm, registerForm)
    })

    EN.addEventListener("click", () => {
        lang = "en"
        EN.classList.add("active")
        PL.classList.remove("active")
        setLanguage("en", loginForm, registerForm)
    })
}

const refreshLang = () => {
    lang === "en" ? EN.click() : PL.click()
}
