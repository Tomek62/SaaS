"use client";
import { LinkedinIcon, Mail, Phone } from "lucide-react";
import Nav from "../sections/nav";
import { Suspense, useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, email, message });
  };
  return (
    <div>
      <Nav />
      <div className="flex h-screen flex-col items-center justify-center px-6">
        <div className="card bg-bgSecondary px-6 py-6">
          <h2 className="text-center font-primary text-2xl font-semibold text-primary ">
            Contactez-nous
          </h2>
          <p className="mb-6">
            N'hésitez pas à nous contacter si vous avez la moindre
            question/suggestion.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {/* left-part */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nom"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300"
                />
                <input
                  type="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300"
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300"
                ></textarea>

                <button
                  type="submit"
                  className={`h-10 w-full rounded-md 
                bg-primary
              font-semibold text-white`}
                >
                  Envoyer
                </button>
              </form>
            </div>
            <div className="mt-1 block w-full rounded-md border border-gray-300">
             <div className="flex">
             <Mail size={24} />
             <p>thomas.lefebvre@foodpoint.fr</p>
             </div>
             <div className="flex">
              <Phone size={24} />
              <p>+33 7 49 90 99 82</p>
             </div>
             <div className="flex">
              <LinkedinIcon size={24} />
              <Link href="https://www.linkedin.com/in/thomas-lefebvre3/"> Thomas Lefebvre</Link>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
