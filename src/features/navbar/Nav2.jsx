import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, Outlet, useLocation } from "react-router-dom";

import { FaPhoneVolume, FaUsers } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { SiExpensify } from "react-icons/si";
import { CgNotes } from "react-icons/cg";
import { FiUserPlus } from "react-icons/fi";
import "../../Styles/nav.css";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Nav2 = ({ role }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  const AdminMenus = [
    // ... your menu items
    { title: "Calls", icon: <FaPhoneVolume />, link: "/calls" },
    { title: "Reports", icon: <CgNotes />, link: "/reports" },
    { title: "Dashboard", icon: <MdSpaceDashboard />, link: "/" },
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
  ];

  const Menus = [
    // ... your menu items
    { title: "Calls", icon: <FaPhoneVolume />, link: "/calls" },
    { title: "Reports", icon: <CgNotes />, link: "/reports" },
    { title: "Dashboard", icon: <MdSpaceDashboard />, link: "/" },
    { title: "Expense", icon: <SiExpensify />, link: "/expense" },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
  };

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname, role]);

  const renderDynamicIcons = (menus) => {
    return menus.map((menu, index) => (
      <Link
        key={index}
        style={{
          boxShadow:
            activeLink === menu.link ? "0px 0px 2px 5px white" : "none",
          background: activeLink === menu.link ? "white" : "none",
          transition:
            "box-shadow 0.5s ease-in-out, background 1.0s ease-in-out", // Combine transition properties
        }}
        to={menu.link}
        className={`nav-icon  ${
          activeLink === menu.link
            ? "p-3 rounded-[50%] active text-[#248be6aa]"
            : "text-black"
        }`}
      >
        {menu.icon}
      </Link>
    ));
  };

  return (
    <div>
      <Outlet />
      {isModalOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-20 bg-white p-4 rounded-md shadow-md">
            <div className="text-xl font-semibold mb-4">Choose your option</div>
            {/* Your modal content goes here */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded w-[152px]"
                // onClick={closeModal}
              >
                View Profile
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded w-[152px]"
                // onClick={closeModal}
              >
                Log out
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded w-[152px]"
                onClick={closeModal}
              >
                Close Modal
              </button>
            </div>
          </div>
        </div>
      )}
      <nav className="menua">
        {renderDynamicIcons(role === "Admin" ? AdminMenus : Menus)}
        {/* <Link to="/login" onClick={handleSignOut} className={`nav-icon`}>
          <FaArrowAltCircleRight color="black" />
        </Link> */}
        <div className={`nav-icon`} onClick={openModal}>
          <FaArrowAltCircleRight color="black" />
        </div>
        {/* Modal */}
      </nav>
    </div>
  );
};

Nav2.propTypes = {
  role: PropTypes.string.isRequired,
  engId: PropTypes.string.isRequired,
};

export default Nav2;
