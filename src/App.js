import React from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import MobileFooter from "./Components/MobileFooter";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="MainSection">
        <Sidebar />
        <div className="Content_Footer">
          <Content />
          <Footer />
        </div>
      </div>
      <MobileFooter />
    </div>
  );
}

export default App;
