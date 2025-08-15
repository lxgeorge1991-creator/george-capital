"use client";
import { Building2, PieChart, ShieldCheck, TrendingUp, Landmark, Briefcase, Handshake, CheckCircle, ArrowRight, Timer, Mail, Phone } from "lucide-react";

function Stat({ label, value }) {
  return (
    <div className=\"flex flex-col items-start gap-1 rounded-2xl bg-white/60 p-4 shadow-sm ring-1 ring-black/5\">
      <div className=\"text-2xl font-semibold tracking-tight\">{value}</div>
      <div className=\"text-sm text-gray-600\">{label}</div>
    </div>
  );
}

function Card({ icon: Icon, title, children }) {
  return (
    <div className=\"rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5\">
      <div className=\"mb-3 flex items-center gap-2\">
        <div className=\"rounded-xl bg-gray-100 p-2\"><Icon className=\"h-5 w-5\" /></div>
        <h3 className=\"text-lg font-semibold tracking-tight\">{title}</h3>
      </div>
      <div className=\"text-sm leading-6 text-gray-700\">{children}</div>
    </div>
  );
}

function Step({ n, title, desc }) {
  return (
    <div className=\"group relative rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5\">
      <div className=\"mb-2 flex items-center gap-3\">
        <div className=\"flex h-8 w-8 items-center justify-center rounded-full bg-black text-white group-hover:scale-105 transition\">{n}</div>
        <div className=\"font-semibold\">{title}</div>
      </div>
      <p className=\"text-sm text-gray-700 leading-6\">{desc}</p>
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className=\"inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1 text-xs text-gray-700\">
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <div className=\"min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900\">
      {/* NAVBAR */}
      <header className=\"sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-black/5\">
        <div className=\"mx-auto flex max-w-6xl items-center justify-between px-4 py-3\">
          <div className=\"flex items-center gap-2\">
            <div className=\"flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white font-bold\">GC</div>
            <div>
              <div className=\"text-sm uppercase tracking-widest text-gray-500\">George Capital</div>
              <div className=\"-mt-0.5 text-xs text-gray-500\">Dubai Real Estate | Investments</div>
            </div>
          </div>
          <nav className=\"hidden gap-6 md:flex text-sm\">
            <a href=\"#why-dubai\" className=\"hover:text-black\">Why Dubai</a>
            <a href=\"#opportunities\" className=\"hover:text-black\">Opportunities</a>
            <a href=\"#process\" className=\"hover:text-black\">Process</a>
            <a href=\"#founder\" className=\"hover:text-black\">Founder</a>
            <a href=\"#partners\" className=\"hover:text-black\">Partners</a>
          </nav>
          <a href=\"#contact\" className=\"inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-white text-sm font-medium shadow-sm hover:opacity-90\">
            Book a Call <ArrowRight className=\"h-4 w-4\" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className=\"mx-auto max-w-6xl px-4 pt-12 pb-8 md:pt-16\">
        <div className=\"grid items-center gap-8 md:grid-cols-2\">
          <div>
            <Badge><ShieldCheck className=\"h-3.5 w-3.5\" />Trusted Gateway to Dubai Property</Badge>
            <h1 className=\"mt-4 text-3xl md:text-5xl font-semibold tracking-tight\">
              Institutional-grade access to <span className=\"underline decoration-black/20\">Dubai real estate</span>
            </h1>
            <p className=\"mt-4 text-gray-700 leading-7\">
              George Capital sources, vets, and structures high-ROI opportunities across Dubai’s most resilient micro-markets—combining data-driven selection with on-ground access and a curated HNI network.
            </p>
            <div className=\"mt-6 flex flex-wrap gap-3\">
              <a href=\"#contact\" className=\"inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-white text-sm font-medium shadow-sm hover:opacity-90\">Speak to Us</a>
              <a href=\"#why-dubai\" className=\"inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-gray-50\">Why Dubai</a>
            </div>
            <div className=\"mt-8 grid grid-cols-3 gap-3\">
              <Stat value=\"0%\" label=\"Income Tax on Property\" />
              <Stat value=\">90%\" label=\"Expat Population\" />
              <Stat value=\">$40B\" label=\"Annual Property Deals\" />
            </div>
          </div>
          <div className=\"rounded-3xl border border-black/10 bg-white p-4 shadow-md\">
            <div className=\"aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 grid place-items-center\">
              <div className=\"text-center\">
                <Building2 className=\"mx-auto h-12 w-12\" />
                <p className=\"mt-3 text-sm text-gray-600\">Hero visual placeholder – replace with skyline or brand image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY DUBAI */}
      <section id=\"why-dubai\" className=\"mx-auto max-w-6xl px-4 py-12\">
        <div className=\"mb-6 flex items-end justify-between\">
          <h2 className=\"text-2xl md:text-3xl font-semibold tracking-tight\">Why Dubai</h2>
          <div className=\"text-sm text-gray-600\">Macro strength • Policy clarity • Global connectivity</div>
        </div>
        <div className=\"grid gap-5 md:grid-cols-3\">
          <Card icon={TrendingUp} title=\"Compelling Risk-Adjusted Returns\">
            Historically strong capital appreciation and rental yields vs. other global hubs, driven by population inflows and supply discipline.
          </Card>
          <Card icon={Landmark} title=\"Investor-Friendly Framework\">
            Simple ownership, 0% tax on personal income, and transparent regulatory environment attract global capital.
          </Card>
          <Card icon={ShieldCheck} title=\"Stability & Diplomacy\">
            Geopolitical neutrality, world-class infrastructure, and a pro-business government underpin long-term resilience.
          </Card>
        </div>
      </section>

      {/* INVESTMENT PHILOSOPHY */}
      <section className=\"mx-auto max-w-6xl px-4 py-12\">
        <div className=\"mb-6 flex items-end justify-between\">
          <h2 className=\"text-2xl md:text-3xl font-semibold tracking-tight\">Investment Philosophy</h2>
          <div className=\"text-sm text-gray-600\">Data + Access + Discipline</div>
        </div>
        <div className=\"grid gap-5 md:grid-cols-3\">
          <Card icon={PieChart} title=\"Micro-Market Focus\">
            Enter at the right price in neighborhoods with verifiable demand drivers: schools, transit, retail, and lifestyle hubs.
          </Card>
          <Card icon={Briefcase} title=\"Deal Underwriting\">
            Conservative rent and exit assumptions, downside protection, and multiple exit strategies per asset.
          </Card>
          <Card icon={ShieldCheck} title=\"Diligence First\">
            RERA checks, developer credibility, escrow safeguards, snag inspections, and airtight documentation.
          </Card>
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section id=\"opportunities\" className=\"mx-auto max-w-6xl px-4 py-12\">
        <div className=\"mb-6 flex items-end justify-between\">
          <h2 className=\"text-2xl md:text-3xl font-semibold tracking-tight\">Opportunities We Curate</h2>
        <div className=\"text-sm text-gray-600\">Diverse entry points across risk/return</div>
        </div>
        <div className=\"grid gap-5 md:grid-cols-4\">
          <Card icon={Building2} title=\"Ready, Rent-Generating\">
            Stabilized units in prime zones for immediate yield with low vacancy risk.
          </Card>
          <Card icon={TrendingUp} title=\"Off-Plan Upside\">
            Structured entries with milestone payments and appreciation catalysts pre-handover.
          </Card>
          <Card icon={Landmark} title=\"Luxury & Waterfront\">
            Blue-chip addresses with global buyer depth and resilient resale demand.
          </Card>
          <Card icon={Briefcase} title=\"Select Commercial\">
            Well-leased Grade-A assets with strong covenants and index-linked escalations.
          </Card>
        </div>
      </section>

      {/* CASE STUDIES / ROI */}
      <section className=\"mx-auto max-w-6xl px-4 py-12\">
        <div className=\"mb-6 flex items-end justify-between\">
          <h2 className=\"text-2xl md:text-3xl font-semibold tracking-tight\">Sample Outcomes</h2>
          <div className=\"text-sm text-gray-600\">Illustrative only – replace with verified numbers</div>
        </div>
        <div className=\"grid gap-5 md:grid-cols-3\">
          <Card icon={TrendingUp} title=\"Prime Ready Unit\">
            <ul className=\"list-disc pl-5 space-y-1\">
              <li>Entry: AED 2.1M • Rent: AED 140k/yr</li>
              <li>Gross yield: ~6.7% | Net: ~5.4%</li>
              <li>12m resale uplift: ~8–10%</li>
            </ul>
          </Card>
          <Card icon={TrendingUp} title=\"Off-Plan Waterfront\">
            <ul className=\"list-disc pl-5 space-y-1\">
              <li>Entry: AED 1.8M • 70/30 payment plan</li>
              <li>Launch → Handover uplift: ~15–25%</li>
              <li>Exit options: assign or hold</li>
            </ul>
          </Card>
          <Card icon={TrendingUp} title=\"Managed Portfolio (3 Units)\">
            <ul className=\"list-disc pl-5 space-y-1\">
              <li>Blended net yield: ~5.8–6.2%</li>
              <li>Vacancy: &lt;2 weeks/yr per unit</li>
              <li>IRR driver: rent + appreciation</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* PROCESS */}
      <section id=\"process\" className=\"mx-auto max-w-6xl px-4 py-12\">
        <div className=\"mb-6 flex items-end justify-between\">
          <h2 className=\"text-2xl md:text-3xl font-semibold tracking-tight\">How We Work</h2>
          <div className=\"text-sm text-gray-600\">End-to-end, white-glove</div>
        </div>
        <div className=\"grid gap-4 md:grid-cols-3\">
          <Step n={1} title=\"Discovery & Mandate\" desc=\"Understand goals (yield vs. growth), hold period, risk tolerance, budget, and currency exposure.\" />
          <Step n={2} title=\"Shortlist & Site Visits\" desc=\"Data-led curation across developers/micro-markets; virtual or on-ground walkthroughs.\" />
          <Step n={3} title=\"Underwrite & Offer\" desc=\"Comparable analysis, rent comps, fee/tax breakdown, and negotiation strategy.\" />
          <Step n={4} title=\"Diligence & Contracts\" desc=\"RERA compliance, escrow verification, SPA review, and POA where needed.\" />
          <Step n={5} title=\"Completion & Snagging\" desc=\"Handover inspection, snag rectification, and keys documentation.\" />
          <Step n={6} title=\"Leasing & Management\" desc=\"Tenanting, renewals, facility coordination, and performance reporting.\" />
        </div>
      </section>

      {/* FOUNDER */}
      <section id=\"founder\" className=\"mx-auto max-w-6xl px-4 py-12\">
        <div className=\"mb-6 flex items-end justify-between\">
          <h2 className=\"text-2xl md:text-3xl font-semibold tracking-tight\">Founder</h2>
          <div className=\"text-sm text-gray-600\">Network • Execution • Trust</div>
        </div>
        <div className=\"grid gap-6 md:grid-cols-3\">
          <div className=\"md:col-span-2 rounded-2xl border border-black/10 bg-white p-6 shadow-sm\">
            <h3 className=\"text-lg font-semibold\">Alex George</h3>
            <p className=\"mt-2 text-sm leading-7 text-gray-700\">
              Partnership Specialist (Whitewill Dubai). Tech founder turned investor with experience in high-ticket sales, HNI relationship building, and cross-border deal execution. George Capital extends this edge to curated Dubai real estate opportunities.
            </p>
            <div className=\"mt-4 flex flex-wrap gap-3 text-sm text-gray-700\">
              <Badge>HNI & Family Office Network</Badge>
              <Badge>On-ground Developer Access</Badge>
              <Badge>Data-led Underwriting</Badge>
            </div>
          </div>
          <div className=\"rounded-2xl border border-black/10 bg-white p-6 shadow-sm\">
            <div className=\"text-sm text-gray-500\">Links (plain text)</div>
            <div className=\"mt-2 space-y-2 text-sm\">
              <div className=\"flex items-start gap-2\"><Timer className=\"h-4 w-4 mt-0.5\" /> <span>Calendly – Whitewill Partnership Program Briefing:<br/> calendly.com/lxgeorge1991/whitewill-partnership-program-briefing</span></div>
              <div className=\"flex items-start gap-2\"><Timer className=\"h-4 w-4 mt-0.5\" /> <span>Calendly – Dubai Property Investment Call:<br/> calendly.com/lxgeorge1991/30min</span></div>
              <div className=\"flex items-start gap-2\"><Briefcase className=\"h-4 w-4 mt-0.5\" /> <span>LinkedIn:<br/> linkedin.com/in/alexmgeorge91</span></div>
            </div>
            <div className=\"mt-4\">
              <a href=\"#contact\" className=\"inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-white text-sm font-medium shadow-sm hover:opacity-90\">Book a Call</a>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP MODELS */}
      <section id=\"partners\" className=\"mx-auto max-w-6xl px-4 py-12\">
        <div className=\"mb-6 flex items-end justify-between\">
          <h2 className=\"text-2xl md:text-3xl font-semibold tracking-tight\">Partnership Models</h2>
          <div className=\"text-sm text-gray-600\">Pick the track that fits you</div>
        </div>
        <div className=\"grid gap-5 md:grid-cols-3\">
          <div className=\"rounded-2xl border border-black/10 bg-white p-6 shadow-sm\">
            <div className=\"mb-2 flex items-center gap-2\"><Handshake className=\"h-5 w-5\" /><h3 className=\"font-semibold\">Referral Partner</h3></div>
            <p className=\"text-sm text-gray-700\">Earn per successful client deal introduced. We handle end-to-end advisory and closing.</p>
            <ul className=\"mt-3 space-y-2 text-sm\">
              <li className=\"flex items-center gap-2\"><CheckCircle className=\"h-4 w-4\"/> Simple onboarding</li>
              <li className=\"flex items-center gap-2\"><CheckCircle className=\"h-4 w-4\"/> Transparent payouts</li>
              <li className=\"flex items-center gap-2\"><CheckCircle className=\"h-4 w-4\"/> White-labeled support</li>
            </ul>
          </div>
          <div className=\"rounded-2xl border border-black/10 bg-white p-6 shadow-sm\">
            <div className=\"mb-2 flex items-center gap-2\"><PieChart className=\"h-5 w-5\" /><h3 className=\"font-semibold\">Co-Invest</h3></div>
            <p className=\"text-sm text-gray-700\">Syndicated entries into select assets or small portfolios with aligned economics.</p>
            <ul className=\"mt-3 space-y-2 text-sm\">
              <li className=\"flex items-center gap-2\"><CheckCircle className=\"h-4 w-4\"/> Shared diligence</li>
              <li className=\"flex items-center gap-2\"><CheckCircle className=\"h-4 w-4\"/> Clear governance</li>
              <li className=\"flex items-center gap-2\"><CheckCircle className=\"h-4 w-4\"/> Defined exits</li>
            </ul>
          </div>
          <div className=\"rounded-2xl border border-black/10 bg-white p-6 shadow-sm\">
            <div className=\"mb-2 flex items-center gap-2\"><ShieldCheck className=\"h-5 w-5\" /><h3 className=\"font-semibold\">Managed Portfolio</h3></div>
            <p className=\"text-sm text-gray-700\">Mandate-driven, fully managed strategy tailored to income vs. appreciation goals.</p>
            <ul className=\"mt-3 space-y-2 text-sm\">
              <li className=\"flex items-center gap-2\"><CheckCircle className=\"h-4 w-4\"/> Custom strategy</li>
              <li className=\"flex items-center gap-2\"><CheckCircle className=\"h-4 w-4\"/> Quarterly reporting</li>
              <li className=\"flex items-center gap-2\"><CheckCircle className=\"h-4 w-4\"/> Tenant & facility ops</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id=\"contact\" className=\"mx-auto max-w-6xl px-4 py-12\">
        <div className=\"grid gap-6 rounded-3xl border border-black/10 bg-white p-8 shadow-md md:grid-cols-2\">
          <div>
            <h2 className=\"text-2xl md:text-3xl font-semibold tracking-tight\">Let’s align on your Dubai strategy</h2>
            <p className=\"mt-3 text-sm text-gray-700 leading-7\">Share your goals and we’ll propose a shortlist within 48 hours – with numbers that make sense, not hype. Prefer a quick call? Use the links below.</p>
            <div className=\"mt-4 space-y-2 text-sm\">
              <div className=\"flex items-start gap-2\"><Timer className=\"h-4 w-4 mt-0.5\" /> <span>Calendly – Whitewill Partnership Program Briefing:<br/> calendly.com/lxgeorge1991/whitewill-partnership-program-briefing</span></div>
              <div className=\"flex items-start gap-2\"><Timer className=\"h-4 w-4 mt-0.5\" /> <span>Calendly – Dubai Property Investment Call:<br/> calendly.com/lxgeorge1991/30min</span></div>
            </div>
          </div>
          <form className=\"grid gap-3\">
            <input className=\"rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/20\" placeholder=\"Full name\"/>
            <input className=\"rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/20\" placeholder=\"Email\"/>
            <input className=\"rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/20\" placeholder=\"Phone / WhatsApp\"/>
            <textarea className=\"min-h-[120px] rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/20\" placeholder=\"Tell us about your goals (yield vs. growth, budget, timeline)\"></textarea>
            <button type=\"button\" className=\"inline-flex items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 text-sm font-medium text-white shadow-sm hover:opacity-90\">
              Submit Enquiry <ArrowRight className=\"h-4 w-4\" />
            </button>
            <div className=\"text-xs text-gray-500\">This form is a placeholder. Hook it to your backend or a tool like Tally/Typeform.</div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className=\"border-t border-black/5 bg-white/60\">
        <div className=\"mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600\">
          <div className=\"flex flex-col md:flex-row md:items-center md:justify-between gap-4\">
            <div className=\"flex items-center gap-2\">
              <div className=\"flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white font-bold\">GC</div>
              <span>© {new Date().getFullYear()} George Capital. All rights reserved.</span>
            </div>
            <div className=\"flex flex-wrap items-center gap-4\">
              <div className=\"flex items-center gap-2\"><Mail className=\"h-4 w-4\"/> <span>hello@georgecapital.co (example)</span></div>
              <div className=\"flex items-center gap-2\"><Phone className=\"h-4 w-4\"/> <span>+91-XXXXXXXXXX (example)</span></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
