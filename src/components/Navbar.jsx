import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { MapPin } from "lucide-react";
import { CgClose } from "react-icons/cg";
import { FaCaretDown } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useLocationContext } from "../context/LocationContext";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  const { location, getLocation, openDropdown, setOpenDropdown } =
    useLocationContext();
  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };
  return (
    <div className="flex justify-between items-center h-[60px] px-4 bg-gray-100 pl-30 pr-30">
      <h2 className="text-xl font-bold">MarkOne</h2>
      <div className="flex gap-2 items-center">
        <MapPin className=" text-red-600" />
        <span className=" font-bold">
          {location ? (
            location.city ? (
              <div>
                <p>
                  {location.city}, {location.state}, {location.country}
                </p>
              </div>
            ) : (
              "Add Location"
            )
          ) : (
            "Loading..."
          )}
        </span>
        <FaCaretDown onClick={toggleDropdown} />
        {openDropdown ? (
          <div className=" fixed w-[250px] h-max top-15 left-120 z-50 border-2 border-amber-100 rounded p-5 ">
            <h1 className=" text-lg font-bold flex justify-between items-center">
              Change Location{" "}
              <span className=" text-right" onClick={toggleDropdown}>
                <CgClose />
              </span>
            </h1>
            <button
              onClick={getLocation}
              className=" bg-amber-700 text-amber-50 px-3 py-1 w-full mt-2 cursor-pointer hover:bg-amber-400 "
            >
              Detect My Location
            </button>
          </div>
        ) : null}
      </div>
      <div className="flex gap-8 items-center ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive ? "border-b-3 text-red-500 transition-all" : "text-black"
            } font-bold`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${
              isActive ? "border-b-3 text-red-500 transition-all" : "text-black"
            } font-bold`
          }
        >
          About us
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            `${
              isActive ? "border-b-3 text-red-500 transition-all" : "text-black"
            } font-bold`
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${
              isActive ? "border-b-3 text-red-500 transition-all" : "text-black"
            } font-bold`
          }
        >
          Contact us
        </NavLink>
        <Link to="cart" className=" relative">
          <IoCartOutline className="h-7 w-7" />
          <span className=" absolute -top-2 -right-2 bg-amber-800 text-amber-50 rounded-full text-xs font-bold w-[20px] h-[20px] flex justify-center items-center">
            10
          </span>
        </Link>
        <SignedOut>
          <SignInButton className="bg-amber-700 text-white rounded pl-2 pr-2 pb-1 cursor-pointer" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
