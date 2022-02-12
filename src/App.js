import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './screens/Home';
import AboutUs from './screens/AboutUs';
import ContactUs from './screens/ContactUs';
import News from './screens/News';
import Header from './common/Header';
import Footer from './common/Footer';

function App() {
  return (
    <div className="App" style={{height: '100vh'}}>
      <div className="header">
        <Header />
      </div>
      <main className="main">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="news" element={<News />} />
            <Route path="contact" element={<ContactUs />} />
          </Routes>        
          <Footer />
      </main>
    </div>
  );
}

export default App;