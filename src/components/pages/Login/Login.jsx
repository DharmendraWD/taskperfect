import React, { useEffect, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import googleIcon from '../../../assets/img/Logo-google-icon-PNG.png';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../redux/slices/auth/LoginSlice';
import { toast } from 'react-toastify';
import Loading from '../../utilities/loading/Loading';
import Card1 from '../../utilities/cards/Card1';
import lineImage from '../../../assets/img/Line.png';


const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({ userName: '', password: '' });

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.login.loading);
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="mt-16 relative">
{
  isLoading && <>
  <div className="flex absolute top-1/2 -translate-y-1/2 justify-center w-full ">
      <Loading></Loading>

</div>
  </>
}
    <div className='loginParentBox relative grid-cols-1 grid lg:grid-cols-2'>
      <form
        className="mx-auto rounded-2xl  p-6 md:p-10 w-full max-w-md"
        onSubmit={handleLogin}
      >
 <h2 className="text-white text-2xl md:text-3xl font-semibold text-center mb-2">
          Sign In Your Account
        </h2>
        <p className="text-white/60 text-sm text-center mb-6">
          Enter your login details
        </p>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white text-sm mb-2">
            Username
          </label>
          <input
            type="text"
            id="userName"
            className="w-full bg-[#222121]  text-white py-3 px-4 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={user.userName}
            name='userName'
            placeholder='Enter your username'
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-white text-sm mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              className="w-full bg-[#222121] text-white py-3 px-4 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              placeholder="Enter your password"
              value={user.password}
              name='password'
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <AiOutlineEyeInvisible className="h-5 w-5" /> : <AiOutlineEye className="h-5 w-5" />}
            </button>
          </div>
          <p className="text-white/60 text-xs mb-6">
            Must be at least 8 characters.
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded-lg text-sm font-semibold hover:bg-gray-100 transition duration-200"
        >
          Sign In
        </button>
        <p className="text-white/60 text-sm mt-6 text-center">
          Don't have an account? <Link to="/signup" className="text-white font-medium hover:underline">Sign up</Link>
        </p>
      </form>

<img src={lineImage} className='absolute left-1/2 hidden lg:block h-[600px] -translate-x-1/2 opacity-50' alt="" />
      {/* right side part  */}
      <div>
<div className='grid sm:grid-cols-2  grid-cols-1 gap-4 p-10'>
  <Card1></Card1>
  <Card1></Card1>
  <Card1></Card1>
  <Card1></Card1>
</div>
      </div>
    </div>
    </div>
  );
};

export default Login;

