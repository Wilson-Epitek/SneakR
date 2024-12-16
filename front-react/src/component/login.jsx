import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage(''); 

    const response = await fetch('http://localhost:1337/api/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: email,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      
      localStorage.setItem('authToken', data.jwt); 
      setMessage("T'es co chef, t'es bon t'es bon");
    } else {
      setMessage("Loser tu connais pas tes identifiants");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-50">
      <div className="bg-white p-6 rounded-md w-80 shadow-lg">
        <h2 className="text-2xl text-center mb-4 ">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border rounded-md"
            required
          />
          <div className="relative mb-4">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-2"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-green-500 text-white rounded-md hover:bg-blue-300 transition duration-300"
          >
            Login
          </button>
        </form>
        {message && <p className="mt-4 text-center">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
