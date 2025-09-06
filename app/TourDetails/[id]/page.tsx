import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import toursData from "../../ToursData.json";

import BookingSidebar from "./sidebar";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const tour = toursData.find((t) => t.id.toString() === id);

  if (!tour) return notFound();

  return (
    <>
      {/* Section Banner */}
      <div
        className="relative z-20 section-banner px-[12%] py-[50px] lg:py-[90px] min-h-[450px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${tour.Images})` }}
      >
        <h2 className="text-4xl font-normal z-10 relative text-white text-center w-full">
          {tour.title || "Wildness"}
        </h2>

        {/* Breadcrumb */}
        <ul className="text-white z-10 flex items-center gap-4 mt-4 justify-center">
          <li className="text-sm relative">
            <Link href="/">Home</Link>
          </li>
          <li className="text-sm relative flex items-center gap-2">
            <FontAwesomeIcon icon={faAngleRight} className="text-white" />
            <span>Tour Details</span>
          </li>
        </ul>
      </div>

      {/* Tour Details Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start px-[8%] py-[50px] gap-5">
        <div className="xl:w-[70%] lg:w-[60%] w-full">
          {/* Main Image Removed */}

          {/* Tour Info */}
          <div className="pt-4">
            <div>
              <h2 className="text-2xl font-semibold pb-1">{tour.title}</h2>
              <span className="text-gray-500 text-sm">Start from</span>
              <br />
              <span className="text-lg font-bold">{tour.price}</span>
            </div>

            {/* Description */}
            <h4 className="text-lg font-semibold pb-3 pt-4">Tour Description:</h4>
            <p className="text-[#94a3b8] text-sm pb-2">
              This is a wonderful trip to {tour.title}, located in {tour.location}. Enjoy the culture, food, and breathtaking sights. Price starts from {tour.price}.
            </p>
            <p className="text-[#94a3b8] text-sm pb-2">
              The advantage of its Latin origin and the relative meaninglessness of Lorem Ipsum allows designers to focus on layout.
            </p>

            {/* Comment Form */}
            <h4 className="text-lg font-semibold pt-6 pb-3">Leave A Comment:</h4>
            <form className="w-full space-y-4">
              <div className="flex flex-col lg:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border-2 border-gray-200 p-2 rounded-md w-full"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border-2 border-gray-200 p-2 rounded-md w-full"
                  required
                />
              </div>
              <textarea
                placeholder="Your comment"
                className="border-2 border-gray-200 p-2 rounded-md w-full min-h-[100px]"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Booking Sidebar */}
        <BookingSidebar tour={tour} />
      </div>
    </>
  );
}
