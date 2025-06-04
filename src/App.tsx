import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const MainLayout = lazy(() => import("./layout/MainLayout"));
const ProfilePage = lazy(() => import("./pages/profile/index"));
const App = () => (
  <Routes>
    <Route path="/*" element={<MainLayout />} />

    <Route path="/profile" element={<ProfilePage />} />
  </Routes>
);

export default App;
