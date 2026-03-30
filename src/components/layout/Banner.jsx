import heroImg from '../../assets/banner.png'

function Banner() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:items-center lg:px-8 lg:py-16">
        <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
        <span className="relative inline-flex h-3 w-3 items-center justify-center rounded-full bg-violet-200">
        <span className="h-1.5 w-1.5 rounded-full bg-violet-600" />
        </span>
             New: AI-Powered Tools Available
        </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            Supercharge Your
            <br />
            Digital Workflow
          </h1>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-600 sm:text-base">
            Access premium AI tools, design assets, templates, and productivity
            software all in one place. Start creating faster today.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-full bg-linear-to-r from-violet-600 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-105"
            >
              Explore Products
            </button>
            <button
              type="button"
              className="rounded-full border border-violet-300 px-5 py-2.5 text-sm font-semibold text-violet-700 transition hover:bg-violet-50"
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
