let lang = "pl"
let sorted = undefined
let chart1, chart2

const langNav = document.querySelectorAll(".lang > a")
const PL = langNav[0]
const EN = langNav[1]

const registerForm = document.getElementById("register")
const loginForm = document.getElementById("login")

const navigation = new Navigate()
const localStorageApi = new LocalStorageApi()

navigation.init()
localStorageApi.init()
initLanguageChanger()
initSearch()
initSortButton()
