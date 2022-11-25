import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./Cadastro";
import Visualizar from './Visualizar'
import Header from './components/Functional/Header'
import ViewBoard from "./components/Read/ViewBoard";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
    <div className="home">
      <Header />
      <Routes>
        <Route path="/" element={<Cadastro/>} />
        <Route path="/visualizar" element={<Visualizar />} />
        <Route path="/dashboard" element={<ViewBoard/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default RouteSwitch;