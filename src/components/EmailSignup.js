// src/components/EmailSignup.js
'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

export default function EmailSignup() {
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

  const resetForm = () => {
    setSubmitted(false);
    setEmail('');
  };

  return (
    <section id="waitlist" className="py-12 md:py-16 lg:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-8 text-center">
          Join Our Waitlist
        </h2>
        <p className="text-center text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
          Be the first to know when Katchup launches. Get early access and exclusive updates.
        </p>
        
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-katchup-red"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit" 
              className="btn-primary w-full sm:w-auto sm:self-center px-8"
              disabled={loading}
            >
              {loading ? 'Joining...' : 'Join Waitlist'}
            </button>
          </form>
        ) : (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-xl mx-auto text-center">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-green-100 rounded-full p-2 mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">You're on the list!</h3>
              <p className="text-green-700 mb-4">Thanks for joining our waitlist. We'll notify you as soon as Katchup is ready.</p>
              <button 
                onClick={resetForm} 
                className="text-sm bg-white text-green-700 hover:bg-green-50 border border-green-300 font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Add another email
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}