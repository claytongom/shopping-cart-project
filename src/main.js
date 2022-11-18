import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';
import { saveCartID, getSavedCartIDs } from './helpers/cartFunctions';

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

const cart = document.querySelector('.cart__products');
const btnCartAdd = document.querySelectorAll('.product__add');
btnCartAdd.forEach((button) => button.addEventListener('click', async (element) => {
  const id = element.target.parentElement.children[0].innerText;
  saveCartID(id);
  const productCart = createCartProductElement(await fetchProduct(id));
  cart.appendChild(productCart);
}));

const storageProduct = () => {
  const savedProducts = getSavedCartIDs();
  savedProducts.forEach(async (id) => {
    const product = await fetchProduct(id);
    document.querySelector('.cart__products')
      .appendChild(createCartProductElement(product));
  });
};
storageProduct();
