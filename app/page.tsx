
import Link from "next/link";
import { Heart, Target, Plane, Gift, ListTodo, Clock } from "lucide-react";

const services = [
  {
    id: "svc-001",
    title: "Weddings",
    description: "From intimate ceremonies to grand celebrations. I handle every detail from venue selection to the final dance.",
    icon: Heart,
    color: "from-[#f5f1ed] to-[#faf8f5]"
  },
  {
    id: "svc-002",
    title: "Corporate Events",
    description: "Professional conferences, gala dinners, and team celebrations tailored to your brand.",
    icon: Target,
    color: "from-[#faf8f5] to-[#f5f1ed]"
  },
  {
    id: "svc-003",
    title: "Destination Events",
    description: "Epic getaways and destination celebrations in exotic locations worldwide.",
    icon: Plane,
    color: "from-[#f5f1ed] to-[#faf8f5]"
  },
  {
    id: "svc-004",
    title: "Private Celebrations",
    description: "Birthdays, anniversaries, reunions, and personal milestones made unforgettable.",
    icon: Gift,
    color: "from-[#faf8f5] to-[#f5f1ed]"
  },
  {
    id: "svc-005",
    title: "Full Event Management",
    description: "Complete end-to-end planning with vendor coordination and day-of execution.",
    icon: ListTodo,
    color: "from-[#f5f1ed] to-[#faf8f5]"
  },
  {
    id: "svc-006",
    title: "Day-of Coordination",
    description: "Already planned? I'll manage logistics and ensure flawless execution on your big day.",
    icon: Clock,
    color: "from-[#faf8f5] to-[#f5f1ed]"
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="relative isolate flex min-h-screen min-h-[100svh] w-full items-center overflow-hidden text-white">
        <video
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/videos/hero001.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(120deg, rgba(75,54,33,0.82) 0%, rgba(139,94,60,0.62) 45%, rgba(166,137,102,0.55) 100%)",
          }}
        />
        <div className="mx-auto w-full max-w-6xl px-4">
          <p className="mb-3 inline-flex rounded-full border border-white/25 px-3 py-1 text-xs uppercase tracking-wide" style={{ color: '#D2B48C' }}>
            Professional Event Planning
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            I plan your events, so you can enjoy them.
          </h1>
          <p className="mt-4 max-w-2xl" style={{ color: '#D2B48C' }}>
            From intimate gatherings to grand celebrations, I handle every detail of your event so you can focus on what matters most.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/services" className="rounded-md px-6 py-3 text-sm font-semibold hover:opacity-90 transition-all" style={{backgroundColor: '#D2B48C', color: '#4B3621'}}>
              Explore Services
            </Link>
            <Link href="/contact" className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl"  style={{color: '#4B3621'}}>
            Services I Offer
          </h2>
          <p className="mt-3 text-lg" style={{ color: '#8B5E3C' }}>
            Whatever your vision, I have the expertise to bring it to life
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
            <article
              key={service.id}
              className={`rounded-xl border transition-transform hover:scale-105 p-6 shadow-sm dark:border-white/10`}
              style={{
                backgroundColor: service.color.includes('from-[#f5f1ed]') ? '#f5f1ed' : '#faf8f5',
                borderColor: '#A68966'
              }}
            >
              <div className="mb-4"><IconComponent size={40} style={{color: '#8B5E3C'}} /></div>
              <h3 className="text-xl font-semibold" style={{color: '#4B3621'}}>{service.title}</h3>
              <p className="mt-2" style={{color: '#8B5E3C'}}>{service.description}</p>
              <Link
                href="/services"
                className="mt-4 inline-block text-sm font-medium hover:opacity-80"
                style={{color: '#8B5E3C'}}
              >
                Learn more â†’
              </Link>
            </article>
            );
            })}
        </div>
      </section>

      <section className="py-16"  style={{backgroundColor: '#f5f1ed'}}>
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight"  style={{color: '#4B3621'}}>
                Why Work With Me?
              </h2>
              <div className="mt-8 space-y-6">
                <div>
                  <h4 className="font-semibold"  style={{color: '#4B3621'}}>Personalized Attention</h4>
                  <p className="mt-2"  style={{color: '#8B5E3C'}}>
                    I treat your event like my own, ensuring every detail reflects your vision.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold"  style={{color: '#4B3621'}}>Vendor Network</h4>
                  <p className="mt-2"  style={{color: '#8B5E3C'}}>
                    Years of relationships with top vendors means better pricing and quality.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold"  style={{color: '#4B3621'}}>Stress-Free Planning</h4>
                  <p className="mt-2"  style={{color: '#8B5E3C'}}>
                    Let me handle the logistics while you focus on enjoying the journey.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-96 overflow-hidden rounded-xl" style={{ backgroundColor: '#D2B48C' }}>
              <div className="flex h-full items-center justify-center text-center" style={{ color: '#8B5E3C' }}>
                <p className="text-lg">Portfolio image placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight"  style={{color: '#4B3621'}}>
            Ready to Plan Your Event?
          </h2>
          <p className="mt-4 text-lg"  style={{color: '#8B5E3C'}}>
            Let&apos;s discuss your vision and create something amazing together.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-md px-6 py-3 font-semibold text-white hover:opacity-90 transition-all"
              style={{backgroundColor: '#8B5E3C'}}
            >
              Schedule Consultation
            </Link>
            <Link
              href="/portfolio"
              className="rounded-md px-6 py-3 font-semibold hover:opacity-90 transition-all"
              style={{border: '2px solid #8B5E3C', color: '#8B5E3C'}}
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


