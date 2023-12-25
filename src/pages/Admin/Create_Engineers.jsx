import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaFaceGrinStars } from "react-icons/fa6";
import PropTypes from "prop-types";
import { CREATE_ENGINEER_MUTATION } from "../../graphql/graphql";
import { useMutation } from "@apollo/client";
import toast, { Toaster } from "react-hot-toast";
const CreateEngineers = ({ admin_id }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    Fname: "",
    Lname: "",
    age: "",
    email: "",
    password: "",
    address: "",
    EMP_id: "",
    designation: "",
    contact: "",
  });

  const [createEngineerMutation, { data, error }] = useMutation(
    CREATE_ENGINEER_MUTATION,
    {
      context: {
        headers: {
          authorization: `${localStorage.getItem("token")}`, // Include the token from local storage
        },
      },
    }
  );

  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  console.log({ data });
  console.log({ error });
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

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const isFormValid = Object.values(formData).every((value) => value !== "");

    if (!isFormValid) {
      alert("Please fill in all fields");
      return;
    }

    // Check if password meets criteria
    if (!validatePassword(formData.password)) {
      setPasswordError(
        "Password must meet the following criteria:\n" +
          "1. At least one lowercase letter\n" +
          "2. At least one uppercase letter\n" +
          "3. At least one special character (@$!%*?&)\n" +
          "4. At least 6 characters long"
      );
      return;
    }

    // Reset password error if validation passes
    setPasswordError("");
    try {
      // Use toast.promise to handle the asynchronous saveSettings
      await toast.promise(
        createEngineerMutation({
          variables: {
            engineer: formData,
            adminId: admin_id,
          },
        }),
        {
          loading: "Creating Engineer...",
          success: <b>🎉 Engineer created successfully!</b>,
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
        EMP_id: "",
        designation: "",
        contact: "",
      });
    } catch (error) {
      // Handle other errors if needed
      console.error("Mutation failed:", error.message);
    }
  };

  return (
    <div className="flex">
      <div className="w-12 h-screen lg:w-20">
        {/* Empty space for navbar here */}
      </div>
      <div className="flex-1">
        <div className="flex h-full bg-white">
          <div className="w-full flex justify-center items-center ">
            <div className="bg-white p-8 rounded-lg shadow-md w-full backdrop-filter backdrop-blur-lg bg-opacity-30">
              <div className="mb-8 text-center">
                <div>
                  <Toaster />
                </div>
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
                    htmlFor="contact"
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
                    htmlFor="EMP_id"
                    className="block text-sm font-medium text-black"
                  >
                    Employee ID
                  </label>
                  <input
                    type="text"
                    id="EMP_id"
                    value={formData.EMP_id}
                    name="EMP_id"
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
      </div>
    </div>
  );
};
CreateEngineers.propTypes = {
  admin_id: PropTypes.string.isRequired,
};

export default CreateEngineers;
