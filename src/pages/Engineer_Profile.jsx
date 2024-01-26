import { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import Engineer_AddSignature from "../components/Engineer_AddSignature";
import { useQuery } from "@apollo/client";
import { GET_ENGINEER_BY_OBJECT_ID } from "../graphql/queries/graphql_queries";
import Loading from "../components/Loading";

const Engineer_Profile = ({ engId }) => {
  const [AddSign, setAddSign] = useState(false);
  const [engineer_info, setEngineer_info] = useState();
  const [signatureData, setSignatureData] = useState(null);

  const { data } = useQuery(GET_ENGINEER_BY_OBJECT_ID, {
    variables: {
      id: engId,
    },
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    },
  });


  useEffect(() => {
    setEngineer_info(data);
    const storedSignatureData = localStorage.getItem('signatureData');
    setSignatureData(storedSignatureData);
  }, [data]);

  console.log({ engineer_info });

  const open_Sign_modal = () => {
    setAddSign(true);
  };
  const close_Sign_Modal = () => {
    setAddSign(false);
  };
  return (
    <>
      {engineer_info ? (
        <div className="flex mb-[60px]">
          <div className="flex-1">
            <div className="w-full">
              <div
                style={{
                  display: "flex",
                  height: "50px",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <h1 className="text-4xl font-bold mt-8 text-center">
                  {engineer_info.engineerByObject.Fname}{" "}
                  {engineer_info.engineerByObject.Lname}
                </h1>
                <button
                  className="bg-blue-500  text-white px-4 py-2 rounded w-[152px]"
                  // onClick={closeModal}
                >
                  Edit Profile
                </button>
              </div>
              <div className="mt-6 flex flex-col lg:flex-row items-start mx-2 lg:mx-20 text-lg">
                <div className="flex-1 lg:mr-4">
                  <h1 className="py-2">
                    <b>Emp ID:</b> {engineer_info.engineerByObject.eng_emp}
                  </h1>
                  <h1 className="py-2">
                    <b>Designation:</b>{" "}
                    {engineer_info.engineerByObject.designation}
                  </h1>
                  <h1 className=" flex items-center">
                    <div> 
                    <b>Signature:</b>{" "}
                    </div>
                  <div className="mt-2">
                    {signatureData ? (
                       <div className="flex ">

                       <img
                         src={`${signatureData}`}
                         alt="Signature"
                         className="w-full sm:w-96"
                       />
                       <button className="py-2 px-4 rounded">
                         <FaRegEdit />
                       </button>
                     </div>
                  ) : (
                    <button
                      className="bg-transparent  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 ml-4 border border-blue-500 hover:border-transparent rounded"
                      onClick={open_Sign_modal}
                    >
                      {" "}
                      Add{" "}
                    </button>
                      )}
                   </div>
                  </h1>
                </div>
                <div className="lg:ml-4 mt-4 lg:mt-0">
                  <h1 className="py-2">
                    <b>Age:</b>
                    {engineer_info.engineerByObject.age}
                  </h1>
                  <h1 className="py-2">
                    <b>Address:</b>
                    {engineer_info.engineerByObject.address}
                  </h1>
                  <h1 className="py-2">
                    <b>Contact:</b> {engineer_info.engineerByObject.contact}
                  </h1>
                </div>
              </div>
              <main className="mt-5">
                <section>
                  <div className="flex justify-between w-full items-center px-2 lg:px-10">
                    <h3 className="lg:text-3xl text-xl font-semibold">
                      Call Details
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 mx-2 lg:mx-auto mt-5 px-2 lg:px-10 gap-5">
                    <div className="shadow-lg p-5 rounded-lg flex gap-5 items-center">
                      <div className="bg-blue-500 w-16 h-16 flex items-center justify-center rounded-full">
                        {/* <span className="text-white text-3xl">📞</span> */}
                      </div>
                      <div className="analytic-info">
                        <h4>New Calls</h4>
                        <h1 className="font-bold">8</h1>
                      </div>
                    </div>
                    <div className="shadow-lg p-5 rounded-lg flex gap-5 items-center">
                      <div className="bg-orange-500 w-16 h-16 flex items-center justify-center rounded-full">
                        {/* <span className="text-white text-3xl">📞</span> */}
                      </div>
                      <div className="analytic-info">
                        <h4>{`Today's Calls`}</h4>
                        <h1 className="font-bold">8</h1>
                      </div>
                    </div>
                    <div className="shadow-lg p-5 rounded-lg flex gap-5 items-center">
                      <div className="bg-purple-500 w-16 h-16 flex items-center justify-center rounded-full">
                        {/* <span className="text-white text-3xl">📞</span> */}
                      </div>
                      <div className="analytic-info">
                        <h4>Pending Calls</h4>
                        <h1 className="font-bold">12</h1>
                      </div>
                    </div>
                    <div className="shadow-lg p-5 rounded-lg flex gap-5 items-center">
                      <div className="bg-green-500 w-16 h-16 flex items-center justify-center rounded-full">
                        {/* <span className="text-white text-3xl">📞</span> */}
                      </div>
                      <div className="analytic-info">
                        <h4>Total Calls</h4>
                        <h1 className="font-bold">40</h1>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
              {AddSign ? (
                <Engineer_AddSignature closeModal={close_Sign_Modal} />
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

Engineer_Profile.propTypes = {
  role: PropTypes.string.isRequired,
  engId: PropTypes.string.isRequired,
};

export default Engineer_Profile;
