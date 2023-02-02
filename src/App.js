import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Products from "./Pages/Products.jsx";
import SingleProductPage from "./Pages/SingleProductPage.jsx";
import Header from "./Components/Header";
import Footer from "./Components/Footer.jsx";
import Error from "./Pages/Error.jsx";
import Post from "./Pages/Post";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productid" element={<SingleProductPage />} />
          <Route path="post" element={<Post />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
