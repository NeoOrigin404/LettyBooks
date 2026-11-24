const highlights = [
  {
    number: '01',
    title: 'Votre bibliothèque',
    description: 'Retrouvez vos livres et organisez vos envies de lecture.',
  },
  {
    number: '02',
    title: 'Votre parcours',
    description: 'Gardez une trace de vos lectures, de vos dates et de vos avis.',
  },
  {
    number: '03',
    title: 'Votre année',
    description: 'Prenez du recul sur vos habitudes et célébrez vos découvertes.',
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-6 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between border-b border-ink/10 pb-5">
          <a href="/" className="font-serif text-2xl font-semibold tracking-tight">
            LettyBooks<span className="text-moss">.</span>
          </a>
          <span className="rounded-full border border-ink/15 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-ink/60">
            Votre espace lecture
          </span>
        </header>

        <section className="grid flex-1 items-center gap-14 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div className="max-w-2xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-moss">
              Lire, collectionner, se souvenir
            </p>
            <h1 className="font-serif text-5xl font-medium leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Chaque livre
              <br />
              laisse une <span className="italic text-moss">histoire.</span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-8 text-ink/65 sm:text-lg">
              Bienvenue dans votre bibliothèque personnelle. Un espace pour
              organiser vos lectures, suivre votre parcours et retrouver les
              histoires qui vous accompagnent.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center rounded-full bg-moss px-6 py-3 text-sm font-medium text-white">
                Bientôt disponible
              </span>
              <span className="text-sm text-ink/50">
                Votre prochaine page commence ici.
              </span>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-sm items-center justify-center py-8">
            <div className="absolute h-72 w-72 rounded-full bg-[#e8e6dc] sm:h-80 sm:w-80" />
            <div className="relative flex h-80 w-56 -rotate-6 flex-col justify-between rounded-r-2xl rounded-l-md bg-[#68745b] p-7 text-[#f7f5f0] shadow-[18px_20px_35px_rgba(41,43,39,0.18)] sm:h-96 sm:w-64">
              <div className="absolute inset-y-0 left-3 w-px bg-white/20" />
              <div className="ml-3 border-y border-white/35 py-4 text-center">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/70">
                  Le plaisir de
                </p>
                <p className="mt-2 font-serif text-4xl leading-tight">
                  lire
                  <br />
                  encore
                </p>
              </div>
              <div className="ml-3 text-center">
                <div className="mx-auto mb-3 h-px w-10 bg-white/50" />
                <p className="text-[9px] uppercase tracking-[0.28em] text-white/75">
                  LettyBooks
                </p>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 h-24 w-24 rotate-12 rounded-xl border border-ink/10 bg-[#e4c9a5] shadow-lg sm:right-0" />
          </div>
        </section>

        <section className="grid gap-8 border-t border-ink/10 py-9 sm:grid-cols-3 sm:gap-10">
          {highlights.map((item) => (
            <article key={item.number}>
              <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-moss">
                {item.number}
              </p>
              <h2 className="font-serif text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 max-w-xs text-sm leading-6 text-ink/60">
                {item.description}
              </p>
            </article>
          ))}
        </section>

        <footer className="flex flex-col gap-2 border-t border-ink/10 py-5 text-xs text-ink/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} LettyBooks</span>
          <span>Un espace pensé pour vos histoires.</span>
        </footer>
      </div>
    </main>
  )
}
