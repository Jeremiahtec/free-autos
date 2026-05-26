import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Remember to change this to your Render URL when deploying!
      const response = await fetch('https://free-autos.onrender.com/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok) {
        // Save the master key to the browser
        localStorage.setItem('adminToken', data.token);
        // Redirect to the dashboard
        navigate('/admin/dashboard');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error. Is the server running?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
      <div className="w-full max-w-md border border-[#2A2A2A] bg-[#111111] p-8 rounded-xl shadow-2xl relative overflow-hidden">
        
        {/* Subtle top glow matching your UI */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent opacity-50"></div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-display text-white mb-2 tracking-wide">FREE AUTOS</h1>
          <p className="text-sm text-gray-400 uppercase tracking-widest">Admin Portal</p>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-500/10 border border-red-500/50 text-red-400 text-sm text-center rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs text-gray-400 uppercase mb-2">Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-[#1A1A1A] border border-[#2A2A2A] text-white px-4 py-3 focus:outline-none focus:border-[#FF6B00] transition-colors rounded"
              required
            />
          </div>

          <div>
            <label className="block text-xs text-gray-400 uppercase mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#1A1A1A] border border-[#2A2A2A] text-white px-4 py-3 focus:outline-none focus:border-[#FF6B00] transition-colors rounded"
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#FF6B00] hover:bg-[#E66000] text-white font-bold py-4 transition-colors rounded tracking-wider uppercase text-sm mt-4 disabled:opacity-50"
          >
            {loading ? 'Authenticating...' : 'Access Terminal'}
          </button>
        </form>
      </div>
    </main>
  );
}