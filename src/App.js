import "./App.css";
// import "antd/dist/antd.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/HOC/Layout";
import HomePage from "./pages/HomePage/HomePage";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import Spinner from "./components/Spinner/Spinner";
import Detail from "./pages/Detail/Detail";
import LoginPage from "./pages/LoginPage/LoginPage";
import Register from "./pages/Register/Register";
import { Suspense, lazy } from "react";
import SecureView from "./components/HOC/SecureView";
import Management from "./pages/Management/Management";
import User from "./pages/Management/User/User";
import EditUser from "./pages/Management/User/EditUser";
import CheckOut from "./pages/CheckOut/CheckOut";

const DetailComponent = lazy(() => import("./pages/Detail/Detail"));

function App() {
  return (
    <div className="App">
      <Spinner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout Component={HomePage} />} />
          <Route path="/news" element={<Layout Component={News} />} />
          <Route path="/contact" element={<Layout Component={Contact} />} />

          <Route
            path="/detail/:id"
            element={
              <Suspense fallback={<h1>LOADING...</h1>}>
                <Layout Component={DetailComponent} />
              </Suspense>
            }
          />

          <Route path="/login" element={<Layout Component={LoginPage} />} />
          <Route path="/register" element={<Layout Component={Register} />} />
          <Route
            path="/management"
            element={
              <SecureView>
                <Management Component={User} />
              </SecureView>
            }
          />
          <Route
            path="/management/user"
            element={
              <SecureView>
                <Management Component={User} />
              </SecureView>
            }
          />
          <Route
            path="/management/user/edit/:id"
            element={
              <SecureView>
                <Management Component={EditUser} />
              </SecureView>
            }
          />
          <Route
            path="/checkout/:id"
            element={
              <SecureView>
                <Management Component={CheckOut} />
              </SecureView>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
