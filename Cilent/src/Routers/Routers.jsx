import { Route, Routes } from "react-router-dom";
import Login from "../components/Form/Login";
import Registration from "../components/Form/Registration";
import Home from "../Pages/Home/Home";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
};

export default Routers;
