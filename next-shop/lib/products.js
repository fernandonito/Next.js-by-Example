function stripProduct(product) {
  const { id, title } = product;
  return { id, title };
}

export async function getProducts() {
  const response = await fetch('http://localhost:1337/products');
  const products = await response.json();
  return products.map(stripProduct);
}
