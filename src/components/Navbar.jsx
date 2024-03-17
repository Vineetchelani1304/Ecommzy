import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

  const {cart} = useSelector((state)=> state)
  return (
    <div className="flex justify-between items-center h-20 max-w-6xl mx-auto bg-slate-900 sticky">
      <NavLink to={"/"}>
      <img src="../logo.png" className="h-14 bg-none"/>
      </NavLink>
      <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
        <NavLink to={"/"}>
          <h2>Home</h2>
        </NavLink>
        <NavLink to={"/cart"}>
          <div className="  relative">

            <div>
              <i class="fa-solid fa-cart-shopping"></i>
            </div>

            {cart.length > 0 &&
            <div className=" animate-bounce bg-green-600 flex justify-center items-center rounded-full absolute h-4 w-4 text-white font-medium -top-1 -right-2">
            {cart.length}
          </div>}

          </div>
          
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;