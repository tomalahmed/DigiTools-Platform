function Stats() {
  const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '200+', label: 'Premium Tools' },
    { value: '4.9', label: 'Rating' },
  ]

  return (
    <section id="testimonials" className="scroll-mt-24 bg-linear-to-r from-violet-600 via-purple-600 to-fuchsia-500">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 px-4 py-7 text-white sm:grid-cols-3 sm:px-6 lg:px-8">
        {stats.map((item, index) => (
          <div
            key={item.label}
            className={`flex flex-col items-center justify-center py-2 ${
              index !== stats.length - 1 ? 'sm:border-r sm:border-white/30' : ''
            }`}
          >
            <p className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {item.value}
            </p>
            <p className="mt-2 text-base text-white/85 sm:text-lg">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
