import React, { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const Profile = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      fetch('http://localhost:1337/api/users/me', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          setName(data.username);
          setEmail(data.email);
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    alert('Déconnecté');
    window.location.reload();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-50">
      <div className="bg-white p-6 rounded-md w-80 shadow-lg">
        <h2 className="text-2xl text-center mb-4">Profil</h2>
        <p><strong>Nom :</strong> {user.username}</p>
        <p><strong>Email :</strong> {user.email}</p>
        <button onClick={handleLogout} className="mt-4 w-full p-2 bg-red-500 text-white rounded-md hover:bg-blue-300 transition duration-300">Déconnexion</button>
      </div>
    </div>
  );
};

export default Profile;
