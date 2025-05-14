import React from "react";
import { useState } from "react";
import { assets } from "../assets/assets";
import Navbar from "../components/Navbar";

const Login = () => {
  const [state, setState] = useState("Sign Up");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
  <div
  className="relative w-full h-screen bg-cover bg-center flex"
  style={{ backgroundImage: `url(${assets.header_img})` }}
>
  
  <div className="absolute inset-0 bg-black/45"></div>

  
  <div className="absolute  w-full z-20 ">
    <Navbar />
  </div>

  {/* Konten utama: Kiri dan Form */}
  <div className="relative z-10 flex w-full items-center justify-center px-6 sm:px-20">
    {/* KIRI */}
    <div className="hidden lg:flex flex-col text-white max-w-lg mr-16">
      <h1 className="text-5xl font-bold leading-tight text-primary">♻️ SAMPIS</h1>
      <p className="mt-4 text-lg font-medium text-primary">
        Smart Scan. Smart Waste. Smart Earth.
      </p>
      <p className="mt-2 text-sm  text-primary/80">
         SAMPIS membantu Anda memindai dan mengidentifikasi jenis sampah secara instan. Ubah limbah jadi manfaat — jual sampah Anda dan berkontribusilah untuk lingkungan yang lebih bersih dan berkelanjutan.
      </p>
    </div>

    {/* FORM */}
    <form className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-10 w-full max-w-md text-white shadow-2xl mt-20 lg:mt-10">
      <p className="text-2xl font-semibold mb-2">
        {state === "Sign Up" ? "Buat akun" : "Masuk"}
      </p>
      <p className="text-sm text-white/80 mb-6">
        Akses fitur ini dengan {state === "Sign Up" ? "Buat akun" : "Masuk"} sekarang juga.
      </p>

      {state === "Sign Up" && (
        <div className="mb-4">
          <p className="mb-1">Full Name</p>
          <input
            className="w-full p-2 rounded bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
      )}

      <div className="mb-4">
        <p className="mb-1">Email</p>
        <input
          className="w-full p-2 rounded bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      <div className="mb-6">
        <p className="mb-1">Password</p>
        <input
          className="w-full p-2 rounded bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 hover:bg-[#BF9264] bg-orange-400 text-white font-semibold rounded transition duration-300 mb-4"
      >
        {state === "Sign Up" ? "Buat akun" : "Masuk"}
      </button>

      {state === "Sign Up" ? (
        <p className="text-sm text-white/80 text-center">
          Sudah punya akun?{" "}
          <span
            onClick={() => setState("Login")}
            className="underline cursor-pointer text-green-apple"
          >
            Masuk
          </span>
        </p>
      ) : (
        <p className="text-sm text-white/80 text-center">
          Belum punya akun?{" "}
          <span
            onClick={() => setState("Sign Up")}
            className="underline cursor-pointer text-green-apple"
          >
            Klik disini
          </span>
        </p>
      )}
    </form>
  </div>
</div>


  );
};

export default Login;
