import React, { useState } from 'react';
 import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import googleIcon from '../../assets/img/Logo-google-icon-PNG.png';
 

 const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
 

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
 

  return (
 <div className='mt-16'>
       <div className="mx-auto rounded-2xl border border-white/10 bg-[#0E0F0F] p-6 md:p-10 w-full max-w-lg">
      <h2 className="text-white text-2xl md:text-3xl font-semibold text-center mb-2">Sign Up Your Account</h2>
      <p className="text-white/60 text-sm text-center mb-6">Enter your Personal details to create Account</p>
      <div className="flex space-x-3 mb-4">
        <button className="flex items-center justify-center w-1/2 bg-[#1C1D1D] text-white py-3 rounded-lg text-sm font-medium hover:bg-gray-700 transition duration-200">
          <img src={googleIcon} alt="Google" className="w-5 rounded-full h-5 mr-2" />
          Google
        </button>
        <button className="flex items-center justify-center w-1/2 bg-[#1C1D1D] text-white py-3 rounded-lg text-sm font-medium hover:bg-gray-700 transition duration-200">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="Facebook" className="w-5 h-5 mr-2" />
          Facebook
        </button>
      </div>
      <div className="relative flex justify-center items-center mb-4">
        <div className="absolute left-0 w-1/2 h-[1px] bg-white/20"></div>
        <span className="text-white/60 text-sm mx-2">Or</span>
        <div className="absolute right-0 w-1/2 h-[1px] bg-white/20"></div>
      </div>

<div className='flex space-x-4 justify-between'>
          <div className="mb-4">
        <label htmlFor="email" className="block text-white text-sm mb-2">First Name</label>
        <input
          type="email"
          id="email"
          className="w-full bg-[#1C1D1D] text-white py-3 px-4 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="eg. johnfrans@gmail.com"
        />
      </div>
          <div className="mb-4">
        <label htmlFor="email" className="block text-white text-sm mb-2">Last Name</label>
        <input
          type="email"
          id="email"
          className="w-full bg-[#1C1D1D] text-white py-3 px-4 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="eg. johnfrans@gmail.com"
        />
      </div>
</div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-white text-sm mb-2">Email</label>
        <input
          type="email"
          id="email"
          className="w-full bg-[#1C1D1D] text-white py-3 px-4 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="eg. johnfrans@gmail.com"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-white text-sm mb-2">Password</label>
        <div className="relative">
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            className="w-full bg-[#1C1D1D] text-white py-3 px-4 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            placeholder="Enter your password"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white focus:outline-none"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? <AiOutlineEyeInvisible className="h-5 w-5" /> : <AiOutlineEye className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <p className="text-white/60 text-xs mb-6">Must be at least 8 characters.</p>
      <button className="w-full bg-white text-black py-3 rounded-lg text-sm font-semibold hover:bg-gray-100 transition duration-200">
        Sign up
      </button>
      <p className="text-white/60 text-sm mt-6 text-center">
       Already have an Account ? <Link to={"/login"} className="text-white font-medium hover:underline">Login</Link>
      </p>
    </div>
 </div>
  );
 };
 

 export default Signup;