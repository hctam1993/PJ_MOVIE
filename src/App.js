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
import Film from "./pages/Management/Film/Film";
import FilmEdit from "./pages/Management/Film/FilmEdit";
import FilmAddNew from "./pages/Management/Film/FilmAddNew";
import FilmShowTimes from "./pages/Management/Film/FilmShowTimes";

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

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
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
            path="/management/film"
            element={
              <SecureView>
                <Management Component={Film} />
              </SecureView>
            }
          />
          <Route
            path="/management/film/edit/:id"
            element={
              <SecureView>
                <Management Component={FilmEdit} />
              </SecureView>
            }
          />
          <Route
            path="/management/film/showtime/:id"
            element={
              <SecureView>
                <Management Component={FilmShowTimes} />
              </SecureView>
            }
          />
          <Route
            path="/management/film/addnew"
            element={
              <SecureView>
                <Management Component={FilmAddNew} />
              </SecureView>
            }
          />
          <Route
            path="/checkout/:id"
            element={
              <SecureView>
                <CheckOut />
              </SecureView>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
