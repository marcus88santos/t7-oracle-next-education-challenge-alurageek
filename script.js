import { productAddDb, productDeleteDb, productsListDb } from "./APIconect.js";

const productsList = await productsListDb();
const logo = document.querySelectorAll(".logo");
const productsObjs = document.querySelector(".my-products__list");
const productsContainer = (i) => {
  let container = '<div class="my-products__container">';
  for (let j = 0; j < 3; j++) {
    if (i + j < productsList.length) {
      container += `${productObj(productsList[i + j])}`;
    }
  }
  container += "</div>";
  return container;
};

const productObj = (item) => {
  const preco = (Math.round(item.preco * 100) / 100)
    .toFixed(2)
    .toString()
    .replace(".", ",");

  return `
  <div key=${item.id} class='my-products__obj'>
    <img src='${item.src}'/>
    <span>
      ${item.name}
    </span>
    <div>
      <p class='my-products__price'>R$ ${preco} </p>
      <img class='my-products__icon-delete' src="./src/assets/icon-delete.png" alt="deletar produto" />
    </div>
  </div>
  `;
};

logo.forEach((item) => {
  item.innerHTML = `
    <img src="./src/assets/logo.png" alt="Logo" />
    <h2 class="font-press-start">AluraGeek</h2>
  `;
});

for (let i = 0; i < productsList.length; i++) {
  if (i % 3 === 0) {
    productsObjs.innerHTML += `
      ${productsContainer(i)}
    `;
  }
}

// RESET FORM

const btnDelete = document.querySelector(".btn-reset");

btnDelete.addEventListener("click", (e) => {
  e.preventDefault();
  const form = document.querySelector(".add-product > form");
  // console.log(form);
  form.reset();
});

// SUBMIT FORM

const formSubmit = document.querySelector(".btn-add");

formSubmit.addEventListener("click", (e) => {
  // e.preventDefault();
  const productName = document.querySelector(
    ".add-product > form > input[name='name']"
  ).value;
  const productPrice = document.querySelector(
    ".add-product > form > input[name='price']"
  ).value;
  const productSrc = document.querySelector(
    ".add-product > form > input[name='src']"
  ).value;
  const product = {
    name: productName,
    preco: productPrice,
    src: productSrc,
  };
  try {
    productAddDb(product);
  } catch (error) {
    alert(error);
  }
  document.querySelector(".add-product > form").reset();
  location.reaload();
});

// DELETE PRODUCT

const deleteProduct = document.querySelectorAll(".my-products__icon-delete");

deleteProduct.forEach((item) => {
  item.addEventListener("click", (e) => {
    // e.preventDefault();
    const key = e.target.parentElement.parentElement.getAttribute("key");
    try {
      productDeleteDb(key);
    } catch (error) {
      alert(error);
    }
    location.reaload();
  });
});
