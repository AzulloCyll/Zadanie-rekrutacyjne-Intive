const dictionary = {
    en: {
        nav: { login: "Login", register: "Register" },
        labels: {
            login: "Login:",
            passwd: "Password:",
            email: "email:",
            email2: "Retype email:",
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
            loginP: "You can login by username or email",
            ad: "We can't find your email in our database.<br />Would you like to register?",
            balance: "Balance: ",
            notFoundFirst: "There are no items with",
            notFoundSecond: "in transaction description.",
            history: "Transactions history",
            sort: "sort",
            notice: '<b>Notice:</b><br />Username have to be 6-16 letters, numbers and characters like "-_[]/",<br /> it must have at least 5 letters and 1 number.',
        },
        placeholders: {
            loginOrEmail: "type username or email",
            password: "type your password",
            name: "type your name",
            email: "type your email",
            retypeEmail: "retype your email",
        },
        errors: {
            errorWrongName: "wrong username - look down at notice",
            errorWrongEmail: "wrong email",
            errorEmailNotMatch: "email's not match",
            errorPasswordToShort: "min. 6 characters",
            errorUserExists: "User with that name exists. Change user name.",
            errorEmailExists: "Only one account per email allowed.",
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
            email: "email:",
            email2: "Powtórz email:",
        },
        buttons: {
            login: "Zaloguj",
            logout: "Wyloguj",
            register: "Zarejestruj",
            back: "Powrót",
        },
        text: {
            loginH1: "Logowanie",
            loginP: "Możesz logować się za pomocą nazwy użytkownika albo emaila",
            unloggedH1: "Witaj na stronie!",
            unloggedP: "Zaloguj sie lub zarejestruj",
            registerH1: "Rejestracja",
            language: "Język:",
            ad: "Adresu email, ktory podałeś nie ma w naszej bazie.<br />Czy chcesz się zarejestrować?",
            balance: "Saldo: ",
            notFoundFirst: "Nie znaleziono wyników zawierjących",
            notFoundSecond: "w opisach transakcji.",
            history: "Historia transakcji",
            sort: "sortuj",
            notice: '<b>Uwaga:</b><br />Nazwa użytkownika powinna mieć od 6 do 16 znaków,<br />którymi są litery, cyfry lub znaki "-_[]/", musi mieć conajmniej 5 liter i 1 cyfrę.',
        },

        placeholders: {
            loginOrEmail: "wpisz nazwę użytkownika lub email",
            password: "wpisz swoje hasło",
            name: "wpisz nazwę użytkownika",
            email: "wpisz swój email",
            retypeEmail: "przepisz swój email",
        },
        errors: {
            errorWrongName: "nieprawidłowa nazwa - patrz niżej na wskazówkę",
            errorWrongEmail: "nieprawidłowy email",
            errorEmailNotMatch: "emaile niezgodne",
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
