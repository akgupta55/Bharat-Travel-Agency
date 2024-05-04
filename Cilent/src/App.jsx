// import { Route } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Headers from "./components/Headers/Headers";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Headers />} />
      </Routes>
    </>
  );
}

export default App;
