//Option 2: fetch products on the client side (in useEffect)
import Head from 'next/head'
import Title from '../components/Title'

const products = [
  { id: 1, name: 'First Product' },
  { id: 2, name: 'Second Product' },
  { id: 3, name: 'Third Product' },
]

function HomePage() {
  console.log('[HomePage] render:', products)
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title>Next Shop</Title>
        <ul>
          {products.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default HomePage
