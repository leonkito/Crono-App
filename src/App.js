import React from "react";
import Header from './components/header'
import InfoForm from './components/infoForm'
import Cadastro from './components/cadastro'
const App = () => {

  return (
    <>
      <Header />
      <div className="main">
      <InfoForm />
      <Cadastro />
      </div>
    </>
  );
}

export default App;
