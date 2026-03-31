import { iconByName, UnknownIcon } from '../../assets/icons'

const tagStyles = {
  new: {
    className: 'badge badge-primary',
    label: 'New',
  },
  popular: {
    className: 'badge badge-secondary',
    label: 'Popular',
  },
  'best-seller': {
    className: 'badge badge-accent',
    label: 'Best Seller',
  },
}

function normalizeTagType(tagType) {
  return String(tagType).toLowerCase().replace(/\s+/g, '-')
}

function ProductCard({ product, isInCart, onBuyNow }) {
  const Icon = iconByName[product.icon] ?? UnknownIcon
  const tagKey = normalizeTagType(product.tagType)
  const tag = tagStyles[tagKey] ?? { className: 'badge badge-ghost', label: product.tagType }

  return (
    <article className="card border border-slate-200 bg-white shadow-sm">
      <div className="card-body p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
            <Icon className="h-7 w-7" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <h3 className="truncate text-base font-semibold text-slate-900">{product.name}</h3>
              <span className={tag.className}>{tag.label}</span>
            </div>

            <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">{product.description}</p>
          </div>
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <span className="text-3xl font-extrabold text-slate-900">${product.price}</span>
            <span className="ml-1 text-sm font-medium text-slate-500">/{product.period}</span>
          </div>
        </div>

        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <span className="mt-0.5 text-emerald-500">✓</span>
              <span className="leading-5">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="mt-5 w-full rounded-full bg-linear-to-r from-violet-600 to-fuchsia-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
          onClick={() => onBuyNow(product)}
          disabled={isInCart}
        >
          {isInCart ? 'Added to cart' : 'Buy Now'}
        </button>
      </div>
    </article>
  )
}

export default ProductCard

