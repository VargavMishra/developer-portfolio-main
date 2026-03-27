"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "3c9665ce-0e2f-41bc-87d1-20d784b9ab61");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("Message Sent !!");
        event.target.reset();
      } else {
        setResult("Submission failed. Please try again later.");
      }
    } catch (error) {
      setResult("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <p className="font-bold text-3xl md:text-4xl text-[#16f2b3] uppercase tracking-wider mb-4">
        CONTACT WITH ME
      </p>
      <div className="rounded-xl border border-[#2f3a5a] bg-[#020821] p-6 md:p-8 shadow-xl shadow-black/30">
        <p className="text-sm md:text-base text-[#d3d8e8] mb-6">
          If you have any questions or concerns, please don't hesitate to contact me. I am open to any
          work opportunities that align with my skills and interests.
        </p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm md:text-base text-[#a8b2d7] mb-2">Your Name:</label>
            <input
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-[#2f3a5a] bg-[#07133f] px-4 py-3 text-white outline-none transition-all duration-200 focus:border-[#16f2b3]"
            />
          </div>
          <div>
            <label className="block text-sm md:text-base text-[#a8b2d7] mb-2">Your Email:</label>
            <input
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-[#2f3a5a] bg-[#07133f] px-4 py-3 text-white outline-none transition-all duration-200 focus:border-[#16f2b3]"
            />
          </div>

          <div>
            <label className="block text-sm md:text-base text-[#a8b2d7] mb-2">Your Message:</label>
            <textarea
              name="message"
              required
              rows="5"
              className="w-full rounded-lg border border-[#2f3a5a] bg-[#07133f] px-4 py-3 text-white outline-none transition-all duration-200 focus:border-[#16f2b3]"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-pink-500/40 transition-all duration-300 hover:from-pink-600 hover:to-violet-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? 'Sending Message...' : 'Send Message'}
          </button>

          <p className="text-center text-sm text-[#16f2b3] min-h-[22px]">{result}</p>
        </form>
      </div>
    </div>
  );
}