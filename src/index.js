const navigation = new Navigate(
    mainPages,
    loginButton,
    registerButton,
    modals,
    loginModalRegisterButton,
    modalXButtons
)

const localStorageApi = new LocalStorageApi()

navigation.init()
localStorageApi.init()
initLanguageChanger()
initSearch()
initSortButton()
