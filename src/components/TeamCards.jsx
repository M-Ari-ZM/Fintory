import Afriyan from "../assets/img/Afriyan.webp";
import Ari from "../assets/img/Ari.webp";
import Fathir from "../assets/img/Fathir.webp";
import Nadzila from "../assets/img/Nadzila.webp";
import Alvi from "../assets/img/Alvi.webp";

export default function TeamCards() {
  const members = [
    { name: "Afriyan", position: "Leader", path: Afriyan },
    { name: "Ari", position: "Front-End", path: Ari },
    { name: "Fathir", position: "Back-End", path: Fathir },
    { name: "Nadzila", position: "Project Manager", path: Nadzila },
    { name: "Alvi", position: "UI/UX", path: Alvi },
  ];

  return (
    <div className="flex sm:flex-wrap gap-10 sm:gap-x-20 sm:justify-center overflow-x-auto sm:overflow-x-hidden no-scrollbar snap-x snap-mandatory scroll-px-4 py-5">
      <div className="min-w-42 sm:hidden" />
      {members.map((item) => (
        <div
          key={item.path}
          className="bg-primary sm:bg-gray-50 hover:bg-primary p-5 min-w-60 justify-items-center rounded-md snap-center hover:shadow-md hover:-translate-y-1 transition"
        >
          <img src={item.path} alt={item.name} width={200} className="my-5" />
          <h3 className="font-bold">{item.name}</h3>
          <p className="text-gray-500">{item.position}</p>
        </div>
      ))}
      <div className="min-w-42 sm:hidden" />
    </div>
  );
}
