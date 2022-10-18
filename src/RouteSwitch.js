import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Visualizar from './Visualizar'
import Header from './components/Header'
// import Profile from "./Profile";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/visualizar" element={<Visualizar />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default RouteSwitch;