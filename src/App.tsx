import {
  ArrowUpRight,
  Building2,
  Languages,
  Play,
  QrCode,
  ShieldCheck,
  Sparkles,
  Trophy,
  WifiOff,
  type LucideIcon,
} from "lucide-react"

import { BrowserFrame } from "@/components/browser-frame"
import { GithubIcon } from "@/components/github-icon"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

import analystReview from "@/assets/img/a4-review.webp"
import timeSlider from "@/assets/img/a3-timeslider.webp"
import architecture from "@/assets/img/architecture.webp"
import activationKit from "@/assets/img/d3-kit.webp"
import heatmap from "@/assets/img/heatmap.webp"
import arabic from "@/assets/img/r1-language.webp"
import buildingTap from "@/assets/img/r2-building.webp"
import priorityPhone from "@/assets/img/r2-priority.webp"
import aiSuggestion from "@/assets/img/r4-damage.webp"
import offlineQueue from "@/assets/img/r6-queued.webp"

const VIDEO_ID = "HiChclUjhWM"
const REPO_URL = "https://github.com/foad/terra"
const COMPETITION_URL =
  "https://www.undp.org/news/undp-calls-innovators-build-digital-tools-crisis-impact-reporting"

function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-xs font-bold tracking-[0.12em] text-undp-blue uppercase", className)}>
      {children}
    </p>
  )
}

function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children?: React.ReactNode
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-lg text-undp-gray-600">{children}</p>}
    </div>
  )
}

function AppBar() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-undp-red bg-undp-blue text-white">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5">
        <span className="text-lg leading-none font-bold tracking-wider">TERRA</span>
        <span className="hidden text-[13px] opacity-75 sm:inline">Crisis Damage Assessment</span>
        <nav className="ml-auto flex items-center gap-1 text-[13px]">
          <a
            href="#how"
            className="hidden rounded-sm px-2 py-1 opacity-75 hover:bg-white/12 hover:opacity-100 md:inline"
          >
            How it works
          </a>
          <a href="#video" className="rounded-sm px-2 py-1 opacity-75 hover:bg-white/12 hover:opacity-100">
            Video
          </a>
          <a
            href={REPO_URL}
            className="ml-2 inline-flex items-center gap-1.5 border border-white/60 px-2.5 py-1 text-xs hover:bg-white/12"
          >
            <GithubIcon className="size-3.5" /> GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-white to-undp-gray-200">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-16 pb-20 lg:grid-cols-[1fr_1.25fr] lg:pt-24 lg:pb-28">
        <div>
          <a
            href={COMPETITION_URL}
            className="group mb-8 inline-flex items-center gap-2.5 border border-undp-gray-400 bg-white py-1.5 pr-3 pl-1.5 text-sm shadow-sm transition-colors hover:border-undp-blue"
          >
            <span className="flex shrink-0 items-center gap-1.5 bg-gradient-to-b from-[#f4f5f6] to-[#bfc5cb] whitespace-nowrap px-2 py-0.5 text-xs font-bold tracking-wider text-undp-gray-700 uppercase ring-1 ring-[#a9b1b7] ring-inset">
              <Trophy className="size-3.5" />
              <span>
                2<sup className="relative -top-[0.45em] align-baseline text-[0.7em] normal-case">nd</sup> place
              </span>
            </span>
            <span className="font-semibold text-undp-gray-700">
              UNDP · Build the Future of Crisis Mapping
            </span>
            <ArrowUpRight className="size-4 text-undp-gray-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <Eyebrow>Tool for Early Reporting and Rapid Assessment</Eyebrow>
          <h1 className="mt-4 text-4xl leading-[1.05] font-extrabold tracking-tight md:text-6xl lg:text-5xl xl:text-6xl">
            Damage reports from the people who are there.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-undp-gray-600">
            After an earthquake or cyclone, anyone with a phone can photograph a damaged building
            and report it in about a minute. Crisis analysts see every report appear on a live map,
            building by building.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#video" className={buttonVariants({ variant: "cta", size: "xl" })}>
              <Play className="size-4 fill-current" /> Watch the demo
            </a>
            <a href={REPO_URL} className={buttonVariants({ variant: "undp-outline", size: "xl" })}>
              <GithubIcon className="size-4" /> View the code
            </a>
          </div>
          <p className="mt-6 text-sm text-undp-gray-600">
            Built in 2026. The live deployment has now been retired.
          </p>
        </div>

        <div className="relative pb-10 lg:pb-0">
          <BrowserFrame
            src={heatmap}
            alt="Analyst dashboard showing a severity heatmap over the crisis zone"
          />
          <img
            src={aiSuggestion}
            alt="Phone showing the AI's damage suggestion with a confidence score"
            className="absolute -bottom-6 left-2 w-[30%] drop-shadow-2xl sm:w-[24%] lg:-bottom-16 lg:-left-10 lg:w-[34%]"
          />
        </div>
      </div>
    </section>
  )
}

function Video() {
  return (
    <section id="video" className="scroll-mt-16 bg-undp-gray-700 py-20 text-white">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-10 text-center">
          <Eyebrow className="text-undp-blue-100">Two-minute demo</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            From a report on a phone to the analyst's map
          </h2>
        </div>
        <div className="aspect-video w-full overflow-hidden bg-black shadow-2xl ring-1 ring-white/10">
          <iframe
            className="size-full"
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0`}
            title="TERRA demo video"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

const steps = [
  {
    title: "Report",
    body: "A QR code or WhatsApp link opens the app on the crisis area, with no app store and no account. Tap the damaged building, take a photo, and confirm the AI's suggested damage level.",
    img: buildingTap,
    alt: "Phone showing a building footprint being selected on the map",
  },
  {
    title: "See",
    body: "Each report lands on the analyst's map, pinned to its building. Switch to a severity heatmap, draw an area to filter, or scrub the time slider to replay the crisis.",
    img: timeSlider,
    alt: "Analyst dashboard with the time slider replaying reports",
  },
  {
    title: "Respond",
    body: "The analyst flags any building that needs more photos. It appears outlined in purple on every reporter's map, sending people to where the gaps are.",
    img: priorityPhone,
    alt: "Phone map with priority buildings outlined in purple",
  },
]

function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-16 py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="How it works" title="Report, see, respond">
          A loop between the community and the analysts, so the damage picture fills in where it
          matters most.
        </SectionHeading>
        <div className="mx-auto grid max-w-lg gap-14 lg:max-w-none lg:grid-cols-3 lg:gap-10">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-col">
              <div className="flex h-80 items-end justify-center">
                <img
                  src={step.img}
                  alt={step.alt}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center bg-undp-blue text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="text-xl font-bold">{step.title}</h3>
              </div>
              <p className="mt-3 text-undp-gray-600">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const highlights: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: WifiOff,
    title: "Works with no signal",
    body: "Reports are saved on the phone and send themselves when the network returns.",
  },
  {
    icon: Building2,
    title: "The building, not a GPS guess",
    body: "Reporters tap the building's footprint. Where there isn't one, they drop a pin and describe a nearby landmark.",
  },
  {
    icon: Sparkles,
    title: "AI suggests, people decide",
    body: "A vision model suggests the damage level with a confidence score. The reporter confirms, and analysts can reclassify.",
  },
  {
    icon: Languages,
    title: "Seven languages",
    body: "The six UN languages plus Turkish, including Arabic right to left. Free text is translated to English for analysts.",
  },
  {
    icon: ShieldCheck,
    title: "Anonymous by default",
    body: "No account, name or phone number. Photo location data is stripped and personal details are removed from free text.",
  },
  {
    icon: QrCode,
    title: "A new crisis in under an hour",
    body: "Draw the area, add questions, publish. A QR code, poster and WhatsApp messages are generated in six languages.",
  },
]

function Highlights() {
  return (
    <section className="bg-undp-gray-200 py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Built for the field" title="Designed for the first hours of a crisis" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map(({ icon: Icon, title, body }) => (
            <Card key={title} className="border-t-4 border-undp-blue shadow-sm ring-0">
              <CardHeader>
                <Icon className="mb-2 size-7 text-undp-blue" strokeWidth={1.75} />
                <CardTitle className="text-lg font-bold">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-[15px] text-undp-gray-600">{body}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const gallery = [
  { img: offlineQueue, caption: "Queued offline, sent later" },
  { img: arabic, caption: "Arabic, right to left" },
  { img: activationKit, caption: "Community Activation Kit" },
  { img: analystReview, caption: "Analyst review" },
]

function Gallery() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Inside the app" title="A closer look" />
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {gallery.map(({ img, caption }) => (
            <figure key={caption} className="flex flex-col items-center">
              <div className="flex h-64 items-center justify-center sm:h-96">
                <img src={img} alt={caption} loading="lazy" className="max-h-full object-contain" />
              </div>
              <figcaption className="mt-4 text-center text-sm font-semibold text-undp-gray-700">
                {caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

const stats = [
  { value: "500,000", label: "reports in the scale test" },
  { value: "40 ms", label: "to load the map view" },
  { value: "45 ms", label: "to save a new report" },
  { value: "1.5 s", label: "to export all 500,000" },
]

function Scale() {
  return (
    <section className="border-b-4 border-undp-red bg-undp-blue py-16 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <p className="mb-10 text-center text-xs font-bold tracking-[0.12em] text-undp-blue-100 uppercase">
          Tested at national-crisis scale
        </p>
        <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col-reverse text-center">
              <dt className="mt-2 text-sm text-white/80">{label}</dt>
              <dd className="text-4xl font-extrabold tracking-tight md:text-5xl">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

const stack = [
  "React PWA",
  "MapLibre",
  "Python on AWS Lambda",
  "PostgreSQL + PostGIS",
  "H3 indexing",
  "Amazon S3",
  "Claude on Amazon Bedrock",
  "Cognito",
  "Terraform",
]

function UnderTheHood() {
  return (
    <section className="bg-undp-gray-200 py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Under the hood" title="Serverless, open source, rebuilt from code">
          The whole stack is defined in Terraform, and its compute costs nothing when idle.
        </SectionHeading>
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {stack.map((item) => (
            <Badge key={item} variant="outline" className="h-7 bg-white px-3 text-[13px] font-semibold">
              {item}
            </Badge>
          ))}
        </div>
        <div className="bg-white p-4 shadow-sm ring-1 ring-black/5 md:p-8">
          <a href={architecture} target="_blank" rel="noreferrer">
            <img src={architecture} alt="TERRA system architecture diagram" loading="lazy" className="w-full" />
          </a>
        </div>
        <div className="mt-10 text-center">
          <a href={REPO_URL} className={buttonVariants({ variant: "undp", size: "xl" })}>
            <GithubIcon className="size-4" /> Read the code on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-undp-gray-700 py-10 text-sm text-white/75">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p>
          <span className="font-bold tracking-wider text-white">TERRA</span>
          <span className="mx-2">·</span>
          Built by Dan Foad and Paul Longe, 2026
        </p>
        <div className="flex gap-6">
          <a href={`https://www.youtube.com/watch?v=${VIDEO_ID}`} className="hover:text-white">
            Video
          </a>
          <a href={REPO_URL} className="hover:text-white">
            GitHub
          </a>
          <span>MIT licence</span>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <AppBar />
      <main>
        <Hero />
        <Video />
        <HowItWorks />
        <Highlights />
        <Gallery />
        <Scale />
        <UnderTheHood />
      </main>
      <Footer />
    </>
  )
}
