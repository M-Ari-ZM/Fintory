import Hero from "../components/Header.jsx";
import { Helmet } from "react-helmet-async";

export default function App() {
  return (
    <div>
      <Helmet>
        <title>Welcome! • Fintory</title>
      </Helmet>

      <Hero />
    </div>
  );
}
