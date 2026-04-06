import CartItem from './CartItem'

function CartPanel({ cartItems, onBackToProducts, onRemoveFromCart, onCheckout }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
      {cartItems.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-10 text-center">
          <p className="text-base font-semibold text-slate-900">Your cart is empty</p>
          <p className="mt-2 text-sm text-slate-600">Add a product to see it here.</p>
          <button
            type="button"
            onClick={onBackToProducts}
            className="mt-6 rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-[1.03]"
          >
            Browse Products
          </button>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-start">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900">Your Cart</h3>
            {cartItems.map((product) => (
              <CartItem key={product.id} product={product} onRemove={onRemoveFromCart} />
            ))}
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h4 className="text-sm font-semibold text-slate-900">Cart Summary</h4>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Selected</span>
                <span className="font-semibold text-slate-900">{cartItems.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Total</span>
                <span className="font-extrabold text-slate-900">${total}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={onCheckout}
              className="mt-5 w-full rounded-full bg-brand-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-[1.03]"
            >
              Proceed to Checkout
            </button>
          </aside>
        </div>
      )}
    </div>
  )
}

export default CartPanel

