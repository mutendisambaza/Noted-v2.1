// import logo from "../../assets/logo.png"
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
export const RegisterCard = () => {

  return (
    <section className="bg-gradient-to-r from-key-red to-darkest-red">
  <div className="flex flex-col items-center justify-center min-h-screen">
    <div className="w-10/12 sm:max-w-xs md:max-w-md  px-4 py-4 rounded-lg bg-black/65 backdrop-blur-md shadow-lg  md:px-6">
    <div className="flex relative w-full h-20 justify-center items-center">
      <img src={logo} alt="" className="relative max-h-16" />
    </div>
      <h1 className="flex justify-center items-center text-xl font-bold mb-4 text-white dark:text-black">Register an account</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
          <input type="email" name="email" id="email" className="w-full p-2.5 mb-4 bg-active-grey/70 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500" placeholder="name@company.com" required />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
          <input type="password" name="password" id="password" className="w-full p-2.5 mb-4 bg-active-grey/70  border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500" placeholder="••••••••" required />
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" id="terms" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-3 dark:focus:ring-primary-600" required />
          <label htmlFor="terms" className="ml-2 text-sm text-white dark:text-gray-300">I accept the <a href="#" className="text-primary-600 hover:underline dark:text-primary-500">Terms and Conditions</a></label>
        </div>
        <button type="submit" className="w-full p-2.5 bg-key-red text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-700 focus:ring-4 focus:outline-none dark:focus:ring-primary-800">Create an account</button>
        <p className="text-sm text-active-grey dark:text-gray-400">
          Already have an account? <Link to="/signIn" className="text underline decoration-solid dark:text-primary-500 hover:text-gradient">Sign here</Link>
        </p>

      </form>
      
    </div>
    <div className="flex items-center justify-center ">
      <Link to="/" className="mt-16 text-primary-600 dark:text-primary-500 hover:text-dormant-grey">Back</Link>
    </div>
  </div>
</section>


  );
};


