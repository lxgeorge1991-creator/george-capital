"use client";
import { Building2, PieChart, ShieldCheck, TrendingUp, Landmark, Briefcase, Handshake, CheckCircle, ArrowRight, Timer, Mail, Phone } from "lucide-react";

function Stat({ label, value }) {
  return (
    <div className="flex flex-col items-start gap-1 rounded-2xl bg-white/60 p-4 shadow-sm ring-1 ring-black/5">
      <div className="text-2xl font-semibold tracking-tight">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

function Card({ icon: Icon, title, children }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5">
      <div className="mb-3 flex items-center gap-2">
        <div className="rounded-xl bg-gray-100 p-2"><Icon className="h-5 w-5" /></div>
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      </div>
      <div className="text-sm leading-6 text-gray-700">{children}</div>
    </div>
  );
}

function Step({ n, title, desc }) {
  return (
    <div className="group relative rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
      <div className="mb-2 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white group-hover:scale-105 transition">{n}</div>
        <div className="font-semibold">{title}</div>
      </div>
      <p className="text-sm text-gray-700 leading-6">{desc}</p>
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1 text-xs text-gray-700">
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-black/5">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white font-bold">GC</div>
            <div>
              <div className="text-sm uppercase tracking-widest text-gray-500">George Capital</div>
              <div className="-mt-0.5 text-xs text-gray-500">Dubai Real Estate | Investments</div>
            </div>
          </div>
          <nav className="hidden gap-6 md:flex text-sm">
            <a href="#why-dubai" className="hover:text-black">Why Dubai</a>
            <a href="#opportunities" className="hover:text-black">Opportunities</a>
            <a href="#process" className="hover:text-black">Process</a>
            <a href="#founder" className="hover:text-black">Founder</a>
            <a href="#partners" className="hover:text-black">Partners</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-white text-sm font-medium shadow-sm hover:opacity-90">
            Book a Call <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-8 md:pt-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <Badge><ShieldCheck className="h-3.5 w-3.5" />Trusted Gateway to Dubai Property</Badge>
            <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
              Institutional-grade access to <span className="underline decoration-black/20">Dubai real estate</span>
            </h1>
            <p className="mt-4 text-gray-700 leading-7">
              George Capital sources, vets, and structures high-ROI opportunities across Dubai’s most resilient micro-markets—combining data-driven selection with on-ground access and a curated HNI network.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-white text-sm font-medium shadow-sm hover:opacity-90">Speak to Us</a>
              <a href="#why-dubai" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-gray-50">Why Dubai</a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              <Stat value="0%" label="Income Tax on Property" />
              <Stat value=">90%" label="Expat Population" />
              <Stat value=">$40B" label="Annual Property Deals" />
            </div>
          </div>
          <div className="rounded-3xl border border-black/10 bg-white p-4 shadow-md">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 grid place-items-center">
              <div className="text-center">
                <Building2 className="mx-auto h-12 w-12" />
                <p className="mt-3 text-sm text-gray-600">Hero visual placeholder – replace with skyline or brand image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY DUBAI */}
      <section id="why-dubai" className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Why Dubai</h2>
          <div className="text-sm text-gray-600">Macro strength • Policy clarity • Global connectivity</div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <Card icon={TrendingUp} title="Compelling Risk-Adjusted Returns">
            Historically strong capital appreciation and rental yields vs. other global hubs, driven by population inflows and supply discipline.
          </Card>
          <Card icon={Landmark} title="Investor-Friendly Framework">
            Simple ownership, 0% tax on personal income, and transparent regulatory environment attract global capital.
          </Card>
          <Card icon={ShieldCheck} title="Stability & Diplomacy">
            Geopolitical neutrality, world-class infrastructure, and a pro-business government underpin long-term resilience.
          </Card>
        </div>
      </section>

      {/* ... keep rest of your sections here exactly as before with normal quotes ... */}

    </div>
  );
}
