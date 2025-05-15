// src/components/Features.js
export default function Features() {
  const features = [
  {
    title: "No Algorithm. No Noise.",
    description: "Everyone sees everything — no ranking, no feeds, no pressure to perform. Katchup is built for real connection, not engagement metrics.",
    icon: "🧠"
  },
  {
    title: "Room-Based, Not Feed-Based",
    description: "Each post lives in a private room with your chosen circle — no followers, no strangers, no performative pressure.",
    icon: "🚪"
  },
  {
    title: "One Post a Day, From Everyone",
    description: "Like a group ritual — everyone shares once a day. It's low-effort, high-meaning, and helps you actually stay in sync.",
    icon: "📅"
  },
  {
    title: "Keep the Streak. Keep the Bond.",
    description: "Posting daily builds momentum — together. It’s not about pressure, but presence. You’ll want to keep it going.",
    icon: "🔥"
  },
  {
    title: "Not Another Group Chat",
    description: "No walls of one-liner replies. No chaos. Just intentional sharing that respects your time and attention.",
    icon: "💬"
  },
  {
    title: "Private. Casual. Yours.",
    description: "No public profiles. Katchup is your private space to share life as it really is — unfiltered.",
    icon: "🔒"
  }
];




  return (
    <section id="features" className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
          Why Choose Katchup?
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl md:text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}