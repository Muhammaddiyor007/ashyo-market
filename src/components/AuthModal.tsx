// src/components/AuthModal.tsx
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: Props) {
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-4 text-xl font-bold">
          ×
        </button>
        {mode === "signin" ? (
          <>
            <SignIn onSuccess={onClose} /> {/* Success callback passed here */}
            <p className="text-sm mt-4 text-center">
              Hisobingiz yo‘qmi?{" "}
              <button
                className="text-blue-500 underline"
                onClick={() => setMode("signup")}
              >
                Ro‘yxatdan o‘tish
              </button>
            </p>
          </>
        ) : (
          <>
            <SignUp onSuccess={onClose} /> {/* Success callback passed here */}
            <p className="text-sm mt-4 text-center">
              Allaqachon ro‘yxatdan o‘tganmisiz?{" "}
              <button
                className="text-blue-500 underline"
                onClick={() => setMode("signin")}
              >
                Tizimga kirish
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
