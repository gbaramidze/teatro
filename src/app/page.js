'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Import the Image component

export default function App() {
  // Target date for the countdown: June 20, 2025
  const targetDate = new Date('2025-06-20T00:00:00').getTime();

  // State variables for countdown
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isComingSoon, setIsComingSoon] = useState(true);

  // Function to calculate and update the countdown
  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Check if the countdown has ended
    if (distance < 0) {
      setIsComingSoon(false);
      clearInterval(window.countdownInterval); // Clear the interval if countdown is over
      return;
    }

    // Calculate time components
    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    // Update state
    setDays(d);
    setHours(h);
    setMinutes(m);
    setSeconds(s);
    setIsComingSoon(true); // Ensure it's true if distance is still positive
  };

  // useEffect hook to set up and clear the countdown interval
  useEffect(() => {
    // Initial call to set countdown immediately
    updateCountdown();

    // Set up interval to update countdown every second
    window.countdownInterval = setInterval(updateCountdown, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(window.countdownInterval);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden font-inter">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/video/video.mp4" // Placeholder video URL
        autoPlay
        loop
        muted
        playsInline // Required for autoplay on some mobile browsers
        onError={(e) => console.error("Video load error:", e)}
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center p-4 text-center">
        {/* Logo */}
        <Image
          src="/logo.png" // Path to your logo in the public directory
          alt="Teatro Logo"
          width={200} // Adjust as needed
          height={75} // Adjust as needed
          className="mb-26 sm:mb-80 drop-shadow-lg"
        />

        {/* Coming Soon / Opening Message */}
        {isComingSoon ? (
          <>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 text-gray-200">
              GET READY TO EXPERIENCE THE NIGHT!
            </p>

            {/* Countdown Timer with Golden Borders */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-12">
              <div className="bg-white bg-opacity-10 p-4 sm:p-6 rounded-xl shadow-lg border-4 border-yellow-500">
                <span className="block text-5xl sm:text-6xl font-bold text-yellow-300">
                  {days.toString().padStart(2, '0')}
                </span>
                <span className="block text-lg sm:text-xl text-gray-300 mt-2">Days</span>
              </div>
              <div className="bg-white bg-opacity-10 p-4 sm:p-6 rounded-xl shadow-lg border-4 border-yellow-500">
                <span className="block text-5xl sm:text-6xl font-bold text-yellow-300">
                  {hours.toString().padStart(2, '0')}
                </span>
                <span className="block text-lg sm:text-xl text-gray-300 mt-2">Hours</span>
              </div>
              <div className="bg-white bg-opacity-10 p-4 sm:p-6 rounded-xl shadow-lg border-4 border-yellow-500">
                <span className="block text-5xl sm:text-6xl font-bold text-yellow-300">
                  {minutes.toString().padStart(2, '0')}
                </span>
                <span className="block text-lg sm:text-xl text-gray-300 mt-2">Minutes</span>
              </div>
              <div className="bg-white bg-opacity-10 p-4 sm:p-6 rounded-xl shadow-lg border-4 border-yellow-500">
                <span className="block text-5xl sm:text-6xl font-bold text-yellow-300">
                  {seconds.toString().padStart(2, '0')}
                </span>
                <span className="block text-lg sm:text-xl text-gray-300 mt-2">Seconds</span>
              </div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-400">
              Opening date: June 20, 2025
            </p>
          </>
        ) : (
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-400 animate-pulse">
            WE ARE OPEN! COME JOIN US!
          </p>
        )}
      </div>

      {/* Tailwind CSS Script - Ensures Tailwind classes are available */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Google Fonts - Inter */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    </div>
  );
}