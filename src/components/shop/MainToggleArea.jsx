import SectionToggle from './SectionToggle'
import ProductGrid from './ProductGrid'
import CartPanel from './CartPanel'

function MainToggleArea({
  activeView,
  onChangeView,
  products,
  cartItems,
  onAddToCart,
  onRemoveFromCart,
  onCheckout,
}) {
  const cartCount = cartItems.length
  const cartIdSet = new Set(cartItems.map((p) => p.id))

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              {activeView === 'products' ? 'Choose your tools' : 'Review your cart'}
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              {activeView === 'products'
                ? 'Select products below to add them to your cart.'
                : 'Your selected products will appear here.'}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <SectionToggle
            activeView={activeView}
            onChangeView={onChangeView}
            cartCount={cartCount}
          />
        </div>

        <div className="mt-8">
          {activeView === 'products' ? (
            <div className="pb-12">
              <ProductGrid
                products={products}
                cartIdSet={cartIdSet}
                onBuyNow={onAddToCart}
              />
            </div>
          ) : (
            <CartPanel
              cartItems={cartItems}
              onBackToProducts={() => onChangeView('products')}
              onRemoveFromCart={onRemoveFromCart}
              onCheckout={onCheckout}
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default MainToggleArea

