// src/components/Hero.js
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 pt-12 md:pt-16 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-katchup-dark mb-4 md:mb-6">
              <span className="whitespace-normal sm:whitespace-nowrap">
                No Algorithm. Just <span className="text-katchup-red">Katchup</span>
              </span>
            </h1>
            <p className="text-sm sm:text-base text-gray-500 mb-2">
              A private space to share life updates with your closest people — without the noise.
            </p>

            <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8">
              It’s not social media — it’s just social.
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

          {/* Phone Mockup */}
          <div className="md:w-1/2 mt-8 md:mt-0 w-full">
            <div className="relative mx-auto max-w-[280px]">
              {/* Phone mockup with thinner borders (8px instead of 14px) */}
              <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                {/* Side buttons */}
                <div className="h-[32px] w-[2px] bg-gray-800 dark:bg-gray-800 absolute -left-[10px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[2px] bg-gray-800 dark:bg-gray-800 absolute -left-[10px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[2px] bg-gray-800 dark:bg-gray-800 absolute -left-[10px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[2px] bg-gray-800 dark:bg-gray-800 absolute -right-[10px] top-[142px] rounded-r-lg"></div>

                {/* Screen with your screenshot */}
                <div className="rounded-[2rem] overflow-hidden w-[284px] h-[584px]">
                  <Image
                    src="/images/app-screenshot.png"
                    alt="Katchup App Screenshot"
                    width={284}
                    height={584}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}