import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { SiExpensify } from "react-icons/si";
import { CgNotes } from "react-icons/cg";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { FaUsers } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
// import { CiBarcode } from "react-icons/ci";
import PropTypes from "prop-types";
import { GET_ENGINEER_BY_OBJECT_ID } from "../../graphql/queries/graphql_queries";
import { useQuery } from "@apollo/client";
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
  {
    title: "View Engineer",
    icon: <FaUsers />,
    link: "/view-engineers",
  },
  {
    title: "Notifications",
    icon: <IoNotifications/>,
    link: "/notification",
  },
  // {
  //   title: "Qr Code",
  //   icon: <CiBarcode />,
  //   link: "/qr-code",
  // },
];
const Menus = [
  { title: "Dashboard", icon: <MdSpaceDashboard />, link: "/" },
  { title: "Calls", icon: <FaPhoneVolume />, link: "/calls" },
  { title: "Reports", icon: <CgNotes />, link: "/reports" },
  { title: "Expense", icon: <SiExpensify />, link: "/expense" },
  { title: "Profile", icon: <CgProfile />, link: "/profile"}
];

// const Menus = [
//   { title: "Dashboard", icon: <MdSpaceDashboard />, link: "/" },
//   { title: "Calls", icon: <FaPhoneVolume />, link: "/calls" },
//   { title: "Reports", icon: <CgNotes />, link: "/reports" },
//   { title: "Expense", icon: <SiExpensify />, link: "/expense" },
//   { title: "Profile", icon: <CgProfile />, link: "/profile"}
// ];

const Nav = ({ role, engId }) => {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  const { data } = useQuery(GET_ENGINEER_BY_OBJECT_ID, {
    variables: {
      id: engId,
    },
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    },
    skip: role !== "Engineer", // Skip the query if the role is not Engineer
  });
  const handleSignOut = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
  };

  useEffect(() => {
    // Update active link when location changes
    setActiveLink(location.pathname);
    // console.log(location.pathname);
  }, [location.pathname, role]);

  console.log({ data });
  return (
    <div>
      {isLogin && (
        <div className="flex h-screen relative">
          <div
            className={`fixed ${
              open ? "w-72 h-screen z-[100]" : "w-12 h-screen lg:w-20"
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
                src="https://i.ibb.co/yWzz2F3/11-modified.png"
                className={`h-10 w-10 rounded-full ring-2 ring-white cursor-pointer duration-500  ${
                  open && "rotate-[360deg] mb-3"
                }`}
              />
              <h1
                className={`text-black origin-left font-medium duration-200 ${
                  !open && "scale-0"
                }`}
              >
                {role === "Admin" ? "Admin" : "Engineer"}
              </h1>
              <h3
                className={`text-black origin-left font-medium duration-200 ${
                  !open && "scale-0"
                }`}
              >
                {role === "Admin"
                  ? "Palas jana"
                  : `${data?.engineerByObject?.Fname} ${data?.engineerByObject?.Lname}`}
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
                  Logout1
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
  engId: PropTypes.string.isRequired,
};
export default Nav;
