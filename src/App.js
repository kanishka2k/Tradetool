import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Slider from "./components/Slider";
import AboutUs from "./pages/AboutUs";
import Chain from "./pages/Chain";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Fyres from "./pages/Fyres";
import Homepage from "./pages/Homepage";
import Kite from "./pages/Kite";
import Kiteapp from "./pages/Kiteapp";
import Option from "./pages/Option";
import Order from "./pages/Order";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/slider" element={<Slider />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/chain" element={<Chain />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fyres" element={<Fyres />} />
          <Route path="/kite" element={<Kite />} />
          <Route path="/kiteapp" element={<Kiteapp />} />
          <Route path="/option" element={<Option />} />
          <Route path="/order" element={<Order />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Error />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
