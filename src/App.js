import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Services from "./components/Services";
import Cards from "./components/Cards";
import Review from "./components/Review";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Services />
        <Cards />
        <Review />
        <Footer />
    </div>
  );
}

export default App;
