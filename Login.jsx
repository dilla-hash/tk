import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from 'react-router-dom';

const Login = () => {
  const [error, SetError] = useState(false);
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    let isMounted = true; // Track if the component is mounted

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (isMounted) {
          // Signed up successfully
          const user = userCredential.user;
          console.log(user);
        }
      })
      .catch((error) => {
        if (isMounted) {
          // Handle errors
          SetError(true);
        }
      });

    // Cleanup to prevent updates on unmounted components
    return () => {
      isMounted = false;
    };
  };

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_3" className="modal w-[30%] h-[50%] border-[2px] rounded-md">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mt-4">Login</h3>
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
              Login
            </button>
            <p>Not registered?{" "}
                 <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer">Signup</Link>{" "}
                 </p>
          </div>
        </div>
</dialog>
    </div>
  );
};

export default Login;
