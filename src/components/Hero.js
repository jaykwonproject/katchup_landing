// src/components/Hero.js
export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 pt-12 md:pt-16 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-katchup-dark mb-4 md:mb-6">
              Stay Connected with <span className="text-katchup-red">Katchup</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8">
              A simple, modern way to keep in touch with your friends, family, and colleagues. Never miss an important update again.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a href="#waitlist" className="btn-primary text-center">
                Join the Waitlist
              </a>
              <a href="#features" className="btn-secondary text-center">
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 w-full">
            <div className="bg-white p-3 md:p-4 rounded-2xl shadow-xl max-w-sm mx-auto md:mx-0 md:max-w-none">
              {/* Placeholder for app screenshot */}
              <div className="bg-gray-200 rounded-xl aspect-[4/3] w-full flex items-center justify-center">
                <p className="text-gray-500 text-lg">App Screenshot</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}