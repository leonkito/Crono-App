import React from "react";
import Header from './components/header'
import InfoForm from './components/infoForm'
const App = () => {
  return (
    <>
      <Header />
      <div className="main">
        <InfoForm />
      </div>
    </>
  );
}

export default App;
