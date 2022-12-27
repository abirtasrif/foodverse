import React, { useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Favourites from "./components/favourites";
import NotFound from "./components/NotFound";
import { useFetch } from "./hooks/useFetch";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const inputField = useRef(null);
  const { data: racipes, loading, error } = useFetch(searchQuery);

  const searchHandler = (e) => {
    e.preventDefault();

    setSearchQuery("");
    inputField.current.blur();
  };

  return (
    <>
      <div className="app min-h-screen bg-rose-50 text-gray-600 text-lg">
        <Navbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          inputField={inputField}
          searchHandler={searchHandler}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
