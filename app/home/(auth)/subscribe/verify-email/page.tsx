"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function VerifyEmailPage() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Make an API call to verify the code (not implemented here)
      const res = await fetch('/api/verify-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      if (res.ok) {
        toast.success("Email verifié avec succés!");
        router.push("/home/welcome");
      } else {
        toast.error("Code de vérification invalide.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2 className="text-2xl font-bold">Vérifier votre email</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Entrer le code de vérification"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Vérification..." : "Vérifier"}
        </button>
      </form>
    </div>
  );
}
