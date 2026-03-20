import { Link } from "react-router-dom";
import Fintory from "../assets/img/Fintory(W).png";

export default function Navbar() {
  return (
    <header className="sm:flex justify-items-center sm:justify-between bg-main text-white px-6 py-4">
      <span className="flex items-center gap-1">
        <img src={Fintory} alt="Fintory" className="w-6 h-fit" />
        <h1 className="text-2xl font-semibold">Fintory</h1>
      </span>

      <nav className="mt-3 sm:mt-1">
        <Link
          to="/"
          className="mr-5 sm:mx-5 hover:border-b-2 hover:border-white hover:transition duration-100"
        >
          Beranda
        </Link>
        <Link
          to="/dashboard"
          className="mr-5 sm:mx-5 hover:border-b-2 hover:border-white hover:transition duration-100"
        >
          Laporan
        </Link>
        <Link
          to="/about"
          className=" sm:mx-5 hover:border-b-2 hover:border-white hover:transition duration-100"
        >
          Tentang kami
        </Link>
      </nav>
    </header>
  );
}
