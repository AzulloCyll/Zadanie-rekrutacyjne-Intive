//selector for main page
const navigation = new Navigate(
    nav,
    mainPages,
    loginButton,
    logoffButton,
    registerButton,
    modals,
    registerModalCloseButton
)

navigation.initNavigation()
initLanguageChanger()
initUserApi()
