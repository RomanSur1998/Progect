import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../components/Main";
import CollectionList from "../components/CollectionList";
import DetailsCard from "../components/DetailsCard";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/collection" element={<CollectionList />} />
        <Route path="/details" element={<DetailsCard />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
