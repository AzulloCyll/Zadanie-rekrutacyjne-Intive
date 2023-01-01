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

const localStorageApi = new LocalStorageApi()

navigation.init()
localStorageApi.init()
initLanguageChanger()
