const langBtn = document.getElementById("lang-btn");
const langOptions = document.getElementById("lang-options");

const translations = {
  ru: {
    home: "Главная",
    about: "О сайте",
    learn: "Темы",
    test: "Тесты",
    stbt: "Начать",
    title: "EduWeb",
    topics: "Темы",
    footerText: "© 2025 EduWeb. Футер.",
    card1: "Основы",
    card2: "Стили и анимации",
    card3: "Логика и интерактив"
  },
  en: {
    home: "Home",
    about: "About",
    learn: "Topics",
    test: "Tests",
    stbt: "Start",
    title: "EduWeb",
    topics: "Topics",
    footerText: "© 2025 EduWeb. Footer.",
    card1: "Basics",
    card2: "Styles and Animations",
    card3: "Logic and Interactivity"
  }
};


function changeLanguage(lang) {
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.dataset.key;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  if (langBtn) {
    langBtn.textContent = (lang === "ru" ? "Русский" : "English") + " ▼";
  }
}


if (langOptions) {
  langOptions.querySelectorAll("li").forEach(item => {
    item.addEventListener("click", () => {
      changeLanguage(item.dataset.lang);
      langOptions.classList.remove("show");
    });
  });
}


if (langBtn) {
  langBtn.addEventListener("click", () => {
    langOptions.classList.toggle("show");
  });
}


const savedLang = localStorage.getItem("lang") || "ru";
changeLanguage(savedLang);


const startBtn = document.getElementById("strbtn");
const circle = document.getElementById("transition");

if (startBtn && circle) {
  startBtn.addEventListener("click", () => {
    const rect = startBtn.getBoundingClientRect();

    circle.style.left = rect.left + rect.width / 2 + "px";
    circle.style.top = rect.top + rect.height / 2 + "px";

    circle.classList.add("active");

    setTimeout(() => {
      window.location.href = "learn.html";
    }, 700);
  });
}

const startBtn2 = document.getElementById("strbtn2");
const circle2 = document.getElementById("transition");

if (startBtn2 && circle2) {
  startBtn2.addEventListener("click", () => {
    const rect = startBtn2.getBoundingClientRect();

    circle2.style.left = rect.left + rect.width / 2 + "px";
    circle2.style.top = rect.top + rect.height / 2 + "px";

    circle2.classList.add("active");

    setTimeout(() => {
      window.location.href = "tests1.html";
    }, 700);
  });
}
const startBtn3 = document.getElementById("strbtn3");
const circle3 = document.getElementById("transition");

if (startBtn3 && circle3) {
  startBtn3.addEventListener("click", () => {
    const rect = startBtn3.getBoundingClientRect();

    circle3.style.left = rect.left + rect.width / 2 + "px";
    circle3.style.top = rect.top + rect.height / 2 + "px";

    circle3.classList.add("active");

    setTimeout(() => {
      window.location.href = "tests2.html";
    }, 700);
  });
}
const startBtn4 = document.getElementById("strbtn4");
const circle4 = document.getElementById("transition");

if (startBtn4 && circle2) {
  startBtn4.addEventListener("click", () => {
    const rect = startBtn4.getBoundingClientRect();

    circle4.style.left = rect.left + rect.width / 2 + "px";
    circle4.style.top = rect.top + rect.height / 2 + "px";

    circle4.classList.add("active");

    setTimeout(() => {
      window.location.href = "tests3.html";
    }, 700);
  });
}

function checkTest() {
  let score = 0;
  const questions = document.querySelectorAll(".question");

  questions.forEach(q => {
    const correct = q.dataset.correct;
    const inputs = q.querySelectorAll("input");

    inputs.forEach((input, index) => {
      if (input.checked && index == correct) score++;
    });
  });

  document.getElementById("result").textContent =
    `Результат: ${score} / ${questions.length}`;
}


