import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Landing";
import Connexion from "./components/connexion/Connexion";
import Inscription from "./components/inscription/Inscription";
import Inscription2 from "./components/inscription/Inscription2";
import AjouterAnnonce1 from "./components/ajouterAnnonce/AjouterAnnonce1";
import AjouterAnnonce2 from "./components/ajouterAnnonce/AjouterAnnonce2";
import AjouterAnnonce3 from "./components/ajouterAnnonce/AjouterAnnonce3";
import AjouterAnnonce4 from "./components/ajouterAnnonce/AjouterAnnonce4";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription_1" element={<Inscription />} />
          <Route path="/inscription_2" element={<Inscription2 />} />
          <Route path="/annonce1" element={<AjouterAnnonce1 />} />
          <Route path="/annonce2" element={<AjouterAnnonce2 />} />
          <Route path="/annonce3" element={<AjouterAnnonce3 />} />
          <Route path="/annonce4" element={<AjouterAnnonce4 />} />
        </Routes>
      </Router>
    );
}

export default App;
