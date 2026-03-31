import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function Navbar({ cartCount = 0 }) {
  return (
    <header className="border-b border-base-200 bg-white">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="text-3xl font-extrabold tracking-tight text-transparent bg-linear-to-r from-violet-600 to-purple-500 bg-clip-text"
        >
          DigiTools
        </a>

        <ul className="hidden items-center gap-7 text-sm text-slate-700 md:flex">
          <li>
            <a className="transition hover:text-violet-600" href="#">
              Products
            </a>
          </li>
          <li>
            <a className="transition hover:text-violet-600" href="#">
              Features
            </a>
          </li>
          <li>
            <a className="transition hover:text-violet-600" href="#">
              Pricing
            </a>
          </li>
          <li>
            <a className="transition hover:text-violet-600" href="#">
              Testimonials
            </a>
          </li>
          <li>
            <a className="transition hover:text-violet-600" href="#">
              FAQ
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          
        <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-100"
            aria-label="Open cart"
          >
            <FontAwesomeIcon icon={faCartShopping} />
            {cartCount > 0 && (
              <span className="badge badge-primary badge-sm absolute -right-2 -top-2">
                {cartCount}
              </span>
            )}
          </button>

          <button
            type="button"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:text-violet-600 sm:inline-flex"
          >
            Login
          </button>
          <button
            type="button"
            className="rounded-full bg-linear-to-r from-violet-600 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-105"
          >
            Get Started
          </button>

        </div>
      </nav>
    </header>
  )
}

export default Navbar
