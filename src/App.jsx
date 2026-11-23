// import React from 'react'

import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
  return (
    <div className="w-screen h-screen py-10 px10 bg-gray-800 text-white font-thin ">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
