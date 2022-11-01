import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./Cadastro";
import Visualizar from './Visualizar'
import Header from './components/Functional/Header'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Cadastro/>} />
        <Route path="/visualizar" element={<Visualizar />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default RouteSwitch;