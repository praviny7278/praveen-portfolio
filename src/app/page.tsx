
"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

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

const whyMe = [
  {
    title: "End-to-end ownership",
    description:
      "From architecture and development to deployment and future improvements, I can work across the full product lifecycle.",
  },
  {
    title: "Business-first thinking",
    description:
      "I focus on understanding the actual problem before choosing the technology or implementation.",
  },
  {
    title: "Clean & maintainable",
    description:
      "I build with readable code, practical architecture and long-term maintainability in mind.",
  },
  {
    title: "Clear communication",
    description:
      "You get straightforward communication, visible progress and a development process without unnecessary complexity.",
  },
];

function CursorGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 100,
    damping: 30,
  });

  const springY = useSpring(y, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [x, y]);

  return (
    <motion.div
      style={{
        left: springX,
        top: springY,
      }}
      className="pointer-events-none fixed z-40 hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.055] blur-3xl md:block"
    />
  );
}

function ThreeDBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 40,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 40,
    damping: 20,
  });

  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX / window.innerWidth - 0.5);
      mouseY.set(event.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  /*
   * IMPORTANT:
   * Do NOT use Math.random() here.
   *
   * These values are intentionally static so that the
   * server-rendered HTML and client-rendered HTML match.
   */
  const particles = [
    { left: 8, top: 18, duration: 6, delay: 0.2, x: 15, y: -80 },
    { left: 15, top: 42, duration: 8, delay: 1.1, x: -20, y: -100 },
    { left: 23, top: 76, duration: 7, delay: 2.4, x: 18, y: -70 },
    { left: 31, top: 25, duration: 9, delay: 0.8, x: -15, y: -120 },
    { left: 38, top: 61, duration: 6, delay: 3.2, x: 22, y: -90 },
    { left: 44, top: 14, duration: 8, delay: 1.7, x: -18, y: -100 },
    { left: 51, top: 84, duration: 7, delay: 2.1, x: 14, y: -80 },
    { left: 57, top: 35, duration: 10, delay: 0.5, x: -25, y: -130 },
    { left: 63, top: 68, duration: 6, delay: 3.8, x: 20, y: -75 },
    { left: 69, top: 12, duration: 8, delay: 1.3, x: -12, y: -110 },
    { left: 74, top: 51, duration: 7, delay: 2.7, x: 25, y: -90 },
    { left: 81, top: 29, duration: 9, delay: 0.9, x: -20, y: -115 },
    { left: 87, top: 73, duration: 6, delay: 3.4, x: 15, y: -85 },
    { left: 93, top: 43, duration: 8, delay: 1.9, x: -15, y: -100 },
    { left: 5, top: 88, duration: 10, delay: 4.1, x: 20, y: -125 },
    { left: 19, top: 9, duration: 7, delay: 2.8, x: -18, y: -80 },
    { left: 27, top: 53, duration: 6, delay: 1.5, x: 12, y: -95 },
    { left: 35, top: 91, duration: 9, delay: 0.4, x: -22, y: -120 },
    { left: 47, top: 46, duration: 8, delay: 3.1, x: 18, y: -85 },
    { left: 54, top: 73, duration: 7, delay: 2.2, x: -16, y: -105 },
    { left: 61, top: 20, duration: 10, delay: 0.7, x: 24, y: -130 },
    { left: 68, top: 87, duration: 6, delay: 3.7, x: -20, y: -75 },
    { left: 76, top: 38, duration: 8, delay: 1.2, x: 16, y: -110 },
    { left: 84, top: 63, duration: 9, delay: 2.9, x: -14, y: -100 },
    { left: 91, top: 17, duration: 7, delay: 0.3, x: 20, y: -90 },
    { left: 12, top: 67, duration: 8, delay: 4.3, x: -18, y: -115 },
    { left: 29, top: 33, duration: 6, delay: 1.8, x: 15, y: -80 },
    { left: 42, top: 79, duration: 10, delay: 2.5, x: -25, y: -130 },
    { left: 58, top: 8, duration: 7, delay: 0.6, x: 18, y: -95 },
    { left: 72, top: 82, duration: 9, delay: 3.5, x: -15, y: -110 },
    { left: 89, top: 56, duration: 6, delay: 1.4, x: 22, y: -85 },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:70px_70px]" />

      {/* Main violet glow */}
      <div className="absolute left-1/2 top-[-300px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

      {/* Cyan glow */}
      <div className="absolute right-[-250px] top-[500px] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.07] blur-[140px]" />

      {/* 3D Orb */}
      <motion.div
        style={{
          rotateX,
          rotateY,
        }}
        className="absolute left-1/2 top-[15%] h-[420px] w-[420px] -translate-x-1/2 [transform-style:preserve-3d]"
      >
        {/* Outer glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full bg-violet-600/20 blur-[80px]"
        />

        {/* Main sphere */}
        <div className="absolute inset-[12%] rounded-full border border-violet-400/20 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-400/10 shadow-[inset_0_0_80px_rgba(139,92,246,0.15),0_0_100px_rgba(139,92,246,0.10)]" />

        {/* Inner sphere */}
        <div className="absolute inset-[28%] rounded-full border border-cyan-300/10" />

        {/* Orbit 1 */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[5%] rounded-full border border-white/[0.06]"
        >
          <div className="absolute -left-1.5 top-1/2 h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_20px_#8b5cf6]" />
        </motion.div>

        {/* Orbit 2 */}
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[18%] rounded-full border border-white/[0.05]"
        >
          <div className="absolute -right-1.5 top-1/2 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_#67e8f9]" />
        </motion.div>

        {/* Core */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.3, 0.65, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-violet-500/30 to-cyan-400/20 blur-xl"
        />

        <motion.div
          animate={{
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/30 blur-md"
        />
      </motion.div>

      {/* Particles */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            x: 0,
            y: 0,
          }}
          animate={{
            opacity: [0, 0.45, 0],
            x: [0, particle.x],
            y: [0, particle.y],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          className="absolute h-1 w-1 rounded-full bg-violet-300"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
        />
      ))}
    </div>
  );
}


function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, {
    stiffness: 150,
    damping: 20,
  });

  const springY = useSpring(rotateY, {
    stiffness: 150,
    damping: 20,
  });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateY.set((x - centerX) / 18);
    rotateX.set(-(y - centerY) / 18);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        z: 10,
      }}
      className={className}
    >
      <div
        style={{
          transform: "translateZ(22px)",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      formData.project || "Project Inquiry"
    );

    const body = encodeURIComponent(
      `Hi Praveen,

Name: ${formData.name}
Email: ${formData.email}

Project:
${formData.project}

Message:
${formData.message}

Thanks!`
    );

    window.location.href =
      `mailto:praviny408@gmail.com?subject=${subject}&body=${body}`;

    setShowContactForm(false);
  };

  const openContactForm = () => {
    setShowContactForm(true);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#08090b] text-white">
      <CursorGlow />
      <ThreeDBackground />

      {/* Navigation */}
      <nav className="relative z-20 border-b border-white/[0.07] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            className="text-lg font-semibold tracking-tight"
          >
            Praveen<span className="text-violet-400">.</span>
          </motion.a>

          <div className="flex items-center gap-5 sm:gap-8">
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
            </div>

            <motion.button
              type="button"
              onClick={openContactForm}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 30px rgba(139,92,246,0.18)",
              }}
              whileTap={{ scale: 0.96 }}
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black"
            >
              <span className="hidden sm:inline">
                Start a Conversation
              </span>
              <span className="sm:hidden">Let's Talk</span>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28 pt-24 lg:px-8 lg:pb-36 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            Available for freelance projects
          </motion.div>

          <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            I build products
            <br />

            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                that solve real problems.
              </span>

              <motion.span
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scaleX: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute -bottom-3 left-0 h-px w-full origin-center bg-gradient-to-r from-transparent via-violet-400 to-transparent"
              />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl"
          >
            I'm Praveen Yadav, a full-stack software engineer with 4+ years
            of experience building production-ready web applications,
            mobile products, APIs, business platforms and AI-powered
            solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <motion.a
              href="#work"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 40px rgba(139,92,246,0.25)",
              }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-semibold text-black"
            >
              View My Work →
            </motion.a>

            <motion.button
              type="button"
              onClick={openContactForm}
              whileHover={{
                scale: 1.04,
                backgroundColor: "rgba(255,255,255,0.08)",
              }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-center text-sm font-semibold text-white"
            >
              Let's Talk
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Floating stack card */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotateY: [0, 8, 0],
            rotateZ: [0, -2, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute right-[5%] top-[27%] hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur-xl lg:block"
        >
          <div className="text-xs text-zinc-500">STACK</div>

          <div className="mt-3 text-sm font-medium">
            React · Next.js
          </div>

          <div className="mt-1 text-sm font-medium text-violet-400">
            Spring Boot
          </div>

          <div className="text-sm font-medium text-cyan-400">
            AI · APIs
          </div>
        </motion.div>

        {/* Technology strip */}
        <Reveal className="mt-28">
          <div className="border-y border-white/[0.07] py-7">
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4 text-sm font-medium text-zinc-500">
              <span className="text-zinc-600">
                CORE TECHNOLOGIES
              </span>
              <span>React</span>
              <span>Spring Boot</span>
              <span>Node.js</span>
              <span>TypeScript</span>
              <span>REST APIs</span>
              <span>AI Integrations</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative z-10 border-t border-white/[0.06]"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:px-8 lg:py-32">
          <Reveal>
            <p className="section-label">01 / ABOUT</p>

            <h2 className="section-title mt-5">
              More than just code.
            </h2>
          </Reveal>

          <Reveal>
            <div className="space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                I'm a full-stack software engineer who enjoys turning
                complex requirements into simple, reliable software.
              </p>

              <p>
                With 4+ years of experience across frontend, backend,
                mobile and API development, I work across the entire
                product lifecycle—from architecture and development to
                deployment and optimization.
              </p>

              <p>
                I care about clean code, thoughtful user experiences and
                building systems that are actually useful to the people
                who use them.
              </p>

              <div className="grid grid-cols-2 gap-8 border-t border-white/[0.07] pt-8 sm:grid-cols-3">
                <div>
                  <div className="text-3xl font-semibold text-white">
                    4+
                  </div>
                  <div className="mt-1 text-sm text-zinc-500">
                    Years Experience
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-semibold text-white">
                    Full-Stack
                  </div>
                  <div className="mt-1 text-sm text-zinc-500">
                    Development
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-semibold text-white">
                    Production
                  </div>
                  <div className="mt-1 text-sm text-zinc-500">
                    Ready Solutions
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <Reveal className="max-w-2xl">
            <p className="section-label">02 / SERVICES</p>

            <h2 className="section-title mt-5">
              Software built around your needs.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              You bring the problem. I'll help figure out the right
              technical solution.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.number}>
                <TiltCard className="group h-full min-h-[310px] bg-[#0b0c0f] p-7 transition-colors hover:bg-[#101116]">
                  <div className="flex items-start justify-between">
                    <span className="text-sm text-zinc-600">
                      {service.number}
                    </span>

                    <motion.span
                      whileHover={{
                        rotate: 45,
                        scale: 1.2,
                      }}
                      className="text-zinc-700 transition group-hover:text-violet-400"
                    >
                      ↗
                    </motion.span>
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
                        className="rounded-full border border-white/[0.07] px-3 py-1 text-xs text-zinc-500 transition group-hover:border-violet-400/20 group-hover:text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section className="relative z-10 border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
            <Reveal>
              <p className="section-label">03 / WHY ME</p>

              <h2 className="section-title mt-5">
                Engineering with purpose.
              </h2>
            </Reveal>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
              {whyMe.map((item) => (
                <Reveal key={item.title}>
                  <TiltCard className="group h-full bg-[#0b0c0f] p-7 transition-colors hover:bg-[#101116]">
                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-zinc-500">
                      {item.description}
                    </p>

                    <div className="mt-7 h-px w-0 bg-gradient-to-r from-violet-400 to-cyan-400 transition-all duration-500 group-hover:w-full" />
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        id="process"
        className="relative z-10 border-b border-white/[0.06]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
            <Reveal>
              <p className="section-label">04 / PROCESS</p>

              <h2 className="section-title mt-5">
                Simple process. Serious execution.
              </h2>
            </Reveal>

            <div className="grid gap-0 sm:grid-cols-2">
              {process.map((item, index) => (
                <Reveal key={item.number}>
                  <motion.div
                    whileHover={{
                      backgroundColor: "rgba(255,255,255,0.025)",
                    }}
                    className={`group border-b border-white/[0.07] p-7 ${
                      index < 2 ? "sm:border-t" : ""
                    } ${index % 2 === 0 ? "sm:border-r" : ""}`}
                  >
                    <span className="text-sm text-violet-400">
                      {item.number}
                    </span>

                    <h3 className="mt-8 text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-zinc-500">
                      {item.description}
                    </p>

                    <div className="mt-6 text-xs text-zinc-700 transition group-hover:text-violet-400">
                      STEP {item.number} →
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <Reveal>
            <p className="section-label">05 / CAPABILITIES</p>

            <div className="mt-5 max-w-3xl">
              <h2 className="section-title">
                From business idea to working software.
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Every project is different. I choose the right approach
                based on your users, business requirements, timeline and
                goals.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            <Reveal>
              <TiltCard className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 transition-colors hover:border-violet-400/30">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition duration-500 group-hover:bg-violet-500/20" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                    01
                  </div>

                  <h3 className="mt-8 text-xl font-semibold">
                    Business Platforms
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-zinc-500">
                    Custom dashboards, booking systems, customer
                    portals, management platforms and internal business
                    tools.
                  </p>

                  <div className="mt-8 text-xs font-medium text-violet-400 opacity-60 transition group-hover:opacity-100">
                    Explore capability →
                  </div>
                </div>
              </TiltCard>
            </Reveal>

            <Reveal>
              <TiltCard className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 transition-colors hover:border-cyan-400/30">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition duration-500 group-hover:bg-cyan-500/20" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    02
                  </div>

                  <h3 className="mt-8 text-xl font-semibold">
                    Digital Products
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-zinc-500">
                    SaaS platforms, MVPs, e-commerce products and
                    customer-facing web and mobile applications.
                  </p>

                  <div className="mt-8 text-xs font-medium text-cyan-400 opacity-60 transition group-hover:opacity-100">
                    Explore capability →
                  </div>
                </div>
              </TiltCard>
            </Reveal>

            <Reveal>
              <TiltCard className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 transition-colors hover:border-fuchsia-400/30">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl transition duration-500 group-hover:bg-fuchsia-500/20" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-500/10 text-fuchsia-400">
                    03
                  </div>

                  <h3 className="mt-8 text-xl font-semibold">
                    Automation & AI
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-zinc-500">
                    AI-powered features, API integrations and automated
                    workflows designed to reduce repetitive work and
                    improve efficiency.
                  </p>

                  <div className="mt-8 text-xs font-medium text-fuchsia-400 opacity-60 transition group-hover:opacity-100">
                    Explore capability →
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#101116] px-7 py-16 text-center sm:px-12">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-600 blur-[100px]"
            />

            <motion.div
              animate={{
                x: [-100, 100, -100],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[-100px] left-1/2 h-40 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[90px]"
            />

            <Reveal className="relative">
              <p className="section-label">06 / CONTACT</p>

              <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
                Have an idea?
                <br />

                <span className="bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
                  Let's build it.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400">
                Tell me what you're trying to build, the problem you're
                solving, or even just the idea you have. We can figure
                out the technical direction together.
              </p>

              <motion.button
                type="button"
                onClick={openContactForm}
                whileHover={{
                  scale: 1.06,
                  boxShadow:
                    "0 0 50px rgba(139,92,246,0.3)",
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="mt-9 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black"
              >
                Start a Conversation →
              </motion.button>

              <p className="mt-5 text-xs text-zinc-600">
                Usually replies within 24–48 hours.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            © 2026 Praveen Yadav. All rights reserved.
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

      {/* Contact Modal */}
      {showContactForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm"
          onClick={() => setShowContactForm(false)}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 22,
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-form-title"
            className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0d0e12] p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowContactForm(false)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xl text-zinc-400 transition hover:bg-white/10 hover:text-white"
              aria-label="Close contact form"
            >
              ×
            </button>

            <div className="pr-10">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
                Start a conversation
              </p>

              <h2
                id="contact-form-title"
                className="mt-3 text-3xl font-semibold tracking-tight text-white"
              >
                Let's build something great.
              </h2>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                Tell me a little about your idea, project or technical
                challenge. I'll get back to you as soon as possible.
              </p>
            </div>

            <form
              onSubmit={handleFormSubmit}
              className="mt-8 space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 transition focus:border-violet-500/50 focus:bg-white/[0.05]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 transition focus:border-violet-500/50 focus:bg-white/[0.05]"
                />
              </div>

              <div>
                <label
                  htmlFor="project"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  What are you building?
                </label>

                <input
                  id="project"
                  name="project"
                  type="text"
                  value={formData.project}
                  onChange={handleFormChange}
                  placeholder="Website, mobile app, SaaS, AI product..."
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 transition focus:border-violet-500/50 focus:bg-white/[0.05]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Tell me a little about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 transition focus:border-violet-500/50 focus:bg-white/[0.05]"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.01,
                  boxShadow:
                    "0 0 30px rgba(139,92,246,0.2)",
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="w-full rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-violet-100"
              >
                Open Email →
              </motion.button>

              <p className="text-center text-xs text-zinc-600">
                Your default email application will open with the
                message prepared for you.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          background: #08090b;
        }

        * {
          scrollbar-width: thin;
          scrollbar-color: #27272a #08090b;
        }

        ::selection {
          background: rgba(139, 92, 246, 0.35);
          color: white;
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

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
