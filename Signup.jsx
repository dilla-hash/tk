import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
    <div>
    <div className="modal w-[30%] h-[50%] border-[2px] rounded-md">
    <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          </form>
          <h3 className="font-bold text-lg mt-4">Signup</h3>
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your full name"
              onChange={(e) => SetEmail(e.target.value)}
              className="w-80 px-3 py-1 border rounded-md outline-none"
            />
          </div>

          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => SetEmail(e.target.value)}
              className="w-80 px-3 py-1 border rounded-md outline-none"
            />
          </div>

          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="password" // Changed input type to "password"
              placeholder="Enter your password"
              onChange={(e) => SetPassword(e.target.value)}
              className="w-80 px-3 py-1 border rounded-md outline-none"
            />
          </div>
          <div className="flex justify-around mt-10">
            <button
              type="button"
              onClick={handleLogin} // Attach the login handler
              className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200">
              Signup
            </button>
            <p>Have account?{" "}
                 <Link
                  to="/"
                  className="underline text-blue-500 cursor-pointer" onClick={()=> document.getElementById("my_modal_3").showModal()}>Login</Link>{" "}
                 </p>
          </div>
        </div>
    </div>
    </div>
    )
};

export default Signup;