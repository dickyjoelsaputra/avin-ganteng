import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/custom.css'
import './assets/styles.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './partials/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './partials/About'
import Portfolio from './partials/Portfolio'
import Contact from './partials/Contact'

function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home  />,
  //   },
  //   {
  //     path: "/about",
  //     element: <About  />,
  //   },
  // ]);

  return (
    <>
      {/* <Header />
        <RouterProvider router={router} />
        <Footer /> */}
      <Router>
        <Header />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
