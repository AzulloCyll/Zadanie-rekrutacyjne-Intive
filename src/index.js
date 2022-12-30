//selector for main page
const navigation = new Navigate(
    nav,
    mainPages,
    loginButton,
    logoffButton,
    registerButton,
    modals,
    modalCloseButton
)

navigation.initNavigation()
initLanguageChanger()
initUserApi()
