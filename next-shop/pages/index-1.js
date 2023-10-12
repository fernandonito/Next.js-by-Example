//Option 1: fetch products on the server side (in getStaticProps)
import Head from 'next/head'
import Title from '../components/Title'
import { getProducts } from '@/lib/products'

const products = [
  { id: 1, name: 'First Product' },
  { id: 2, name: 'Second Product' },
  { id: 3, name: 'Third Product' },
]

export async function getStaticProps() {
  console.log('[HomePage] getStaticProps')
  const products = await getProducts()
  return {
    props: {
      products,
    },
  }
}

function HomePage({ products }) {
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
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default HomePage
