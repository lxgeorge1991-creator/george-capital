"use client";
import {
  Building2,
  PieChart,
  ShieldCheck,
  TrendingUp,
  Landmark,
  Briefcase,
  Handshake,
  CheckCircle,
  ArrowRight,
  Timer,
  Mail,
  Phone,
} from "lucide-react";

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
        <div className="rounded-xl bg-gray-100 p-2">
          <Icon className="h-5 w-5" />
        </div>
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
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition group-hover:scale-105">
          {n}
        </div>
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
      <header className="sticky top-0 z-40 border-b border-black/5 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black font-bold text-white">
              GC
            </div>
            <div>
              <div className="text-sm uppercase tracking-widest text-gray-500">
                George Capital
              </div>
              <div className="-mt-0.5 text-xs text-gray-500">
                Dubai Real Estate | Investments
              </div>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#why-dubai" className="hover:text-black">
              Why Dubai
            </a>
            <a href="#opportunities" className="hover:text-black">
              Opportunities
            </a>
            <a href="#process" className="hover:text-black">
              Process
            </a>
            <a href="#founder" className="hover:text-black">
              Founder
            </a>
            <a href="#partners" className="hover:text-black">
              Partners
            </a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white shadow-s
