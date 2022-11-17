// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let price, quantity, subtotal;
  price = product.querySelector('.price span').innerText;
  quantity = product.querySelector('.quantity input').value;
  subtotal = price * quantity;

  product.querySelector('.subtotal span').innerText = subtotal;

  return subtotal;
};


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let products = [...document.querySelectorAll('.product')];
  products.forEach((product) => updateSubtotal(product))

  // ITERATION 3
  //... your code goes here
  let total, totalDOM;

  products = Array.from(document.querySelectorAll('.product'));
  totalDOM = document.querySelector('#total-value > span');
  total = 0;

  products.forEach((product) => total+=updateSubtotal(product));
  totalDOM.innerHTML = total; 
};

// ITERATION 4

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
