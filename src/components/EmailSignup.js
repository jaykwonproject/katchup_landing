// src/components/EmailSignup.js
'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email');
      return;
    }
    
    setLoading(true);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        toast.success('You have been added to the waitlist!');
        setEmail('');
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      toast.error(error.message || 'Failed to join waitlist');
    } finally {
      setLoading(false);
    }
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
      </div>
    </section>
  );
}