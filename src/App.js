import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        {/* always show the header */}
        <Header></Header>

        {/* Conditionally render view. Need a switch */}
        <Switch>
          {/* /search endpoint for search page */}
          <Route path="/search">
            <SearchPage></SearchPage>
          </Route>
          {/* / endpoint for homepage */}
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
        {/* always show the footer */}
        <Footer></Footer>
      </Router>
      {/* using BEM */}
      {/* HOME */}
      {/* Header */}
      {/* BANNER */}
      {/* BACKGROUND IMAGE */}
      {/* SEARCH COMPONENT */}
      {/* Body of cards */}
      {/* Footer */}
      {/* SEARCH */}
      {/* RESULTS PAGE COMPONET */}
    </div>
  );
}

export default App;

// wrap the app in something alled a router
