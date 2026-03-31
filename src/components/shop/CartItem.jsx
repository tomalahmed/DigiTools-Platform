import designToolLogo from '../../assets/products/design-tool.png'
import operationLogo from '../../assets/products/operation.png'
import portfolioLogo from '../../assets/products/portfolio.png'
import shoppingCartLogo from '../../assets/products/shopping-cart.png'
import socialMediaLogo from '../../assets/products/social-media.png'
import writingLogo from '../../assets/products/writing_2327400 1.png'

const productLogos = [designToolLogo, operationLogo, portfolioLogo, shoppingCartLogo, socialMediaLogo, writingLogo]

function getProductLogo(id = '') {
  const total = productLogos.length
  const sum = String(id)
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return productLogos[sum % total]
}

function CartItem({ product }) {
  const logoSrc = getProductLogo(product.id)

  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-center gap-3 min-w-0">
        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-violet-50">
          <img src={logoSrc} alt={`${product.name} logo`} className="h-6 w-6 object-contain" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-900">{product.name}</p>
          <p className="truncate text-xs text-slate-500">/{product.period}</p>
        </div>
      </div>

      <div className="shrink-0">
        <p className="text-sm font-bold text-slate-900">${product.price}</p>
      </div>
    </div>
  )
}

export default CartItem

