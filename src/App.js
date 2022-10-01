import "./App.css";
// import "antd/dist/antd.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/HOC/Layout";
import HomePage from "./pages/HomePage/HomePage";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import Spinner from "./components/Spinner/Spinner";

function App() {
  return (
    <div className="App">
      <Spinner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout Component={HomePage} />} />
          <Route path="/news" element={<Layout Component={News} />} />
          <Route path="/contact" element={<Layout Component={Contact} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
