

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

const errors = document.getElementsByClassName("errors")

//modals
const modals = document.getElementsByClassName("modal")

const loginModalCloseButton = document.querySelector(".adModalBack-btn")
const loginModalRegisterButton = document.querySelector(".register2-btn")
const modalXButtons = document.querySelectorAll(".x-button")

const sortButton = document.querySelector(".sort-btn")
