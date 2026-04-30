'use client';

import { useState, type FormEvent } from 'react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-white">Stay Updated!</h3>
      <p className="text-gray-400 mb-6">
        Subscribe to get the latest news, updates, and exclusive offers.
      </p>

      {status === 'success' ? (
        <p className="text-green-400 font-semibold py-3" role="status">
          Thanks for your interest! Email subscription coming soon.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3"
        >
          <label htmlFor="subscribe-email" className="sr-only">
            Email address
          </label>
          <input
            id="subscribe-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 transition-colors"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full font-bold text-black hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
