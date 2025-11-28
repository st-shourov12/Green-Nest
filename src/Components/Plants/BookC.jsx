import React from "react";
import { toast } from "react-toastify";


const BookC = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;

    e.target.reset()

    
    toast.success(`${name} Consultation booked successfully!`);

    
  };

  return (
    <div className="flex justify-center items-center py-5 bg-green-100 ">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-6 w-96"
      >
        <h2 className="text-2xl font-semibold text-center mb-4 text-green-700">
          Book Consultation
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          
          className="w-full mb-3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          
          className="w-full mb-3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          Book Now
        </button>
      </form>

    
    </div>
  );
};

export default BookC;
