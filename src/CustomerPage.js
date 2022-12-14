import React from "react";
import CustomerAppBar from "./Components/Toolbar/CustomerAppBar";
import "./app.css";
import Home from "./Components/customerViews/Home/Home";
import Products from "./Components/customerViews/Products/Products";
import Features from "./Components/customerViews/Features/Features";
import ContactUsForm from "./Components/form/CustomerContactUsForm";
import About from "./Components/customerViews/About/About";
import Footer from "./Components/customerViews/Footer/Footer";
import JoinUsPage from "./Components/customerViews/JoinUs/JoinUsPage";
import AreYouSeller from "./Components/customerViews/AreYouSeller/AreYouSeller";
const App = () => {
  return (
    <>
      <CustomerAppBar />

      <Home />

      <About />

      <Features />

      <Products />

      <JoinUsPage />

      {/* <AreYouSeller/> */}

      <ContactUsForm />

      <Footer />
    </>
  );
};

export default App;
