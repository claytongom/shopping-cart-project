import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const productsList = document.querySelector('.products');

const loadMessage = document.createElement('p');
loadMessage.className = 'loading';
loadMessage.innerText = 'carregando...';
productsList.appendChild(loadMessage);

const clearLoadingText = () => {
  const loadingText = document.querySelector('.loading');
  loadingText.remove();
};

const products = await fetchProductsList('computador');
clearLoadingText();
products.forEach((product) => {
  const productElement = createProductElement(product);
  productsList.appendChild(productElement);
});
