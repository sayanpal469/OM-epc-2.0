import { useEffect, useState } from "react";

import { useMutation } from "@apollo/client";

import PropTypes from "prop-types";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaFaceGrinStars } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import { CREATE_ENGINEER_MUTATION } from "../../graphql/mutations/graphql.mutations";

const CreateEngineers = ({ adminId }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    Fname: "",
    Lname: "",
    contact: "",
    age: "",
    eng_emp: "",
    email: "",
    password: "",
    address: "",
    designation: "",
    eng_sign: "",
  });

  const [createEngineerMutation, { data, error, refetch }] = useMutation(
    CREATE_ENGINEER_MUTATION,
    {
      variables: {
        adminId: adminId,
      },
      context: {
        headers: {
          authorization: `${localStorage.getItem("token")}`,
        },
      },
    }
  );

  const [passwordError, setPasswordError] = useState("");
  const [imageFile, setImageFile] = useState("");

  // useEffect(() => {
  //   if (imageFile !== "") {
  //     setFormData({ ...formData, ["eng_sign"]: imageFile });
  //   }
  // }, [imageFile]);

  // const handleFileChange = async (event) => {
  //   const file = event.target.files[0];

  //   // Check if there is any file
  //   if (!file) {
  //     return;
  //   }

  //   // Check if the file is an image (jpeg, jpg, png)
  //   if (
  //     file.type === "image/jpeg" ||
  //     file.type === "image/jpg" ||
  //     file.type === "image/png"
  //   ) {
  //     // Convert the image file to base64
  //     const base64 = await convertFileToBase64(file);

  //     // Update state with base64 image
  //     setImageFile(base64);
  //   } else {
  //     // Handle non-image file
  //     console.log("Please select a valid image file (jpeg, jpg, png).");
  //   }
  // };
  // const convertFileToBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();

  //     reader.onload = () => {
  //       const base64Data = reader.result.split(",")[1]; // Extract base64 data (after the comma)
  //       resolve(`data:${file.type};base64,${base64Data}`);
  //     };

  //     reader.onerror = (error) => {
  //       reject(error);
  //     };

  //     reader.readAsDataURL(file);
  //   });
  // };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // console.log({ data });
  // console.log({ error });
  // ############ For showing the Avatar name #########

  const getInitials = () => {
    const { Fname, Lname } = formData;
    const firstInitial = Fname ? Fname.charAt(0).toUpperCase() : "";
    const lastInitial = Lname ? Lname.charAt(0).toUpperCase() : "";
    return firstInitial + lastInitial || <FaFaceGrinStars />;
  };

  // #### FOR ALL INPUT FIELD VALIDATION

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAgeChange = (event) => {
    let value = event.target.value;
    // Ensure value is non-negative and has at most two digits
    value = Math.max(0, parseInt(value, 10)) || "";
    value = value.toString().slice(0, 2); // Maximum of two digits

    setFormData((prevData) => ({ ...prevData, age: value }));
  };

  // const validatePassword = (password) => {
  //   const passwordRegex =
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  //   return passwordRegex.test(password);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if password meets criteria
    // if (!validatePassword(formData.password)) {
    //   setPasswordError(
    //     "Password must meet the following criteria:\n" +
    //       "1. At least one lowercase letter\n" +
    //       "2. At least one uppercase letter\n" +
    //       "3. At least one special character (@$!%*?&)\n" +
    //       "4. At least 6 characters long"
    //   );
    //   return;
    // }

    // Reset password error if validation passes
    setPasswordError("");
    try {
      // Use toast.promise to handle the asynchronous saveSettings
      await toast.promise(
        createEngineerMutation({
          variables: {
            engineer: formData,
            adminId: adminId,
          },
        }),
        {
          loading: "Creating Engineer...",
          success: ()=>{
             <b>🎉 Engineer created successfully!</b>
             setTimeout(() => {
              // window.location.reload()
             }, 2000);
          }
          ,
          error: <b>Failed to create engineer. Please try again.</b>,
        }
      );

      // If control reaches here, the mutation was successful, reset the form data
      setFormData({
        Fname: "",
        Lname: "",
        age: "",
        email: "",
        password: "",
        address: "",
        eng_emp: "",
        designation: "",
        contact: "",
        eng_sign: "",
      });
    } catch (error) {
      // Handle other errors if needed
      console.error("Mutation failed:", error.message);
    }
  };

  return (
    <div className="flex">
      {/* <div className="w-12 h-screen lg:w-20">
      
      </div> */}
      <div className="flex-1">
        <div className="flex h-full bg-white">
          <div className="w-full flex justify-center items-center ">
            <div className="bg-white p-8 rounded-lg shadow-md w-full backdrop-filter backdrop-blur-lg bg-opacity-30  relative">
              <div className="mb-8 text-center">
                <h2 className="text-2xl mb-5 font-bold text-gray-800">
                  Create Engineer
                </h2>
                <div className="w-16 h-16 bg-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-semibold text-white">
                    {getInitials()}
                  </span>
                </div>
              </div>

              {/* Form */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="Fname"
                      className="block text-sm font-medium text-black"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="Fname"
                      name="Fname"
                      value={formData.Fname}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Lname"
                      className="block text-sm font-medium text-black"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="Lname"
                      name="Lname"
                      value={formData.Lname}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-black"
                  >
                    Age
                  </label>
                  <input
                    type="text"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleAgeChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-black"
                  >
                    Contact
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-black"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 px-2 py-1 top-1/2 transform -translate-y-1/2 focus:outline-none"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-black"
                  >
                    Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="3"
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                  ></textarea>
                </div>

                <div>
                  <label
                    htmlFor="eng_emp"
                    className="block text-sm font-medium text-black"
                  >
                    Employee ID
                  </label>
                  <input
                    type="text"
                    id="eng_emp"
                    value={formData.eng_emp}
                    name="eng_emp"
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="designation"
                    className="block text-sm font-medium text-black"
                  >
                    Designation
                  </label>
                  <input
                    type="text"
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                  />
                </div>
{/* 
                <div>
                  <label
                    htmlFor="Signature"
                    className="block text-sm font-medium text-black"
                  >
                    Signature
                  </label>
                  <input
                    type="file"
                    accept=".jpeg, .jpg, .png"
                    onChange={handleFileChange}
                    className="mt-1 p-2 w-full"
                  />
                </div> */}

                <div>
                  {passwordError && (
                    <p className="text-red-500 font-semibold text-sm mt-2 whitespace-pre-line">
                      {passwordError}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="w-full bg-[#3b82f6] text-black p-2 rounded-md"
                  >
                    Create Engineer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            top: "10px",
            width: "fit-content",
            left: "50%",
            transform: "translateX(-50%)", // Center horizontally
            zIndex: "9999",
          }}
        >
          <Toaster />
        </div>
      </div>
    </div>
  );
};
CreateEngineers.propTypes = {
  admin_id: PropTypes.string.isRequired,
};

CreateEngineers.propTypes = {
  adminId: PropTypes.string.isRequired,
};

export default CreateEngineers;
