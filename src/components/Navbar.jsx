import { Link, NavLink } from "react-router-dom";
import Fintory from "../assets/img/Fintory(W).webp";

export default function Navbar() {
  const navItems = [
    { name: "Beranda", path: "/home" },
    { name: "Laporan", path: "/report" },
    { name: "Tentang Kami", path: "/about" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="sm:flex sticky top-0 w-full justify-items-center sm:justify-between bg-main text-white px-6 py-4 shadow z-50">
      <span
        className="flex items-center gap-1 cursor-pointer"
        onClick={scrollToTop}
      >
        <img src={Fintory} alt="Fintory" className="w-6 h-fit" />
        <h1 className="text-2xl font-semibold">Fintory</h1>
      </span>

      <nav className="flex gap-5 mt-3 sm:mt-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-white -translate-y-1"
                : "hover:border-b-2 hover:border-white hover:transition hover:-translate-y-1 duration-100"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
