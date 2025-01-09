const skillsList = [
  { title: "HTML", img: "./src/assets/html_icon.png" },
  { title: "CSS", img: "./src/assets/css_icon.png" },
  { title: "JavaScript", img: "./src/assets/js_icon.png" },
  { title: "React JS", img: "./src/assets/react_icon.png" },
  { title: "Vue JS", img: "./src/assets/vue_icon.png" },
  { title: "Node JS", img: "./src/assets/node_icon.png" },
  { title: "Python", img: "./src/assets/python_icon.png" },
  { title: "Pandas", img: "./src/assets/pandas_icon.png" },
  { title: "Flutter", img: "./src/assets/flutter_icon.png" },
];
const hobbiesList = [
  { title: "Games", img: "./src/assets/games_icon.png" },
  { title: "Bike", img: "./src/assets/bike_icon.png" },
  { title: "Séries", img: "./src/assets/series_icon.png" },
  { title: "Filmes", img: "./src/assets/movies_icon.png" },
  { title: "DIY", img: "./src/assets/diy_icon.png" },
  { title: "Futebol", img: "./src/assets/soccer_icon.png" },
];
const socialMediaList = [
  { title: "Github", href: "http://github.com/marcus88santos" },
  { title: "Linkedin", href: "http://linkedin.com/in/marcus88santos" },
  { title: "Currículo", href: "" },
];
const academicList = [
  {
    title: "Engenharia Civil",
    date: "2011",
    institution: "UFS",
    img: "./src/assets/logo_ufs.png",
  },
  {
    title: "MBA em Gerenciamento de Projetos",
    date: "2018",
    institution: "Fanese",
    img: "./src/assets/logo_fanese.png",
  },
  {
    title: "Desenvolvimento Front-end",
    date: "2021",
    institution: "Alura",
    img: "./src/assets/logo_alura.svg",
  },
  {
    title: "Análise e Desenvolvimento de Sistemas",
    date: "Em andamento",
    institution: "UNIT",
    img: "./src/assets/logo_unit.png",
  },
];
const professionalList = [
  {
    title: "Engenheiro Civil",
    subtitle: "Diversas Empresas",
    imgType: "iframe",
    imgSrc:
      "https://www.google.com/maps/d/u/0/embed?mid=1za1AlJPuWTNVhtRPAqUAhO_ex9bXWns&ll=-7.278799939638764%2C-38.962525992329105&z=6&noprof=1",
  },
  {
    title: "Decodificador de Texto",
    subtitle: "Challenge Alura Codificador",
    imgType: "img",
    imgSrc: "./src/assets/exp_decoder.png",
    repoLink:
      "https://github.com/marcus88santos/t7-oracle-next-education-challange1",
    demo: "https://marcus88santos.github.io/t7-oracle-next-education-challange1/",
  },
  {
    title: "Automação para Formatação de Relatórios em Excel",
    subtitle: "Aplicação de conceitos de análise de dados com Python",
    imgType: "img",
    imgSrc: "./src/assets/exp_formatar-relatorios.png",
    repoLink: "https://github.com/marcus88santos/bc-formatar-relatorios",
  },
  {
    title: "Exclusão e Atualização das Composições de um Orçamento",
    subtitle: "Aplicação de conceitos de análise de dados com Python",
    imgType: "img",
    imgSrc: "./src/assets/exp_substituir-composicoes.png",
    repoLink: "https://github.com/marcus88santos/bc-substituir-composicoes",
  },
  {
    title: "Aluracord",
    subtitle:
      "Projeto desenvolvido durante a Imersão React 4, realizada pela Alura",
    imgType: "img",
    imgSrc: "./src/assets/exp_aluracord.png",
    repoLink: "https://github.com/marcus88santos/imersao-react-aluracord",
    demo: "https://vercel.com/marcus88santos-projects/imersao-react-aluracord-5dhg/GzziBpLUwd269iKFT34Q66F29z1b",
  },
];

const socialMediaObjs = document.getElementById(
  "header__presentation__social-media"
);
const skillsObjs = document.getElementById("skills__list");
const hobbiesObjs = document.getElementById("hobbies__list");
const academicObjs = document.getElementById("academic__list");
const professionalObjs = document.getElementById("professional__list");
const divInput = document.querySelectorAll(".divInput");
const formSubmit = document.querySelector("#contact-me__form > button");

socialMediaList.forEach((item) => {
  socialMediaObjs.innerHTML += `
  <a href=${item.href} target='_blank'>
    <p>
      ${item.title}
    </p>
    <img src="./src/assets/arrow.png" alt='' id='arrow'/>
  </a>
  `;
});

skillsList.forEach((item) => {
  skillsObjs.innerHTML += `
  <div class='skillsObj'>
    <div>
    <img src='${item.img}'/>
    </div>
    <p>
      ${item.title}
    </p>
  </div>
  `;
});

hobbiesList.forEach((item) => {
  hobbiesObjs.innerHTML += `
  <div class='hobbiesObj'>
    <div>
    <img src='${item.img}'/>
    </div>
    <p>
      ${item.title}
    </p>
  </div>
  `;
});

academicList.forEach((item) => {
  academicObjs.innerHTML += `
  <div class='academicObj'>
    <div class='academicObj__bg-img'>
      <img id='logo${item.institution.charAt(0).toUpperCase()}${item.institution
    .slice(1)
    .toLowerCase()}' class='academicObj__img' src='${item.img}'/>
    </div>
    <p>
      ${item.title}
    </p>
    <span>
      ${item.date} - ${item.institution}
    </span>
  </div>
  `;
});

professionalList.forEach((item) => {
  professionalObjs.innerHTML += `
  <div class='professionalObj'>
    <div>
      ${
        item.imgType === "iframe"
          ? `<iframe class='professionalObj__iframe' src=${item.imgSrc}></iframe>`
          : `<img class='professionalObj__img' src='${item.imgSrc}'/>`
      }
    </div>
    <div class='professionalObj__info'>
      <p>
        ${item.title}
      </p>
      <span>
        ${item.subtitle}
      </span>
      ${
        item.imgType === "iframe"
          ? ``
          : `<div class='professionalObj__btns'>
            <a href=${item.repoLink} target='_blank'>
              <button class='btn btn-repo'>
                Repositório
              </button>
            </a>
            ${
              item.demo
                ? `
                    <a href=${item.demo} target='_blank'>
                      <button class='btn btn-demo'>
                      Demo
                      </button>
                    </a>
                  `
                : ``
            }
            </div>`
      }
    </div>
  </div>
  `;
});

divInput.forEach((el) => {
  el.addEventListener("click", (e) => {
    floatingInput(e.target);
  });
});

divInput.forEach((el) => {
  el.addEventListener("focusin", (e) => {
    floatingInput(e.target.parentElement);
  });
});

function floatingInput(el) {
  el.classList.add("floating-div");
  el.querySelector("label").classList.add("floating-label");
  let input = el.querySelector("input");
  if (!input) {
    input = el.querySelector("textarea");
  }
  input.classList.add("floating-input");
  input.focus();
  input.addEventListener("blur", (elem) => {
    if (input.value === "") {
      el.classList.remove("floating-div");
      el.querySelector("label").classList.remove("floating-label");
      input.classList.remove("floating-input");
    }
  });
}

formSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const formName = document.querySelector(
    ".divInput > input[name='name']"
  ).value;
  const formEmail = document.querySelector(
    ".divInput > input[name='email']"
  ).value;
  const formSubject = document.querySelector(
    ".divInput > input[name='subject']"
  ).value;
  const formMessage = document.querySelector(
    ".divInput > textarea[name='message']"
  ).value;
  if (!formName || !formEmail || !formSubject || !formMessage) {
    alert("Por favor, preencha todos os campos.");
  } else {
    alert(
      `Obrigado pela mensagem, ${formName}! Em breve entrarei em contato através do email ${formEmail}.`
    );
    document.querySelector("#contact-me__form").reset();
  }
});
