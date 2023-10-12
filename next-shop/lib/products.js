import { fetchJson } from './api'

const { CMS_URL } = process.env

function stripProduct(product) {
  const { id, title, description } = product
  return { id, title, description }
}

export async function getProduct(id) {
  const product = await fetchJson(`${CMS_URL}/products/${id}`)
  return stripProduct(product)
}

export async function getProducts() {
  const products = await fetchJson(`${CMS_URL}/products`)
  return products.map(stripProduct)
}
