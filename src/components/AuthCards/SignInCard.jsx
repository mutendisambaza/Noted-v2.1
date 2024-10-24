// import logo from "../../assets/logo.png"
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
export const SignInCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleSignIn = (event) => {
  //   event.preventDefault();
  //   // Implement your sign-in logic here, e.g., making an API call
  //   console.log("Signing in with:", email, password);
  // };

  return (
        
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-background-black to-dark-grey dark:bg-gray-900">
        <form className="w-10/12 sm:max-w-xs md:max-w-md  px-4 py-4 bg-black/90 backdrop-blur-md rounded-lg shadow-lg" >
        {/* onSubmit={handleSignIn} */}
          <div className="flex relative w-full h-20 justify-center items-center">
            <img src={logo} alt="" className="relative max-h-16" />
          </div>
          <h1 className="flex justify-center items-center text-xl font-bold mb-4 text-white dark:text-white">Sign in to your account</h1>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 mb-4 border rounded-lg"
            placeholder="name@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 mb-4 border rounded-lg"
            placeholder="••••••••"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="w-full p-2 bg-dark-grey backdrop-blur-md  text-white rounded-lg hover:bg-dormant-grey">Sign in</button>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Don't have an account? <Link to="/register" className="text-primary-600 underline decoration-solid dark:text-primary-500 hover:text-gradient">Register here</Link>
          </p>
        </form>
        <div className="flex items-center justify-center ">
        <Link to="/" className="mt-16 text-primary-600 dark:text-primary-500 hover:text-gradient">Back</Link>
        </div>
      </div>
      
    



  );
};


