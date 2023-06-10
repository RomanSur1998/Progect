import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
