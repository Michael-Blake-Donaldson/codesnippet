import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';

function Profile() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Handle profile picture upload
  const [profilePicture, setProfilePicture] = React.useState(null);

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result); // Save the image as a base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'} p-4`}>
      <h1 className="text-2xl font-bold mb-4">Profile Settings</h1>

      {/* Profile Picture Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Profile Picture</h2>
        {profilePicture ? (
          <img src={profilePicture} alt="Profile" className="w-24 h-24 rounded-full mb-4 object-cover" />
        ) : (
          <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleProfilePictureChange}
          className="block"
        />
      </div>

      {/* Theme Toggle Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Theme</h2>
        <button
          onClick={toggleTheme}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </div>
  );
}

export default Profile;
