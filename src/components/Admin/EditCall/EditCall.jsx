import { useMutation, useQuery } from "@apollo/client";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { DELETE_CALL_MUTATION, EDIT_CALL_BY_ADMIN_MUTATION } from "../../../graphql/mutations/graphql.mutations";
import { GET_ENGINEERS } from "../../../graphql/queries/graphql_queries";

const Edit_Call = ({ closeModal, selected_call_for_view }) => {
  const [engineer, setEngineer] = useState("");
  const [engineer_id, setEngineer_id] = useState("");
  const [engineers, setEngineers] = useState([]);
  const { data } = useQuery(GET_ENGINEERS, {
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`, // Include the token from local storage
      },
    },
  });

  

  const [updateCall] = useMutation(EDIT_CALL_BY_ADMIN_MUTATION, {
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    },
  });

  const [deleteCall] = useMutation(DELETE_CALL_MUTATION, {
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    },
  });

  console.log({ data });

  useEffect(() => {
    if (data?.engineers?.length > 0) {
      setEngineers(data.engineers);
    }
  }, [data]);

//  console.log({selected_call_for_view})


  const handleDelete = async () => {
    await toast.promise(
      deleteCall({ variables: {_id : selected_call_for_view._id}}),
      {
        loading: "Deleting Call....",
        success: () => {
          closeModal()
          window.location.reload();
          return <b>Engineer Deleted</b>;
        },
        error: (err) => <b>{err.message}</b>,
      }
    );
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setEngineer(value);
  };

  useEffect(() => {
    if (engineer !== "") {
      const eng = engineers.filter((eng) => {
        return eng.Fname + " " + eng.Lname === engineer;
      });
      console.log({ eng });
      if (eng) {
        setEngineer_id(eng[0].eng_emp);
      }
    }
  }, [engineer]);

  console.log({ selected_call_for_view });

  const handleSave = async () => {
    console.log(engineer);
    try {
      // console.log("Submitting form", values);
      const { _id, __typename, ...callWithoutIdAndTypename } =
        selected_call_for_view;
      const data = await toast.promise(
        updateCall({
          variables: {
            call: {
              ...callWithoutIdAndTypename,
              eng_name: engineer,
              eng_emp: engineer_id,
            },
          },
        }),
        {
          loading: "Updating Call...",
          success: <b>🎉 Call updated successfully!</b>,
          error: (error) => <b>{error.message || "Something went wrong"}</b>,
        }
      );

      // After the toast is shown and promise is resolved, close the modal
      console.log(data);
      setTimeout(() => {
        closeModal();
        window.location.reload();
      }, 3000);
    } catch (error) {
      console.error("Error submitting form", error);
      // Handle error as needed
    }
  };

  useEffect(() => {
    // Apply overflow-hidden to body when the modal is open
    document.body.style.overflow = "hidden";

    // Cleanup function to remove the style when the component unmounts or modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full max-w-screen-md mx-auto my-6 bg-opacity-50 backdrop-filter backdrop-blur-md">
        <div>
          <section className="relative flex flex-col bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
            <div className="lg:flex lg:justify-between lg:items-center flex-col p-5 space-y-5">
              <div className="flex flex-row  sm:space-y-5  w-full   justify-evenly items-center lg:items-end ">
                <button className="bg-blue-500 hover:bg-transparent text-white font-semibold hover:text-blue-700 py-2 px-4 border mr-5 border-blue-500 hover:border-transparent rounded">
                  Edit Call
                </button>
                <button
                  onClick={() => handleDelete()}
                  className="bg-white-500 hover:bg-transparent text-red-500 font-semibold hover:text-white-700 hover:bg-red-700 py-2 px-4 border border-red-500 hover:border-transparent rounded"
                >
                  Delete Call
                </button>
              </div>
              <div className=" w-full flex-auto">
                <p className="mb-4">
                  <span className="font-semibold mr-5">Call ID:</span>{" "}
                  {selected_call_for_view.call_id}
                </p>
                <p className="mb-4">
                  <span className="font-semibold mr-5">
                    Assigned Date By You:
                  </span>{" "}
                  {selected_call_for_view.assigned_date}
                </p>
                <p className="mb-4">
                  <span className="font-semibold mr-5">Assigned To:</span>{" "}
                  {selected_call_for_view.eng_name}
                </p>
                <p className="mb-4">
                  {" "}
                  <span className="font-semibold mr-5">
                    Submit Date By Engineer:
                  </span>{" "}
                  {selected_call_for_view.submit_date}
                </p>
                <p className="mb-4">
                  <span className="font-semibold mr-5">
                    Description Attached By You:
                  </span>
                  {selected_call_for_view.admin_desc}
                </p>
              </div>
              <div className="w-full flex-auto">
                <div className="mb-4">
                  <label
                    htmlFor="engineer_name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Engineer Name
                  </label>
                  <select
                    id="engineer_name"
                    name="engineer_name"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    value={engineer}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Engineer Name</option>
                    {engineers.map((each_engineer, index) => (
                      <option
                        key={index}
                        value={`${each_engineer.Fname} ${each_engineer.Lname}`}
                        className="text-sm"
                      >
                        {each_engineer.Fname} {each_engineer.Lname}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                className="ml-4 bg-blue-500 text-white font-bold px-4 py-2 rounded"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </section>
        </div>
      </div>
      <div
        className="z-1"
        style={{
          position: "fixed",
          top: "10px",
          width: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: "9999", // Center horizontally
        }}
      >
        <Toaster />
      </div>
    </div>
  );
};
Edit_Call.propTypes = {
  closeModal: PropTypes.func,
  selected_call_for_view: PropTypes.object,
};
export default Edit_Call;
