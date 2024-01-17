import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { CgNotes } from "react-icons/cg";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { SiExpensify } from "react-icons/si";
import { GET_ENGINEER_BY_OBJECT_ID } from "../../graphql/queries/graphql_queries";

const Menus = [
  {
    title: "Dashboard",
    icon: <MdSpaceDashboard />,
    link: "/",
    dis: "translate-x-0",
  },
  {
    title: "Calls",
    icon: <FaPhoneVolume />,
    link: "/calls",
    dis: "translate-x-16",
  },
  {
    title: "Reports",
    icon: <CgNotes />,
    link: "/reports",
    dis: "translate-x-32",
  },
  {
    title: "Expense",
    icon: <SiExpensify />,
    link: "/expense",
    dis: "translate-x-48",
  },
];

const Nav2 = ({ role, engId }) => {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [activeLink, setActiveLink] = useState("/");
  // const location = useLocation();

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
  // const handleSignOut = () => {
  //   localStorage.removeItem("token");
  //   setIsLogin(false);
  // };

  useEffect(() => {
    // Update active link when location changes
    setActiveLink(location.pathname);
    // console.log(location.pathname);
  }, [location.pathname, role]);

  const [active, setActive] = useState(0);
  return (
    <div>
      {isLogin && (
        <div className="bg-orange-500 max-h-[4.4rem] px-6 rounded-t-xl block z-10 fixed bottom-[2rem]">
          <ul className="flex relative">
            <span
              className={`duration-500 ${Menus[active].dis} border-4 border-gray-900 h-16 w-16 absolute
         -top-5 rounded-full`}
            >
              <span
                className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
          rounded-tr-[11px] shadow-myShadow1"
              ></span>
              <span
                className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
          rounded-tl-[11px] shadow-myShadow"
              ></span>
            </span>
            {Menus.map((menu, i) => (
              <li key={i} className="w-16">
                <a
                  className="flex flex-col text-center pt-6"
                  onClick={() => setActive(i)}
                >
                  <span
                    className={`text-xl cursor-pointer duration-500 ${
                      i === active && "-mt-6 text-white"
                    }`}
                  >
                    {menu.icon}
                  </span>
                  <span
                    className={` ${
                      active === i
                        ? "translate-y-4 duration-700 opacity-100"
                        : "opacity-0 translate-y-10"
                    } `}
                  >
                    {menu.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav2;
