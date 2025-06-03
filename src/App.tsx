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