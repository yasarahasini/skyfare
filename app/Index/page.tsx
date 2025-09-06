"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import Link from "next/link"
import toursData from "../ToursData.json"
import { useState } from "react"

export default function Index() {
  const [selectedTour, setSelectedTour] = useState(null)

  return (
    <>
      {/* Hero Section */}
      <div className="hero g-screen min-h-screen flex justify-center items-center z-10">
        <div className="hero-content relative text-center">
          <h1 className="xl:text-8xl lg:text-7xl md:text-6xl text-4xl unbounded-font font-bold text-white">
            Find Your Best <br /> Travels Package
          </h1>
          <p className="pt-3 text-[#ffffffb3] md:pb-10 pb-5">
            Planning for a trip?
          </p>
          <button className="btn bg-white group text-[#193555] hover:bg-[#193555] font-bold px-6 w-auto py-4 rounded-full cursor-pointer transition-colors duration-300">
            <a
              href="#"
              className="unbounded-font text-sm xl:text-md uppercase group-hover:text-white transition-colors duration-300 tracking-wider"
            >
              View All Tours
            </a>
          </button>
        </div>
      </div>

      {/* Travel Section */}
      <div className="travel px-[2%] sm:px-[8%] lg:px-[12%] py-[80px] lg:py-[120px] flex flex-col gap-10 lg:gap-14">
        <div className="travel-content text-center">
          <h1 className="unbounded-font text-4xl font-semibold pb-3">
            Find Out The Best Travel Choice in Sri Lanka
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor aenean massa.
          </p>
        </div>

        <div className="travel-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {toursData.map((tour) => (
            <Link href={`/TourDetails/${tour.id}`} key={tour.id}>
              <div className="travel-item rounded-xl overflow-hidden relative group transition-all duration-300 h-[400px]">
                <Image
                  src={tour.Images}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3">
                  <h2 className="text-lg font-semibold">{tour.title}</h2>
                  <p className="text-sm flex items-center gap-1">
                    <FontAwesomeIcon icon={faLocationDot} className="text-red-400" />{" "}
                    {tour.location}
                  </p>
                  <p className="text-sm font-bold">{tour.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
