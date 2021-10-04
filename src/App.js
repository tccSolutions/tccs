import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { ContactUs } from "./pages/contact-us/contact-us.page";
import { Homepage } from "./pages/homepage/homepage.page";
import { Reviews } from "./pages/reviews/reviews.page";
import { AboutPage } from "./pages/about/about.page";
import { Navbar } from "./components/navbar/navbar.component";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <div>
            <Navbar />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contactus" component={ContactUs} />
            <Route exact path="/reviews" component={Reviews} />
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
