function SectionToggle({ activeView, onChangeView, cartCount }) {
  return (
    <div className="flex w-full items-center justify-center gap-3">
      <button
        type="button"
        onClick={() => onChangeView('products')}
        className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
          activeView === 'products'
            ? 'bg-brand-primary text-white shadow-sm hover:brightness-[1.03]'
            : 'border border-brand-100 bg-white text-brand-600 hover:bg-brand-50/80'
        }`}
      >
        Products
      </button>
      <button
        type="button"
        onClick={() => onChangeView('cart')}
        className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
          activeView === 'cart'
            ? 'bg-brand-primary text-white shadow-sm hover:brightness-[1.03]'
            : 'border border-brand-100 bg-white text-brand-600 hover:bg-brand-50/80'
        }`}
      >
        Cart{cartCount > 0 ? ` (${cartCount})` : ''}
      </button>
    </div>
  )
}

export default SectionToggle

