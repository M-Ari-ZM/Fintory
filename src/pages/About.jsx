import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import AboutCard from "../components/AboutCard";
import TeamCards from "../components/TeamCards";
import ActionCard from "../components/ActionCard";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>Tentang Kami • Fintory</title>
      </Helmet>

      <Navbar />

      <div className="p-8 py-20 space-y-20">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-center">Tentang Kami</h1>
          </div>

          <AboutCard />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-center">Tim Capstone</h1>
          </div>

          <TeamCards />
        </div>

        <ActionCard />
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
