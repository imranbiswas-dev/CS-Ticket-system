import React from "react";
import { MdOutlineDateRange } from "react-icons/md";

const Card = ({ card, handleAddToCart }) => {
  const {
    title,
    status,
    description,
    ticket_id,
    priority,
    assigned_agent,
    date,
  } = card;
  return (
    <div onClick={()=>handleAddToCart(card)} className="w-128.25 h-37 p-5 space-y-2 shadow-md bg-base-100 ">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>
        <span
          className={`badge text-white p- ${
            status === "Open"
              ? "bg-success"
              : status === "In-Progress"
                ? "bg-warning"
                : "bg-gray-500"
          }`}
        >
          {status}
        </span>
      </div>
      <p className="text-gray-500">{description}</p>
      <div className="flex justify-between">
        <span className="flex gap-5">
          <p className="text-gray-500">#{ticket_id}</p>
          <span
            className={` font-semibold ${
              priority === "HIGH"
                ? "text-red-500"
                : priority === "MEDIUM"
                  ? "text-yellow-500"
                  : "text-green-500"
            }`}
          >
            {priority} PRIORITY
          </span>
        </span>
        <span className="flex gap-5 text-gray-500">
          <h3>{assigned_agent}</h3>
          <span className="flex  items-center gap-1">
            <MdOutlineDateRange size={24} />
            <p>{date}</p>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Card;
