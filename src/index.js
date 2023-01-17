let lang = "pl"
let sorted = undefined
let chart1, chart2

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
