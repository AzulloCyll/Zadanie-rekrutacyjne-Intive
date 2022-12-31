const setLanguage = (lang) => {
    // navigation
    nav[0].innerHTML = dictionary[lang].nav.login
    nav[1].innerHTML = dictionary[lang].nav.register
    logoffButton.innerHTML = dictionary[lang].buttons.logout
    registerModalCloseButton.innerHTML = dictionary[lang].buttons.back
    loginModalCloseButton.innerHTML = dictionary[lang].buttons.back
    loginModalRegisterButton.innerHTML = dictionary[lang].buttons.register
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
}

const initLanguageChanger = () => {
    const langNav = document.querySelectorAll(".lang > a")
    const PL = langNav[0]
    const EN = langNav[1]

    PL.addEventListener("click", (e) => {
        PL.classList.add("active")
        EN.classList.remove("active")
        setLanguage(e.target.innerHTML.toLowerCase())
    })

    EN.addEventListener("click", (e) => {
        EN.classList.add("active")
        PL.classList.remove("active")
        setLanguage(e.target.innerHTML.toLowerCase().trim())
    })
}
