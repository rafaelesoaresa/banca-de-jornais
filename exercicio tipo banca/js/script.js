const prices = {
  jornais: 10,
  revistas: 20,
  livros: 30,
  discos: 40
};

const cart = [];

function adicionarAoCarrinho() {
  const productType = document.getElementById('productType').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  const unitPrice = prices[productType] || 0;
  const totalValue = unitPrice * quantity;

  const product = {
    type: productType,
    quantity: quantity,
    totalPrice: totalValue
  };

  cart.push(product);
  atualizarCarrinho();
  exibirDetalhesDoProduto(product);
}

function atualizarCarrinho() {
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  
  cartItems.innerHTML = '';
  let total = 0;

  for (const product of cart) {
    const listItem = document.createElement('li');
    listItem.textContent = `${product.quantity}x ${product.type} - Total: R$ ${product.totalPrice.toFixed(2)}`;
    cartItems.appendChild(listItem);
    total += product.totalPrice;
  }

  cartTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function exibirDetalhesDoProduto(product) {
  const productDetails = document.getElementById('productDetails');
  const productTypeDetail = document.getElementById('productTypeDetail');
  const unitPriceDetail = document.getElementById('unitPriceDetail');

  productTypeDetail.textContent = product.type;
  unitPriceDetail.textContent = `R$ ${prices[product.type].toFixed(2)}`;
  productDetails.style.display = 'block';
}

function limparCarrinho() {
  cart.length = 0;
  atualizarCarrinho();
  document.getElementById('productDetails').style.display = 'none';
}
