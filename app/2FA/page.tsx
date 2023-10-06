// TwoFactorAuthentication.tsx
import React from 'react';

const TwoFactorAuthentication: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center">
          2-Factor Authentication Page
        </h1>
        <p className="mt-2 text-gray-600 text-center">
          This is a page for Two-Factor Authentication.
        </p>
      </div>
    </div>
  );
};

export default TwoFactorAuthentication;
