const loggedDownPage = document.querySelector(
    "main > div.logged > div.downPage > div.data"
)

const ctx1 = document.getElementById("graph1")

let lang = "pl"
let sorted = undefined

const langNav = document.querySelectorAll(".lang > a")
const PL = langNav[0]
const EN = langNav[1]

const searchInput = document.getElementById("search")
const searchButton = document.querySelector(".search-btn")

//nav
const nav = document.querySelectorAll("body > header > nav > ul > li")
const mainPages = document.querySelectorAll("main > div")

//forms
const registerForm = document.getElementById("register")
const registerButton = document.querySelector(".register-btn")
const loginForm = document.getElementById("login")
const loginButton = document.querySelector("button.login-btn")
const logoffButton = document.querySelector("button.button-small")
const errors = document.getElementsByClassName("errors")

//modals
const modals = document.getElementsByClassName("modal")
const registerModalCloseButton = document.querySelector(".closeModal-btn")
const loginModalCloseButton = document.querySelector(".close2Modal-btn")
const loginModalRegisterButton = document.querySelector(".register2-btn")
const xButtons = document.querySelectorAll(".x-button")

const sortButton = document.querySelector(".sort-btn")
