import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
const App = () => {
  return(
    <div>
      <Toaster />
        <div className="bg-slate-900 fixed top-0 w-full z-10">
          <Navbar/>
        </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
};

export default App;
