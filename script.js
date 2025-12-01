// Тексты на трёх языках
const content = {
    ru: {
        langsLine: "Русский · Шведский · Английский",
        desc1: "Наращивание ресниц — классика, 2D–6D, лисий/кукольный эффект.",
        desc2: "Аккуратная работа, комфортная процедура, премиум-материалы.",
        desc3: "Коррекция, снятие, ламинирование ресниц.",
        location: "Стокгольм / Уппландс-Бро",
        insta: "Instagram · Записаться",
        wa: "WhatsApp · Написать"
    },
    sv: {
        langsLine: "Ryska · Svenska · Engelska",
        desc1: "Fransförlängning — klassisk, 2D–6D, fox/doll-effekt.",
        desc2: "Noggrant arbete, bekväm behandling, premium-material.",
        desc3: "Påfyllning, borttagning, lashlift.",
        location: "Stockholm / Upplands-Bro",
        insta: "Instagram · Boka tid",
        wa: "WhatsApp · Skriv"
    },
    en: {
        langsLine: "Russian · Swedish · English",
        desc1: "Eyelash extensions — classic, 2D–6D, fox/doll effect.",
        desc2: "Precise work, comfortable treatment, premium materials.",
        desc3: "Refill, removal, lash lift.",
        location: "Stockholm / Upplands-Bro",
        insta: "Instagram · Book now",
        wa: "WhatsApp · Message"
    }
};

const langLineEl = document.getElementById("langs-line");
const desc1El = document.getElementById("desc1");
const desc2El = document.getElementById("desc2");
const desc3El = document.getElementById("desc3");
const locationLineEl = document.querySelector("#location-line .text");
const instaBtnEl = document.getElementById("insta-btn");
const waBtnEl = document.getElementById("wa-btn");
const langButtons = document.querySelectorAll(".lang-pill");

function setLanguage(lang) {
    const data = content[lang];

    langLineEl.textContent = data.langsLine;
    desc1El.textContent = data.desc1;
    desc2El.textContent = data.desc2;
    desc3El.textContent = data.desc3;
    locationLineEl.textContent = data.location;
    instaBtnEl.textContent = data.insta;
    waBtnEl.textContent = data.wa;

    // активная «капсула»
    langButtons.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });
}

// обработчики кликов
langButtons.forEach(btn => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

// язык по умолчанию
setLanguage("ru");
