import React, { useState } from 'react';
import { login, signup } from '../services/authService';

interface AuthFormProps {
  isLogin: boolean;
  onSuccess: (userData: { name: string; email: string }) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin, onSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      const user = await login(email, password);
      if (user) {
        onSuccess({ name: user.name, email: user.email });
      }
    } else {
      const success = await signup(name, email, password);
      if (success) {
        onSuccess({ name, email });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {!isLogin && (
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      )}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition"
      >
        {isLogin ? 'Login' : 'Sign Up'}
      </button>
    </form>
  );
};

export default AuthForm;
