import { Palette, ClipboardList, Lightbulb, Smile } from "lucide-react";

export default function AboutPage() {
  return (
    <div>
      <section className="bg-[linear-gradient(135deg,#4B3621_0%,#8B5E3C_45%,#A68966_100%)] py-16 text-white">
        <div className="mx-auto w-full max-w-6xl px-4">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">About Me</h1>
          <p className="mt-4 max-w-2xl" style={{color: '#D2B48C'}}>
            Dedicated to creating unforgettable experiences for my clients
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold" style={{ color: "#4B3621" }}>
              My Story
            </h2>
            <div className="mt-6 space-y-4" style={{ color: "#8B5E3C" }}>
              <p>
                I've been planning events for over 15 years, starting with my own wedding—which taught me that every detail matters, and stress-free planning results in better celebrations.
              </p>
              <p>
                What began as helping friends turned into a full-time passion. I've planned over 200 events across multiple continents, from intimate gatherings of 20 to destination celebrations with 500+ guests.
              </p>
              <p>
                My philosophy is simple: your event should reflect YOUR vision, not generic trends. I take the time to truly understand what matters to you, then execute flawlessly so you can focus on enjoying the moment.
              </p>
              <p>
                Every event is an opportunity to create memories that will last a lifetime. That responsibility drives me to bring my creativity, expertise, and heart to everything I do.
              </p>
            </div>
          </div>
          <div className="relative h-96 overflow-hidden rounded-xl" style={{ backgroundColor: "#D2B48C" }}>
            <div className="flex h-full items-center justify-center text-center" style={{ color: "#8B5E3C" }}>
              <p className="text-lg">Personal photo placeholder</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#f5f1ed" }}>
        <div className="mx-auto w-full max-w-6xl px-4">
          <h2 className="text-3xl font-semibold" style={{ color: "#4B3621" }}>
            My Expertise
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border p-8 shadow-sm" style={{ backgroundColor: "#faf8f5", borderColor: "#A68966" }}>
              <h3 className="text-2xl font-semibold" style={{ color: "#4B3621" }}>
                15+ Years
              </h3>
              <p className="mt-3" style={{ color: "#8B5E3C" }}>
                of professional event planning experience across multiple industries and event types.
              </p>
            </div>
            <div className="rounded-xl border p-8 shadow-sm" style={{ backgroundColor: "#faf8f5", borderColor: "#A68966" }}>
              <h3 className="text-2xl font-semibold" style={{ color: "#4B3621" }}>
                200+ Events
              </h3>
              <p className="mt-3" style={{ color: "#8B5E3C" }}>
                successfully planned and executed, from intimate gatherings to large-scale destination celebrations.
              </p>
            </div>
            <div className="rounded-xl border p-8 shadow-sm" style={{ backgroundColor: "#faf8f5", borderColor: "#A68966" }}>
              <h3 className="text-2xl font-semibold" style={{ color: "#4B3621" }}>
                Global Network
              </h3>
              <p className="mt-3" style={{ color: "#8B5E3C" }}>
                of trusted vendors and partners in key event destinations worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold" style={{ color: "#4B3621" }}>
          What I&apos;m Passionate About
        </h2>
        <div className="mt-8 space-y-6">
          <div className="flex gap-6">
            <Palette size={40} className="flex-shrink-0" style={{ color: "#8B5E3C" }} />
            <div>
              <h3 className="font-semibold" style={{ color: "#4B3621" }}>Creative Vision</h3>
              <p className="mt-2" style={{ color: "#8B5E3C" }}>
                Turning concepts into reality with custom designs and personalized touches that make your event uniquely yours.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <ClipboardList size={40} className="flex-shrink-0" style={{ color: "#8B5E3C" }} />
            <div>
              <h3 className="font-semibold" style={{ color: "#4B3621" }}>Attention to Detail</h3>
              <p className="mt-2" style={{ color: "#8B5E3C" }}>
                Nothing gets overlooked. From timeline management to vendor communication, every detail is tracked and perfected.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <Lightbulb size={40} className="flex-shrink-0" style={{ color: "#8B5E3C" }} />
            <div>
              <h3 className="font-semibold" style={{ color: "#4B3621" }}>Problem Solving</h3>
              <p className="mt-2" style={{ color: "#8B5E3C" }}>
                Years of experience mean I can handle anything—expected or unexpected—with calm professionalism.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <Smile size={40} className="flex-shrink-0" style={{ color: "#8B5E3C" }} />
            <div>
              <h3 className="font-semibold" style={{ color: "#4B3621" }}>Guest Experience</h3>
              <p className="mt-2" style={{ color: "#8B5E3C" }}>
                Creating experiences that wow—from seamless logistics to memorable moments that guests talk about for years.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold" style={{ color: "#4B3621" }}>
          Let&apos;s Work Together
        </h2>
        <p className="mx-auto mt-4 max-w-2xl" style={{ color: "#8B5E3C" }}>
          Whether you&apos;re at the beginning of your planning journey or looking for guidance, I&apos;m here to help bring your vision to life.
        </p>
        <div className="mt-8">
          <a
            href="/contact"
            className="inline-block rounded-md px-8 py-3 font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#8B5E3C" }}
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
