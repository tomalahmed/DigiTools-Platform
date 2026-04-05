import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import { scrollToSection } from '../../utils/scrollToSection'

const navLinkClass = 'transition hover:text-violet-600'

function Navbar({
  cartCount = 0,
  onOpenCart,
  onGoToProducts,
  onLogin,
  onGetStarted,
}) {
  const handleNav = (e, id, action) => {
    e.preventDefault()
    if (action) action()
    else scrollToSection(id)
  }

  return (
    <header className="border-b border-base-200 bg-white">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          onClick={(e) => handleNav(e, 'top')}
          className="text-2xl font-extrabold tracking-tight text-transparent bg-linear-to-r from-violet-600 to-purple-500 bg-clip-text sm:text-3xl"
        >
          DigiTools
        </a>

        <ul className="hidden items-center gap-7 text-sm text-slate-700 md:flex">
          <li>
            <a
              className={navLinkClass}
              href="#products"
              onClick={(e) => handleNav(e, 'products', onGoToProducts)}
            >
              Products
            </a>
          </li>
          <li>
            <a className={navLinkClass} href="#features" onClick={(e) => handleNav(e, 'features')}>
              Features
            </a>
          </li>
          <li>
            <a className={navLinkClass} href="#pricing" onClick={(e) => handleNav(e, 'pricing')}>
              Pricing
            </a>
          </li>
          <li>
            <a
              className={navLinkClass}
              href="#testimonials"
              onClick={(e) => handleNav(e, 'testimonials')}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a className={navLinkClass} href="#faq" onClick={(e) => handleNav(e, 'faq')}>
              FAQ
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onOpenCart}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-100"
            aria-label="Open cart"
          >
            <FontAwesomeIcon icon={faCartShopping} />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-semibold text-white">
                {cartCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={onLogin}
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:text-violet-600 sm:inline-flex"
          >
            Login
          </button>
          <button
            type="button"
            onClick={onGetStarted}
            className="rounded-full bg-linear-to-r from-violet-600 to-fuchsia-500 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:brightness-105 sm:px-4 sm:text-sm"
          >
            Get Started
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
