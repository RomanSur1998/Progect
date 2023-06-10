import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../components/Main";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
