function stripProduct(product) {
  const { id, title, description } = product
  return { id, title, description }
}

export async function getProduct(id) {
  const response = await fetch(`http://localhost:1337/products/${id}`)
  if (!response.ok) {
    throw new Error(`request failed with status ${response.status}`)
  }
  const product = await response.json()
  return stripProduct(product)
}

export async function getProducts() {
  const response = await fetch('http://localhost:1337/products')
  const products = await response.json()
  return products.map(stripProduct)
}
