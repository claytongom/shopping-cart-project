export const getAddress = async (cep) => {
  const newAddreess = await Promise.any([
    fetch(`https://cep.awesomeapi.com.br/json/${cep}`),
    fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`),
  ]);

  const infos = await newAddreess.json();
  return infos;
};

export const searchCep = async () => {
  const yourCep = document.querySelector('.cep-input').value;
  const address = document.querySelector('.cart__address');
  try {
    const dat = await getAddress(yourCep);
    address.innerText = `${dat.address} - ${dat.district} - ${dat.city} - ${dat.state}`;
  } catch (error) {
    address.innerHTML = 'CEP não encontrado';
  }
};
