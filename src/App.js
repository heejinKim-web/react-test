import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Product from "./components/Product";
import Order from "./components/Order";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
