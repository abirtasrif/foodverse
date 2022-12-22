import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./componenets/Home";
import Navbar from "./componenets/Navbar";
import Favourites from "./componenets/Favourites";
import Footer from "./componenets/Footer";
import NotFound from "./componenets/NotFound";

const App = () => {
  return (
    <div className="app min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourite" element={<Favourites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
