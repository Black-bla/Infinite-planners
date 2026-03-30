import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { mockEvents } from "@/lib/mock-data";

type EventDetailProps = {
  params: Promise<{ id: string }>;
};

export default async function EventDetailPage({ params }: EventDetailProps) {
  const { id } = await params;
  const event = mockEvents.find((item) => item.slug === id);

  if (!event) {
    notFound();
  }

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-10">
      <Link href="/events" className="text-sm transition-opacity hover:opacity-80" style={{ color: '#8B5E3C' }}>
        &larr; Back to events
      </Link>

      <div className="mt-4 overflow-hidden rounded-2xl border shadow-sm" style={{ borderColor: '#A68966', backgroundColor: '#faf8f5' }}>
        <Image
          src={event.image}
          alt={event.title}
          width={1200}
          height={640}
          className="h-64 w-full object-cover"
          unoptimized
        />
        <div className="space-y-4 p-6">
          <h1 className="text-3xl font-semibold tracking-tight" style={{ color: '#4B3621' }}>{event.title}</h1>
          <p style={{ color: '#8B5E3C' }}>{event.description}</p>
          <div className="grid gap-3 text-sm md:grid-cols-2" style={{ color: '#8B5E3C' }}>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Price:</strong> ${event.price}</p>
            <p><strong>Rating:</strong> {event.ratings.toFixed(1)} / 5</p>
            <p><strong>Availability:</strong> {event.capacity - event.soldTickets} tickets left</p>
          </div>
          <button className="rounded-md px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: '#8B5E3C' }}>
            Start Booking
          </button>
        </div>
      </div>
    </section>
  );
}
