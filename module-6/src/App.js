import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/ui/Footer";
import Home from "./pages/Home";
import Video from "./pages/Video";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/videos/:videoId" element={<Video></Video>}></Route>
      </Routes>

      <Footer></Footer>
    </Router>
  );
}

export default App;
