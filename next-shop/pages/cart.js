import { useQuery } from 'react-query'
import Page from '@/components/Page'
import { fetchJson } from '@/lib/api'
import CartTable from '@/components/CartTable'

function CartPage() {
  const query = useQuery('cartItems', () => fetchJson('/api/cart'))
  const cartItems = query.data

  console.log('[CartPage] cartItems:', cartItems)
  return (
    <Page title="Cart">
      {cartItems && <CartTable cartItems={cartItems} />}
    </Page>
  )
}

export default CartPage
