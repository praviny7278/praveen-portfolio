

// "use client";

// import { useEffect, useRef, useState } from "react";
// import {
//   motion,
//   useMotionValue,
//   useSpring,
//   useTransform,
// } from "framer-motion";

// const services = [
//   {
//     number: "01",
//     title: "Web & SaaS Development",
//     description:
//       "Production-ready websites, SaaS platforms, dashboards and customer portals built around your business goals.",
//     tags: ["React", "Next.js", "TypeScript"],
//   },
//   {
//     number: "02",
//     title: "Mobile Applications",
//     description:
//       "Cross-platform mobile products with authentication, APIs, notifications and the integrations your users need.",
//     tags: ["React Native", "APIs", "Mobile"],
//   },
//   {
//     number: "03",
//     title: "Backend & APIs",
//     description:
//       "Secure, scalable backend systems and REST APIs designed to support reliable web and mobile products.",
//     tags: ["Spring Boot", "Node.js", "REST"],
//   },
//   {
//     number: "04",
//     title: "Business Software",
//     description:
//       "Custom management systems, booking platforms, internal tools and dashboards that replace manual workflows.",
//     tags: ["Architecture", "Database", "Cloud"],
//   },
//   {
//     number: "05",
//     title: "AI & Automation",
//     description:
//       "Practical AI features, intelligent workflows and API integrations that reduce repetitive work.",
//     tags: ["AI APIs", "Automation", "Integrations"],
//   },
//   {
//     number: "06",
//     title: "MVP & Product Development",
//     description:
//       "Turn an idea into a working MVP, validate it with real users and evolve it into production software.",
//     tags: ["MVP", "Launch", "Scale"],
//   },
// ];

// const projects = [
//   {
//     number: "01",
//     category: "Business Management",
//     title: "FlowDesk",
//     description:
//       "A modern operations dashboard for small businesses to manage customers, bookings, staff, payments and daily tasks from one place.",
//     problem:
//       "Business operations were spread across spreadsheets, WhatsApp messages and manual follow-ups.",
//     solution:
//       "A role-based web application with customer management, booking workflows, dashboards, reminders and activity tracking.",
//     result: "Illustrative result",
//     metric: "60%",
//     metricLabel: "less manual admin work",
//     technologies: ["Next.js", "TypeScript", "Spring Boot", "PostgreSQL"],
//     gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
//   },
//   {
//     number: "02",
//     category: "Education Platform",
//     title: "LearnSphere",
//     description:
//       "A responsive learning platform for schools and coaching institutes with courses, assignments, attendance, notices and student progress.",
//     problem:
//       "Students, parents and teachers had to use different tools to manage academic information and communication.",
//     solution:
//       "A centralized portal with separate dashboards for students, parents, teachers and administrators.",
//     result: "Illustrative result",
//     metric: "40%",
//     metricLabel: "faster information access",
//     technologies: ["React", "Node.js", "REST API", "MongoDB"],
//     gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
//   },
//   {
//     number: "03",
//     category: "Healthcare Software",
//     title: "CareConnect",
//     description:
//       "A sample appointment and patient-management platform designed to simplify scheduling, records and communication for clinics.",
//     problem:
//       "Appointments and patient follow-ups were handled through calls, paper records and disconnected spreadsheets.",
//     solution:
//       "A secure dashboard with appointment scheduling, patient profiles, reminders and operational reporting.",
//     result: "Illustrative result",
//     metric: "30%",
//     metricLabel: "fewer scheduling gaps",
//     technologies: ["Next.js", "Spring Boot", "PostgreSQL", "REST"],
//     gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
//   },
//   {
//     number: "04",
//     category: "Customer Portal",
//     title: "ClientHub",
//     description:
//       "A customer portal for service businesses to share documents, track requests, communicate with clients and manage project updates.",
//     problem:
//       "Customers had limited visibility into project progress and teams spent too much time answering repetitive status questions.",
//     solution:
//       "A responsive portal with authentication, project timelines, document management, notifications and request tracking.",
//     result: "Illustrative result",
//     metric: "35%",
//     metricLabel: "faster client communication",
//     technologies: ["React", "Node.js", "REST API", "Cloud"],
//     gradient: "from-sky-500/20 via-blue-500/10 to-transparent",
//   },
//   {
//     number: "05",
//     category: "E-commerce",
//     title: "ShopPilot",
//     description:
//       "A demo commerce platform with product management, customer accounts, order workflows, search and an admin dashboard.",
//     problem:
//       "The business needed a simple online storefront while keeping inventory and order management in one system.",
//     solution:
//       "A responsive storefront connected to an administrative dashboard for products, customers and orders.",
//     result: "Illustrative result",
//     metric: "2x",
//     metricLabel: "simpler order workflow",
//     technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
//     gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
//   },
//   {
//     number: "06",
//     category: "AI & Automation",
//     title: "SmartOps",
//     description:
//       "An AI-assisted workflow system that connects business tools and automates repetitive data processing, summaries and reporting.",
//     problem:
//       "Teams were spending hours every week copying information between systems and preparing recurring reports.",
//     solution:
//       "API integrations, scheduled workflows and AI-assisted processing that automatically organize incoming information.",
//     result: "Illustrative result",
//     metric: "10+ hrs",
//     metricLabel: "saved per week",
//     technologies: ["AI APIs", "Node.js", "REST", "Automation"],
//     gradient: "from-fuchsia-500/20 via-pink-500/10 to-transparent",
//   },
// ];

// const process = [
//   {
//     number: "01",
//     title: "Discover",
//     description:
//       "We clarify the problem, users, business goals, requirements and constraints before writing unnecessary code.",
//   },
//   {
//     number: "02",
//     title: "Plan",
//     description:
//       "I turn the requirements into a practical architecture, feature plan, milestones and development roadmap.",
//   },
//   {
//     number: "03",
//     title: "Build",
//     description:
//       "Development happens incrementally with regular progress, feedback and testing instead of one giant final delivery.",
//   },
//   {
//     number: "04",
//     title: "Launch",
//     description:
//       "The product is tested, deployed and prepared for real users, with room for iteration and future improvements.",
//   },
// ];

// const whyMe = [
//   {
//     title: "End-to-end ownership",
//     description:
//       "I can work across frontend, backend, APIs, databases, mobile and deployment instead of creating unnecessary handoffs.",
//   },
//   {
//     title: "Business-first thinking",
//     description:
//       "Technology is a means to an outcome. I focus on solving the actual business problem before choosing the implementation.",
//   },
//   {
//     title: "Practical architecture",
//     description:
//       "I prefer clean, understandable systems that can grow with the product without introducing unnecessary complexity.",
//   },
//   {
//     title: "Clear communication",
//     description:
//       "You get straightforward communication, visible progress and clear explanations without excessive technical jargon.",
//   },
// ];

// const capabilities = [
//   {
//     number: "01",
//     title: "Business Platforms",
//     description:
//       "Dashboards, booking systems, customer portals, management software and internal tools.",
//     tone: "violet",
//   },
//   {
//     number: "02",
//     title: "Digital Products",
//     description:
//       "SaaS platforms, MVPs, e-commerce products and customer-facing web and mobile applications.",
//     tone: "cyan",
//   },
//   {
//     number: "03",
//     title: "Automation & AI",
//     description:
//       "AI-powered features, integrations and automated workflows designed to save time and improve efficiency.",
//     tone: "fuchsia",
//   },
// ];

// const technologies = [
//   "React",
//   "Next.js",
//   "TypeScript",
//   "JavaScript",
//   "Node.js",
//   "Spring Boot",
//   "Java",
//   "REST APIs",
//   "PostgreSQL",
//   "MongoDB",
//   "React Native",
//   "AI APIs",
// ];

// function CursorGlow() {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const springX = useSpring(x, { stiffness: 80, damping: 28 });
//   const springY = useSpring(y, { stiffness: 80, damping: 28 });

//   useEffect(() => {
//     const move = (event: MouseEvent) => {
//       x.set(event.clientX);
//       y.set(event.clientY);
//     };

//     window.addEventListener("mousemove", move);

//     return () => window.removeEventListener("mousemove", move);
//   }, [x, y]);

//   return (
//     <motion.div
//       style={{ left: springX, top: springY }}
//       className="pointer-events-none fixed z-40 hidden h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.045] blur-3xl md:block"
//     />
//   );
// }

// function AmbientBackground() {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const springX = useSpring(mouseX, { stiffness: 35, damping: 22 });
//   const springY = useSpring(mouseY, { stiffness: 35, damping: 22 });

//   const glowX = useTransform(springX, [-0.5, 0.5], ["-6%", "6%"]);
//   const glowY = useTransform(springY, [-0.5, 0.5], ["-4%", "4%"]);

//   useEffect(() => {
//     const move = (event: MouseEvent) => {
//       mouseX.set(event.clientX / window.innerWidth - 0.5);
//       mouseY.set(event.clientY / window.innerHeight - 0.5);
//     };

//     window.addEventListener("mousemove", move);

//     return () => window.removeEventListener("mousemove", move);
//   }, [mouseX, mouseY]);

//   const particles = [
//     [8, 20, 8, 14],
//     [18, 72, 10, -18],
//     [31, 34, 7, 15],
//     [44, 12, 9, -14],
//     [57, 78, 8, 18],
//     [69, 28, 11, -16],
//     [81, 62, 7, 14],
//     [92, 18, 10, -12],
//     [14, 90, 9, 18],
//     [37, 67, 12, -14],
//     [63, 46, 9, 16],
//     [87, 84, 11, -18],
//   ];

//   return (
//     <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
//       <div className="absolute inset-0 bg-[#050507]" />

//       <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.55)_1px,transparent_1px)] [background-size:72px_72px]" />

//       <motion.div
//         style={{ x: glowX, y: glowY }}
//         className="absolute left-1/2 top-[-260px] h-[650px] w-[760px] -translate-x-1/2 rounded-full bg-violet-600/[0.10] blur-[150px]"
//       />

//       <div className="absolute right-[-240px] top-[38%] h-[520px] w-[520px] rounded-full bg-cyan-500/[0.05] blur-[150px]" />

//       <div className="absolute bottom-[-300px] left-[-200px] h-[500px] w-[500px] rounded-full bg-fuchsia-500/[0.04] blur-[150px]" />

//       <motion.div
//         style={{
//           x: useTransform(springX, [-0.5, 0.5], [-18, 18]),
//           y: useTransform(springY, [-0.5, 0.5], [-12, 12]),
//         }}
//         className="absolute left-1/2 top-[10%] hidden h-[560px] w-[560px] -translate-x-1/2 rounded-full border border-white/[0.035] lg:block"
//       >
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{
//             duration: 45,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           className="absolute inset-[11%] rounded-full border border-violet-300/[0.07] border-dashed"
//         />

//         <motion.div
//           animate={{ rotate: -360 }}
//           transition={{
//             duration: 32,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           className="absolute inset-[25%] rounded-full border border-cyan-300/[0.06]"
//         />

//         <motion.div
//           animate={{
//             scale: [1, 1.08, 1],
//             opacity: [0.25, 0.5, 0.25],
//           }}
//           transition={{
//             duration: 5,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl"
//         />
//       </motion.div>

//       {particles.map(([left, top, duration, x], index) => (
//         <motion.span
//           key={index}
//           initial={{ opacity: 0, y: 0 }}
//           animate={{
//             opacity: [0, 0.35, 0],
//             y: [0, -70],
//             x: [0, x],
//           }}
//           transition={{
//             duration,
//             repeat: Infinity,
//             delay: index * 0.7,
//             ease: "easeInOut",
//           }}
//           className="absolute h-1 w-1 rounded-full bg-violet-300/60"
//           style={{
//             left: `${left}%`,
//             top: `${top}%`,
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// function Reveal({
//   children,
//   className = "",
//   delay = 0,
// }: {
//   children: React.ReactNode;
//   className?: string;
//   delay?: number;
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 28 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.12 }}
//       transition={{
//         duration: 0.7,
//         delay,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// }

// function TiltCard({
//   children,
//   className = "",
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) {
//   const ref = useRef<HTMLDivElement>(null);

//   const rotateX = useMotionValue(0);
//   const rotateY = useMotionValue(0);

//   const springX = useSpring(rotateX, {
//     stiffness: 180,
//     damping: 22,
//   });

//   const springY = useSpring(rotateY, {
//     stiffness: 180,
//     damping: 22,
//   });

//   const move = (event: React.MouseEvent<HTMLDivElement>) => {
//     if (!ref.current) return;

//     const rect = ref.current.getBoundingClientRect();

//     rotateY.set(
//       ((event.clientX - rect.left) / rect.width - 0.5) * 5
//     );

//     rotateX.set(
//       -((event.clientY - rect.top) / rect.height - 0.5) * 5
//     );
//   };

//   return (
//     <motion.div
//       ref={ref}
//       onMouseMove={move}
//       onMouseLeave={() => {
//         rotateX.set(0);
//         rotateY.set(0);
//       }}
//       style={{
//         rotateX: springX,
//         rotateY: springY,
//         transformStyle: "preserve-3d",
//       }}
//       whileHover={{ y: -4 }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// }

// function Arrow() {
//   return (
//     <span
//       aria-hidden="true"
//       className="inline-block transition-transform duration-300 group-hover:translate-x-1"
//     >
//       ↗
//     </span>
//   );
// }

// function SectionHeading({
//   number,
//   title,
//   description,
// }: {
//   number: string;
//   title: string;
//   description?: string;
// }) {
//   return (
//     <Reveal className="max-w-3xl">
//       <p className="section-label">
//         {number} / {title.toUpperCase()}
//       </p>

//       <h2 className="section-title mt-5">{title}</h2>

//       {description && (
//         <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">
//           {description}
//         </p>
//       )}
//     </Reveal>
//   );
// }

// export default function Home() {
//   const [showContactForm, setShowContactForm] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     project: "",
//     message: "",
//   });

//   const openContactForm = () => {
//     setMobileOpen(false);
//     setSubmitted(false);
//     setShowContactForm(true);
//   };

//   const closeContactForm = () => {
//     setShowContactForm(false);
//     setSubmitted(false);
//   };

//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === "Escape" && showContactForm) {
//         closeContactForm();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [showContactForm]);

//   const handleFormChange = (
//     event: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement
//     >
//   ) => {
//     setFormData((previous) => ({
//       ...previous,
//       [event.target.name]: event.target.value,
//     }));
//   };

//   const handleFormSubmit = (
//     event: React.FormEvent<HTMLFormElement>
//   ) => {
//     event.preventDefault();

//     const subject = encodeURIComponent(
//       formData.project || "Project Inquiry"
//     );

//     const body = encodeURIComponent(
//       `Hi Praveen,

// Name: ${formData.name}
// Email: ${formData.email}

// Project:
// ${formData.project}

// Message:
// ${formData.message}

// Thanks!`
//     );

//     window.location.href =
//       `mailto:praviny408@gmail.com?subject=${subject}&body=${body}`;

//     setSubmitted(true);
//   };

//   const navItems = [
//     ["About", "#about"],
//     ["Services", "#services"],
//     ["Work", "#work"],
//     ["Process", "#process"],
//   ];

//   return (
//     <main className="min-h-screen overflow-hidden bg-[#050507] text-white">
//       <CursorGlow />
//       <AmbientBackground />

//       {/* NAVIGATION */}
//       <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
//         <nav className="mx-auto max-w-6xl rounded-2xl border border-white/[0.09] bg-black/45 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:px-5">
//           <div className="flex items-center justify-between">
//             <a
//               href="#"
//               className="group flex items-center gap-2 text-[15px] font-semibold tracking-tight"
//             >
//               <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-sm">
//                 P
//               </span>

//               <span>
//                 Praveen<span className="text-violet-400">.</span>
//               </span>
//             </a>

//             <div className="hidden items-center gap-7 md:flex">
//               {navItems.map(([label, href]) => (
//                 <a
//                   key={label}
//                   href={href}
//                   className="nav-link"
//                 >
//                   {label}
//                 </a>
//               ))}
//             </div>

//             <div className="flex items-center gap-2">
//               <motion.button
//                 type="button"
//                 onClick={openContactForm}
//                 whileTap={{ scale: 0.96 }}
//                 whileHover={{ scale: 1.03 }}
//                 className="hidden rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-black sm:block"
//               >
//                 Start a Conversation
//               </motion.button>

//               <button
//                 type="button"
//                 onClick={() => setMobileOpen(!mobileOpen)}
//                 className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] md:hidden"
//                 aria-label="Toggle navigation menu"
//                 aria-expanded={mobileOpen}
//               >
//                 <span className="text-lg">
//                   {mobileOpen ? "×" : "☰"}
//                 </span>
//               </button>
//             </div>
//           </div>

//           {mobileOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               className="mt-3 border-t border-white/[0.08] pt-3 md:hidden"
//             >
//               {navItems.map(([label, href]) => (
//                 <a
//                   key={label}
//                   href={href}
//                   onClick={() => setMobileOpen(false)}
//                   className="block rounded-xl px-3 py-3 text-sm text-zinc-400 hover:bg-white/[0.04] hover:text-white"
//                 >
//                   {label}
//                 </a>
//               ))}

//               <button
//                 type="button"
//                 onClick={openContactForm}
//                 className="mt-1 w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black"
//               >
//                 Let&apos;s Talk
//               </button>
//             </motion.div>
//           )}
//         </nav>
//       </header>

//       {/* HERO */}
//       <section className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-6 sm:pt-44 lg:px-8 lg:pb-28 lg:pt-48">
//         <div className="grid items-end gap-14 lg:grid-cols-[1.3fr_.7fr]">
//           <div>
//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-3.5 py-2 text-xs font-medium text-emerald-300"
//             >
//               <span className="relative flex h-2 w-2">
//                 <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
//                 <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
//               </span>

//               Available for freelance projects
//             </motion.div>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.15 }}
//               className="mb-5 text-xs font-medium uppercase tracking-[.24em] text-zinc-600"
//             >
//               Full-stack software engineer · 4+ years
//             </motion.p>

//             <motion.h1
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 delay: 0.15,
//                 duration: 0.8,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="max-w-5xl text-[3.25rem] font-semibold leading-[.94] tracking-[-.065em] sm:text-6xl md:text-7xl lg:text-[6.4rem]"
//             >
//               I build software that solves
//               <span className="mt-2 block bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
//                 real business problems.
//               </span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//               className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8"
//             >
//               I&apos;m Praveen Yadav, a full-stack software engineer
//               helping businesses turn ideas, workflows and technical
//               challenges into reliable web, mobile and AI-powered
//               products.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 18 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.55 }}
//               className="mt-9 flex flex-col gap-3 sm:flex-row"
//             >
//               <motion.a
//                 href="#work"
//                 whileHover={{
//                   y: -2,
//                   boxShadow:
//                     "0 18px 50px rgba(139,92,246,.20)",
//                 }}
//                 className="group rounded-xl bg-white px-6 py-3.5 text-center text-sm font-semibold text-black"
//               >
//                 View selected work <Arrow />
//               </motion.a>

//               <motion.button
//                 type="button"
//                 onClick={openContactForm}
//                 whileHover={{ y: -2 }}
//                 className="rounded-xl border border-white/10 bg-white/[0.035] px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/[0.06]"
//               >
//                 Start a project
//               </motion.button>
//             </motion.div>

//             <div className="mt-10 grid max-w-xl grid-cols-3 gap-5 border-t border-white/[0.07] pt-6">
//               <div>
//                 <div className="text-xl font-semibold tracking-tight sm:text-2xl">
//                   4+
//                 </div>
//                 <p className="mt-1 text-[10px] uppercase tracking-[.12em] text-zinc-600">
//                   Years experience
//                 </p>
//               </div>

//               <div>
//                 <div className="text-xl font-semibold tracking-tight sm:text-2xl">
//                   Full-stack
//                 </div>
//                 <p className="mt-1 text-[10px] uppercase tracking-[.12em] text-zinc-600">
//                   Product development
//                 </p>
//               </div>

//               <div>
//                 <div className="text-xl font-semibold tracking-tight sm:text-2xl">
//                   E2E
//                 </div>
//                 <p className="mt-1 text-[10px] uppercase tracking-[.12em] text-zinc-600">
//                   Ownership
//                 </p>
//               </div>
//             </div>
//           </div>

//           <Reveal className="relative lg:pb-2">
//             <div className="relative overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.025] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-6">
//               <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />

//               <div className="relative">
//                 <div className="flex items-center justify-between text-[10px] uppercase tracking-[.22em] text-zinc-600">
//                   <span>Core stack</span>
//                   <span>BUILD / SHIP / IMPROVE</span>
//                 </div>

//                 <div className="mt-7 space-y-3">
//                   {[
//                     "React / Next.js",
//                     "TypeScript / Node.js",
//                     "Spring Boot / REST",
//                     "React Native",
//                     "AI / Automation",
//                   ].map((item, index) => (
//                     <motion.div
//                       key={item}
//                       initial={{ opacity: 0, x: 12 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{
//                         delay: 0.65 + index * 0.08,
//                       }}
//                       className="flex items-center justify-between rounded-xl border border-white/[0.07] bg-black/20 px-4 py-3.5"
//                     >
//                       <span className="text-sm text-zinc-300">
//                         {item}
//                       </span>

//                       <span className="text-xs text-zinc-700">
//                         0{index + 1}
//                       </span>
//                     </motion.div>
//                   ))}
//                 </div>

//                 <div className="mt-5 flex items-center gap-2 text-xs text-zinc-600">
//                   <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
//                   Built for real users, not just demos.
//                 </div>
//               </div>
//             </div>
//           </Reveal>
//         </div>

//         <Reveal className="mt-20 sm:mt-24">
//           <div className="flex flex-wrap items-center gap-x-7 gap-y-3 border-y border-white/[0.07] py-5 text-xs font-medium text-zinc-600 sm:gap-x-10">
//             <span className="text-zinc-500">
//               TECHNOLOGIES
//             </span>

//             {technologies.slice(0, 8).map((technology) => (
//               <span key={technology}>{technology}</span>
//             ))}
//           </div>
//         </Reveal>
//       </section>

//       {/* ABOUT */}
//       <section
//         id="about"
//         className="relative z-10 border-t border-white/[0.06]"
//       >
//         <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-6 lg:grid-cols-[.75fr_1.25fr] lg:px-8 lg:py-32">
//           <SectionHeading
//             number="01"
//             title="Engineering that understands the bigger picture."
//           />

//           <Reveal>
//             <div className="space-y-6 text-base leading-8 text-zinc-400 sm:text-lg">
//               <p>
//                 I&apos;m a full-stack software engineer who enjoys turning
//                 complex requirements into simple, reliable software.
//               </p>

//               <p>
//                 With 4+ years of experience across frontend, backend,
//                 mobile and API development, I can contribute across the
//                 entire product lifecycle — from architecture and
//                 development to deployment and optimization.
//               </p>

//               <p>
//                 I care about clean code, thoughtful user experiences and
//                 building systems that are actually useful to the people
//                 using them.
//               </p>

//               <div className="grid grid-cols-2 gap-6 border-t border-white/[0.07] pt-7 sm:grid-cols-3 sm:gap-8">
//                 <div>
//                   <div className="text-3xl font-semibold tracking-tight">
//                     4+
//                   </div>
//                   <div className="mt-1 text-xs text-zinc-600">
//                     Years experience
//                   </div>
//                 </div>

//                 <div>
//                   <div className="text-3xl font-semibold tracking-tight">
//                     Full-Stack
//                   </div>
//                   <div className="mt-1 text-xs text-zinc-600">
//                     Development
//                   </div>
//                 </div>

//                 <div>
//                   <div className="text-3xl font-semibold tracking-tight">
//                     E2E
//                   </div>
//                   <div className="mt-1 text-xs text-zinc-600">
//                     Product ownership
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* SERVICES */}
//       <section id="services" className="relative z-10">
//         <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
//           <SectionHeading
//             number="02"
//             title="One partner. The whole product stack."
//             description="You bring the problem. I help figure out the right technical solution — from interface and APIs to databases, integrations and deployment."
//           />

//           <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
//             {services.map((service, index) => (
//               <Reveal
//                 key={service.number}
//                 delay={index * 0.04}
//               >
//                 <TiltCard className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:border-violet-400/20 hover:bg-white/[0.04] sm:p-7">
//                   <div className="absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 transition-transform duration-500 group-hover:scale-x-100" />

//                   <div className="flex items-start justify-between">
//                     <span className="text-xs text-zinc-700">
//                       {service.number}
//                     </span>

//                     <span className="text-zinc-700 transition group-hover:text-violet-300">
//                       ↗
//                     </span>
//                   </div>

//                   <h3 className="mt-14 text-xl font-semibold tracking-tight">
//                     {service.title}
//                   </h3>

//                   <p className="mt-4 min-h-[72px] text-sm leading-6 text-zinc-500">
//                     {service.description}
//                   </p>

//                   <div className="mt-7 flex flex-wrap gap-2">
//                     {service.tags.map((tag) => (
//                       <span
//                         key={tag}
//                         className="rounded-full border border-white/[0.07] px-2.5 py-1 text-[11px] text-zinc-500 transition group-hover:border-violet-400/20 group-hover:text-zinc-400"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </TiltCard>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* WORK */}
//       <section
//         id="work"
//         className="relative z-10 border-y border-white/[0.06] bg-white/[0.012]"
//       >
//         <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
//           <SectionHeading
//             number="03"
//             title="Selected work."
//             description="A set of illustrative projects showing the type of products, platforms and technical problems I can help solve. Replace the demo content, metrics and technologies with your real work later."
//           />

//           <div className="mt-14 space-y-5">
//             {projects.map((project, index) => (
//               <Reveal
//                 key={project.number}
//                 delay={index * 0.06}
//               >
//                 <article className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#08080c] transition duration-500 hover:border-white/[0.14]">
//                   <div
//                     className={`absolute right-0 top-0 h-80 w-80 rounded-full bg-gradient-to-br ${project.gradient} blur-3xl transition duration-700 group-hover:scale-125`}
//                   />

//                   <div className="relative grid gap-10 p-6 sm:p-8 lg:grid-cols-[1.1fr_.9fr] lg:p-10">
//                     <div>
//                       <div className="flex items-center gap-4">
//                         <span className="text-xs text-violet-400">
//                           {project.number}
//                         </span>

//                         <span className="rounded-full border border-white/[0.08] px-3 py-1 text-[10px] uppercase tracking-[.16em] text-zinc-500">
//                           {project.category}
//                         </span>

//                         <span className="ml-auto text-xs text-zinc-700">
//                           SAMPLE PROJECT
//                         </span>
//                       </div>

//                       <h3 className="mt-8 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">
//                         {project.title}
//                       </h3>

//                       <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
//                         {project.description}
//                       </p>

//                       <div className="mt-8 flex flex-wrap gap-2">
//                         {project.technologies.map((technology) => (
//                           <span
//                             key={technology}
//                             className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[11px] text-zinc-500"
//                           >
//                             {technology}
//                           </span>
//                         ))}
//                       </div>

//                       <div className="mt-9 flex items-center gap-5">
//                         <button
//                           type="button"
//                           onClick={openContactForm}
//                           className="group/link text-sm font-medium text-white"
//                         >
//                           Discuss a similar project{" "}
//                           <Arrow />
//                         </button>
//                       </div>
//                     </div>

//                     <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
//                       <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
//                         <p className="text-[10px] uppercase tracking-[.18em] text-zinc-600">
//                           Problem
//                         </p>

//                         <p className="mt-3 text-sm leading-6 text-zinc-400">
//                           {project.problem}
//                         </p>
//                       </div>

//                       <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
//                         <p className="text-[10px] uppercase tracking-[.18em] text-zinc-600">
//                           Solution
//                         </p>

//                         <p className="mt-3 text-sm leading-6 text-zinc-400">
//                           {project.solution}
//                         </p>
//                       </div>

//                       <div className="rounded-2xl border border-violet-400/[0.12] bg-violet-400/[0.035] p-5">
//                         <p className="text-[10px] uppercase tracking-[.18em] text-violet-300/60">
//                           {project.result}
//                         </p>

//                         <div className="mt-2 flex items-end gap-3">
//                           <span className="text-3xl font-semibold tracking-tight text-white">
//                             {project.metric}
//                           </span>

//                           <span className="pb-1 text-xs text-zinc-500">
//                             {project.metricLabel}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               </Reveal>
//             ))}
//           </div>

//           <Reveal className="mt-8">
//             <div className="rounded-2xl border border-dashed border-white/[0.08] px-6 py-5 text-center">
//               <p className="text-xs text-zinc-600">
//                 Demo projects for presentation only — replace the names, descriptions, metrics and technologies with your real projects and case studies.
//               </p>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* WHY ME */}
//       <section className="relative z-10">
//         <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
//           <div className="grid gap-14 lg:grid-cols-[.65fr_1.35fr]">
//             <SectionHeading
//               number="04"
//               title="Less handoff. More ownership."
//             />

//             <div className="grid gap-3 sm:grid-cols-2">
//               {whyMe.map((item, index) => (
//                 <Reveal
//                   key={item.title}
//                   delay={index * 0.05}
//                 >
//                   <TiltCard className="group h-full rounded-2xl border border-white/[0.08] bg-black/20 p-6 transition hover:border-white/[0.14] sm:p-7">
//                     <div className="text-xs text-zinc-700">
//                       0{index + 1}
//                     </div>

//                     <h3 className="mt-9 text-lg font-semibold">
//                       {item.title}
//                     </h3>

//                     <p className="mt-4 text-sm leading-6 text-zinc-500">
//                       {item.description}
//                     </p>

//                     <div className="mt-7 h-px w-8 bg-white/10 transition-all duration-500 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400" />
//                   </TiltCard>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CAPABILITIES */}
//       <section className="relative z-10 border-t border-white/[0.06]">
//         <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
//           <SectionHeading
//             number="05"
//             title="What I can help you build."
//             description="Different problems need different solutions. I choose the architecture and technology based on the users, requirements, timeline and goals."
//           />

//           <div className="mt-14 grid gap-4 md:grid-cols-3">
//             {capabilities.map((item, index) => (
//               <Reveal
//                 key={item.number}
//                 delay={index * 0.06}
//               >
//                 <TiltCard className="group relative h-full min-h-[330px] overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 sm:p-8">
//                   <div
//                     className={`absolute -right-20 -top-20 h-52 w-52 rounded-full blur-3xl transition duration-500 ${
//                       item.tone === "violet"
//                         ? "bg-violet-500/10 group-hover:bg-violet-500/20"
//                         : item.tone === "cyan"
//                           ? "bg-cyan-500/10 group-hover:bg-cyan-500/20"
//                           : "bg-fuchsia-500/10 group-hover:bg-fuchsia-500/20"
//                     }`}
//                   />

//                   <div className="relative flex h-full flex-col">
//                     <div className="flex items-center justify-between">
//                       <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xs text-zinc-400">
//                         {item.number}
//                       </span>

//                       <span className="text-xs text-zinc-700">
//                         CAPABILITY
//                       </span>
//                     </div>

//                     <h3 className="mt-auto pt-20 text-2xl font-semibold tracking-tight">
//                       {item.title}
//                     </h3>

//                     <p className="mt-4 text-sm leading-6 text-zinc-500">
//                       {item.description}
//                     </p>

//                     <button
//                       type="button"
//                       onClick={openContactForm}
//                       className="mt-7 text-left text-xs font-medium text-zinc-600 transition group-hover:text-white"
//                     >
//                       Discuss your project <Arrow />
//                     </button>
//                   </div>
//                 </TiltCard>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* TECHNOLOGIES */}
//       <section className="relative z-10 border-y border-white/[0.06] bg-white/[0.012]">
//         <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
//           <div className="grid gap-10 lg:grid-cols-[.6fr_1.4fr] lg:items-center">
//             <Reveal>
//               <p className="section-label">
//                 06 / TECHNOLOGIES
//               </p>

//               <h2 className="mt-5 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">
//                 The tools behind the products.
//               </h2>

//               <p className="mt-4 max-w-md text-sm leading-6 text-zinc-500">
//                 A practical stack selected around the product rather than
//                 forcing every project into the same technology.
//               </p>
//             </Reveal>

//             <Reveal>
//               <div className="flex flex-wrap gap-2">
//                 {technologies.map((technology) => (
//                   <span
//                     key={technology}
//                     className="rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-2.5 text-sm text-zinc-400 transition hover:border-violet-400/20 hover:bg-violet-400/[0.04] hover:text-white"
//                   >
//                     {technology}
//                   </span>
//                 ))}
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* PROCESS */}
//       <section
//         id="process"
//         className="relative z-10"
//       >
//         <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
//           <div className="grid gap-14 lg:grid-cols-[.65fr_1.35fr]">
//             <SectionHeading
//               number="07"
//               title="Simple process. Serious execution."
//             />

//             <div className="relative">
//               <div className="absolute bottom-0 left-[15px] top-0 w-px bg-gradient-to-b from-violet-400/60 via-white/10 to-transparent" />

//               <div className="space-y-2">
//                 {process.map((item, index) => (
//                   <Reveal
//                     key={item.number}
//                     delay={index * 0.06}
//                   >
//                     <div className="group relative py-5 pl-12">
//                       <span className="absolute left-[10px] top-8 h-2.5 w-2.5 rounded-full border border-violet-300/70 bg-[#050507] shadow-[0_0_16px_rgba(139,92,246,.5)]" />

//                       <div className="flex items-baseline gap-4">
//                         <span className="text-xs text-violet-400">
//                           {item.number}
//                         </span>

//                         <h3 className="text-xl font-semibold">
//                           {item.title}
//                         </h3>
//                       </div>

//                       <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">
//                         {item.description}
//                       </p>
//                     </div>
//                   </Reveal>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section
//         id="contact"
//         className="relative z-10"
//       >
//         <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-32">
//           <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.035] px-6 py-16 text-center shadow-2xl shadow-black/30 sm:px-12 sm:py-20">
//             <div className="absolute left-1/2 top-[-180px] h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

//             <motion.div
//               animate={{ x: [-120, 120, -120] }}
//               transition={{
//                 duration: 11,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="absolute bottom-[-140px] left-1/2 h-52 w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/[0.06] blur-[100px]"
//             />

//             <Reveal className="relative">
//               <p className="section-label">
//                 08 / CONTACT
//               </p>

//               <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-[-.04em] sm:text-6xl">
//                 Have a problem worth solving?
//                 <span className="block bg-gradient-to-r from-zinc-500 via-white to-zinc-500 bg-clip-text text-transparent">
//                   Let&apos;s build the solution.
//                 </span>
//               </h2>

//               <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">
//                 Tell me what you&apos;re trying to build, the problem
//                 you&apos;re solving, or even just the idea you have.
//               </p>

//               <motion.button
//                 type="button"
//                 onClick={openContactForm}
//                 whileHover={{
//                   y: -3,
//                   boxShadow:
//                     "0 20px 60px rgba(139,92,246,.22)",
//                 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="mt-9 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-black"
//               >
//                 Start a conversation <Arrow />
//               </motion.button>

//               <p className="mt-5 text-xs text-zinc-700">
//                 Usually replies within 24–48 hours.
//               </p>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="relative z-10 border-t border-white/[0.07]">
//         <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
//           <div>
//             © {new Date().getFullYear()} Praveen Yadav. All rights reserved.
//           </div>

//           <div className="flex gap-6">
//             <a
//               href="https://www.linkedin.com/in/devendra-kumar-yadav-a1753a25/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="transition hover:text-white"
//             >
//               LinkedIn
//             </a>

//             <a
//               href="https://github.com/praviny7278"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="transition hover:text-white"
//             >
//               GitHub
//             </a>

//             <button
//               type="button"
//               onClick={openContactForm}
//               className="transition hover:text-white"
//             >
//               Contact
//             </button>
//           </div>
//         </div>
//       </footer>

//       {/* CONTACT MODAL */}
//       {showContactForm && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-md"
//           onClick={closeContactForm}
//         >
//           <motion.div
//             initial={{
//               opacity: 0,
//               scale: 0.95,
//               y: 18,
//             }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//               y: 0,
//             }}
//             transition={{
//               type: "spring",
//               stiffness: 250,
//               damping: 24,
//             }}
//             role="dialog"
//             aria-modal="true"
//             aria-labelledby="contact-form-title"
//             onClick={(event) => event.stopPropagation()}
//             className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0b0b0f] p-6 shadow-2xl sm:p-8"
//           >
//             <button
//               type="button"
//               onClick={closeContactForm}
//               className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-lg text-zinc-500 hover:bg-white/10 hover:text-white"
//               aria-label="Close contact form"
//             >
//               ×
//             </button>

//             {!submitted ? (
//               <>
//                 <p className="text-xs font-medium uppercase tracking-[.2em] text-violet-400">
//                   Start a conversation
//                 </p>

//                 <h2
//                   id="contact-form-title"
//                   className="mt-3 pr-10 text-3xl font-semibold tracking-tight"
//                 >
//                   Let&apos;s build something useful.
//                 </h2>

//                 <p className="mt-3 text-sm leading-6 text-zinc-500">
//                   Tell me a little about your idea, project or technical
//                   challenge.
//                 </p>

//                 <form
//                   onSubmit={handleFormSubmit}
//                   className="mt-8 space-y-5"
//                 >
//                   <div>
//                     <label
//                       htmlFor="name"
//                       className="mb-2 block text-sm font-medium text-zinc-300"
//                     >
//                       Name
//                     </label>

//                     <input
//                       id="name"
//                       name="name"
//                       type="text"
//                       required
//                       autoComplete="name"
//                       value={formData.name}
//                       onChange={handleFormChange}
//                       placeholder="Your name"
//                       className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-700 focus:border-violet-400/40 focus:bg-white/[0.05]"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="mb-2 block text-sm font-medium text-zinc-300"
//                     >
//                       Email
//                     </label>

//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       required
//                       autoComplete="email"
//                       value={formData.email}
//                       onChange={handleFormChange}
//                       placeholder="you@example.com"
//                       className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-700 focus:border-violet-400/40 focus:bg-white/[0.05]"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="project"
//                       className="mb-2 block text-sm font-medium text-zinc-300"
//                     >
//                       What are you building?
//                     </label>

//                     <input
//                       id="project"
//                       name="project"
//                       type="text"
//                       value={formData.project}
//                       onChange={handleFormChange}
//                       placeholder="Website, mobile app, SaaS, AI product..."
//                       className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-700 focus:border-violet-400/40 focus:bg-white/[0.05]"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="message"
//                       className="mb-2 block text-sm font-medium text-zinc-300"
//                     >
//                       Message
//                     </label>

//                     <textarea
//                       id="message"
//                       name="message"
//                       required
//                       rows={5}
//                       value={formData.message}
//                       onChange={handleFormChange}
//                       placeholder="Tell me a little about your project..."
//                       className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-700 focus:border-violet-400/40 focus:bg-white/[0.05]"
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black hover:bg-violet-100"
//                   >
//                     Open Email →
//                   </button>

//                   <p className="text-center text-xs text-zinc-700">
//                     Your default email application will open with the
//                     message prepared for you.
//                   </p>
//                 </form>
//               </>
//             ) : (
//               <div className="py-12 text-center">
//                 <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] text-xl text-emerald-300">
//                   ✓
//                 </div>

//                 <h2 className="mt-6 text-2xl font-semibold">
//                   Email prepared.
//                 </h2>

//                 <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-zinc-500">
//                   Your email application should have opened with the
//                   project details. If it didn&apos;t, you can email me
//                   directly at{" "}
//                   <span className="text-zinc-300">
//                     praviny408@gmail.com
//                   </span>
//                   .
//                 </p>

//                 <button
//                   type="button"
//                   onClick={closeContactForm}
//                   className="mt-7 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black"
//                 >
//                   Done
//                 </button>
//               </div>
//             )}
//           </motion.div>
//         </motion.div>
//       )}

//       <style jsx global>{`
//         html {
//           scroll-behavior: smooth;
//         }

//         body {
//           background: #050507;
//         }

//         * {
//           scrollbar-width: thin;
//           scrollbar-color: #29292f #050507;
//         }

//         ::selection {
//           background: rgba(139, 92, 246, 0.32);
//           color: #fff;
//         }

//         .nav-link {
//           color: #71717a;
//           font-size: 0.75rem;
//           font-weight: 500;
//           transition: color 0.2s ease;
//         }

//         .nav-link:hover {
//           color: #fff;
//         }

//         .section-label {
//           font-size: 0.65rem;
//           font-weight: 600;
//           letter-spacing: 0.2em;
//           color: #8b5cf6;
//         }

//         .section-title {
//           font-size: clamp(2.35rem, 5vw, 4.8rem);
//           font-weight: 600;
//           line-height: 1.02;
//           letter-spacing: -0.055em;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           html {
//             scroll-behavior: auto;
//           }

//           *,
//           *::before,
//           *::after {
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//             transition-duration: 0.01ms !important;
//           }
//         }
//       `}</style>
//     </main>
//   );
// }



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
    title: "Web & SaaS Development",
    description:
      "Production-ready websites, SaaS platforms, dashboards and customer portals built around your business goals.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    number: "02",
    title: "Mobile Applications",
    description:
      "Cross-platform mobile products with authentication, APIs, notifications and the integrations your users need.",
    tags: ["React Native", "APIs", "Mobile"],
  },
  {
    number: "03",
    title: "Backend & APIs",
    description:
      "Secure, scalable backend systems and REST APIs designed to support reliable web and mobile products.",
    tags: ["Spring Boot", "Node.js", "REST"],
  },
  {
    number: "04",
    title: "Business Software",
    description:
      "Custom management systems, booking platforms, internal tools and dashboards that replace manual workflows.",
    tags: ["Architecture", "Database", "Cloud"],
  },
  {
    number: "05",
    title: "AI & Automation",
    description:
      "Practical AI features, intelligent workflows and API integrations that reduce repetitive work.",
    tags: ["AI APIs", "Automation", "Integrations"],
  },
  {
    number: "06",
    title: "MVP & Product Development",
    description:
      "Turn an idea into a working MVP, validate it with real users and evolve it into production software.",
    tags: ["MVP", "Launch", "Scale"],
  },
];

const projects = [
  {
    number: "01",
    category: "Business Management",
    status: "Replace with real project",
    liveUrl: "#",
    githubUrl: "#",
    title: "FlowDesk",
    description:
      "A modern operations dashboard for small businesses to manage customers, bookings, staff, payments and daily tasks from one place.",
    problem:
      "Business operations were spread across spreadsheets, WhatsApp messages and manual follow-ups.",
    solution:
      "A role-based web application with customer management, booking workflows, dashboards, reminders and activity tracking.",
    result: "Illustrative result",
    metric: "60%",
    metricLabel: "less manual admin work",
    technologies: ["Next.js", "TypeScript", "Spring Boot", "PostgreSQL"],
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
  },
  {
    number: "02",
    category: "Education Platform",
    status: "Replace with real project",
    liveUrl: "#",
    githubUrl: "#",
    title: "LearnSphere",
    description:
      "A responsive learning platform for schools and coaching institutes with courses, assignments, attendance, notices and student progress.",
    problem:
      "Students, parents and teachers had to use different tools to manage academic information and communication.",
    solution:
      "A centralized portal with separate dashboards for students, parents, teachers and administrators.",
    result: "Illustrative result",
    metric: "40%",
    metricLabel: "faster information access",
    technologies: ["React", "Node.js", "REST API", "MongoDB"],
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
  },
  {
    number: "03",
    category: "Healthcare Software",
    status: "Replace with real project",
    liveUrl: "#",
    githubUrl: "#",
    title: "CareConnect",
    description:
      "A sample appointment and patient-management platform designed to simplify scheduling, records and communication for clinics.",
    problem:
      "Appointments and patient follow-ups were handled through calls, paper records and disconnected spreadsheets.",
    solution:
      "A secure dashboard with appointment scheduling, patient profiles, reminders and operational reporting.",
    result: "Illustrative result",
    metric: "30%",
    metricLabel: "fewer scheduling gaps",
    technologies: ["Next.js", "Spring Boot", "PostgreSQL", "REST"],
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    number: "04",
    category: "Customer Portal",
    status: "Replace with real project",
    liveUrl: "#",
    githubUrl: "#",
    title: "ClientHub",
    description:
      "A customer portal for service businesses to share documents, track requests, communicate with clients and manage project updates.",
    problem:
      "Customers had limited visibility into project progress and teams spent too much time answering repetitive status questions.",
    solution:
      "A responsive portal with authentication, project timelines, document management, notifications and request tracking.",
    result: "Illustrative result",
    metric: "35%",
    metricLabel: "faster client communication",
    technologies: ["React", "Node.js", "REST API", "Cloud"],
    gradient: "from-sky-500/20 via-blue-500/10 to-transparent",
  },
  {
    number: "05",
    category: "E-commerce",
    status: "Replace with real project",
    liveUrl: "#",
    githubUrl: "#",
    title: "ShopPilot",
    description:
      "A demo commerce platform with product management, customer accounts, order workflows, search and an admin dashboard.",
    problem:
      "The business needed a simple online storefront while keeping inventory and order management in one system.",
    solution:
      "A responsive storefront connected to an administrative dashboard for products, customers and orders.",
    result: "Illustrative result",
    metric: "2x",
    metricLabel: "simpler order workflow",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
  {
    number: "06",
    category: "AI & Automation",
    status: "Replace with real project",
    liveUrl: "#",
    githubUrl: "#",
    title: "SmartOps",
    description:
      "An AI-assisted workflow system that connects business tools and automates repetitive data processing, summaries and reporting.",
    problem:
      "Teams were spending hours every week copying information between systems and preparing recurring reports.",
    solution:
      "API integrations, scheduled workflows and AI-assisted processing that automatically organize incoming information.",
    result: "Illustrative result",
    metric: "10+ hrs",
    metricLabel: "saved per week",
    technologies: ["AI APIs", "Node.js", "REST", "Automation"],
    gradient: "from-fuchsia-500/20 via-pink-500/10 to-transparent",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We clarify the problem, users, business goals, requirements and constraints before writing unnecessary code.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "I turn the requirements into a practical architecture, feature plan, milestones and development roadmap.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Development happens incrementally with regular progress, feedback and testing instead of one giant final delivery.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "The product is tested, deployed and prepared for real users, with room for iteration and future improvements.",
  },
];

const whyMe = [
  {
    title: "End-to-end ownership",
    description:
      "I can work across frontend, backend, APIs, databases, mobile and deployment instead of creating unnecessary handoffs.",
  },
  {
    title: "Business-first thinking",
    description:
      "Technology is a means to an outcome. I focus on solving the actual business problem before choosing the implementation.",
  },
  {
    title: "Practical architecture",
    description:
      "I prefer clean, understandable systems that can grow with the product without introducing unnecessary complexity.",
  },
  {
    title: "Clear communication",
    description:
      "You get straightforward communication, visible progress and clear explanations without excessive technical jargon.",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Business Platforms",
    description:
      "Dashboards, booking systems, customer portals, management software and internal tools.",
    tone: "violet",
  },
  {
    number: "02",
    title: "Digital Products",
    description:
      "SaaS platforms, MVPs, e-commerce products and customer-facing web and mobile applications.",
    tone: "cyan",
  },
  {
    number: "03",
    title: "Automation & AI",
    description:
      "AI-powered features, integrations and automated workflows designed to save time and improve efficiency.",
    tone: "fuchsia",
  },
];

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Spring Boot",
  "Java",
  "REST APIs",
  "PostgreSQL",
  "MongoDB",
  "React Native",
  "AI APIs",
];

const skillGroups = [
  {
    title: "Frontend",
    description: "Interfaces that are fast, responsive and easy to use.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "APIs and services designed around reliability and maintainability.",
    skills: ["Node.js", "Spring Boot", "Java", "REST APIs", "Authentication"],
  },
  {
    title: "Data & Cloud",
    description: "Practical data models, integrations and deployment foundations.",
    skills: ["PostgreSQL", "MongoDB", "SQL", "Cloud", "Git"],
  },
  {
    title: "Mobile & AI",
    description: "Cross-platform experiences and useful AI-powered workflows.",
    skills: ["React Native", "AI APIs", "Automation", "Integrations"],
  },
];

const experience = [
  {
    period: "2022 — Present",
    role: "Full-Stack Software Engineer",
    company: "Your Company / Freelance",
    description:
      "Building and maintaining web, mobile and backend systems across the product lifecycle — from requirements and architecture to deployment and optimization.",
    stack: ["React", "Next.js", "Spring Boot", "Node.js"],
  },
  {
    period: "Earlier experience",
    role: "Software Development",
    company: "Add your previous company",
    description:
      "Replace this entry with your real role, responsibilities and the outcomes you delivered. Keep the description focused on impact rather than a task list.",
    stack: ["JavaScript", "Java", "REST APIs"],
  },
];

function CursorGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 80, damping: 28 });
  const springY = useSpring(y, { stiffness: 80, damping: 28 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      style={{ left: springX, top: springY }}
      className="pointer-events-none fixed z-40 hidden h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.045] blur-3xl md:block"
    />
  );
}

function AmbientBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 35, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 35, damping: 22 });

  const glowX = useTransform(springX, [-0.5, 0.5], ["-6%", "6%"]);
  const glowY = useTransform(springY, [-0.5, 0.5], ["-4%", "4%"]);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      mouseX.set(event.clientX / window.innerWidth - 0.5);
      mouseY.set(event.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  const particles = [
    [8, 20, 8, 14],
    [18, 72, 10, -18],
    [31, 34, 7, 15],
    [44, 12, 9, -14],
    [57, 78, 8, 18],
    [69, 28, 11, -16],
    [81, 62, 7, 14],
    [92, 18, 10, -12],
    [14, 90, 9, 18],
    [37, 67, 12, -14],
    [63, 46, 9, 16],
    [87, 84, 11, -18],
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#050507]" />

      <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.55)_1px,transparent_1px)] [background-size:72px_72px]" />

      <motion.div
        style={{ x: glowX, y: glowY }}
        className="absolute left-1/2 top-[-260px] h-[650px] w-[760px] -translate-x-1/2 rounded-full bg-violet-600/[0.10] blur-[150px]"
      />

      <div className="absolute right-[-240px] top-[38%] h-[520px] w-[520px] rounded-full bg-cyan-500/[0.05] blur-[150px]" />

      <div className="absolute bottom-[-300px] left-[-200px] h-[500px] w-[500px] rounded-full bg-fuchsia-500/[0.04] blur-[150px]" />

      <motion.div
        style={{
          x: useTransform(springX, [-0.5, 0.5], [-18, 18]),
          y: useTransform(springY, [-0.5, 0.5], [-12, 12]),
        }}
        className="absolute left-1/2 top-[10%] hidden h-[560px] w-[560px] -translate-x-1/2 rounded-full border border-white/[0.035] lg:block"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[11%] rounded-full border border-violet-300/[0.07] border-dashed"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[25%] rounded-full border border-cyan-300/[0.06]"
        />

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl"
        />
      </motion.div>

      {particles.map(([left, top, duration, x], index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.35, 0],
            y: [0, -70],
            x: [0, x],
          }}
          transition={{
            duration,
            repeat: Infinity,
            delay: index * 0.7,
            ease: "easeInOut",
          }}
          className="absolute h-1 w-1 rounded-full bg-violet-300/60"
          style={{
            left: `${left}%`,
            top: `${top}%`,
          }}
        />
      ))}
    </div>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.7,
        delay,
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
    stiffness: 180,
    damping: 22,
  });

  const springY = useSpring(rotateY, {
    stiffness: 180,
    damping: 22,
  });

  const move = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    rotateY.set(
      ((event.clientX - rect.left) / rect.width - 0.5) * 5
    );

    rotateX.set(
      -((event.clientY - rect.top) / rect.height - 0.5) * 5
    );
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ y: -4 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="inline-block transition-transform duration-300 group-hover:translate-x-1"
    >
      ↗
    </span>
  );
}

function SectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="max-w-3xl">
      <p className="section-label">
        {number} / {title.toUpperCase()}
      </p>

      <h2 className="section-title mt-5">{title}</h2>

      {description && (
        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </Reveal>
  );
}

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const openContactForm = () => {
    setMobileOpen(false);
    setSubmitted(false);
    setShowContactForm(true);
  };

  const closeContactForm = () => {
    setShowContactForm(false);
    setSubmitted(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && showContactForm) {
        closeContactForm();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showContactForm]);

  useEffect(() => {
    const sections = navItems.map(([, href]) => document.querySelector(href));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleFormChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

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

    setSubmitted(true);
  };

  const navItems = [
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Services", "#services"],
    ["Work", "#work"],
    ["Skills", "#skills"],
    ["Process", "#process"],
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#050507] text-white">
      <CursorGlow />
      <AmbientBackground />

      {/* NAVIGATION */}
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
        <nav className="mx-auto max-w-6xl rounded-2xl border border-white/[0.09] bg-black/45 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:px-5">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="group flex items-center gap-2 text-[15px] font-semibold tracking-tight"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-sm">
                P
              </span>

              <span>
                Praveen<span className="text-violet-400">.</span>
              </span>
            </a>

            <div className="hidden items-center gap-7 md:flex">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className={`nav-link ${activeSection === href.slice(1) ? "nav-link-active" : ""}`}
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <motion.button
                type="button"
                onClick={openContactForm}
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.03 }}
                className="hidden rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-black sm:block"
              >
                Start a Conversation
              </motion.button>

              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] md:hidden"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileOpen}
              >
                <span className="text-lg">
                  {mobileOpen ? "×" : "☰"}
                </span>
              </button>
            </div>
          </div>

          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-3 border-t border-white/[0.08] pt-3 md:hidden"
            >
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-3 py-3 text-sm text-zinc-400 hover:bg-white/[0.04] hover:text-white"
                >
                  {label}
                </a>
              ))}

              <button
                type="button"
                onClick={openContactForm}
                className="mt-1 w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black"
              >
                Let&apos;s Talk
              </button>
            </motion.div>
          )}
        </nav>
      </header>

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-6 sm:pt-44 lg:px-8 lg:pb-28 lg:pt-48">
        <div className="grid items-end gap-14 lg:grid-cols-[1.3fr_.7fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-3.5 py-2 text-xs font-medium text-emerald-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              Available for freelance projects
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="mb-5 text-xs font-medium uppercase tracking-[.24em] text-zinc-600"
            >
              Full-stack software engineer · 4+ years
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-5xl text-[3.25rem] font-semibold leading-[.94] tracking-[-.065em] sm:text-6xl md:text-7xl lg:text-[6.4rem]"
            >
              I build software that solves
              <span className="mt-2 block bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                real business problems.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8"
            >
              I&apos;m Praveen Yadav, a full-stack software engineer
              helping businesses turn ideas, workflows and technical
              challenges into reliable web, mobile and AI-powered
              products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <motion.a
                href="#work"
                whileHover={{
                  y: -2,
                  boxShadow:
                    "0 18px 50px rgba(139,92,246,.20)",
                }}
                className="group rounded-xl bg-white px-6 py-3.5 text-center text-sm font-semibold text-black"
              >
                View selected work <Arrow />
              </motion.a>

              <motion.button
                type="button"
                onClick={openContactForm}
                whileHover={{ y: -2 }}
                className="rounded-xl border border-white/10 bg-white/[0.035] px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/[0.06]"
              >
                Start a project
              </motion.button>
            </motion.div>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-zinc-500">
              <a href="https://github.com/praviny7278" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 hover:text-white">
                GitHub <Arrow />
              </a>
              <a href="https://www.linkedin.com/in/devendra-kumar-yadav-a1753a25/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 hover:text-white">
                LinkedIn <Arrow />
              </a>
              <span className="h-3 w-px bg-white/10" />
              <span>Open to freelance & product work</span>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-5 border-t border-white/[0.07] pt-6">
              <div>
                <div className="text-xl font-semibold tracking-tight sm:text-2xl">
                  4+
                </div>
                <p className="mt-1 text-[10px] uppercase tracking-[.12em] text-zinc-600">
                  Years experience
                </p>
              </div>

              <div>
                <div className="text-xl font-semibold tracking-tight sm:text-2xl">
                  Full-stack
                </div>
                <p className="mt-1 text-[10px] uppercase tracking-[.12em] text-zinc-600">
                  Product development
                </p>
              </div>

              <div>
                <div className="text-xl font-semibold tracking-tight sm:text-2xl">
                  E2E
                </div>
                <p className="mt-1 text-[10px] uppercase tracking-[.12em] text-zinc-600">
                  Ownership
                </p>
              </div>
            </div>
          </div>

          <Reveal className="relative lg:pb-2">
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.025] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-6">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[.22em] text-zinc-600">
                  <span>Core stack</span>
                  <span>BUILD / SHIP / IMPROVE</span>
                </div>

                <div className="mt-7 space-y-3">
                  {[
                    "React / Next.js",
                    "TypeScript / Node.js",
                    "Spring Boot / REST",
                    "React Native",
                    "AI / Automation",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.65 + index * 0.08,
                      }}
                      className="flex items-center justify-between rounded-xl border border-white/[0.07] bg-black/20 px-4 py-3.5"
                    >
                      <span className="text-sm text-zinc-300">
                        {item}
                      </span>

                      <span className="text-xs text-zinc-700">
                        0{index + 1}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2 text-xs text-zinc-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  Built for real users, not just demos.
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-20 sm:mt-24">
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3 border-y border-white/[0.07] py-5 text-xs font-medium text-zinc-600 sm:gap-x-10">
            <span className="text-zinc-500">
              TECHNOLOGIES
            </span>

            {technologies.slice(0, 8).map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative z-10 border-t border-white/[0.06]"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-6 lg:grid-cols-[.75fr_1.25fr] lg:px-8 lg:py-32">
          <SectionHeading
            number="01"
            title="Engineering that understands the bigger picture."
          />

          <Reveal>
            <div className="space-y-6 text-base leading-8 text-zinc-400 sm:text-lg">
              <p>
                I&apos;m a full-stack software engineer who enjoys turning
                complex requirements into simple, reliable software.
              </p>

              <p>
                With 4+ years of experience across frontend, backend,
                mobile and API development, I can contribute across the
                entire product lifecycle — from architecture and
                development to deployment and optimization.
              </p>

              <p>
                I care about clean code, thoughtful user experiences and
                building systems that are actually useful to the people
                using them.
              </p>

              <div className="grid grid-cols-2 gap-6 border-t border-white/[0.07] pt-7 sm:grid-cols-3 sm:gap-8">
                <div>
                  <div className="text-3xl font-semibold tracking-tight">
                    4+
                  </div>
                  <div className="mt-1 text-xs text-zinc-600">
                    Years experience
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-semibold tracking-tight">
                    Full-Stack
                  </div>
                  <div className="mt-1 text-xs text-zinc-600">
                    Development
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-semibold tracking-tight">
                    E2E
                  </div>
                  <div className="mt-1 text-xs text-zinc-600">
                    Product ownership
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="relative z-10 border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[.65fr_1.35fr]">
            <SectionHeading
              number="02"
              title="Experience that ships products."
              description="A concise timeline for the roles, companies and outcomes you want clients or recruiters to see."
            />

            <div className="space-y-3">
              {experience.map((item, index) => (
                <Reveal key={`${item.role}-${index}`} delay={index * 0.06}>
                  <article className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition hover:border-white/[0.14] hover:bg-white/[0.035] sm:p-7">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[.16em] text-violet-400">{item.period}</p>
                        <h3 className="mt-3 text-xl font-semibold tracking-tight">{item.role}</h3>
                        <p className="mt-1 text-sm text-zinc-500">{item.company}</p>
                      </div>
                      <span className="text-xs text-zinc-700">0{index + 1}</span>
                    </div>
                    <p className="mt-5 max-w-2xl text-sm leading-6 text-zinc-500">{item.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.stack.map((skill) => (
                        <span key={skill} className="rounded-full border border-white/[0.07] px-2.5 py-1 text-[11px] text-zinc-500">{skill}</span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative z-10">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
          <SectionHeading
            number="03"
            title="One partner. The whole product stack."
            description="You bring the problem. I help figure out the right technical solution — from interface and APIs to databases, integrations and deployment."
          />

          <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal
                key={service.number}
                delay={index * 0.04}
              >
                <TiltCard className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:border-violet-400/20 hover:bg-white/[0.04] sm:p-7">
                  <div className="absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="flex items-start justify-between">
                    <span className="text-xs text-zinc-700">
                      {service.number}
                    </span>

                    <span className="text-zinc-700 transition group-hover:text-violet-300">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-14 text-xl font-semibold tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-4 min-h-[72px] text-sm leading-6 text-zinc-500">
                    {service.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.07] px-2.5 py-1 text-[11px] text-zinc-500 transition group-hover:border-violet-400/20 group-hover:text-zinc-400"
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

      {/* WORK */}
      <section
        id="work"
        className="relative z-10 border-y border-white/[0.06] bg-white/[0.012]"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
          <SectionHeading
            number="04"
            title="Selected work."
            description="These cards are ready for your real projects. Replace the demo data with your actual work, screenshots, links, metrics and case-study details."
          />

          <div className="mt-14 space-y-5">
            {projects.map((project, index) => (
              <Reveal
                key={project.number}
                delay={index * 0.06}
              >
                <article className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#08080c] transition duration-500 hover:border-white/[0.14]">
                  <div
                    className={`absolute right-0 top-0 h-80 w-80 rounded-full bg-gradient-to-br ${project.gradient} blur-3xl transition duration-700 group-hover:scale-125`}
                  />

                  <div className="relative grid gap-10 p-6 sm:p-8 lg:grid-cols-[1.1fr_.9fr] lg:p-10">
                    <div>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-violet-400">
                          {project.number}
                        </span>

                        <span className="rounded-full border border-white/[0.08] px-3 py-1 text-[10px] uppercase tracking-[.16em] text-zinc-500">
                          {project.category}
                        </span>

                        <span className="ml-auto text-xs text-zinc-700">
                          SAMPLE PROJECT
                        </span>
                      </div>

                      <h3 className="mt-8 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">
                        {project.title}
                      </h3>

                      <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                        {project.description}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[11px] text-zinc-500"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                      <div className="mt-7 flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-black transition hover:bg-violet-100"
                        >
                          View case study ↗
                        </button>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/10 px-4 py-2.5 text-xs font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.04] hover:text-white">
                          Live demo ↗
                        </a>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/10 px-4 py-2.5 text-xs font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.04] hover:text-white">
                          GitHub ↗
                        </a>
                      </div>

                      <div className="mt-5 flex items-center gap-5">
                        <button
                          type="button"
                          onClick={openContactForm}
                          className="group/link text-sm font-medium text-white"
                        >
                          Discuss a similar project{" "}
                          <Arrow />
                        </button>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                      <div className="relative min-h-[180px] overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent p-5 sm:col-span-2 lg:col-span-1">
                        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:28px_28px]" />
                        <div className="relative flex h-full min-h-[140px] flex-col justify-between">
                          <span className="text-[10px] uppercase tracking-[.18em] text-zinc-600">Project preview</span>
                          <div>
                            <p className="text-sm font-medium text-zinc-300">Replace this panel with a real screenshot</p>
                            <p className="mt-1 text-xs text-zinc-600">Use an image of the dashboard, app or product UI.</p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                        <p className="text-[10px] uppercase tracking-[.18em] text-zinc-600">
                          Problem
                        </p>

                        <p className="mt-3 text-sm leading-6 text-zinc-400">
                          {project.problem}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                        <p className="text-[10px] uppercase tracking-[.18em] text-zinc-600">
                          Solution
                        </p>

                        <p className="mt-3 text-sm leading-6 text-zinc-400">
                          {project.solution}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-violet-400/[0.12] bg-violet-400/[0.035] p-5">
                        <p className="text-[10px] uppercase tracking-[.18em] text-violet-300/60">
                          {project.result}
                        </p>

                        <div className="mt-2 flex items-end gap-3">
                          <span className="text-3xl font-semibold tracking-tight text-white">
                            {project.metric}
                          </span>

                          <span className="pb-1 text-xs text-zinc-500">
                            {project.metricLabel}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <div className="rounded-2xl border border-dashed border-white/[0.08] px-6 py-5 text-center">
              <p className="text-xs text-zinc-600">
                Demo projects for presentation only — replace the names, descriptions, metrics and technologies with your real projects and case studies.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY ME */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[.65fr_1.35fr]">
            <SectionHeading
              number="05"
              title="Less handoff. More ownership."
            />

            <div className="grid gap-3 sm:grid-cols-2">
              {whyMe.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 0.05}
                >
                  <TiltCard className="group h-full rounded-2xl border border-white/[0.08] bg-black/20 p-6 transition hover:border-white/[0.14] sm:p-7">
                    <div className="text-xs text-zinc-700">
                      0{index + 1}
                    </div>

                    <h3 className="mt-9 text-lg font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-zinc-500">
                      {item.description}
                    </p>

                    <div className="mt-7 h-px w-8 bg-white/10 transition-all duration-500 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400" />
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="relative z-10 border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
          <SectionHeading
            number="06"
            title="What I can help you build."
            description="Different problems need different solutions. I choose the architecture and technology based on the users, requirements, timeline and goals."
          />

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {capabilities.map((item, index) => (
              <Reveal
                key={item.number}
                delay={index * 0.06}
              >
                <TiltCard className="group relative h-full min-h-[330px] overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 sm:p-8">
                  <div
                    className={`absolute -right-20 -top-20 h-52 w-52 rounded-full blur-3xl transition duration-500 ${
                      item.tone === "violet"
                        ? "bg-violet-500/10 group-hover:bg-violet-500/20"
                        : item.tone === "cyan"
                          ? "bg-cyan-500/10 group-hover:bg-cyan-500/20"
                          : "bg-fuchsia-500/10 group-hover:bg-fuchsia-500/20"
                    }`}
                  />

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xs text-zinc-400">
                        {item.number}
                      </span>

                      <span className="text-xs text-zinc-700">
                        CAPABILITY
                      </span>
                    </div>

                    <h3 className="mt-auto pt-20 text-2xl font-semibold tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-zinc-500">
                      {item.description}
                    </p>

                    <button
                      type="button"
                      onClick={openContactForm}
                      className="mt-7 text-left text-xs font-medium text-zinc-600 transition group-hover:text-white"
                    >
                      Discuss your project <Arrow />
                    </button>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="relative z-10 border-y border-white/[0.06] bg-white/[0.012]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[.6fr_1.4fr] lg:items-center">
            <Reveal>
              <p className="section-label">
                07 / TECHNOLOGIES
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">
                The tools behind the products.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-6 text-zinc-500">
                A practical stack selected around the product rather than
                forcing every project into the same technology.
              </p>
            </Reveal>

            <Reveal>
              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-2.5 text-sm text-zinc-400 transition hover:border-violet-400/20 hover:bg-violet-400/[0.04] hover:text-white"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative z-10">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
          <SectionHeading
            number="07"
            title="A stack organized around outcomes."
            description="Use this section to show depth without turning your portfolio into a giant list of logos. Replace or reorder the technologies to match your strongest skills."
          />
          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.05}>
                <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition hover:border-violet-400/20 hover:bg-white/[0.04]">
                  <span className="text-xs text-zinc-700">0{index + 1}</span>
                  <h3 className="mt-8 text-lg font-semibold">{group.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-500">{group.description}</p>
                  <div className="mt-6 space-y-2">
                    {group.skills.map((skill) => (
                      <div key={skill} className="flex items-center gap-2 text-sm text-zinc-400">
                        <span className="h-1 w-1 rounded-full bg-violet-400" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="relative z-10"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[.65fr_1.35fr]">
            <SectionHeading
              number="08"
              title="Simple process. Serious execution."
            />

            <div className="relative">
              <div className="absolute bottom-0 left-[15px] top-0 w-px bg-gradient-to-b from-violet-400/60 via-white/10 to-transparent" />

              <div className="space-y-2">
                {process.map((item, index) => (
                  <Reveal
                    key={item.number}
                    delay={index * 0.06}
                  >
                    <div className="group relative py-5 pl-12">
                      <span className="absolute left-[10px] top-8 h-2.5 w-2.5 rounded-full border border-violet-300/70 bg-[#050507] shadow-[0_0_16px_rgba(139,92,246,.5)]" />

                      <div className="flex items-baseline gap-4">
                        <span className="text-xs text-violet-400">
                          {item.number}
                        </span>

                        <h3 className="text-xl font-semibold">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="relative z-10"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.035] px-6 py-16 text-center shadow-2xl shadow-black/30 sm:px-12 sm:py-20">
            <div className="absolute left-1/2 top-[-180px] h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

            <motion.div
              animate={{ x: [-120, 120, -120] }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[-140px] left-1/2 h-52 w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/[0.06] blur-[100px]"
            />

            <Reveal className="relative">
              <p className="section-label">
                09 / CONTACT
              </p>

              <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-[-.04em] sm:text-6xl">
                Have a problem worth solving?
                <span className="block bg-gradient-to-r from-zinc-500 via-white to-zinc-500 bg-clip-text text-transparent">
                  Let&apos;s build the solution.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">
                Tell me what you&apos;re trying to build, the problem
                you&apos;re solving, or even just the idea you have.
              </p>

              <motion.button
                type="button"
                onClick={openContactForm}
                whileHover={{
                  y: -3,
                  boxShadow:
                    "0 20px 60px rgba(139,92,246,.22)",
                }}
                whileTap={{ scale: 0.98 }}
                className="mt-9 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-black"
              >
                Start a conversation <Arrow />
              </motion.button>

              <p className="mt-5 text-xs text-zinc-700">
                Usually replies within 24–48 hours.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
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

            <button
              type="button"
              onClick={openContactForm}
              className="transition hover:text-white"
            >
              Contact
            </button>
          </div>
        </div>
      </footer>

      {/* PROJECT CASE STUDY MODAL */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0b0b0f] p-6 shadow-2xl sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" onClick={() => setSelectedProject(null)} className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-lg text-zinc-500 hover:bg-white/10 hover:text-white" aria-label="Close project case study">×</button>
            <p className="text-xs uppercase tracking-[.2em] text-violet-400">{selectedProject.category}</p>
            <h2 id="project-modal-title" className="mt-3 pr-10 text-3xl font-semibold tracking-tight sm:text-4xl">{selectedProject.title}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">{selectedProject.description}</p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                <p className="text-[10px] uppercase tracking-[.18em] text-zinc-600">Problem</p>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{selectedProject.problem}</p>
              </div>
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                <p className="text-[10px] uppercase tracking-[.18em] text-zinc-600">Solution</p>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{selectedProject.solution}</p>
              </div>
            </div>

            <div className="mt-3 rounded-2xl border border-violet-400/[0.12] bg-violet-400/[0.035] p-5">
              <p className="text-[10px] uppercase tracking-[.18em] text-violet-300/60">Result</p>
              <div className="mt-2 flex items-end gap-3">
                <span className="text-3xl font-semibold tracking-tight">{selectedProject.metric}</span>
                <span className="pb-1 text-xs text-zinc-500">{selectedProject.metricLabel}</span>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {selectedProject.technologies.map((technology) => (
                <span key={technology} className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[11px] text-zinc-400">{technology}</span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-violet-100">Live demo ↗</a>
              <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/[0.05]">View GitHub ↗</a>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CONTACT MODAL */}
      {showContactForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-md"
          onClick={closeContactForm}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 18,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 24,
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-form-title"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0b0b0f] p-6 shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={closeContactForm}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-lg text-zinc-500 hover:bg-white/10 hover:text-white"
              aria-label="Close contact form"
            >
              ×
            </button>

            {!submitted ? (
              <>
                <p className="text-xs font-medium uppercase tracking-[.2em] text-violet-400">
                  Start a conversation
                </p>

                <h2
                  id="contact-form-title"
                  className="mt-3 pr-10 text-3xl font-semibold tracking-tight"
                >
                  Let&apos;s build something useful.
                </h2>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  Tell me a little about your idea, project or technical
                  challenge.
                </p>

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
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-700 focus:border-violet-400/40 focus:bg-white/[0.05]"
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
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-700 focus:border-violet-400/40 focus:bg-white/[0.05]"
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
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-700 focus:border-violet-400/40 focus:bg-white/[0.05]"
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
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-700 focus:border-violet-400/40 focus:bg-white/[0.05]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black hover:bg-violet-100"
                  >
                    Open Email →
                  </button>

                  <p className="text-center text-xs text-zinc-700">
                    Your default email application will open with the
                    message prepared for you.
                  </p>
                </form>
              </>
            ) : (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] text-xl text-emerald-300">
                  ✓
                </div>

                <h2 className="mt-6 text-2xl font-semibold">
                  Email prepared.
                </h2>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-zinc-500">
                  Your email application should have opened with the
                  project details. If it didn&apos;t, you can email me
                  directly at{" "}
                  <span className="text-zinc-300">
                    praviny408@gmail.com
                  </span>
                  .
                </p>

                <button
                  type="button"
                  onClick={closeContactForm}
                  className="mt-7 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black"
                >
                  Done
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          background: #050507;
        }

        * {
          scrollbar-width: thin;
          scrollbar-color: #29292f #050507;
        }

        ::selection {
          background: rgba(139, 92, 246, 0.32);
          color: #fff;
        }

        .nav-link {
          color: #71717a;
          font-size: 0.75rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: #fff;
        }

        .section-label {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          color: #8b5cf6;
        }

        .section-title {
          font-size: clamp(2.35rem, 5vw, 4.8rem);
          font-weight: 600;
          line-height: 1.02;
          letter-spacing: -0.055em;
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

