import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./Cadastro";
import Header from './components/Functional/Header'
import ViewBoard from "./components/Read/ViewBoard";
import Estrutura from "./components/Read/Estrutura";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
    <div className="home">
      <Header />
      <Routes>
        <Route path="/" element={<Cadastro/>} />
        <Route path="/dashboard" element={<ViewBoard/>}/>
        <Route path="/estrutura" element={<Estrutura/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default RouteSwitch;