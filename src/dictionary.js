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
        errors: {
            errorWrongName: "6-16 characters",
            errorWrongEmail: "wrong e-mail",
            errorEmailNotMatch: "e-mail's not match",
            errorPasswordToShort: "min. 6 characters",
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
        errors: {
            errorWrongName: "6-16 znaków",
            errorWrongEmail: "nieprawidłowy e-mail",
            errorEmailNotMatch: "e-maile niezgodne",
            errorPasswordToShort: "min. 6 znaków",
        },
    },
}

// //setting language from html.lang attr
// const language = document.documentElement.lang
// const lang = dictionary[language]
