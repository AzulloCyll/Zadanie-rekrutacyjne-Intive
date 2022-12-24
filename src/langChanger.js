const setLanguage = (lang) => {
    // navigation
    nav[0].innerHTML = dictionary[lang].nav.login
    nav[1].innerHTML = dictionary[lang].nav.register
    navLogoff.innerHTML = dictionary[lang].buttons.logout
    // starting screen
    document.querySelector(".unlogged h1").innerHTML =
        dictionary[lang].text.unloggedH1
    document.querySelector(".unlogged p").innerHTML =
        dictionary[lang].text.unloggedP
    // login screen
    document.querySelector(".login h1").innerHTML =
        dictionary[lang].text.loginH1
    document.querySelector(".login label[for='name']").innerHTML =
        dictionary[lang].forms.login
    document.querySelector(".login label[for='passwd']").innerHTML =
        dictionary[lang].forms.passwd
    document.querySelector(".login-btn").innerHTML =
        dictionary[lang].buttons.login
    //register screen
    document.querySelector(".register H1").innerHTML =
        dictionary[lang].text.registerH1
    document.querySelector(".register label[for='name2']").innerHTML =
        dictionary[lang].forms.login
    document.querySelector(".register label[for='passwd2']").innerHTML =
        dictionary[lang].forms.passwd
    document.querySelector(".register label[for='passwd3']").innerHTML =
        dictionary[lang].forms.passwd2
    document.querySelector(".register-btn").innerHTML =
        dictionary[lang].buttons.register
    // language changer
    document.querySelector(".lang span").innerHTML =
        dictionary[lang].text.language
}

const initLanguageChanger = () => {
    const langNav = document.querySelectorAll(".lang > a")
    const PL = langNav[0]
    const EN = langNav[1]

    PL.addEventListener("click", (e) => {
        PL.classList.add("active")
        EN.classList.remove("active")
        console.log(e.target.innerHTML.toLowerCase())
        setLanguage(e.target.innerHTML.toLowerCase())
    })

    EN.addEventListener("click", (e) => {
        EN.classList.add("active")
        PL.classList.remove("active")
        console.log(e.target.innerHTML.toLowerCase().trim())
        setLanguage(e.target.innerHTML.toLowerCase().trim())
    })
}
