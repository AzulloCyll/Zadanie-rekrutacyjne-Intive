const dictionary = {
    en: {
        nav: { login: "Login", register: "Register" },
        labels: {
            login: "Login:",
            passwd: "Password:",
            email: "e-mail:",
            email2: "Retype e-mail:",
        },
        buttons: { login: "Login", logout: "Logout", register: "Register" },
        text: {
            loginH1: "Login",
            unloggedH1: "Welcome on page",
            unloggedP: "Login or register to move on",
            registerH1: "Register",
            language: "Language:",
        },
    },

    pl: {
        nav: { login: "Logowanie", register: "Rejestracja" },
        labels: {
            login: "Login:",
            passwd: "Hasło:",
            email: "e-mail:",
            email2: "Powtórz e-mail:",
        },
        buttons: {
            login: "Zaloguj",
            logout: "Wyloguj",
            register: "Rejestracja",
        },
        text: {
            loginH1: "Logowanie",
            unloggedH1: "Witaj na stronie",
            unloggedP: "Zaloguj sie lub zarejestruj",
            registerH1: "Rejestracja",
            language: "Język:",
        },
    },
}

// //setting language from html.lang attr
// const language = document.documentElement.lang
// const lang = dictionary[language]
