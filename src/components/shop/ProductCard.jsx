import designToolLogo from '../../assets/products/design-tool.png'
import operationLogo from '../../assets/products/operation.png'
import portfolioLogo from '../../assets/products/portfolio.png'
import shoppingCartLogo from '../../assets/products/shopping-cart.png'
import socialMediaLogo from '../../assets/products/social-media.png'
import writingLogo from '../../assets/products/writing_2327400 1.png'

const productLogos = [designToolLogo, operationLogo, portfolioLogo, shoppingCartLogo, socialMediaLogo, writingLogo]

const tagStyles = {
  new: {
    className: 'inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700',
    label: 'New',
  },
  popular: {
    className: 'inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700',
    label: 'Popular',
  },
  'best-seller': {
    className: 'inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700',
    label: 'Best Seller',
  },
}

function normalizeTagType(tagType) {
  return String(tagType).toLowerCase().replace(/\s+/g, '-')
}

function getProductLogo(id = '') {
  const total = productLogos.length
  const sum = String(id)
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return productLogos[sum % total]
}

function ProductCard({ product, isInCart, onBuyNow }) {
  const logoSrc = getProductLogo(product.id)
  const tagKey = normalizeTagType(product.tagType)
  const tag = tagStyles[tagKey] ?? {
    className: 'inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700',
    label: product.tagType,
  }

  return (
    <article className="card h-full min-h-[430px] border border-slate-200 bg-white shadow-sm">
      <div className="card-body flex h-full flex-col p-6 sm:p-8">
        <div className="mb-4 flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-orange-50">
            <img src={logoSrc} alt={`${product.name} logo`} className="h-7 w-7 object-contain" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <h3 className="line-clamp-2 pr-1 text-base font-semibold leading-6 text-slate-900">{product.name}</h3>
              <span className={`${tag.className} shrink-0 whitespace-nowrap`}>{tag.label}</span>
            </div>

            <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-600">{product.description}</p>
          </div>
        </div>

        <div className="mt-auto flex items-end justify-between p-3">
          <div>
            <span className="whitespace-nowrap text-3xl font-extrabold text-slate-900">${product.price}</span>
            <span className="ml-1 whitespace-nowrap text-sm font-medium text-slate-500">/{product.period}</span>
          </div>
        </div>

        <ul className="mt-2 mb-4 space-y-2 text-sm text-slate-700">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <span className="mt-0.5 text-emerald-500">✓</span>
              <span className="leading-5">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="mt-auto w-full rounded-full bg-linear-to-r from-orange-600 to-amber-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
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

