import ProductCard from './ProductCard'

function ProductGrid({ products, cartIdSet, onBuyNow }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isInCart={cartIdSet.has(product.id)}
          onBuyNow={onBuyNow}
        />
      ))}
    </div>
  )
}

export default ProductGrid

