import InfoBar from '@/components/InfoBar';
import Sidebar from '@/components/Sidebar';
import type React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="w-full">
        <InfoBar />
        {children}
      </div>
    </div>
  );
};

export default layout;
