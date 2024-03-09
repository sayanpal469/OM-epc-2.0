import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import pdfDB from "../components/pdf_config/pdfConfig";
import { v4 as uuidv4 } from "uuid";

const uploadImages = async ({ files }) => {
  // Ensure that there are files to upload
  // console.log({ files });
  const id = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

  if (!files || files.length === 0) {
    console.warn("No files to upload");
    const downloadURLs = [];
    return downloadURLs;
  }

  // Array to store download URLs
  const downloadURLs = [];

  // Iterate over the array of files and upload each one
  const promises = files.map((file, index) => {
    // Create a unique filename for each file
    const imageName = `image_${index + 1}.${file.name.split(".").pop()}`;

    // Create a reference to the storage path where you want to upload the file
    const storageRef = ref(pdfDB, imageName); // replace with your actual storage path

    // Upload the file to Firebase Storage
    return uploadBytes(storageRef, file).then(async (snapshot) => {
      // Get the download URL for the uploaded file
      const fileUrl = await getDownloadURL(snapshot.ref);

      // Store the download URL in the array
      downloadURLs.push(fileUrl);
    });
  });

  // Wait for all uploads to complete
  try {
    await Promise.all(promises);
    console.log("All files uploaded successfully", downloadURLs);
    return downloadURLs; // Return the array of download URLs
  } catch (error) {
    console.error("Error uploading files:", error);
    return []; // Return an empty array in case of an error
  }
};

export { uploadImages };
