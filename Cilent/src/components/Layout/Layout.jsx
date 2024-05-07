import Routers from "../../Routers/Routers";
import Footer from "../Footers/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Routers />
      <Footer />
    </div>
  );
};

export default Layout;
