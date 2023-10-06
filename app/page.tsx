import React from 'react';
import Navbar from './Component/navbar';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar /> {/* Include the Navbar component */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Welcome to Your Next.js Project
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Get started with Next.js, and build amazing web applications.
          </p>
          <div className="mt-10">
            <a
              href="/Signup"
              className="btn mr-4"
            >
              Signup
            </a>
            <a
              href="/Login"
              className="btn"
            >
              Login
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Discover Our Features
          </h2>
          <div className="mt-4 space-y-10">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  {/* Add your SVG icon */}
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Feature 1
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Description of Feature 1.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  {/* Add your SVG icon */}
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Feature 2
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Description of Feature 2.
                </p>
              </div>
            </div>
            {/* Add more features as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
