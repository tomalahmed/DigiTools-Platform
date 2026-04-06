import heroImg from '../../assets/banner.png'

function Banner({ onExploreProducts, onWatchDemo }) {
  return (
    <section className="relative overflow-hidden bg-brand-hero">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:items-center lg:px-8 lg:py-16">
        <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-soft px-4 py-2 text-sm font-medium text-brand-600">
        <span className="relative inline-flex h-3 w-3 items-center justify-center rounded-full bg-brand-primary p-0.5">
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
        </span>
             New: AI-Powered Tools Available
        </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
            <span className="bg-brand-heading bg-clip-text text-transparent">
              Supercharge Your
            </span>
            <br />
            <span className="text-slate-900">Digital Workflow</span>
          </h1>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-600 sm:text-base">
            Access premium AI tools, design assets, templates, and productivity
            software all in one place. Start creating faster today.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onExploreProducts}
              className="rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-[1.03]"
            >
              Explore Products
            </button>
            <button
              type="button"
              onClick={onWatchDemo}
              className="rounded-full border border-brand-200 px-5 py-2.5 text-sm font-semibold text-brand-600 transition hover:bg-brand-50/80"
            >
              Watch Demo
            </button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md">
          <img
            src={heroImg}
            alt="Digital productivity tools"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Banner
