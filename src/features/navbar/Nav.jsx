import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { SiExpensify } from "react-icons/si";
import { GoReport } from "react-icons/go";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { FaArrowAltCircleRight } from "react-icons/fa";

// eslint-disable-next-line react/prop-types

const Menus = [
  { title: "Dashboard", icon: <RxDashboard />, link: "/" },
  { title: "Calls", icon: <FaPhoneVolume />, link: "/calls" },
  { title: "Expense", icon: <SiExpensify />, link: "expenses" },
  { title: "Reports", icon: <GoReport />, link: "/reports" },
  { title: "Account", icon: <RiAccountPinCircleFill />, link: "/account" },
  // { title: "Log out", icon: <FaArrowAltCircleRight />, link: "/login" },
];

const Nav = () => {
  const [open, setOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(true);

  const handelSignOut = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
  };

  return (
    <div>
      {isLogin && (
        <div className="flex h-auto">
          <div
            className={` ${
              open ? "w-72" : "w-8 lg:w-20"
            } bg-purple-950 lg:p-5 pt-8 relative duration-300`}
          >
            <img
              src="./src/assets/control.png"
              className={`absolute cursor-pointer -right-3 top-9 w-7 border-purple-500
       border-2 rounded-full  ${!open && "rotate-180"}`}
              onClick={() => setOpen(!open)}
            />
            <div className="flex gap-x-4 items-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className={`inline-block h-10 rounded-full ring-2 ring-white cursor-pointer duration-500 w-10 ${
                  open && "rotate-[360deg]"
                }`}
              />
              <h1
                className={`text-white origin-left font-medium  duration-200 ${
                  !open && "scale-0"
                }`}
              >
                Engineer
              </h1>
            </div>
            <ul className="pt-6">
              {Menus.map((Menu, index) => (
                <Link
                  to={Menu.link}
                  key={index}
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
          ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
                >
                  <span className="text-sm lg:text-2xl">{Menu.icon}</span>
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {Menu.title}
                  </span>
                </Link>
              ))}
              <Link
                to="/login"
                onClick={handelSignOut}
                className="flex mt-2 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4"
              >
                <span className="text-sm lg:text-2xl">
                  <FaArrowAltCircleRight />
                </span>
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  Logout
                </span>
              </Link>
            </ul>
          </div>
          <div className="h-screen flex-1">
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
