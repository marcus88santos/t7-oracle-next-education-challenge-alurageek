const productsList = [
  {
    name: "Stormtrooper",
    preco: 60,
    img: "./src/assets/product-stormtrooper.png",
  },
  {
    name: "Game Boy Classic",
    preco: 60,
    img: "./src/assets/product-game-boy-classic.png",
  },
  {
    name: "Caneca Yoda",
    preco: 60,
    img: "./src/assets/product-caneca-yoda.jpg",
  },
  {
    name: "Stormtrooper",
    preco: 60,
    img: "./src/assets/product-stormtrooper.png",
  },
  {
    name: "Game Boy Classic",
    preco: 60,
    img: "./src/assets/product-game-boy-classic.png",
  },
  {
    name: "Caneca Yoda",
    preco: 60,
    img: "./src/assets/product-caneca-yoda.jpg",
  },
  {
    name: "Caneca Yoda",
    preco: 60,
    img: "./src/assets/product-caneca-yoda.jpg",
  },
];

const logo = document.querySelectorAll(".logo");
const productsObjs = document.querySelector(".my-products__list");
const productsContainer = (i) => {

  // return (
  // `
  // <div className="my-products__container">
  //   ${productObj(productsList[i]) ? productObj(productsList[i]) : null}
  //   ${productObj(productsList[i + 2]) ? productObj(productsList[i + 1]) : null}
  //   ${productObj(productsList[i + 2]) ? productObj(productsList[i + 2]) : null}
  // </div>
  // `)

    let container = '<div class="my-products__container">';
    for (let j = 0; j < 3; j++) {
      if (i + j < productsList.length) {
        container += `${productObj(productsList[i + j])}`;
      }
    }
    container += '</div>';
    return container
    
  }

const productObj = (item) => {
  const preco = (Math.round(item.preco * 100) / 100).toFixed(2).toString().replace(".", ",");

  return `
  <div class='my-products__obj'>
    <img src='${item.img}'/>
    <span>
      ${item.name}
    </span>
    <div>
      <p class='my-products__price'>R$ ${preco} </p>
      <img class='my-products__icon-delete' src="./src/assets/icon-delete.png" alt="deletar produto" />
    </div>
  </div>
  `;	
}

logo.forEach((item) => {
  item.innerHTML = `
   <img src="./src/assets/logo.png" alt="Logo" />
   <h2 class="font-press-start">AluraGeek</h2>
  `
})

for (let i = 0; i < productsList.length; i++) {
  if (i % 3 === 0) {
    productsObjs.innerHTML += `
      ${productsContainer(i)}
    `;
  }
}

// formSubmit.addEventListener("click", (e) => {
//   e.preventDefault();
//   const formName = document.querySelector(
//     ".divInput > input[name='name']"
//   ).value;
//   const formEmail = document.querySelector(
//     ".divInput > input[name='email']"
//   ).value;
//   const formSubject = document.querySelector(
//     ".divInput > input[name='subject']"
//   ).value;
//   const formMessage = document.querySelector(
//     ".divInput > textarea[name='message']"
//   ).value;
//   if (!formName || !formEmail || !formSubject || !formMessage) {
//     alert("Por favor, preencha todos os campos.");
//   } else {
//     alert(
//       `Obrigado pela mensagem, ${formName}! Em breve entrarei em contato através do email ${formEmail}.`
//     );
//     document.querySelector("#contact-me__form").reset();
//   }
// });
