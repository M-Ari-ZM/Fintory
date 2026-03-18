import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sm:flex justify-between bg-main text-white px-6 py-4">
      <h1 className="text-2xl font-semibold">Fintory</h1>

      <nav className="mt-2">
        <Link to="/" className="mr-5 sm:mx-5">
          Beranda
        </Link>
        <Link to="/dashboard" className="mr-5 sm:mx-5">
          Laporan
        </Link>
        <Link to="/about" className="mr-5 sm:mx-5">
          Tentang kami
        </Link>
      </nav>
    </header>
  );
}
