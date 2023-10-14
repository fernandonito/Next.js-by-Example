import { fetchJson } from './api'

const { CMS_URL } = process.env

function stripProduct(product) {
  const { id, title, description, price, picture } = product
  return {
    id,
    title,
    description,
    price,
    pictureUrl: `${CMS_URL}${picture.url}`,
  }
}

export async function getProduct(id) {
  const product = await fetchJson(`${CMS_URL}/products/${id}`)
  return stripProduct(product)
}

export async function getProducts() {
  const products = await fetchJson(`${CMS_URL}/products`)
  return products.map(stripProduct)
}
