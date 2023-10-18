import { fetchJson } from '@/lib/api'

const { CMS_URL } = process.env

function stripCartItem(cartItem) {
  const { id, product, quantity } = cartItem
  return {
    id,
    product: {
      id: product.id,
      title: product.title,
      price: product.price,
    },
    quantity,
  }
}

async function handleCart(req, res) {
  const { jwt } = req.cookies
  if (!jwt) {
    res.status(401).end()
    return
  }
  try {
    const cartItems = await fetchJson(`${CMS_URL}/cart`, {
      headers: { Authorization: `Bearer ${jwt}` },
    })
    res.status(200).json(cartItems.map(stripCartItem))
  } catch (err) {
    res.status(401).end()
  }
}

export default handleCart
