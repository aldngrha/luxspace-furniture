import "./assets/css/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Congratulations from "./pages/Congratulations";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route exact path="/categories/:idc" element={<Detail />} />
          <Route path="/categories/:idc/products/:idp" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/congratulations" element={<Congratulations />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
