"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

interface TourProps {
  tour: {
    title: string;
    price: string;
  };
}

const toursData = [
  {
    id: 1,
    title: "Sigiriya",
    location: "Sri Lanka",
    price: "$40",
    Images: "/Images/sigiriya.jpg",
    mainImage: "/Images/sigiriya.jpg",
  },
  {
    id: 2,
    title: "Kandy",
    location: "Sri Lanka",
    price: "$20",
    Images: "/Images/kandy.webp",
    mainImage: "/Images/kandy.webp",
  },
  {
    id: 3,
    title: "Ella",
    location: "Sri Lanka",
    price: "$35",
    Images: "/Images/Ella.webp",
    mainImage: "/Images/Ella.webp", // Fixed typo from .webg to .webp
  },
  {
    id: 4,
    title: "Galle Fort",
    location: "Sri Lanka",
    price: "$25",
    Images: "/Images/galle.jpg",
    mainImage: "/Images/galle.jpg",
  },
  {
    id: 5,
    title: "Nuwara Eliya",
    location: "Sri Lanka",
    price: "$30",
    Images: "/Images/nuwara-eliya.jpg",
    mainImage: "/Images/nuwara-eliya.jpg",
  },
  {
    id: 6,
    title: "Dambulla Cave Temple",
    location: "Sri Lanka",
    price: "$18",
    Images: "/Images/dambulla-cave.webp",
    mainImage: "/Images/dambulla-cave-main.avif",
  },
  {
    id: 7,
    title: "Arugam Bay",
    location: "Sri Lanka",
    price: "$22",
    Images: "/Images/arugam-bay.webp",
    mainImage: "/Images/arugam-bay-main.avif",
  },
  {
    id: 8,
    title: "Yala National Park",
    location: "Sri Lanka",
    price: "$38",
    Images: "/Images/yala-park.webp",
    mainImage: "/Images/yala-park-main.avif",
  },
];

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
        <>
          <p className="mt-4 text-green-600 font-semibold">
            Booking submitted for {adults} adult(s) and {children} child(ren).
          </p>

          <h4 className="text-lg font-semibold mt-5 pb-2">Recommended Tours</h4>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            className="travel-wrapper"
          >
            {toursData.map((tour) => (
              <SwiperSlide key={tour.id}>
                <Link href={`/TourDetails/${tour.id}`}>
                  <div className="travel-item rounded-xl overflow-hidden relative group transition-all duration-300 h-[400px] cursor-pointer">
                    <Image
                      src={tour.Images}
                      alt={tour.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3">
                      <h2 className="text-lg font-semibold">{tour.title}</h2>
                      <p className="text-sm flex items-center gap-1">
                        <FontAwesomeIcon icon={faLocationDot} className="text-red-400" />
                        {tour.location}
                      </p>
                      <p className="text-sm font-bold">{tour.price}</p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </div>
  );
}
