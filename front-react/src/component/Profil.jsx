import React, { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const Profile = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

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
    } else {
      alert("Pas co");
    }
  });

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    alert('Déconnecté');
    window.location.reload();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch('http://localhost:1337/api/users/me', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
      body: JSON.stringify({ username: name, email }),
    }).then(() => {
      alert("C'est bon chef");
      setIsEditing(false);
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-50">
      <div className="bg-white p-6 rounded-md w-80 shadow-lg">
        <h2 className="text-2xl text-center mb-4">Profil</h2>
        {isEditing ? (
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nom d'utilisateur"
              className="w-full p-2 mb-4 border rounded-md"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-2 mb-4 border rounded-md"
            />
            <div className="relative mb-4">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Mot de passe"
                className="w-full p-2 border rounded-md"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2">
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <button type="submit" className="w-full p-2 bg-green-500 text-white rounded-md">Sauvegarder</button>
          </form>
        ) : (
          <>
            <p><strong>Nom :</strong> {user.username}</p>
            <p><strong>Email :</strong> {user.email}</p>
            <button onClick={() => setIsEditing(true)} className="mt-4 w-full p-2 bg-green-500 text-white rounded-md hover:bg-blue-300 transition duration-300">Modifier</button>
          </>
        )}
        <button onClick={handleLogout} className="mt-4 w-full p-2 bg-red-500 text-white rounded-md hover:bg-blue-300 transition duration-300">Déconnexion</button>
      </div>
    </div>
  );
};

export default Profile;
