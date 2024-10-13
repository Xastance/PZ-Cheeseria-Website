import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import CheeseDetail from './pages/CheeseDetail';
import Header from './components/Header';
import Footer from './components/Footer';

import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <div className="Header fixed-top">
          <Header />
        </div>

        <Container className="flex-grow-1 mt-5 pt-5 mb-5 pb-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cheese/:id" element={<CheeseDetail />} />
          </Routes>
        </Container>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
