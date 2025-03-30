import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom"; // Importa Routes y Route
import Login from "./pages/Login"; // Importa el componente Login
import Home from "./pages/Home"; // Importa el componente Home
import CreateAccount from "./pages/CreateAccount"; // Importa el componente CreateAccount
import RecommendationForm from "./pages/RecommendationForm"; // Importa el componente RecommendationForm
import RecommendationList from "./pages/RecommendationList"; // Importa el componente RecommendationList
import RecommendationHistory from "./pages/RecommendationHistory"; // Importa el componente RecommendationHistory
import PageLayout from "./components/common/PageLayout/PageLayout";

function App() {
  return (
    <div className="App">
      <PageLayout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/recommendation-form" element={<RecommendationForm />} />
          <Route path="/recommendation-list" element={<RecommendationList />} />
          <Route
            path="/recommendation-history"
            element={<RecommendationHistory />}
          />
        </Routes>
      </PageLayout>
    </div>
  );
}

export default App;
