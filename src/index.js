//selector for main page
const navigation = new Navigate(
    nav,
    mainPages,
    loginButton,
    logoffButton,
    registerButton,
    modals,
    registerModalCloseButton,
    loginModalCloseButton,
    loginModalRegisterButton,
    xButtons
)

navigation.initNavigation()
initLanguageChanger()
initUserApi()
