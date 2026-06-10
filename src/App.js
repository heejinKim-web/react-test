import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Product from "./components/Product";
import Order from "./components/Order";
import Inquiry from "./components/Inquiry";
import MyPage from "./components/MyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
        <Route path="/order" element={<Order />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
