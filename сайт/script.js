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
    card3: "Логика и интерактив",
    mainsub: "Образовательный сайт по программированию",
    abt: `EduWeb — это обучающий сайт для начинающих, который помогает освоить основы веб-разработки.
Здесь ты изучишь HTML, CSS и JavaScript через простые объяснения, интерактивные темы и тесты для закрепления знаний.
Сайт создан для тех, кто хочет понять, как работают сайты изнутри, и сделать первые шаги в веб-разработке с нуля.`,
    abttitle: "О сайте",
    tsttitle: "Тесты",
    /* tests1 */
    tests1_title: "HTML — тест",
    tests1_q1_p: "HTML — это:",
    tests1_q1_a0: "Язык программирования",
    tests1_q1_a1: "Язык разметки",
    tests1_q1_a2: "Графический редактор",
    tests1_q2_p: "Какой тег создаёт ссылку?",
    tests1_q2_a0: "&lt;a&gt;",
    tests1_q2_a1: "&lt;div&gt;",
    tests1_q2_a2: "&lt;p&gt;",
    tests1_q3_p: "Где размещается видимое содержимое страницы?",
    tests1_q3_a0: "&lt;head&gt;",
    tests1_q3_a1: "&lt;title&gt;",
    tests1_q3_a2: "&lt;body&gt;",
    tests1_q4_p: "Какой тег создаёт абзац?",
    tests1_q4_a0: "&lt;div&gt;",
    tests1_q4_a1: "&lt;p&gt;",
    tests1_q4_a2: "&lt;span&gt;",
    tests1_q5_p: "Какой атрибут задаёт ссылку?",
    tests1_q5_a0: "href",
    tests1_q5_a1: "src",
    tests1_q5_a2: "class",

    /* tests2 */
    tests2_title: "CSS — тест",
    tests2_q1_p: "CSS отвечает за:",
    tests2_q1_a0: "Логику",
    tests2_q1_a1: "Структуру",
    tests2_q1_a2: "Внешний вид",
    tests2_q2_p: "Как изменить цвет текста?",
    tests2_q2_a0: "background",
    tests2_q2_a1: "color",
    tests2_q2_a2: "font-style",
    tests2_q3_p: "Как выбрать элемент по классу?",
    tests2_q3_a0: ".box",
    tests2_q3_a1: "#box",
    tests2_q3_a2: "box",
    tests2_q4_p: "Как сделать элемент flex-контейнером?",
    tests2_q4_a0: "position: flex",
    tests2_q4_a1: "display: block",
    tests2_q4_a2: "display: flex",
    tests2_q5_p: "Как задать внешний отступ?",
    tests2_q5_a0: "padding",
    tests2_q5_a1: "margin",
    tests2_q5_a2: "border",

    /* tests3 */
    tests3_title: "JavaScript — тест",
    tests3_q1_p: "JavaScript нужен для:",
    tests3_q1_a0: "Интерактива",
    tests3_q1_a1: "Разметки",
    tests3_q1_a2: "Стилизации",
    tests3_q2_p: "Как получить элемент по id?",
    tests3_q2_a0: "query()",
    tests3_q2_a1: "getClass()",
    tests3_q2_a2: "getElementById()",
    tests3_q3_p: "Как объявить переменную?",
    tests3_q3_a0: "varName = 5",
    tests3_q3_a1: "let x = 5",
    tests3_q3_a2: "int x = 5",
    tests3_q4_p: "Как добавить обработчик клика?",
    tests3_q4_a0: "addEventListener()",
    tests3_q4_a1: "onClick()",
    tests3_q4_a2: "click()",
    tests3_q5_p: "Где хранится значение языка?",
    tests3_q5_a0: "session",
    tests3_q5_a1: "cookie",
    tests3_q5_a2: "localStorage",

    checkBtn: "Проверить",
    result: "Результат: ",
    /* card1 */
    card1_h1: "Основы HTML",
    card1_p1: `<span class="tooltip" data-tooltip="HTML — это язык разметки для создания веб-страниц.">HTML</span> позволяет создавать структуру страниц. Все элементы сайта строятся с помощью <span class="tooltip" data-tooltip="Теги — это инструкции HTML для браузера.">тегов</span>, которые могут быть: <span class="tooltip" data-tooltip="Блочные теги создают отдельные блоки на странице, например div, p, h1.">блочными</span> и <span class="tooltip" data-tooltip="Строчные теги влияют только на содержимое внутри строки, например span, a, strong.">строчными</span>.`,
    card1_p2: `Основные теги: <span class="tooltip" data-tooltip="Тег &lt;html&gt; — корневой тег документа.">&lt;html&gt;</span>, <span class="tooltip" data-tooltip="Тег &lt;head&gt; содержит информацию о странице, мета-теги, ссылки на стили и скрипты.">&lt;head&gt;</span>, <span class="tooltip" data-tooltip="Тег &lt;body&gt; содержит видимое содержимое страницы.">&lt;body&gt;</span>.`,
    card1_p3: `Для текста используются: <span class="tooltip" data-tooltip="Тег &lt;h1&gt; … &lt;h6&gt; создаёт заголовки разных уровней.">&lt;h1&gt;</span>, <span class="tooltip" data-tooltip="Тег &lt;p&gt; создаёт абзацы текста.">&lt;p&gt;</span>, <span class="tooltip" data-tooltip="Тег &lt;strong&gt; делает текст жирным, &lt;em&gt; — курсив.">&lt;strong&gt;, &lt;em&gt;</span>.`,
    card1_p4: `Для ссылок и изображений: <span class="tooltip" data-tooltip="Тег &lt;a&gt; используется для создания ссылок. Атрибут href задаёт URL.">&lt;a&gt;</span>, <span class="tooltip" data-tooltip="Тег &lt;img&gt; вставляет изображения. Атрибут src — путь к файлу, alt — описание.">&lt;img&gt;</span>.`,
    card1_p5: `Атрибуты позволяют задавать свойства тегов: <span class="tooltip" data-tooltip="id — уникальный идентификатор элемента.">id</span>, <span class="tooltip" data-tooltip="class — класс для группировки элементов и применения стилей.">class</span>, <span class="tooltip" data-tooltip="title — текст подсказки при наведении мыши.">title</span>.`,
    card1_p6: `HTML-структура может быть вложенной: <span class="tooltip" data-tooltip="Дочерние элементы находятся внутри родительского тега.">дочерние элементы</span>, <span class="tooltip" data-tooltip="Родительский элемент содержит другие теги.">родительские элементы</span>.`,
    card1_p7: `Это позволяет создавать сложные страницы с блоками, списками и таблицами.`,
    card1_p8: `Списки бывают двух типов: <span class="tooltip" data-tooltip="Нумерованные списки (&lt;ol&gt;) создают пронумерованные элементы.">&lt;ol&gt;</span> и <span class="tooltip" data-tooltip="Маркированные списки (&lt;ul&gt;) создают элементы с точками.">&lt;ul&gt;</span>.`,
    card1_p9: `Формы используются для взаимодействия с пользователем: <span class="tooltip" data-tooltip="Тег &lt;form&gt; создаёт форму.">&lt;form&gt;</span>, <span class="tooltip" data-tooltip="Тег &lt;input&gt; создаёт поле ввода.">&lt;input&gt;</span>, <span class="tooltip" data-tooltip="Тег &lt;button&gt; создаёт кнопку.">&lt;button&gt;</span>.`,
    card1_p10: `HTML также поддерживает мультимедиа: <span class="tooltip" data-tooltip="Тег &lt;audio&gt; для звука.">&lt;audio&gt;</span>, <span class="tooltip" data-tooltip="Тег &lt;video&gt; для видео.">&lt;video&gt;</span>.`,
    card1_p11: `И не забывай про семантику: <span class="tooltip" data-tooltip="Семантические теги описывают смысл содержимого, например &lt;header&gt;, &lt;footer&gt;, &lt;section&gt;.">семантические теги</span> помогают поисковым системам и упрощают поддержку кода.`,
    sbtnt: "Начать тест",

    /* card2 */
    card2_h1: "Основы CSS",
    card2_p1: `<span class="tooltip" data-tooltip="CSS — язык стилей для изменения внешнего вида HTML-элементов.">CSS</span> позволяет управлять цветами, шрифтами и расположением элементов на странице.`,
    card2_p2: `Чтобы изменить стиль элементов, используют <span class="tooltip" data-tooltip="Селектор выбирает элементы HTML, к которым применяются стили.">селекторы</span>, а затем задают <span class="tooltip" data-tooltip="Свойства определяют, что именно изменяется (например color, font-size).">свойства</span> с <span class="tooltip" data-tooltip="Значения свойств указывают конкретные параметры (например red, 16px).">значениями</span>.`,
    card2_p3: `Для интерактивности можно использовать <span class="tooltip" data-tooltip="Псевдоклассы задают стили для состояний элементов, например :hover, :active.">псевдоклассы</span>, а для адаптивности — <span class="tooltip" data-tooltip="Медиа-запросы изменяют стили в зависимости от размера экрана.">@media</span>.`,
    card2_p4: `Блочная модель (<span class="tooltip" data-tooltip="Box Model — это схема, которая описывает отступы, границы и содержимое элемента.">box model</span>) определяет размеры и отступы элементов: <span class="tooltip" data-tooltip="margin — внешние отступы.">margin</span>, <span class="tooltip" data-tooltip="padding — внутренние отступы.">padding</span>, <span class="tooltip" data-tooltip="border — границы элемента.">border</span>, <span class="tooltip" data-tooltip="width/height — ширина и высота.">width/height</span>.`,

    /* card3 */
    card3_h1: "Основы JavaScript",
    card3_p1: `<span class="tooltip" data-tooltip="JavaScript — язык программирования для динамических элементов веб-страниц.">JavaScript</span> позволяет добавлять интерактивность: реагировать на клики, изменять содержимое страницы и создавать анимации.`,
    card3_p2: `Основные конструкции: <span class="tooltip" data-tooltip="Переменные хранят данные, например let, const, var.">переменные</span>, <span class="tooltip" data-tooltip="Условные операторы if/else выполняют код в зависимости от условий.">условия</span>, <span class="tooltip" data-tooltip="Циклы for, while повторяют действия несколько раз.">циклы</span>, <span class="tooltip" data-tooltip="Функции — блоки кода, которые можно вызывать многократно.">функции</span>.`,
    card3_p3: `Для работы с HTML используют <span class="tooltip" data-tooltip="DOM (Document Object Model) — объектная модель документа, позволяющая изменять элементы через JS.">DOM</span> и <span class="tooltip" data-tooltip="События — действия пользователя, например click, mouseover, keypress.">события</span>.`,
    card3_p4: `Также важно знать <span class="tooltip" data-tooltip="Методы и свойства объектов позволяют получать или изменять данные, например innerHTML, value.">методы и свойства объектов</span>, чтобы управлять элементами и данными на странице.`

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
    card3: "Logic and Interactivity",
    mainsub: "Educational website about programming",
    abt: `EduWeb is an educational website for beginners that helps you master the basics of web development.
Here you will learn HTML, CSS, and JavaScript through simple explanations, interactive topics, and tests to reinforce your knowledge.
The site is created for those who want to understand how websites work from the inside and take their first steps in web development from scratch.`,
    abttitle: "About the site",
    tsttitle: "Tests",

    /* tests1 */
    tests1_title: "HTML test",
    tests1_q1_p: "What is HTML?",
    tests1_q1_a0: "A programming language",
    tests1_q1_a1: "A markup language",
    tests1_q1_a2: "A graphics editor",
    tests1_q2_p: "Which tag creates a link?",
    tests1_q2_a0: "&lt;a&gt;",
    tests1_q2_a1: "&lt;div&gt;",
    tests1_q2_a2: "&lt;p&gt;",
    tests1_q3_p: "Where is the visible page content placed?",
    tests1_q3_a0: "&lt;head&gt;",
    tests1_q3_a1: "&lt;title&gt;",
    tests1_q3_a2: "&lt;body&gt;",
    tests1_q4_p: "Which tag creates a paragraph?",
    tests1_q4_a0: "&lt;div&gt;",
    tests1_q4_a1: "&lt;p&gt;",
    tests1_q4_a2: "&lt;span&gt;",
    tests1_q5_p: "Which attribute sets the link URL?",
    tests1_q5_a0: "href",
    tests1_q5_a1: "src",
    tests1_q5_a2: "class",

    /* tests2 */
    tests2_title: "CSS test",
    tests2_q1_p: "What does CSS control?",
    tests2_q1_a0: "Logic",
    tests2_q1_a1: "Structure",
    tests2_q1_a2: "Appearance",
    tests2_q2_p: "How to change text color?",
    tests2_q2_a0: "background",
    tests2_q2_a1: "color",
    tests2_q2_a2: "font-style",
    tests2_q3_p: "How to select an element by class?",
    tests2_q3_a0: ".box",
    tests2_q3_a1: "#box",
    tests2_q3_a2: "box",
    tests2_q4_p: "How to make an element a flex container?",
    tests2_q4_a0: "position: flex",
    tests2_q4_a1: "display: block",
    tests2_q4_a2: "display: flex",
    tests2_q5_p: "How to set external spacing?",
    tests2_q5_a0: "padding",
    tests2_q5_a1: "margin",
    tests2_q5_a2: "border",

    /* tests3 */
    tests3_title: "JavaScript test",
    tests3_q1_p: "What is JavaScript used for?",
    tests3_q1_a0: "Interactivity",
    tests3_q1_a1: "Markup",
    tests3_q1_a2: "Styling",
    tests3_q2_p: "How to get an element by id?",
    tests3_q2_a0: "query()",
    tests3_q2_a1: "getClass()",
    tests3_q2_a2: "getElementById()",
    tests3_q3_p: "How to declare a variable?",
    tests3_q3_a0: "varName = 5",
    tests3_q3_a1: "let x = 5",
    tests3_q3_a2: "int x = 5",
    tests3_q4_p: "How to add a click handler?",
    tests3_q4_a0: "addEventListener()",
    tests3_q4_a1: "onClick()",
    tests3_q4_a2: "click()",
    tests3_q5_p: "Where is the language value stored?",
    tests3_q5_a0: "session",
    tests3_q5_a1: "cookie",
    tests3_q5_a2: "localStorage",

    checkBtn: "Check",
    result: "Result: ",

    /* card1 */
    card1_h1: "HTML Basics",
    card1_p1: `<span class="tooltip" data-tooltip="HTML is the markup language used to create web pages.">HTML</span> lets you build the structure of web pages. Elements are created with <span class="tooltip" data-tooltip="Tags are instructions for the browser.">tags</span> and can be <span class="tooltip" data-tooltip="Block-level elements create distinct blocks, e.g. div, p, h1.">block-level</span> or <span class="tooltip" data-tooltip="Inline elements affect only content within a line, e.g. span, a, strong.">inline</span>.`,
    card1_p2: `Main tags: <span class="tooltip" data-tooltip="The &lt;html&gt; tag is the document root.">&lt;html&gt;</span>, <span class="tooltip" data-tooltip="The &lt;head&gt; contains meta, links to styles and scripts.">&lt;head&gt;</span>, <span class="tooltip" data-tooltip="The &lt;body&gt; contains the visible content of the page.">&lt;body&gt;</span>.`,
    card1_p3: `Text elements include: <span class="tooltip" data-tooltip="The &lt;h1&gt; … &lt;h6&gt; tags create headings of different levels.">&lt;h1&gt;</span>, <span class="tooltip" data-tooltip="The &lt;p&gt; tag creates paragraphs of text.">&lt;p&gt;</span>, <span class="tooltip" data-tooltip="The &lt;strong&gt; tag makes text bold, &lt;em&gt; makes it italic.">&lt;strong&gt;, &lt;em&gt;</span>.`,
    card1_p4: `For links and images use <span class="tooltip" data-tooltip="The &lt;a&gt; tag creates links; href sets the URL.">&lt;a&gt;</span> and <span class="tooltip" data-tooltip="The &lt;img&gt; tag inserts images; src is the file path, alt is the description.">&lt;img&gt;</span>.`,
    card1_p5: `Attributes add properties to tags: <span class="tooltip" data-tooltip="id — a unique element identifier.">id</span>, <span class="tooltip" data-tooltip="class — group elements for styling.">class</span>, <span class="tooltip" data-tooltip="title — tooltip text shown on hover.">title</span>.`,
    card1_p6: `HTML structure can be nested: <span class="tooltip" data-tooltip="Child elements are inside the parent tag.">child elements</span> and <span class="tooltip" data-tooltip="A parent element contains other tags.">parent elements</span>.`,
    card1_p7: `This allows creating complex pages with blocks, lists, and tables.`,
    card1_p8: `Lists come in two types: <span class="tooltip" data-tooltip="Ordered lists (&lt;ol&gt;) create numbered items.">&lt;ol&gt;</span> and <span class="tooltip" data-tooltip="Unordered lists (&lt;ul&gt;) create bulleted items.">&lt;ul&gt;</span>.`,
    card1_p9: `Forms are used to interact with users: <span class="tooltip" data-tooltip="The &lt;form&gt; tag creates a form.">&lt;form&gt;</span>, <span class="tooltip" data-tooltip="The &lt;input&gt; tag creates an input field.">&lt;input&gt;</span>, <span class="tooltip" data-tooltip="The &lt;button&gt; tag creates a button.">&lt;button&gt;</span>.`,
    card1_p10: `HTML also supports multimedia: <span class="tooltip" data-tooltip="The &lt;audio&gt; tag for sound.">&lt;audio&gt;</span>, <span class="tooltip" data-tooltip="The &lt;video&gt; tag for video.">&lt;video&gt;</span>.`,
    card1_p11: `Don't forget semantics: <span class="tooltip" data-tooltip="Semantic tags describe the meaning of content, e.g. &lt;header&gt;, &lt;footer&gt;, &lt;section&gt;.">semantic tags</span> help search engines and make code easier to maintain.`,
    sbtnt: "Start test",

    /* card2 */
    card2_h1: "CSS Basics",
    card2_p1: `<span class="tooltip" data-tooltip="CSS is the style language used to change the appearance of HTML elements.">CSS</span> lets you control colors, fonts and layout of elements on the page.`,
    card2_p2: `To change element styles use <span class="tooltip" data-tooltip="A selector chooses the HTML elements to target.">selectors</span>, then set <span class="tooltip" data-tooltip="Properties define what changes (e.g. color, font-size).">properties</span> with <span class="tooltip" data-tooltip="Property values specify exact parameters (e.g. red, 16px).">values</span>.`,
    card2_p3: `Use <span class="tooltip" data-tooltip="Pseudo-classes target element states such as :hover, :active.">pseudo-classes</span> for interactivity and <span class="tooltip" data-tooltip="Media queries adjust styles based on screen size.">@media</span> queries for responsiveness.`,
    card2_p4: `The <span class="tooltip" data-tooltip="Box model describes padding, border and content.">box model</span> defines element sizing and spacing: <span class="tooltip" data-tooltip="margin — external spacing.">margin</span>, <span class="tooltip" data-tooltip="padding — internal spacing.">padding</span>, <span class="tooltip" data-tooltip="border — element border.">border</span>, <span class="tooltip" data-tooltip="width/height — element dimensions.">width/height</span>.`,

    /* card3 */
    card3_h1: "JavaScript Basics",
    card3_p1: `<span class="tooltip" data-tooltip="JavaScript is the programming language for dynamic web page features.">JavaScript</span> enables interactivity: respond to clicks, change page content, and create animations.`,
    card3_p2: `Core constructs: <span class="tooltip" data-tooltip="Variables store data, e.g. let, const, var.">variables</span>, <span class="tooltip" data-tooltip="Conditionals (if/else) run code based on conditions.">conditionals</span>, <span class="tooltip" data-tooltip="Loops (for, while) repeat actions multiple times.">loops</span>, <span class="tooltip" data-tooltip="Functions are reusable blocks of code.">functions</span>.`,
    card3_p3: `To work with HTML use the <span class="tooltip" data-tooltip="DOM — the Document Object Model, lets JS access and change page elements.">DOM</span> and <span class="tooltip" data-tooltip="Events are user actions such as click, mouseover, keypress.">events</span>.`,
    card3_p4: `Also learn <span class="tooltip" data-tooltip="Object methods and properties allow reading and changing data, e.g. innerHTML, value.">object methods and properties</span> to manage elements and data on the page.`

  }
};


function changeLanguage(lang) {
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.dataset.key;
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
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

  const lang = localStorage.getItem("lang") || "ru";
  const prefix = (translations[lang] && translations[lang].result) ? translations[lang].result : (lang === "en" ? "Result: " : "Результат: ");

  document.getElementById("result").textContent = `${prefix}${score} / ${questions.length}`;
}



const logint = document.querySelector('.logo');

if (logint) {
  logint.addEventListener('click', (e) => {
    window.location.href = 'home.html';
  });
}

