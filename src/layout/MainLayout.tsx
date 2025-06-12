import { lazy } from "react";
import { Outlet } from "react-router-dom";

const Header = lazy(() => import("../layout/header/index.tsx"));
const Footer = lazy(() => import("../layout/footer/index.tsx"));

const MainLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);
export default MainLayout;
