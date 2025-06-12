
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'


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


export default App


