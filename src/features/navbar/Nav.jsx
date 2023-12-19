import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { SiExpensify } from "react-icons/si";
import { CgNotes } from "react-icons/cg";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import PropTypes from "prop-types";
const AdminMenus = [
  { title: "Dashboard", icon: <MdSpaceDashboard />, link: "/" },
  { title: "Calls", icon: <FaPhoneVolume />, link: "/calls" },
  { title: "Reports", icon: <CgNotes />, link: "/reports" },
  { title: "Expense", icon: <SiExpensify />, link: "/expense" },
  {
    title: "Create Engineer",
    icon: <FiUserPlus />,
    link: "/create-engineers",
  },
];
const Menus = [
  { title: "Dashboard", icon: <MdSpaceDashboard />, link: "/" },
  { title: "Calls", icon: <FaPhoneVolume />, link: "/calls" },
  { title: "Reports", icon: <CgNotes />, link: "/reports" },
  { title: "Expense", icon: <SiExpensify />, link: "/expense" },
];

const Nav = ({ role }) => {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
  };

  useEffect(() => {
    // Update active link when location changes
    setActiveLink(location.pathname);
    console.log(location.pathname);
  }, [location.pathname, role]);

  console.log({ role });
  return (
    <div>
      {isLogin && (
        <div className="flex h-screen relative">
          <div
            className={`fixed ${
              open ? "w-72 h-screen" : "w-12 h-screen lg:w-20"
            } bg-purple-950 lg:p-5 pt-8 duration-300 flex flex-col items-center rounded-md`}
            style={{
              background: "#e6f7ff",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="flex flex-col items-center pt-5">
              <img
                onClick={() => setOpen(!open)}
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className={`h-10 w-10 rounded-full ring-2 ring-white cursor-pointer duration-500  ${
                  open && "rotate-[360deg] mb-3"
                }`}
              />
              <h1
                className={`text-black origin-left font-medium duration-200 ${
                  !open && "scale-0"
                }`}
              >
                Engineer
              </h1>
              <h3
                className={`text-black origin-left font-medium duration-200 ${
                  !open && "scale-0"
                }`}
              >
                Subhojit Dutta
              </h3>
            </div>
            <ul className="pt-6">
              {role !== "Admin"
                ? Menus.map((Menu, index) => (
                    <Link
                      to={Menu.link}
                      key={index}
                      className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4 
                    ${Menu.gap ? "mt-9" : "mt-2"} ${
                        activeLink === Menu.link && "bg-gray-300"
                      } blue-icons-text`}
                    >
                      <span className="text-sm lg:text-2xl text-blue-500">
                        {Menu.icon}
                      </span>
                      <span
                        className={`${
                          !open && "hidden"
                        } origin-left duration-200 blue-icons-text`}
                      >
                        {Menu.title}
                      </span>
                    </Link>
                  ))
                : AdminMenus.map((Menu, index) => (
                    <Link
                      to={Menu.link}
                      key={index}
                      className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4 
                    ${Menu.gap ? "mt-9" : "mt-2"} ${
                        activeLink === Menu.link && "bg-gray-300"
                      } blue-icons-text`}
                    >
                      <span className="text-sm lg:text-2xl text-blue-500">
                        {Menu.icon}
                      </span>
                      <span
                        className={`${
                          !open && "hidden"
                        } origin-left duration-200 blue-icons-text`}
                      >
                        {Menu.title}
                      </span>
                    </Link>
                  ))}
              <Link
                to="/login"
                onClick={handleSignOut}
                className="flex mt-2 rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4 blue-icons-text"
              >
                <span className="text-sm lg:text-2xl">
                  <FaArrowAltCircleRight color="#3b82f6" />
                </span>
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 blue-icons-text`}
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
Nav.propTypes = {
  role: PropTypes.string.isRequired,
};
export default Nav;
