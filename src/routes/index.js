import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ListDocter from "../pages/ListDocter";
import NotFound from "../pages/NotFound";
import ConsultService from "../pages/ConsultService";
import About from "../pages/About";
function MyRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/list-docter" element={<ListDocter />} />
        <Route path="/consult-service" element={<ConsultService />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default MyRouter;
