<<<<<<< Updated upstream
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'


const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Header = lazy(() => import("./layout/Header"))
const Footer = lazy(() => import("./layout/Footer"))
const Profile = lazy(() => import("./pages/Profile"))
const Notifications = lazy(() => import("./pages/Notifications"))

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>

      </Suspense>
      <Footer />
    </>
  )
}

export default App
=======
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/home/index.tsx"));
const About = lazy(() => import("./pages/about/index.tsx"));
const Notifications = lazy(() => import("./pages/notifications/index.tsx"));
const MainLayout = lazy(() => import("./layout/MainLayout"));
const ProfileLayout = lazy(() => import("./layout/ProfileLayout"));
const ProfilePage = lazy(() => import("./pages/profile/index"));

const App = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/notifications" element={<Notifications />} />
    </Route>

    <Route path="profile" element={<ProfileLayout />}>
      <Route index element={<ProfilePage />} />
    </Route>
  </Routes>
);

export default App;
>>>>>>> Stashed changes
