// Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <a href="/2FA" className="btn">
            2FA
          </a>
        </li>
        <li>
          <a href="/404Page" className="btn">
            404Page
          </a>
        </li>
        <li>
          <a href="/ForgetPassword" className="btn">
            Forget Password
          </a>
        </li>
        <li>
          <a href="/Login" className="btn">
            Login
          </a>
        </li>
        <li>
          <a href="/OTP" className="btn">
            OTP
          </a>
        </li>
        <li>
          <a href="/PasswordReset" className="btn">
            Password Reset
          </a>
        </li>
        <li>
          <a href="/Signup" className="btn">
            Signup
          </a>
        </li>
        <li>
          <a href="/VerificationSuccessful" className="btn">
            Verification Successful
          </a>
        </li>
        <li>
          <a href="/VerifyEmail" className="btn">
            Verify Email
          </a>
        </li>

        <li>
          <a href="/Loading" className="btn">
            Loading
          </a>
        </li>

        
      </ul>
    </nav>
  );
};

export default Navbar;
