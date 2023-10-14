import Link from 'next/link'

function ProductCard({ product }) {
  return (
    <div className="border w-80 shadow hover:shadow-xl">
      <Link href={`/products/${product.id}`}>
        <img src="https://dummyimage.com/320x240" alt="" />
        <div className="p2 flex justify-between items-baseline">
          <h2 className="text-lg font-bold">{product.title}</h2>
          <span>{`$${product.price.toFixed(2)}`}</span>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
