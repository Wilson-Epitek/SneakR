import React, { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const Profile = () => {
  const [user, setUser] = useState({});
  const [editing, setEditing] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
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
          setNewUsername(data.username);
          setNewPassword(''); 
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    alert('Déconnecté');
    window.location.reload();
  };

  const handleSave = () => {
    fetch(`http://localhost:1337/api/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
      body: JSON.stringify({
        username: newUsername,
        password: newPassword,
      }),
    })
      .then((res) => {
        if (res.ok) {
          alert("C'est good chef");
          setUser({ ...user, username: newUsername });
          setEditing(false);
        } else {
          alert("Il y a une erreur chef");
        }
      })
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-50">
      <div className="bg-white p-6 rounded-md w-80 shadow-lg">
        <h2 className="text-2xl text-center mb-4">Profil</h2>
        {!editing ? (
          <>
            <p><strong>Nom :</strong> {user.username}</p>
            <p><strong>Email :</strong> {user.email}</p>
            <button onClick={() => setEditing(true)}className="mt-4 w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition duration-300">Modifier le profil</button>
            <button onClick={handleLogout}className="mt-4 w-full p-2 bg-red-500 text-white rounded-md hover:bg-red-400 transition duration-300">Déconnexion</button></>) : (
          <>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Nouveau Nom d'utilisateur</label>
              <input
                type="text"
                placeholder="Nom"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Nouveau Mot de Passe</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Mot de passe"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
                <div className="absolute right-2 top-2 cursor-pointer"onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}</div>
              </div>
            </div>
            <button onClick={handleSave}className="mt-4 w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-400 transition duration-300">Enregistrer</button> 
            <button onClick={() => setEditing(false)} className="mt-4 w-full p-2 bg-gray-500 text-white rounded-md hover:bg-gray-400 transition duration-300">Annuler</button></>)}
      </div>
    </div>
  );
};

export default Profile;
