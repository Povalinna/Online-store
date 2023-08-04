
function showCategories() {
  const container = document.querySelector(`.categories`);

  for (let i = 0; i < data.length; i++) {
    const el = document.createElement(`div`);
    el.innerHTML = data[i].name;

    el.setAttribute(`data-category`, i);
    el.addEventListener(`click`, showProductsHandler);
    container.appendChild(el);
  };
}
function showProductsHandler(event) {
  const container = document.querySelector(`.products`);
  container.innerHTML = ``;
  const el = event.target;
  const categoryIndex = el.getAttribute(`data-category`);

  const categoryProducts = data[categoryIndex].products;

  for (let i = 0; i < categoryProducts.length; i++) {
    const el = document.createElement(`div`);
    el.innerHTML = categoryProducts[i].name;
    el.setAttribute(`data-category`, categoryIndex);
    el.setAttribute(`data-product`, i);
    el.addEventListener(`click`, showDetailsHandler);
    container.appendChild(el);

  }
}
function showDetailsHandler(event) {
  const container = document.querySelector(`.details`);
  container.innerHTML = ``;

  const categoryIndex = event.target.getAttribute(`data-category`);
  const productIndex = event.target.getAttribute(`data-product`);
  const productsDetails = data[categoryIndex].products[productIndex];
  const el = document.createElement(`div`);
  el.setAttribute(`id`, `prodDet`);
  el.innerHTML = productsDetails.name;
  const elem = document.createElement(`div`);
  elem.setAttribute(`id`, `prodPrice`);
  elem.innerHTML = productsDetails.price;
  console.log(productsDetails);
  container.appendChild(el);
  container.appendChild(elem);
  const btn = document.createElement(`button`);
  btn.innerHTML = "купити";
  btn.setAttribute(`id`, `btn`)
  container.appendChild(btn);
  btn.addEventListener(`click`, userForm);
}



function userForm() {
  const mainForm = document.getElementById(`mainForm`);
  mainForm.style.display = `block`;

  let button = document.getElementById(`button`);
  button.addEventListener(`click`, validateForm)
}
function validateForm() {
  let mainForm = document.forms["mainForm"];
  let com = document.getElementById(`com`);
  for (let i = 0; i < mainForm.length; i++) {
    let c = mainForm.elements[i].value;
    let cc = mainForm.elements[i];
    if (c == null || c == "" && com !== cc) {

      alert(`введіть обовьязкове поле`);

      return;
    }
  }
  goNext()
}
function goNext() {
  document.getElementById(`mainForm`).style.display = `none`;

  document.getElementById(`result`).style.display = `block`;
  let name = document.getElementById(`name`).value;

  let city = document.getElementById(`city`).value;
  let stock = document.getElementById(`stock`).value;

  let num = document.getElementById(`num`).value;

  let com = document.getElementById(`com`).value;

  let radios = document.getElementsByTagName('input');
  let value;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked && radios[i].name === 'pay') {
      //
      value = radios[i].value;
    }

  }

  let prodDet = document.getElementById(`prodDet`);
  let proDetName = prodDet.outerHTML;
  let prodPrice = document.getElementById(`prodPrice`);
  let proDetPrice = prodPrice.outerHTML;

  let result = `товар` + proDetName +
    proDetPrice +
    'покупець' + ` ` + name + "<br />" +
    'місто' + ` ` + city + "<br />" + stock + ` ` + "<br />" +
    'товар кількістю' + ` ` + num + "<br />" +
    `оплата:` + '' + value + "<br />" + com;
  document.getElementById("output").innerHTML = result;
}

showCategories();



