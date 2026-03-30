import Image from "next/image";
import { Star } from "lucide-react";

export default function PortfolioPage() {
  const portfolio = [
    {
      id: "portfolio-001",
      title: "Lakeside Garden Wedding",
      category: "Weddings",
      date: "June 2024",
      guests: 150,
      description: "An elegant outdoor wedding with custom florals and live band entertainment.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      highlights: ["Custom Venue Transformation", "Live Band Entertainment", "5-Course Dinner", "Luxury Accommodations"],
    },
    {
      id: "portfolio-002",
      title: "Tech Conference 2024",
      category: "Corporate Events",
      date: "September 2024",
      guests: 500,
      description: "3-day international tech conference with keynote speakers and networking events.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      highlights: ["International Speakers", "Networking Sessions", "Gala Dinner", "Virtual Attendance Option"],
    },
    {
      id: "portfolio-003",
      title: "Barcelona Destination Wedding",
      category: "Destination Events",
      date: "May 2024",
      guests: 80,
      description: "3-day celebration across Barcelona with welcome party and beachside ceremony.",
      image: "https://images.unsplash.com/photo-1469027498261-1e1e0293e4a5?auto=format&fit=crop&w=800&q=80",
      highlights: ["International Guests", "Multi-City Events", "Luxury Villa", "Local Experiences"],
    },
    {
      id: "portfolio-004",
      title: "50th Birthday Celebration",
      category: "Private Celebrations",
      date: "April 2024",
      guests: 100,
      description: "Surprise birthday weekend with themed entertainment and personalized touches.",
      image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?auto=format&fit=crop&w=800&q=80",
      highlights: ["Surprise Entertainment", "Custom Decor", "Interactive Games", "Photo Booth"],
    },
    {
      id: "portfolio-005",
      title: "Corporate Gala Dinner",
      category: "Corporate Events",
      date: "November 2024",
      guests: 250,
      description: "Annual awards gala with silent auction and live entertainment.",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80",
      highlights: ["Luxury Venue", "Silent Auction", "Live Band", "Award Ceremony"],
    },
    {
      id: "portfolio-006",
      title: "Small Intimate Wedding",
      category: "Weddings",
      date: "July 2024",
      guests: 45,
      description: "Cozy botanical garden wedding with personal touches and close family.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      highlights: ["Botanical Garden", "Local Catering", "Intimate Ceremony", "Personal Vows"],
    },
  ];

  const testimonials = [
    {
      name: "Sarah & James",
      event: "Wedding",
      quote: "She managed to turn our dream wedding into reality. Every detail was perfect and she made the whole process stress-free!",
      rating: 5,
    },
    {
      name: "Michelle Chen",
      event: "Corporate Event",
      quote: "Professional, creative, and detail-oriented. Our conference was a huge success thanks to her planning.",
      rating: 5,
    },
    {
      name: "The Rodriguez Family",
      event: "Destination Wedding",
      quote: "Planning a wedding in Spain seemed complicated, but she handled everything beautifully. Guests are still talking about it!",
      rating: 5,
    },
  ];

  return (
    <div>
      <section className="bg-[linear-gradient(135deg,#4B3621_0%,#8B5E3C_45%,#A68966_100%)] py-16 text-white">
        <div className="mx-auto w-full max-w-6xl px-4">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Portfolio</h1>
          <p className="mt-4 max-w-2xl" style={{color: '#D2B48C'}}>
            Browse a selection of events I have brought to life for my clients.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-xl border shadow-sm transition-transform hover:scale-105"
              style={{ borderColor: "#A68966", backgroundColor: "#faf8f5" }}
            >
              <div className="relative h-48 w-full" style={{ backgroundColor: "#D2B48C" }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase" style={{color: '#8B5E3C'}}>
                      {item.category}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold" style={{ color: "#4B3621" }}>
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-2 text-sm" style={{ color: "#8B5E3C" }}>{item.description}</p>
                <div className="mt-4 flex items-center justify-between text-sm" style={{ color: "#8B5E3C" }}>
                  <span>{item.date}</span>
                  <span>{item.guests} Guests</span>
                </div>
                <div className="mt-4 border-t pt-4" style={{ borderColor: "#A68966" }}>
                  <p className="text-xs font-semibold" style={{ color: "#4B3621" }}>Highlights:</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="inline-block rounded-full px-3 py-1 text-xs font-medium"
                        style={{
                          backgroundColor: '#f5f1ed',
                          color: '#8B5E3C',
                          border: '1px solid #A68966'
                        }}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16"  style={{backgroundColor: '#f5f1ed'}}>
        <div className="mx-auto w-full max-w-6xl px-4">
          <h2 className="text-3xl font-semibold" style={{color: '#4B3621'}}>
            What My Clients Say
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-xl border p-8 shadow-sm"
                style={{ borderColor: "#A68966", backgroundColor: "#faf8f5" }}
              >
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-current"
                      style={{ color: "#8B5E3C" }}
                    />
                  ))}
                </div>
                <p className="mt-4 italic" style={{ color: "#8B5E3C" }}>
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="mt-6 border-t pt-6" style={{ borderColor: "#A68966" }}>
                  <p className="font-semibold" style={{ color: "#4B3621" }}>
                    {testimonial.name}
                  </p>
                  <p className="text-sm" style={{ color: "#8B5E3C" }}>{testimonial.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold"  style={{color: '#4B3621'}}>
          Ready to Create Your Story?
        </h2>
        <p className="mt-4 text-lg" style={{color: '#8B5E3C'}}>
          Let&apos;s discuss your vision and make your event unforgettable.
        </p>
        <div className="mt-8">
          <a
            href="/contact"
            className="inline-block rounded-md px-8 py-3 font-semibold text-white hover:opacity-90 transition-all"
            style={{backgroundColor: '#8B5E3C'}}
          >
            Start Planning
          </a>
        </div>
      </section>
    </div>
  );
}


