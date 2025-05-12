// src/components/SignUp.tsx
import { useState } from 'react';
import { signUp } from '../services/auth';
import toast from 'react-hot-toast';

interface SignUpProps {
  onSuccess: () => void; // Success callback
}

export default function SignUp({ onSuccess }: SignUpProps) {
  const [form, setForm] = useState({ fullname: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await signUp(form);
      toast.success('Ro‘yxatdan o‘tish muvaffaqiyatli!');
      onSuccess(); // Modalni yopish
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Xatolik yuz berdi');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold">Ro‘yxatdan o‘tish</h2>
      <input
        className="w-full p-2 border rounded"
        placeholder="Ism"
        value={form.fullname}
        onChange={(e) => setForm({ ...form, fullname: e.target.value })}
      />
      <input
        className="w-full p-2 border rounded"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        className="w-full p-2 border rounded"
        type="password"
        placeholder="Parol"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button
        type="submit"
        className="bg-[#134E9B] text-white px-4 py-2 rounded hover:bg-white hover:text-[#134E9B] border border-[#134E9B] "
        disabled={loading}
      >
        {loading ? 'Yuklanmoqda...' : 'Ro‘yxatdan o‘tish'}
      </button>
    </form>
  );
}
