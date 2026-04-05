import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toast } from 'react-toastify'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'

import { scrollToSection } from '../../utils/scrollToSection'

const socialLinks = [
  { label: 'Instagram', icon: faInstagram, href: 'https://www.instagram.com/' },
  { label: 'X', icon: faXTwitter, href: 'https://x.com/' },
  { label: 'Facebook', icon: faFacebook, href: 'https://www.facebook.com/' },
  { label: 'LinkedIn', icon: faLinkedin, href: 'https://www.linkedin.com/' },
]

function handleFooterColumnLink(e, label) {
  e.preventDefault()
  const idByLabel = {
    Features: 'features',
    Pricing: 'pricing',
  }
  const id = idByLabel[label]
  if (id) {
    scrollToSection(id)
    return
  }
  toast.info(`${label} is not available in this demo.`)
}

function Footer({ onExploreProducts, onViewPricing }) {
  const footerGroups = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Templates', 'Integrations'],
    },
    {
      title: 'Company',
      links: ['About', 'Blog', 'Careers', 'Press'],
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Help Center', 'Community', 'Contact'],
    },
  ]

  const handleLegalClick = (e, name) => {
    e.preventDefault()
    toast.info(`${name} is not available in this demo.`)
  }

  return (
    <footer id="faq" className="scroll-mt-24 bg-slate-900 text-white">
      <div className="bg-linear-to-r from-violet-600 via-purple-600 to-fuchsia-500">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h3 className="text-4xl font-semibold sm:text-5xl">Ready To Transform Your Workflow?</h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/85 sm:text-base">
            Join thousands of professionals who are already using DigiTools to work smarter.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={onExploreProducts}
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-violet-700 transition hover:bg-white/90"
            >
              Explore Products
            </button>
            <button
              type="button"
              onClick={onViewPricing}
              className="rounded-full border border-white/70 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Pricing
            </button>
          </div>
          <p className="mt-5 text-xs text-white/80">
            14-day free trial . No credit card required . Cancel anytime
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr_1fr]">
          <div>
            <h4 className="text-4xl font-bold">DigiTools</h4>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-300">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h5 className="text-sm font-semibold text-white">{group.title}</h5>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="transition hover:text-white"
                        onClick={(e) => handleFooterColumnLink(e, link)}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h5 className="text-sm font-semibold text-white">Social Links</h5>
            <div className="mt-3 flex flex-wrap gap-3">
              {socialLinks.map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-900 transition hover:bg-white/90"
                  aria-label={label}
                >
                  <FontAwesomeIcon icon={icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-700 pt-5 text-xs text-slate-400 sm:flex sm:items-center sm:justify-between">
          <p>© 2026 DigiTools. All rights reserved.</p>
          <div className="mt-3 flex gap-5 sm:mt-0">
            <a
              href="#"
              className="hover:text-white"
              onClick={(e) => handleLegalClick(e, 'Privacy Policy')}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white"
              onClick={(e) => handleLegalClick(e, 'Terms of Service')}
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-white"
              onClick={(e) => handleLegalClick(e, 'Cookies')}
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
