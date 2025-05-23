'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    text: string;
    type: 'success' | 'error';
  } | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsAuthenticated(true);
        setMessage({ text: 'Connexion réussie', type: 'success' });
      } else {
        setMessage({
          text: data.error || 'Mot de passe incorrect',
          type: 'error',
        });
      }
    } catch (err) {
      setMessage({ text: 'Erreur de connexion', type: 'error' });
    }
  };

  const handleRefresh = async () => {
    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/projects/refresh', {
        method: 'POST',
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          text: 'Projets mis à jour avec succès!',
          type: 'success',
        });
        router.refresh();
      } else {
        setMessage({
          text: data.error || 'Échec de la mise à jour',
          type: 'error',
        });
      }
    } catch (err) {
      setMessage({ text: 'Erreur lors de la mise à jour', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h1 className="text-3xl font-bold mb-6">Administration du Portfolio</h1>

      {!isAuthenticated ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Connexion</h2>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Se connecter
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Panneau d&apos;administration
          </h2>

          <div className="mb-6">
            <p className="text-gray-600 mb-4">
              Utilisez le bouton ci-dessous pour mettre à jour les données du
              portfolio depuis Notion.
            </p>

            <button
              onClick={handleRefresh}
              disabled={isLoading}
              className={`w-full py-2 px-4 rounded-md text-white ${
                isLoading ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'
              } transition-colors`}
            >
              {isLoading
                ? 'Mise à jour en cours...'
                : 'Mettre à jour les projets'}
            </button>
          </div>

          {message && (
            <div
              className={`p-3 rounded-md ${
                message.type === 'success'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {message.text}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
