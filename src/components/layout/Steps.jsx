import userIcon from '../../assets/user.png'
import packageIcon from '../../assets/package.png'
import rocketIcon from '../../assets/rocket.png'

function Steps() {
  const steps = [
    {
      id: '01',
      title: 'Create Account',
      description: 'Sign up in less than one minute and upgrade your plan later.',
      icon: userIcon,
    },
    {
      id: '02',
      title: 'Choose Products',
      description: 'Browse our catalog and select the tools that fit your needs.',
      icon: packageIcon,
    },
    {
      id: '03',
      title: 'Start Creating',
      description: 'Download or start using your premium assets immediately.',
      icon: rocketIcon,
    },
  ]

  return (
    <section id="features" className="scroll-mt-24 bg-brand-section">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Get Started in 3 Steps</h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Start your creative digital toolkit in minutes, not hours.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.id}
              className="relative rounded-xl bg-white p-6 text-center text-slate-900 shadow-sm"
            >
              <span className="absolute right-4 top-4 inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-primary text-xs font-semibold text-white">
                {step.id}
              </span>
              <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-50">
                <img src={step.icon} alt="" className="h-7 w-7 object-contain" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Steps
