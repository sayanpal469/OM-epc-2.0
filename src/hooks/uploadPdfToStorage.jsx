// Import necessary functions from Firebase SDK
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import pdfDB from "../components/pdf_config/pdfConfig";

const uploadPdfToStorage = async (blob, call_id) => {
  try {
    // Create a reference to the storage path where you want to upload the PDF
    const storageRef = ref(pdfDB, `/reports/${call_id}`);

    // Upload the PDF Blob to Firebase Storage
    const snapshot = await uploadBytes(storageRef, blob);

    console.log("Uploaded a blob or file!", snapshot);

    // Get the download URL of the uploaded PDF
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading PDF to Firebase Storage:", error);
  }
};

// Export the function so that it can be used in other files/components
export { uploadPdfToStorage };
