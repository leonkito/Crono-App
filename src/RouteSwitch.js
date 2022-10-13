import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Cadastro from './components/cadastro'
// import Profile from "./Profile";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cadastro" element={<Cadastro />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;