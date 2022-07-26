import React from "react";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  What,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
import "./App.css";
const App = () => {
  return (
    <div>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <What />
        <Features />
        <Possibility />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default App;
