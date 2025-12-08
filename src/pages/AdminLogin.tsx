import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TreePine } from 'lucide-react';

interface AdminLoginProps {
  onLoginSuccess: (token: string) => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Simple client-side validation (replace with server auth later)
    if (password === 'admin123') {
      // Store token in localStorage (in production, use secure HTTP-only cookie)
      const token = 'admin-token-' + Date.now();
      localStorage.setItem('adminToken', token);
      onLoginSuccess(token);
      navigate('/admin');
    } else {
      setError('Invalid password. Hint: admin123');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="bg-emerald-800 p-2 rounded-lg">
            <TreePine className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-emerald-900">TerraNova</h1>
        </div>
        
        <h2 className="text-2xl font-bold text-center text-emerald-900 mb-6">Admin Portal</h2>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-stone-600 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter admin password"
              className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          <button 
            type="submit" 
            className="w-full bg-emerald-800 text-white py-3 rounded-lg font-bold hover:bg-emerald-900 transition"
          >
            Login
          </button>
        </form>
        
        <p className="text-center text-xs text-stone-400 mt-4">Demo password: admin123</p>
      </div>
    </div>
  );
};

export default AdminLogin;
