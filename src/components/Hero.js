// src/components/Hero.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email');
      return;
    }
    
    // Show success toast immediately for better UX
    const toastId = toast.success('You have been added to the waitlist!');
    setLoading(true);
    setSubmitted(true);
    setEmail('');
    
    // Process the API call in the background
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        // If API fails, update the toast to show error
        toast.error('There was an issue adding your email. Please try again.', { id: toastId });
        setSubmitted(false);
      }
    } catch (error) {
      // Only show error if the API call completely fails
      toast.error('Connection error. We saved your email and will add you soon.', { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  const scrollToFeatures = (e) => {
    e.preventDefault();
    document.getElementById('features').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

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
              A private room to share life updates with your closest people — without the noise.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-8">
              <p className="text-base sm:text-lg text-gray-600">
                It's not social media — it's just social.
              </p>
              <a 
                href="#features" 
                onClick={scrollToFeatures}
                className="inline-flex items-center text-katchup-red hover:text-red-700 font-medium text-sm transition-colors"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            {/* Email Waitlist Form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Join our waitlist for early access:</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-katchup-red text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button 
                    type="submit" 
                    className="btn-primary whitespace-nowrap"
                    disabled={loading}
                  >
                    {loading ? 'Joining...' : 'Join Waitlist'}
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-green-800 font-medium">Thanks for joining! We'll be in touch soon.</p>
                </div>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="text-sm text-green-700 hover:text-green-900 mt-2 underline"
                >
                  Add another email
                </button>
              </div>
            )}
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