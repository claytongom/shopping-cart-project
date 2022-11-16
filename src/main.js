import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const productsList = document.querySelector('.products');
const products = await fetchProductsList('computador');
products.forEach((product) => {
  const productElement = createProductElement(product);
  productsList.appendChild(productElement);
});
