import { Heart, Target, Plane, Gift, ListTodo, Clock, Check } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: "weddings",
      title: "Weddings",
      icon: Heart,
      description: "Your wedding day should be perfect. I manage every aspect—from venue selection to vendor coordination, timeline management, and day-of execution. Whether you're planning an intimate elopement or a 300-person celebration, I've got you covered.",
      features: ["Venue Selection", "Vendor Coordination", "Budget Management", "Timeline Planning", "Guest Coordination", "Day-of Coordination"],
      price: "Starting at $2,500"
    },
    {
      id: "corporate",
      title: "Corporate Events",
      icon: Target,
      description: "Professional events that reflect your brand. I specialize in conferences, gala dinners, product launches, and corporate retreats that leave lasting impressions on your team and clients.",
      features: ["Event Strategy", "Venue Sourcing", "Catering & Bar Management", "AV & Production", "Registration Management", "Post-Event Analysis"],
      price: "Custom Quote"
    },
    {
      id: "destination",
      title: "Destination Events",
      icon: Plane,
      description: "Dream of celebrating somewhere exotic? I handle all the complexities of destination planning—permits, travel coordination, local vendor relationships, and multi-day event logistics.",
      features: ["Destination Scouting", "Travel Coordination", "Local Vendor Network", "Multi-Event Planning", "Guest Travel Services", "On-Ground Management"],
      price: "Custom Quote"
    },
    {
      id: "private",
      title: "Private Celebrations",
      icon: Gift,
      description: "Milestone moments deserve special attention. Birthdays, anniversaries, reunions, and personal celebrations are crafted to be uniquely yours with creativity and care.",
      features: ["Concept Development", "Vendor Selection", "Décor & Design", "Timeline Management", "Guest Experience Planning", "Day-of Execution"],
      price: "Starting at $1,500"
    },
    {
      id: "fullmanagement",
      title: "Full Event Management",
      icon: ListTodo,
      description: "Complete end-to-end planning from vision to execution. I create a detailed proposal, manage all communications, coordinate with vendors, handle budgets, and ensure everything runs smoothly.",
      features: ["Consultation & Planning", "Venue Booking", "Vendor Management", "Budget Tracking", "Communication Hub", "Day-of Direction"],
      price: "15-20% of Event Budget"
    },
    {
      id: "dayof",
      title: "Day-of Coordination",
      icon: Clock,
      description: "Already have your event planned? I'll take over on the big day to ensure flawless execution. I manage timing, vendor coordination, guest flow, and problem-solving so you can relax.",
      features: ["Timeline Management", "Vendor On-Time Arrival", "Guest Communication", "Setup Coordination", "Troubleshooting", "Guest Satisfaction"],
      price: "Starting at $1,000"
    }
  ];

  return (
    <div>
      <section className="bg-[linear-gradient(135deg,#4B3621_0%,#8B5E3C_45%,#A68966_100%)] py-16 text-white">
        <div className="mx-auto w-full max-w-6xl px-4">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Services</h1>
          <p className="mt-4 max-w-2xl" style={{color: '#D2B48C'}}>
            Whatever your event dream, I have a service tailored to your needs and budget.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="space-y-12">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
            <div key={service.id} className="grid gap-8 border-b pb-12 md:grid-cols-3 last:border-b-0" style={{ borderColor: '#A68966' }}>
              <div>
                <div className="mb-4"><IconComponent size={48} style={{ color: '#8B5E3C' }} /></div>
                <h2 className="text-2xl font-semibold" style={{ color: '#4B3621' }}>{service.title}</h2>
                <p className="mt-2 text-lg font-semibold" style={{ color: '#8B5E3C' }}>{service.price}</p>
              </div>
              <div className="md:col-span-2">
                <p style={{ color: '#8B5E3C' }}>{service.description}</p>
                <div className="mt-6">
                  <h4 className="mb-3 font-semibold" style={{ color: '#4B3621' }}>What&apos;s Included:</h4>
                  <ul className="grid gap-2 md:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center" style={{ color: '#8B5E3C' }}>
                        <Check size={18} className="mr-3 flex-shrink-0" style={{color: '#8B5E3C'}} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
          })}
        </div>
      </section>

      <section className="py-16" style={{backgroundColor: '#f5f1ed'}}>
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="rounded-xl p-8 shadow-sm" style={{backgroundColor: '#faf8f5'}}>
            <h2 className="text-2xl font-semibold" style={{color: '#4B3621'}}>
              Can&apos;t Find What You are Looking For?
            </h2>
            <p className="mt-4" style={{ color: '#8B5E3C' }}>
              Every event is unique. If you have a custom request or a combination of services in mind, let&apos;s talk about creating a package that works perfectly for you.
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-block rounded-md px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#8B5E3C' }}
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
