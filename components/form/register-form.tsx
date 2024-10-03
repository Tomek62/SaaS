// components/SubscribeForm.tsx
import React, { useState } from 'react';
import { toast } from 'sonner'; // Assurez-vous que 'sonner' est installé

const SubscribeForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        toast.success('Inscription réussie !');
        // Rediriger ou effectuer d'autres actions après une inscription réussie
        // par exemple, réinitialiser le formulaire
        setName('');
        setEmail('');
        setPassword('');
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || 'Échec de l\'inscription !');
      }
    } catch (error) {
      toast.error('Une erreur inattendue est survenue !');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nom</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-opacity-50"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-opacity-50"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-opacity-50"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`w-full h-10 rounded-md border-none ${
          loading
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-primary hover:bg-opacity-80'
        } text-white font-semibold`}
      >
        {loading ? 'Chargement...' : 'S\'inscrire'}
      </button>
    </form>
  );
};

export default SubscribeForm;
