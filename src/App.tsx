import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Router>
      <div className="bg-surface text-on-surface min-h-screen flex flex-col font-body">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
