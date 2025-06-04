import { lazy } from "react";
import { Outlet, Route, Routes } from "react-router-dom";

const Header = lazy(() => import("../layout/header/index.tsx"));
const Footer = lazy(() => import("../layout/footer/index.tsx"));
const Home = lazy(() => import("../pages/home/index.tsx"));
const About = lazy(() => import("../pages/about/index.tsx"));
const Notifications = lazy(() => import("../pages/notifications/index.tsx"));

const MainLayout = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/notifications" element={<Notifications />} />
    </Routes>
    <Outlet/>
    <Footer />
  </>
);
export default MainLayout;
