// All site content lives here — edit this file to update the portfolio.

export const profile = {
  name: "Piratheep Rajaratnam",
  shortName: "Piratheep",
  role: "Full-Stack Web Developer",
  tagline: "PHP / Laravel · React / Next.js · WordPress",
  headline: "I build and modernise the web systems businesses run on.",
  intro:
    "Full-stack developer with 4+ years of commercial experience shipping production websites and business systems in PHP and JavaScript — for teams in Norway, the UK and Australia.",
  location: "Jaffna, Sri Lanka",
  timezone: "UTC+5:30 · Remote",
  email: "piratheeptheep99@gmail.com",
  phone: "+94 76 618 9364",
  phoneHref: "tel:+94766189364",
  whatsapp: "https://wa.me/94766189364",
  linkedin: "https://www.linkedin.com/in/piratheep-rajaratnam-a3aa97195/",
  github: "https://github.com/Piratheep05",
  company: "https://sixvm.com.au",
  // Put a CV PDF (without the references section) at public/cv.pdf and set this to "/cv.pdf"
  cvUrl: null,
  photo: "/piratheep.jpg",
  siteUrl: "https://piratheep.vercel.app",
};

export const stats = [
  { value: "4+", label: "Years shipping production code" },
  { value: "3", label: "Countries of remote clients" },
  { value: "0", label: "Downtime on PHP 5.2 → 8 migration" },
  { value: "5+", label: "Client websites live in production" },
];

export const about = [
  "I'm a full-stack developer who enjoys the unglamorous, high-impact work: taking undocumented legacy systems and turning them into modern, maintainable software without breaking anything that's live.",
  "Day to day I work across Laravel, React and Next.js at AC Tech Solutions (Norway), lead engineering as Co-Founder & CTO of SixVM (Australia), and volunteer as main developer for Wisdom Trust, a UK charity. I work remotely, take tasks from ticket to production, and keep people updated in clear writing.",
];

export const experience = [
  {
    role: "Software Developer",
    company: "AC Tech Solutions (Digifront.biz)",
    place: "Norway · Remote",
    period: "2024 — Present",
    points: [
      "Led the migration of legacy systems (Coupon System, SMS Gateway) from PHP 5.2 to PHP 8, Laravel 11 and React — with zero downtime.",
      "Designed and built a real-time Queue Management System for retail client Fargerike Majorstuen.",
      "Built EasyKnow, an internal knowledge platform with role-based access, approval workflows and AI content improvement via the Anthropic API.",
    ],
    tags: ["Laravel 11", "PHP 8", "React", "Next.js", "MySQL"],
  },
  {
    role: "Co-Founder & CTO",
    company: "SixVM Pty Ltd",
    place: "Australia · Remote · Part-time",
    period: "2025 — Present",
    link: "https://sixvm.com.au",
    points: [
      "Lead technical direction for an AI-solutions company serving finance, logistics and retail businesses.",
      "Own client builds end to end — scoping, architecture, integration with existing systems, pilot and production support.",
    ],
    tags: ["AI agents", "Automation", "Architecture"],
  },
  {
    role: "Volunteer Full-Stack Developer",
    company: "Wisdom Trust (UK charity)",
    place: "UK · Remote",
    period: "Aug 2026 — Present",
    link: "https://wisdomtrust.org",
    points: [
      "Main developer for the charity's WordPress member platform — custom PHP plugins for points, voting, grants and membership.",
      "Run WooCommerce, MySQL, server, backups and Cloudflare; leading the migration to Next.js.",
    ],
    tags: ["WordPress", "WooCommerce", "PHP", "Cloudflare"],
  },
  {
    role: "Associate Software Engineer",
    company: "Xdoto Concepts",
    place: "Sri Lanka",
    period: "2022 — 2024",
    points: [
      "Built REST APIs connecting React front ends to backend services across several client products.",
      "Developed live operational dashboards for the Meliora platform for non-technical users.",
    ],
    tags: ["React", "REST APIs", "Dashboards"],
  },
  {
    role: "Software Engineer Intern (Full Stack)",
    company: "Sundaram Lanka Tyres (TVS)",
    place: "Sri Lanka",
    period: "2021 — 2022",
    points: [
      "Replaced paper-based factory processes with React and Node.js web apps, refined with real user feedback.",
    ],
    tags: ["React", "Node.js"],
  },
];

export const featuredProjects = [
  {
    title: "EasyKnow",
    kind: "Knowledge platform · ongoing",
    description:
      "Role-based knowledge platform with approval workflows, rich-text editing, Zoho Mail parsing, auto-generated FAQs and an AI-powered content-improvement feature built on the Claude API.",
    tags: ["React", "Laravel", "MySQL", "Anthropic API"],
    accent: "from-violet-500/25 to-fuchsia-500/10",
  },
  {
    title: "Queue & Dispatch Management",
    kind: "Retail operations",
    description:
      "Real-time token generation, queue tracking and notifications for appointments, dispatch and walk-ins — with separate staff and admin dashboards. Built for Fargerike Majorstuen, Norway.",
    tags: ["React", "Laravel", "REST APIs"],
    accent: "from-sky-500/25 to-cyan-500/10",
  },
  {
    title: "Legacy PHP Modernisation",
    kind: "Coupon System & SMS Gateway",
    description:
      "Migrated undocumented PHP 5.2 systems to PHP 8, Laravel 11 and React while preserving live behaviour and modernising the data layer — delivered without downtime.",
    tags: ["PHP 8", "Laravel 11", "React", "MySQL"],
    accent: "from-amber-500/25 to-orange-500/10",
  },
  {
    title: "PID Update Application",
    kind: "Asset traceability",
    description:
      "Unique product IDs with QR-code generation, secure Node.js APIs over PostgreSQL and a responsive UI for capturing records in the field.",
    tags: ["React", "Node.js", "PostgreSQL"],
    accent: "from-emerald-500/25 to-teal-500/10",
  },
];

export const clientSites = [
  { name: "utrop.no", note: "Magazine · Norway", url: "https://utrop.no" },
  { name: "motorsport.no", note: "Magazine · Norway", url: "https://motorsport.no" },
  { name: "fabconcept.no", note: "Business · Norway", url: "https://fabconcept.no" },
  { name: "kslogisticssolutions.co.uk", note: "Logistics · UK", url: "https://kslogisticssolutions.co.uk" },
  { name: "wisdomtrust.org", note: "Charity · UK", url: "https://wisdomtrust.org" },
];

export const gallery = [
  { title: "E-commerce Website", kind: "Full-stack", img: "/projects/ecommerce.png" },
  { title: "Configurable Dashboard", kind: "Design & development", img: "/projects/condashboard.png" },
  { title: "MAS Admin Dashboard", kind: "Design & development", img: "/projects/mas.png" },
  { title: "Auriga Admin Dashboard", kind: "Design & development", img: "/projects/auriga1.png" },
  { title: "Stretchline Admin Panel", kind: "Front-end", img: "/projects/strechline.png" },
  { title: "YouTube Clone", kind: "Front-end", img: "/projects/youtubeclone.png" },
  { title: "Restaurant Website", kind: "Front-end", img: "/projects/restaurant.png" },
  { title: "Hotel Web Page", kind: "Front-end", img: "/projects/hotelpage.png" },
];

export const skills = [
  { group: "Backend", items: ["PHP 8", "Laravel", "Node.js", "REST APIs", "Python"] },
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind / Bootstrap", "Material UI"] },
  { group: "WordPress", items: ["Custom plugins", "WooCommerce", "Elementor", "Divi / Extra", "REST API & WP-Cron"] },
  { group: "Data", items: ["MySQL", "PostgreSQL", "Schema design", "Data migration"] },
  { group: "Ops", items: ["Linux & SSH", "Cloudflare", "cPanel", "AWS", "Vercel", "Git / GitHub"] },
  { group: "AI", items: ["Anthropic API", "Claude Code", "Cursor", "AI agents"] },
];

export const education = [
  {
    title: "BEng (Hons) Software Engineering",
    school: "London Metropolitan University",
    period: "2022 — 2023",
  },
  {
    title: "Diploma in Information Technology",
    school: "Institute of Technology, University of Moratuwa",
    period: "2019 — 2022",
  },
];
