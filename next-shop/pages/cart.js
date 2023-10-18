import { useQuery } from 'react-query'
import Page from '@/components/Page'
import { fetchJson } from '@/lib/api'

function CartPage() {
  const query = useQuery('cartItems', () => fetchJson('/api/cart'))
  const cartItems = query.data

  console.log('[CartPage] cartItems:', cartItems)
  return (
    <Page title="Cart">
      <div>hello</div>
    </Page>
  )
}

export default CartPage
