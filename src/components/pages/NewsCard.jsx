import React from "react";
import { Link } from "react-router-dom";
import { FaEye, FaRegBookmark } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

const NewsCard = ({ singleNews }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    published_date,
  } = singleNews;

  return (
    <div className="card w-full bg-base-100 shadow-md rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="text-base font-semibold">{author.name}</h4>
            <p className="text-sm text-gray-500">
              {new Date(published_date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-gray-500 hover:text-gray-800">
            <FaRegBookmark size={20} />
          </button>
          <button className="text-gray-500 hover:text-gray-800">
            <FiShare2 size={20} />
          </button>
        </div>
      </div>

      {/* Image */}
      <figure className="px-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-60 object-cover rounded-lg"
        />
      </figure>

      {/* Body */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-xl font-bold leading-tight">{title}</h2>

        {/* Details */}
        <p className="text-sm text-gray-600 mt-3">
          {details.slice(0, 120)}...
          <Link
            to={`/article/${singleNews._id}`}
            className="text-blue-500 font-semibold"
          >
            Read More
          </Link>
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">
          {/* Rating */}
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <span key={i}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={i < Math.round(rating.number) ? "orange" : "none"}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-orange-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.5 2.5l2.96 6.35 7.04 1.02-5.1 4.97 1.2 6.98-6.25-3.28-6.25 3.28 1.2-6.98-5.1-4.97 7.04-1.02L11.5 2.5z"
                  />
                </svg>
              </span>
            ))}
            <span className="text-sm text-gray-700 font-bold ml-2">
              {rating.number}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1 text-gray-600">
            <FaEye />
            <span className="text-sm">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
