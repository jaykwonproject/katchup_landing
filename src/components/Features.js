// src/components/Features.js
export default function Features() {
const features = [
  {
    title: "No Algorithm. Just Habit.",
    description: "Katchup encourages check-ins with the people that matter — no feeds, no noise, just a simple rhythm to stay close.",
    icon: "🔁"
  },
  {
    title: "Private by Default",
    description: "Your posts stay within your circle. No public profiles, no followers. Just a safe space to share.",
    icon: "🔒"
  },
  {
    title: "For Your Inner Circle",
    description: "Built for close friends, not followers. Katchup makes staying in touch feel less like a task — and more like a ritual.",
    icon: "🫶"
  },
  {
    title: "Low Effort, High Meaning",
    description: "Unfiltered photos. Short updates. No need to impress — just a way to show you’re still here.",
    icon: "📸"
  },
  {
    title: "Keep the Streak Alive",
    description: "A gentle nudge, not a guilt trip. Posting regularly helps everyone stay in sync — and you’ll actually want to do it.",
    icon: "🔥"
  },
  {
    title: "Not Another Group Chat",
    description: "No endless scroll. No one-liner replies. Just one post a day to keep everyone caught up.",
    icon: "💬"
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