function Pricing({ onSelectPlan }) {
  const plans = [
    {
      name: 'Starter',
      subtitle: 'Perfect for getting started',
      price: '$0',
      period: '/Month',
      cta: 'Get Started Free',
      featured: false,
      features: [
        'Access to 10 free tools',
        'Basic templates',
        'Community support',
        '1 project per month',
      ],
    },
    {
      name: 'Pro',
      subtitle: 'Best for professionals',
      price: '$29',
      period: '/Month',
      cta: 'Start Pro Trial',
      featured: true,
      features: [
        'Access to all premium tools',
        'Unlimited templates',
        'Priority support',
        'Unlimited projects',
        'Custom sync',
        'Advanced analytics',
      ],
    },
    {
      name: 'Enterprise',
      subtitle: 'For teams and agencies',
      price: '$99',
      period: '/Month',
      cta: 'Contact Sales',
      featured: false,
      features: [
        'Everything in Pro',
        'Team collaboration',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee',
        'Custom training',
      ],
    },
  ]

  return (
    <section id="pricing" className="scroll-mt-24 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 pb-16 text-black sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Simple, Transparent Pricing</h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Choose the plan that fits your needs. Upgrade or downgrade any time.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-fr gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`flex h-full flex-col rounded-xl border shadow-sm ${
                plan.featured
                  ? 'relative border-orange-400 bg-linear-to-br from-orange-600 to-amber-500 px-6 pb-6 pt-9 text-white'
                  : 'border-slate-200 bg-white p-6 text-slate-900'
              }`}
            >
              {plan.featured && (
                <span className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900 shadow-sm">
                  Most Popular
                </span>
              )}
              <h3 className={`text-2xl font-semibold ${plan.featured ? '' : 'mt-3'}`}>{plan.name}</h3>
              <p className={`mt-1 text-sm ${plan.featured ? 'text-white/90' : 'text-slate-600'}`}>
                {plan.subtitle}
              </p>
              <p className="mt-5">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={`ml-1 text-sm ${plan.featured ? 'text-white/85' : 'text-slate-500'}`}>
                  {plan.period}
                </span>
              </p>

              <ul className="mt-5 space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className={plan.featured ? 'text-white' : 'text-emerald-500'}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto w-full pt-7">
                <button
                  type="button"
                  onClick={() => onSelectPlan?.(plan.name, plan.cta)}
                  className={`w-full rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                    plan.featured
                      ? 'bg-white text-orange-700 hover:bg-white/90'
                      : 'bg-linear-to-r from-orange-600 to-amber-500 text-white hover:brightness-105'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
