import Link from "../Link/Link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/products/:id", name: "ProductDetails" },
    { id: 5, path: "/dashboard", name: "Dashboard" },
  ];

  return (
    <nav className="bg-blue-800 text-white p-6">
      <div onClick={() => setOpen(!open)} className=" md:hidden text-2xl">
        {open === true ? <IoCloseSharp /> : <GiHamburgerMenu />}
      </div>
      <ul
        className={`md:flex absolute md:static duration-1000 ${
          open ? "top-16" : "-top-60"
        } bg-blue-800 px-6`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
