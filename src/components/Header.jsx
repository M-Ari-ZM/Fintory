import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/dashboard");
  }

  return (
    <section className="relative">
      {/* Card */}
      <div className="bg-second text-white text-center pt-20 pb-10 px-6 rounded-b-[40px] shadow-lg relative z-10">
        <h2 className="text-3xl font-bold mb-5">Selamat Datang di Fintory</h2>

        <h2 className="text-3xl font-bold mb-5">
          Mencatat dan Memahami Perjalanan Finansial
        </h2>

        <button
          className="bg-gray-200 text-gray-800 text-2xl mt-15 px-8 py-2 rounded-full font-semibold hover:bg-gray-300 transition self-end"
          onClick={handleLogin}
        >
          Mulai
        </button>
      </div>

      {/* Background Image */}
      <img
        src="src\assets\img\bg-header.png"
        alt="finance"
        className="w-full max-h-screen object-cover -mt-50"
      />
    </section>
  );
}
