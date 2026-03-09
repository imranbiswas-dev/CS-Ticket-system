import React from "react";

const Cart = ({ c, handelResolved }) => {
  const { title } = c;
  return (
    <div className="flex flex-col p-5 bg-base-100 gap-5 shadow-md w-[358px] h-[113px]">
      <h2 className="text-[18px] font-semibold">{title}</h2>
      <button
        onClick={() => handelResolved(c)}
        className="-mt-2 btn btn-success text-white"
      >
        Complete
      </button>
    </div>
  );
};

export default Cart;
