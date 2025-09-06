"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

interface TourProps {
  tour: {
    title: string;
    price: string;
  };
}

export default function BookingSidebar({ tour }: TourProps) {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full lg:w-[35%] bg-white p-6 rounded-md shadow-lg">
      <h4 className="text-xl font-semibold mb-4">Book This Tour</h4>
      <p className="text-gray-600 mb-4">
        Tour: <strong>{tour?.title}</strong>
      </p>
      <form onSubmit={handleSubmit}>
        {/* Adults */}
        <div className="flex items-center gap-3 mb-4">
          <label className="w-20 font-medium">Adults:</label>
          <div className="relative flex-1">
            <FontAwesomeIcon icon={faUser} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="number"
              min="1"
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              className="w-full pl-10 pr-3 py-2 border-2 border-gray-200 rounded-md outline-none"
              required
            />
          </div>
        </div>

        {/* Children */}
        <div className="flex items-center gap-3 mb-4">
          <label className="w-20 font-medium">Children:</label>
          <div className="relative flex-1">
            <FontAwesomeIcon icon={faUser} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="number"
              min="0"
              value={children}
              onChange={(e) => setChildren(Number(e.target.value))}
              className="w-full pl-10 pr-3 py-2 border-2 border-gray-200 rounded-md outline-none"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#193555] text-white font-bold py-3 rounded-md transition duration-300 hover:bg-[#1e4471]"
        >
          Book Now
        </button>
      </form>

      {submitted && (
        <p className="mt-4 text-green-600 font-semibold">
          Booking submitted for {adults} adult(s) and {children} child(ren).
        </p>
      )}
    </div>
  );
}
