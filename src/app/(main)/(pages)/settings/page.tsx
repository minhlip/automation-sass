import ProfileForm from '@/components/forms/ProfileForm';
import React from 'react';
import ProfilePicture from './_components/ProfilePicture';

const SettingsPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
        Settings
      </h2>
      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-xl font-bold">User profile</h2>
          <p className="text-base text-white/50">
            Add or update your information
          </p>
        </div>
        <ProfilePicture />
        <ProfileForm />
      </div>
    </div>
  );
};

export default SettingsPage;
