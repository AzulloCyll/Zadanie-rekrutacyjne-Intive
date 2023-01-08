const dictionary = {
    en: {
        nav: { login: "Login", register: "Register" },
        labels: {
            login: "Login:",
            passwd: "Password:",
            email: "e-mail:",
            email2: "Retype e-mail:",
        },
        buttons: {
            login: "Login",
            logout: "Logout",
            register: "Register",
            back: "Back",
        },
        text: {
            loginH1: "Login",
            unloggedH1: "Welcome on page",
            unloggedP: "Login or register to move on",
            registerH1: "Register",
            language: "Language:",
            loginP: "You can login by username or e-mail",
            ad: "We can't find your e-mail in our database.<br />Would you like to register?",
            balance: "Balance: ",
            notFoundFirst: "There are no items with",
            notFoundSecond: "in transaction description.",
            history: "Transactions history",
        },
        errors: {
            errorWrongName: "6-16 characters",
            errorWrongEmail: "wrong e-mail",
            errorEmailNotMatch: "e-mail's not match",
            errorPasswordToShort: "min. 6 characters",
            errorUserExists: "User with that name exists. Change user name.",
            errorEmailExists: "Only one account per e-mail allowed.",
            errorUserNotExists: "There is no users with that name.",
            errorWrongPassword: "Wrong password.",
        },
        transactionTypes: {
            1: "Income - other",
            2: "Outcome - shopping",
            3: "Income - salary",
            4: "Outcome - other",
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
            back: "Powrót",
        },
        text: {
            loginH1: "Logowanie",
            loginP: "Możesz logować się za pomocą nazwy użytkownika albo e-maila",
            unloggedH1: "Witaj na stronie!",
            unloggedP: "Zaloguj sie lub zarejestruj",
            registerH1: "Rejestracja",
            language: "Język:",
            ad: "Adresu e-mail, ktory podałeś nie ma w naszej bazie.<br />Czy chcesz się zarejestrować?",
            balance: "Saldo: ",
            notFoundFirst: "Nie znaleziono wyników zawierjących",
            notFoundSecond: "w opisach transakcji.",
            history: "Historia transakcji",
        },
        errors: {
            errorWrongName: "6-16 znaków",
            errorWrongEmail: "nieprawidłowy e-mail",
            errorEmailNotMatch: "e-maile niezgodne",
            errorPasswordToShort: "min. 6 znaków",
            errorUserExists:
                "Podany użytkownik jest już zarejestrowany. Podaj inną nazwę uzytkownika.",
            errorEmailExists: "Na jeden adres można założyc tylko jedno konto.",
            errorUserNotExists: "Nie ma takiego użytkownika.",
            errorWrongPassword: "Nieprawidłowe hasło.",
        },
        transactionTypes: {
            1: "Wpływy - inne",
            2: "Wydatki - zakupy",
            3: "Wpływy - wynagrodzenie",
            4: "Wydatki - inne",
        },
    },
}
