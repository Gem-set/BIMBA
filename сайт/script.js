const langBtn = document.getElementById("lang-btn");
const langOptions = document.getElementById("lang-options");

const translations = {
  ru: {
    home: "Главная",
    about: "О сайте",
    learn: "Темы",
    contact: "Контакты",
    stbt: "Начать",
    title: "EduWeb",
    topics: "Темы"
  },
  en: {
    home: "Home",
    about: "About",
    learn: "Topics",
    contact: "Contacts",
    stbt: "Start",
    title: "EduWeb",
    topics: "Topics"
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

startBtn.addEventListener("click", () => {
  const rect = startBtn.getBoundingClientRect();

 
  circle.style.left = rect.left + rect.width / 2 + "px";
  circle.style.top = rect.top + rect.height / 2 + "px";

 
  circle.classList.add("active");

 
  setTimeout(() => {
    window.location.href = "learn.html";
  }, 700); 
});
