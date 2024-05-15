import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="container mx-auto bg-white p-8 rounded shadow-md">
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <label htmlFor="email2" className="text-gray-600">
                Your email
              </label>
            </div>
            <input
              id="email2"
              type="email"
              className="input input-bordered w-full"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <label htmlFor="password2" className="text-gray-600">
                Your password
              </label>
            </div>
            <input
              id="password2"
              type="password"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <label htmlFor="repeat-password" className="text-gray-600">
                Repeat password
              </label>
            </div>
            <input
              id="repeat-password"
              type="password"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <input id="agree" type="checkbox" className="checkbox" />
            <label htmlFor="agree" className="flex text-gray-600">
              I agree with the&nbsp;
              <Link
                to="#"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                terms and conditions
              </Link>
            </label>
          </div>
          <Link to="/login">
            <button type="submit" className="btn btn-primary">
              Register new account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};
