import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Propos from "./pages/Propos/index.jsx";
import Logement from "./pages/Logement/index.jsx";
import Error from "./pages/Error/index.jsx";
import "./assets/styles/main.scss";
import Layout from "./components/common/Layout.jsx";
import HeaderApp from "./components/common/HeaderApp.jsx";
import FooterApp from "./components/common/FooterApp.jsx";
import accommodations from "./assets/data/accommodations.json";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home accommodations={accommodations} />} />

          <Route
            path="/logement/:id"
            element={<Logement accommodations={accommodations} />}
          />
          <Route path="/propos" element={<Propos />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);
