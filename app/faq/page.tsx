export default function FaqPage() {
  const faqs = [
    {
      question: "What services are included in event planning?",
      answer: "My planning services include venue selection, vendor coordination, budget management, timeline creation, guest list management, design consultation, and handling all logistics leading up to your event. For full management packages, I also provide day-of coordination to ensure flawless execution."
    },
    {
      question: "How much does it cost to hire an event planner?",
      answer: "My pricing varies based on your event type and scope. Weddings start at $2,500, private celebrations at $1,500, and day-of coordination at $1,000. Corporate and destination events are custom quoted based on your specific needs and budget."
    },
    {
      question: "How much lead time do you need?",
      answer: "Ideally, I recommend starting planning 6-12 months before your event. However, I can work with shorter timelines depending on availability. Small events may need only 2-3 months. Contact me to discuss your timeline."
    },
    {
      question: "Do you work with destination events?",
      answer: "Yes! I specialize in destination events and have relationships with vendors in major event locations worldwide. I handle all the complexities including permits, travel coordination, local vendor connections, and multi-day logistics."
    },
    {
      question: "Can you work within a specific budget?",
      answer: "Absolutely. I work with clients of all budget levels. During our initial consultation, we'll discuss your budget and I'll propose solutions that maximize impact while staying within your financial parameters."
    },
    {
      question: "What if I only need day-of coordination?",
      answer: "Perfect! If you've already planned your event, I offer day-of coordination packages starting at $1,000. I manage timing, vendor coordination, guest flow, and any last-minute issues so you can relax and enjoy your event."
    },
    {
      question: "How do you handle vendor selection?",
      answer: "Based on your vision and budget, I leverage my network of trusted vendors and provide recommendations. You have final approval on all vendors. My relationships mean better rates and quality assurance for you."
    },
    {
      question: "What if something goes wrong on event day?",
      answer: "With proper planning and preparation, most issues are prevented. When unexpected situations occur, I handle them quietly and professionally so your guests never notice. I've managed every scenario imaginable over 15+ years."
    },
    {
      question: "Do you offer day-of-only services?",
      answer: "Yes! If you've planned your event but want professional on-the-day management, I offer day-of coordination starting at $1,000. I'll review all details, coordinate vendors, manage timeline, and ensure smooth execution."
    },
    {
      question: "How do we get started?",
      answer: "Contact me through the inquiry form on our website or call directly. We'll schedule a consultation to discuss your vision, timeline, and budget. After that, we'll create a proposal outlining services and next steps."
    }
  ];

  return (
    <div>
      <section className="bg-[linear-gradient(135deg,#4B3621_0%,#8B5E3C_45%,#A68966_100%)] py-16 text-white">
        <div className="mx-auto w-full max-w-6xl px-4">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Frequently Asked Questions</h1>
          <p className="mt-4 max-w-2xl" style={{color: '#D2B48C'}}>
            Find answers to common questions about my event planning services.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <article 
              key={index} 
              className="rounded-lg border p-6 transition-shadow hover:shadow-md"
              style={{ borderColor: '#A68966', backgroundColor: '#faf8f5' }}
            >
              <h2 className="text-lg font-semibold" style={{ color: '#4B3621' }}>
                {faq.question}
              </h2>
              <p className="mt-3" style={{ color: '#8B5E3C' }}>{faq.answer}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-xl p-8" style={{backgroundColor: '#f5f1ed', borderColor: '#A68966', border: '1px solid #A68966'}}>
          <h3 className="text-2xl font-semibold" style={{color: '#4B3621'}}>
            Didn't find your answer?
          </h3>
          <p className="mt-3" style={{color: '#8B5E3C'}}>
            Feel free to reach out with any other questions. I'm always happy to discuss your event planning needs.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block rounded-md px-6 py-3 font-semibold text-white hover:opacity-90 transition-all"
            style={{backgroundColor: '#8B5E3C'}}
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}
