import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../components/MainPage";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
