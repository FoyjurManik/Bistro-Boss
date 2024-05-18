import { useState } from 'react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfilePic, setUserProfilePic] = useState('');

  const handleLogin = () => {
    // Simulate a login and setting a user profile picture URL
    setIsLoggedIn(true);
    setUserProfilePic('https://via.placeholder.com/150'); // Replace with actual user profile picture URL
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserProfilePic('');
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-lg font-bold">
        Bistro Boss
      </div>
      <div className="flex space-x-4">
        <a href="#home" className="text-white hover:text-gray-400">Home</a>
        <a href="#contact" className="text-white hover:text-gray-400">Contact Us</a>
        <a href="#dashboard" className="text-white hover:text-gray-400">Dashboard</a>
        <a href="#menu" className="text-white hover:text-gray-400">Our Menu</a>
        <a href="#shop" className="text-white hover:text-gray-400">Our Shop</a>
        <button onClick={handleLogout} className="text-white hover:text-gray-400">Sign Out</button>
        {isLoggedIn ? (
          <img
            src={userProfilePic}
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        ) : (
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
