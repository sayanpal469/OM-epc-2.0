import { FaFaceGrinStars } from "react-icons/fa6";
import PropTypes from "prop-types";
import EmployeeDetails from "./EmployeeDetails";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_ENGINEER_MUTATION } from "../../graphql/mutations/graphql.mutations";
import toast from "react-hot-toast";
import Loading from "../../features/loading/Loading";

const EmployeeCard = ({ engineer }) => {
  const [open, setOpen] = useState(false);
  const { Fname, Lname, eng_emp, email } = engineer;

  const [deleteEngineerMutation, { loading }] = useMutation(
    DELETE_ENGINEER_MUTATION,
    {
      context: {
        headers: {
          authorization: `${localStorage.getItem("token")}`,
        },
      },
    }
  );


  const handleRemove = async (emp) => {
    await toast.promise(
      deleteEngineerMutation({
        variables: {
          eng_emp: emp,
        },
      }),
      {
        loading: "Creating Call...",
        success: () => {
        
          window.location.reload();
          return <b>Engineer Deleted</b>;
        },
        error: (err) => <b>{err.message}</b>,
      }
    );
  };

  const getInitials = () => {
    const firstInitial = Fname ? Fname.charAt(0).toUpperCase() : "";
    const lastInitial = Lname ? Lname.charAt(0).toUpperCase() : "";
    return firstInitial + lastInitial || <FaFaceGrinStars />;
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <EmployeeDetails open={open} setOpen={setOpen} EMP_id={eng_emp} />

          <div className="flex justify-center my-2 lg:w-[500px]">
            <div className="lg:flex flex-1 lg:justify-between mx-auto lg:max-w-screen-md md:max-w-md max-w-sm p-5 bg-white shadow-md hover:shadow-xl items-center">
              <div className="lg:flex lg:flex-row md:flex md:flex-row flex flex-col items-center text-center lg:text-start md:text-start">
                <div className="w-16 h-16 bg-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-semibold text-white">
                    {getInitials()}
                  </span>
                </div>

                <div className="lg:ml-3 md:ml-3 my-5 md:mt-0">
                  <p className="font-semibold capitalize">
                    {Fname} {Lname}
                  </p>
                  <p className="text-sm my-1">{email}</p>
                  <p className="text-sm">{eng_emp}</p>
                </div>
              </div>

              <div className="flex justify-center items-center gap-2 max-w-20 md:flex-row md:flex-wrap md:gap-4">
                <button
                  onClick={() => setOpen(true)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-20 md:w-auto"
                >
                  View
                </button>
                <button
                  onClick={() => handleRemove(eng_emp)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-20 md:w-auto"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

EmployeeCard.propTypes = {
  engineer: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    Fname: PropTypes.string.isRequired,
    Lname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    eng_emp: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
  }).isRequired,
};

export default EmployeeCard;
