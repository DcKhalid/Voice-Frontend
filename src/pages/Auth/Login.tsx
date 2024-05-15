import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
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
          <Link to="/speech">
            <button type="submit" className="btn btn-primary">
              login account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};
