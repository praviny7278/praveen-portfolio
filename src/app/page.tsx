"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications designed around your business goals.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    number: "02",
    title: "Mobile Applications",
    description:
      "Customer-facing mobile experiences with reliable APIs, authentication, notifications and integrations.",
    tags: ["React Native", "APIs", "Backend"],
  },
  {
    number: "03",
    title: "Backend & APIs",
    description:
      "Secure and maintainable backend systems that power web and mobile products.",
    tags: ["Spring Boot", "Node.js", "REST"],
  },
  {
    number: "04",
    title: "Custom Software",
    description:
      "Business platforms, dashboards, booking systems, SaaS products and internal tools.",
    tags: ["Architecture", "Database", "Cloud"],
  },
  {
    number: "05",
    title: "AI & Automation",
    description:
      "Practical AI features and automated workflows that reduce repetitive work and improve products.",
    tags: ["AI APIs", "Automation", "Integrations"],
  },
  {
    number: "06",
    title: "Product Development",
    description:
      "From an early idea or MVP to a production-ready application and ongoing improvements.",
    tags: ["MVP", "Launch", "Scale"],
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We discuss your business, users, requirements and the outcome you're trying to achieve.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "I turn the requirements into a practical technical plan, milestones and development roadmap.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Development happens incrementally, so you can see progress and provide feedback throughout.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "After testing and refinement, I help get the product deployed and ready for real users.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#08090b] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute left-1/2 top-[-300px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[140px]" />
        <div className="absolute right-[-250px] top-[500px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 border-b border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#" className="text-lg font-semibold tracking-tight">
            Praveen<span className="text-violet-400">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#services" className="nav-link">
              Services
            </a>
            <a href="#process" className="nav-link">
              Process
            </a>
            <a href="#work" className="nav-link">
              Work
            </a>
            <a
              href="#contact"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-violet-100"
            >
              Start a Project
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <span className="text-xl">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/[0.07] px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5">
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
              <a href="#services" onClick={() => setMenuOpen(false)}>
                Services
              </a>
              <a href="#process" onClick={() => setMenuOpen(false)}>
                Process
              </a>
              <a href="#work" onClick={() => setMenuOpen(false)}>
                Work
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Start a Project
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28 pt-24 lg:px-8 lg:pb-36 lg:pt-36">
        <div className="max-w-4xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for freelance projects
          </div>

          <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            I build software
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              that moves business forward.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            I'm Praveen Yadav, a full-stack software engineer with 4+ years of
            experience building websites, web applications, mobile products,
            APIs and custom software.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-violet-100"
            >
              Start a Project →
            </a>

            <a
              href="#services"
              className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/[0.07]"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Tech strip */}
        <div className="mt-28 border-y border-white/[0.07] py-7">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4 text-sm font-medium text-zinc-500">
            <span className="text-zinc-600">CORE TECHNOLOGIES</span>
            <span>React</span>
            <span>Spring Boot</span>
            <span>Node.js</span>
            <span>TypeScript</span>
            <span>REST APIs</span>
            <span>AI Integrations</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative z-10 border-t border-white/[0.06]"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:px-8 lg:py-32">
          <div>
            <p className="section-label">01 / ABOUT</p>
            <h2 className="section-title mt-5">More than just code.</h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-zinc-400">
            <p>
              I help startups, businesses and growing teams turn ideas and
              requirements into reliable software.
            </p>

            <p>
              I work across the full development lifecycle—from understanding
              the business problem and designing the solution to development,
              testing, deployment and future improvements.
            </p>

            <p>
              My goal is simple: build software that is useful, maintainable
              and ready for real users.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-white/[0.07] pt-8 sm:grid-cols-3">
              <div>
                <div className="text-3xl font-semibold text-white">4+</div>
                <div className="mt-1 text-sm text-zinc-500">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-white">Full</div>
                <div className="mt-1 text-sm text-zinc-500">
                  Stack Development
                </div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-white">Global</div>
                <div className="mt-1 text-sm text-zinc-500">
                  Remote Collaboration
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <p className="section-label">02 / SERVICES</p>
            <h2 className="section-title mt-5">
              Software built around your needs.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              You bring the problem. I'll help figure out the right technical
              solution.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group bg-[#0b0c0f] p-7 transition hover:bg-[#101116]"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm text-zinc-600">
                    {service.number}
                  </span>
                  <span className="text-zinc-700 transition group-hover:text-violet-400">
                    ↗
                  </span>
                </div>

                <h3 className="mt-12 text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 min-h-[80px] text-sm leading-6 text-zinc-500">
                  {service.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.07] px-3 py-1 text-xs text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        id="process"
        className="relative z-10 border-y border-white/[0.06] bg-white/[0.015]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="section-label">03 / PROCESS</p>
              <h2 className="section-title mt-5">Simple process. Serious execution.</h2>
            </div>

            <div className="grid gap-0 sm:grid-cols-2">
              {process.map((item) => (
                <div
                  key={item.number}
                  className="border-b border-white/[0.07] p-7 first:border-t sm:nth-[2]:border-t sm:nth-[odd]:border-r"
                >
                  <span className="text-sm text-violet-400">
                    {item.number}
                  </span>
                  <h3 className="mt-8 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-zinc-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <p className="section-label">04 / CAPABILITIES</p>

          <div className="mt-5 max-w-3xl">
            <h2 className="section-title">
              From business idea to working software.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Every project is different. I choose the right approach based on
              your users, business requirements, timeline and goals.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            <article className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 transition hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.04]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                01
              </div>

              <h3 className="mt-8 text-xl font-semibold">
                Business Platforms
              </h3>

              <p className="mt-4 text-sm leading-6 text-zinc-500">
                Custom dashboards, booking systems, customer portals,
                management platforms and internal business tools.
              </p>
            </article>

            <article className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.04]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                02
              </div>

              <h3 className="mt-8 text-xl font-semibold">
                Digital Products
              </h3>

              <p className="mt-4 text-sm leading-6 text-zinc-500">
                SaaS platforms, MVPs, e-commerce products and customer-facing
                web and mobile applications.
              </p>
            </article>

            <article className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 transition hover:-translate-y-1 hover:border-fuchsia-400/30 hover:bg-white/[0.04]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-500/10 text-fuchsia-400">
                03
              </div>

              <h3 className="mt-8 text-xl font-semibold">
                Automation & AI
              </h3>

              <p className="mt-4 text-sm leading-6 text-zinc-500">
                AI-powered features, API integrations and automated workflows
                designed to reduce repetitive work and improve efficiency.
              </p>
            </article>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section id="contact" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#101116] px-7 py-16 text-center sm:px-12">
            <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[100px]" />

            <div className="relative">
              <p className="section-label">05 / CONTACT</p>

              <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
                Have an idea?
                <br />
                <span className="text-zinc-500">Let's build it.</span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400">
                Tell me what you're trying to build, the problem you're
                solving, or even just the idea you have. We can figure out the
                technical direction together.
              </p>

              <a
                href="mailto:praviny408@gmail.com"
                className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-violet-100"
              >
                Start a Conversation →
              </a>

              <p className="mt-5 text-xs text-zinc-600">
                 Usually replies within 24–48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            © {new Date().getFullYear()} Praveen Yadav. All rights reserved.
          </div>

         <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/devendra-kumar-yadav-a1753a25/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/praviny7278"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>
         </div>

        </div>
      </footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          background: #08090b;
        }

        .nav-link {
          color: #71717a;
          font-size: 0.875rem;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: #fff;
        }

        .section-label {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          color: #8b5cf6;
        }

        .section-title {
          font-size: clamp(2.25rem, 5vw, 4.5rem);
          font-weight: 600;
          line-height: 1.05;
          letter-spacing: -0.04em;
        }
      `}</style>
    </main>
  );
}
