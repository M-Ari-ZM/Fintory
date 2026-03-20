import { useNavigate } from "react-router-dom";
import bgHeader from "../assets/img/bg-header.png";

export default function Hero() {
  const navigate = useNavigate();

  function dashboardBtn() {
    navigate("/dashboard");
  }

  return (
    <section className="relative">
      <header className="bg-main text-white px-6 py-4 relative z-10">
        <h1 className="text-2xl font-semibold">Fintory</h1>
      </header>

      {/* Card */}
      <div className="bg-second text-white text-center pt-20 pb-10 px-6 rounded-b-[40px] shadow-lg relative z-10">
        <h2 className="text-3xl font-bold mb-5">Selamat Datang di Fintory</h2>

        <h2 className="text-3xl font-bold mb-5">
          Mencatat dan Memahami Perjalanan Finansial
        </h2>

        <button
          className="bg-gray-200 text-gray-800 text-2xl mt-15 px-15 py-2 rounded-full font-semibold hover:bg-gray-300 transition self-end"
          onClick={dashboardBtn}
        >
          Mulai
        </button>
      </div>

      {/* Background Image */}
      <img
        src={bgHeader}
        alt="finance"
        className="min-w-screen min-h-screen object-cover -mt-100"
      />
    </section>
  );
}
