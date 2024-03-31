import Routings from "../../../router";
import Footer from "../../organisms/Footer";
import Navbar from "../../organisms/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="page">
        <Routings />
      </div>
      <Footer />
    </>
  );
}
