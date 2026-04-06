function SectionToggle({ activeView, onChangeView, cartCount }) {
  return (
    <div className="flex w-full items-center justify-center gap-3">
      <button
        type="button"
        onClick={() => onChangeView('products')}
        className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
          activeView === 'products'
            ? 'bg-linear-to-r from-orange-600 to-amber-500 text-white shadow-sm hover:brightness-105'
            : 'border border-orange-200 bg-white text-orange-700 hover:bg-orange-50'
        }`}
      >
        Products
      </button>
      <button
        type="button"
        onClick={() => onChangeView('cart')}
        className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
          activeView === 'cart'
            ? 'bg-linear-to-r from-orange-600 to-amber-500 text-white shadow-sm hover:brightness-105'
            : 'border border-orange-200 bg-white text-orange-700 hover:bg-orange-50'
        }`}
      >
        Cart{cartCount > 0 ? ` (${cartCount})` : ''}
      </button>
    </div>
  )
}

export default SectionToggle

