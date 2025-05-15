// src/components/Features.js
export default function Features() {
  const features = [
    {
      title: "Real-time Updates",
      description: "Stay in sync with your contacts through instant notifications and updates.",
      icon: "🚀"
    },
    {
      title: "Simple Interface",
      description: "Clean, intuitive design makes keeping in touch easier than ever.",
      icon: "✨"
    },
    {
      title: "Cross-Platform",
      description: "Available on iOS, Android, and web so you can connect from anywhere.",
      icon: "📱"
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