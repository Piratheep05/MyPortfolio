import Image from "next/image";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import {
  ArrowRight, ArrowUpRight, Mail, Phone, MapPin, Download, Github, Linkedin,
} from "@/components/icons";
import {
  profile, stats, about, experience, products, featuredProjects, clientSites, gallery, skills, education,
} from "@/lib/data";

function SectionHeading({ eyebrow, title, children }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-lg leading-relaxed text-muted">{children}</p>}
    </Reveal>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted">{children}</span>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        {/* HERO */}
        <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.35fr_1fr]">
            <div>
              <Reveal>
                <a
                  href="#contact"
                  className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-card/60 px-3.5 py-1.5 text-sm text-muted backdrop-blur"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Available for remote work
                </a>
              </Reveal>
              <Reveal delay={80}>
                <p className="mb-3 text-lg text-muted">
                  Hi, I&apos;m {profile.name} 👋
                </p>
                <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
                  {profile.headline.split("modernise")[0]}
                  <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-sky-500 bg-clip-text text-transparent">
                    modernise
                  </span>
                  {profile.headline.split("modernise")[1]}
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.intro}</p>
              </Reveal>
              <Reveal delay={240} className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white shadow-lg shadow-accent/25 transition hover:brightness-110"
                >
                  View my work
                  <ArrowRight width={16} height={16} className="transition group-hover:translate-x-0.5" />
                </a>
                {profile.cvUrl ? (
                  <a
                    href={profile.cvUrl}
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-medium transition hover:bg-card"
                  >
                    <Download width={16} height={16} /> Download CV
                  </a>
                ) : (
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-medium transition hover:bg-card"
                  >
                    <Mail width={16} height={16} /> Get in touch
                  </a>
                )}
                <div className="ml-1 flex items-center gap-1">
                  <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full text-muted transition hover:bg-card hover:text-[var(--fg)]">
                    <Github />
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full text-muted transition hover:bg-card hover:text-[var(--fg)]">
                    <Linkedin />
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200} className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet-500/40 via-fuchsia-500/20 to-sky-500/40 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-card p-2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem]">
                  <Image src={profile.photo} alt={profile.name} fill priority sizes="(max-width: 1024px) 80vw, 380px" className="object-cover" />
                </div>
                <div className="flex items-center justify-between px-3 pt-3 pb-1.5">
                  <div>
                    <p className="text-sm font-semibold">{profile.role}</p>
                    <p className="text-xs text-muted">{profile.tagline}</p>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-muted">
                    <MapPin width={14} height={14} /> LK
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Stats */}
          <div className="relative mx-auto mt-20 max-w-6xl px-5 sm:px-8">
            <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-line gap-px lg:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 60} className="bg-card p-6 sm:p-7">
                  <p className="text-3xl font-semibold tracking-tight sm:text-4xl">{s.value}</p>
                  <p className="mt-1.5 text-sm text-muted">{s.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-0 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
            <SectionHeading eyebrow="About" title="Reliable engineering for systems that are already live." />
            <Reveal delay={100} className="space-y-5 text-lg leading-relaxed text-muted lg:pt-9">
              {about.map((p, i) => <p key={i}>{p}</p>)}
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-base">
                <span className="flex items-center gap-2"><MapPin width={16} height={16} /> {profile.location}</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> {profile.timezone}</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="border-t border-line py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading eyebrow="Experience" title="Where I've been building.">
              Remote teams across Norway, Australia and the UK — delivering through tickets, pull requests and async review.
            </SectionHeading>
            <ol className="relative space-y-4">
              {experience.map((job, i) => (
                <Reveal as="li" key={job.company} delay={i * 50}>
                  <div className="group grid gap-4 rounded-2xl border border-line bg-card p-6 transition hover:border-accent/50 sm:p-8 md:grid-cols-[200px_1fr]">
                    <div>
                      <p className="font-mono text-sm text-muted">{job.period}</p>
                      <p className="mt-1 text-xs text-muted">{job.place}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">
                        {job.role}{" "}
                        <span className="text-muted">·</span>{" "}
                        {job.link ? (
                          <a href={job.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-0.5 text-accent hover:underline">
                            {job.company} <ArrowUpRight width={14} height={14} />
                          </a>
                        ) : (
                          <span className="text-accent">{job.company}</span>
                        )}
                      </h3>
                      <ul className="mt-3 space-y-2 text-muted">
                        {job.points.map((pt) => (
                          <li key={pt} className="flex gap-3 leading-relaxed">
                            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[var(--muted)]" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {job.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="border-t border-line py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading eyebrow="Selected work" title="Projects I'm proud of.">
              Products I lead at SixVM, plus business systems running in production — most client work is private, so details are shared rather than source.
            </SectionHeading>

            {/* SixVM products */}
            <div className="mb-16 space-y-6">
              {products.map((p, i) => (
                <Reveal key={p.title}>
                  <article className="group grid overflow-hidden rounded-3xl border border-line bg-card transition hover:border-accent/50 lg:grid-cols-[1.25fr_1fr]">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`relative block aspect-[16/9] overflow-hidden border-line lg:aspect-auto lg:min-h-[340px] ${i % 2 ? "lg:order-2 lg:border-l" : "lg:border-r"} border-b lg:border-b-0`}
                    >
                      <Image
                        src={p.img}
                        alt={`${p.title} screenshot`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 640px"
                        className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                      />
                    </a>
                    <div className="flex flex-col justify-center p-7 sm:p-10">
                      <p className="font-mono text-xs uppercase tracking-wider text-accent">{p.kind}</p>
                      <h3 className="mt-2 text-3xl font-semibold tracking-tight">{p.title}</h3>
                      <p className="mt-4 leading-relaxed text-muted">{p.description}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                      </div>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--fg)] px-5 py-2.5 text-sm font-medium text-[var(--bg)] transition hover:opacity-85"
                      >
                        Visit live site <ArrowUpRight width={15} height={15} />
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {featuredProjects.map((p, i) => (
                <Reveal key={p.title} delay={(i % 2) * 80}>
                  <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-card p-7 transition hover:-translate-y-1 hover:border-accent/50 sm:p-8">
                    <div className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${p.accent} blur-3xl transition group-hover:scale-125`} />
                    <p className="relative font-mono text-xs uppercase tracking-wider text-muted">{p.kind}</p>
                    <h3 className="relative mt-2 text-2xl font-semibold tracking-tight">{p.title}</h3>
                    <p className="relative mt-3 leading-relaxed text-muted">{p.description}</p>
                    <div className="relative mt-6 flex flex-wrap gap-2">
                      {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            {/* Client sites */}
            <Reveal className="mt-16">
              <h3 className="mb-5 text-xl font-semibold">WordPress client websites</h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {clientSites.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-line bg-card px-5 py-4 transition hover:border-accent/50"
                  >
                    <div>
                      <p className="font-medium">{s.name}</p>
                      <p className="text-sm text-muted">{s.note}</p>
                    </div>
                    <ArrowUpRight className="text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </a>
                ))}
              </div>
            </Reveal>

            {/* Gallery */}
            <Reveal className="mt-16">
              <h3 className="mb-5 text-xl font-semibold">More builds</h3>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {gallery.map((g, i) => (
                <Reveal key={g.title} delay={(i % 4) * 60}>
                  <figure className="group overflow-hidden rounded-xl border border-line bg-card">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={g.img}
                        alt={g.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                        className="object-cover object-top transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <figcaption className="px-4 py-3">
                      <p className="text-sm font-medium">{g.title}</p>
                      <p className="text-xs text-muted">{g.kind}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="border-t border-line py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading eyebrow="Toolkit" title="Skills & technologies." />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((s, i) => (
                <Reveal key={s.group} delay={(i % 3) * 60} className="rounded-2xl border border-line bg-card p-6">
                  <p className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">{s.group}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <span key={it} className="rounded-lg bg-[var(--bg)] px-3 py-1.5 text-sm">{it}</span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-16">
              <h3 className="mb-5 text-xl font-semibold">Education</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {education.map((e) => (
                  <div key={e.title} className="rounded-2xl border border-line bg-card p-6">
                    <p className="font-mono text-sm text-muted">{e.period}</p>
                    <p className="mt-2 text-lg font-semibold">{e.title}</p>
                    <p className="text-muted">{e.school}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="border-t border-line py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-line bg-card px-6 py-14 text-center sm:px-12 sm:py-20">
                <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[640px] -translate-x-1/2 rounded-full bg-accent/25 blur-[100px]" />
                <p className="relative mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
                <h2 className="relative mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
                  Have a project or a role in mind?
                </h2>
                <p className="relative mx-auto mt-5 max-w-xl text-lg text-muted">
                  I&apos;m available for remote full-time or contract work — 40 hours a week, with overlap for UK and European mornings.
                </p>
                <div className="relative mt-9 flex flex-wrap justify-center gap-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white shadow-lg shadow-accent/25 transition hover:brightness-110"
                  >
                    <Mail width={16} height={16} /> {profile.email}
                  </a>
                  <a
                    href={profile.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-medium transition hover:bg-[var(--bg)]"
                  >
                    <Phone width={16} height={16} /> {profile.phone}
                  </a>
                </div>
                <div className="relative mt-6 flex justify-center gap-2">
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition hover:text-[var(--fg)]">
                    <Linkedin />
                  </a>
                  <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition hover:text-[var(--fg)]">
                    <Github />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-muted sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p>Built with Next.js & Tailwind CSS · Deployed on Vercel</p>
        </div>
      </footer>
    </>
  );
}
