import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
// import FinalScore from './components/FinalScore'

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
