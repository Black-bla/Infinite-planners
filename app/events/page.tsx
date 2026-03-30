import Image from "next/image";
import Link from "next/link";
import { EVENT_CATEGORY_LABELS } from "@/lib/constants";
import { mockEvents } from "@/lib/mock-data";

export default function EventsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight" style={{ color: '#4B3621' }}>Discover Events</h1>
      <p className="mt-2" style={{ color: '#8B5E3C' }}>Browse upcoming events and jump into details.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockEvents.map((event) => {
          const soldRatio = Math.round((event.soldTickets / event.capacity) * 100);
          return (
            <article
              key={event.id}
              className="overflow-hidden rounded-xl border shadow-sm"
              style={{ borderColor: '#A68966', backgroundColor: '#faf8f5' }}
            >
              <Image
                src={event.image}
                alt={event.title}
                width={1200}
                height={440}
                className="h-44 w-full object-cover"
                unoptimized
              />
              <div className="space-y-3 p-4">
                <span className="inline-flex rounded-full px-2 py-1 text-xs font-medium" style={{
                  backgroundColor: '#f5f1ed',
                  color: '#8B5E3C',
                  border: '1px solid #A68966'
                }}>
                  {EVENT_CATEGORY_LABELS[event.category]}
                </span>
                <h2 className="text-lg font-semibold" style={{ color: '#4B3621' }}>{event.title}</h2>
                <p className="text-sm" style={{ color: '#8B5E3C' }}>{event.location}</p>
                <p className="text-sm" style={{ color: '#8B5E3C' }}>{event.date} at {event.time}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold" style={{ color: '#4B3621' }}>${event.price}</span>
                  <span style={{ color: '#8B5E3C' }}>{soldRatio}% filled</span>
                </div>
                <Link
                  href={`/events/${event.slug}`}
                  className="inline-flex rounded-md px-3 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#8B5E3C' }}
                >
                  View event
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
