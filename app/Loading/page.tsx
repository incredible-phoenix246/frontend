// LoadingPage.tsx
import React from 'react';

const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#101920]">
      <div className="animate-spin rounded-full h-24 w-24 border-t-8 border-[#FEE715] border-opacity-25"></div>
    </div>
  );
};

export default LoadingPage;
