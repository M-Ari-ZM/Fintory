import { useNavigate } from "react-router-dom";
import Fintory from "../assets/img/Fintory(W).webp";

export default function ActionCard() {
  const navigate = useNavigate();

  function dashboardBtn() {
    navigate("/home");
  }

  return (
    <div className="flex flex-wrap mx-auto my-10 rounded-2xl p-10 bg-primary justify-center sm:justify-between w-fit lg:w-[50%] h-fit hover:shadow-md hover:-translate-y-1 transition">
      <h2 className="font-bold text-2xl text-main mr-10">
        Ayo Mulai Perjalanan
        <br />
        Finansial Anda!
      </h2>

      <button
        className="bg-main mt-10 w-25 h-25 justify-items-center rounded-full hover:scale-110 hover:rotate-360 active:scale-110 active:rotate-360 transition duration-500"
        onClick={dashboardBtn}
      >
        <img src={Fintory} width={50} alt="Fintory" />
      </button>
    </div>
  );
}
