import React, { useState, useEffect } from "react";

const CountdownPopup = () => {
  const [showPopup, setShowPopup] = useState(true); 
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft === 0) {
      setShowPopup(false); 
    } else {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer); 
    }
  }, [timeLeft]);

  const handleClosePopup = () => {
    setShowPopup(false); 
  };

  return (
    <>
     {showPopup && (
  <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
    <div className="bg-yellow-400 text-black p-6 text-center shadow-lg rounded-lg w-96">
      <h2 className="text-xl font-bold">Hurry! Limited Time Offer</h2>
      <p className="mt-2">Offer ends in: <strong>{timeLeft} seconds</strong></p>
      <button
        onClick={handleClosePopup}
        className="mt-4 bg-red-600 text-white py-2 px-4 rounded-full"
      >
        Close
      </button>
    </div>
  </div>
)}

    </>
  );
};

export default CountdownPopup;
