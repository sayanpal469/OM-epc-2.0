import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import {
  BlobProvider,
  PDFDownloadLink,
  Page,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import Header from "./ReportPdf/PdfHeader";
import Part1 from "./ReportPdf/PdfPart1";
import Part2 from "./ReportPdf/PdfPart2";
import Part3 from "./ReportPdf/PdfPart3";
import Footer from "./ReportPdf/PdfFooter";
import { saveAs } from "file-saver";
import pdfDB from "./pdf_config/pdfConfig";
import { useMutation } from "@apollo/client";
import { UPDATE_CALL_AFTER_SUBMIT_REPORT_BY_ENG } from "../graphql/mutations/graphql.mutations";

const styles = StyleSheet.create({
  page: {
    fontSize: 11,
    paddingTop: 20,
    paddingLeft: 40,
    paddingRight: 40,
    lineHeight: 1.5,
    flexDirection: "column",
  },

  spaceBetween: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#3E3E3E",
  },

  titleContainer: { flexDirection: "row", marginTop: 24 },

  logo: { width: 90 },

  reportTitle: { fontSize: 16, textAlign: "center" },

  addressTitle: { fontSize: 11, fontStyle: "bold" },

  invoice: { fontWeight: "bold", fontSize: 20 },

  invoiceNumber: { fontSize: 11, fontWeight: "bold" },

  address: { fontWeight: 400, fontSize: 10 },

  theader: {
    marginTop: 20,
    fontSize: 10,
    fontStyle: "bold",
    paddingTop: 4,
    paddingLeft: 7,
    flex: 1,
    height: 20,
    backgroundColor: "#DEDEDE",
    borderColor: "whitesmoke",
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },

  theader2: { flex: 2, borderRightWidth: 0, borderBottomWidth: 1 },

  tbody: {
    fontSize: 9,
    paddingTop: 4,
    paddingLeft: 7,
    flex: 1,
    borderColor: "whitesmoke",
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },

  total: {
    fontSize: 9,
    paddingTop: 4,
    paddingLeft: 7,
    flex: 1.5,
    borderColor: "whitesmoke",
    borderBottomWidth: 1,
  },

  tbody2: { flex: 2, borderRightWidth: 1 },
});

const ReportViewModal = ({ selectedReport, closeModal, eng_name }) => {
  const metadata = {
    contentType: "application/pdf",
  };

  const [Update_Call] = useMutation(UPDATE_CALL_AFTER_SUBMIT_REPORT_BY_ENG, {
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    },
  });

  const [image, setImage] = useState("");
  const myDocs = (
    <Document file={""}>
      <Page size="A4" style={styles.page}>
        <Header />
        <Part1
          complain_id={selectedReport.call_id}
          customer_name={selectedReport.company_name}
          customer_contact={selectedReport.contact}
          client_name={selectedReport.client_name}
          atm_id={selectedReport.atm_id}
          contact={selectedReport.customer_contact}
          address={selectedReport.company_address}
          date={selectedReport.date}
          product_make={selectedReport.product_make}
          product_slNo={selectedReport.product_slNo}
          buy_back_details={selectedReport.buy_back_details}
          nature_of_complaint={selectedReport.nature_of_complaint}
          site_type={selectedReport.site_type}
          work_type={selectedReport.work_type}
          device_type={selectedReport.device_type}
        />
        <Part2
          AcInputThreePhase_RY={
            selectedReport.ac_input_three_phase.ac_input_three_phase_RY
          }
          AcInputThreePhase_YB={
            selectedReport.ac_input_three_phase.ac_input_three_phase_YB
          }
          AcInputThreePhase_RB={
            selectedReport.ac_input_three_phase.ac_input_three_phase_RB
          }
          AcInputThreePhase_NR={
            selectedReport.ac_input_three_phase.ac_input_three_phase_NR
          }
          AcOutputThreePhase_RY={
            selectedReport.ac_output_three_phase.ac_output_three_phase_RY
          }
          AcOutputThreePhase_YB={
            selectedReport.ac_output_three_phase.ac_output_three_phase_YB
          }
          AcOutputThreePhase_RB={
            selectedReport.ac_output_three_phase.ac_output_three_phase_RB
          }
          AcOutputThreePhase_NR={
            selectedReport.ac_output_three_phase.ac_output_three_phase_NR
          }
          AcInputSinglePhase_LN={
            selectedReport.ac_input_single_phase.ac_input_single_phase_LN
          }
          AcInputSinglePhase_NE={
            selectedReport.ac_input_single_phase.ac_input_single_phase_NE
          }
          AcInputSinglePhase_LE={
            selectedReport.ac_input_single_phase.ac_input_single_phase_LE
          }
          AcOutputSinglePhase_LN={
            selectedReport.ac_output_single_phase.ac_output_single_phase_LN
          }
          AcOutputSinglePhase_NE={
            selectedReport.ac_output_single_phase.ac_output_single_phase_NE
          }
          AcOutputSinglePhase_LE={
            selectedReport.ac_output_single_phase.ac_output_single_phase_LE
          }
          UpsInvertDCV={selectedReport.DC.V}
          DCV_WithMains={selectedReport.DC.V_withMains}
          DCV_WithoutMains={selectedReport.DC.V_withoutMains}
          power_cut={selectedReport.power_cut}
          battery_make={selectedReport.battery_make}
          battery_type={selectedReport.battery_type}
          battery_AH={selectedReport.battery_AH}
          quantity={selectedReport.quantity}
        />
        <Part3 BatteryData={selectedReport.battery_test_report} />
        <Footer
          date={selectedReport.date}
          customer_sign={selectedReport.customer_sign}
          eng_sign={selectedReport.eng_sign}
          eng_name={eng_name}
          time={selectedReport.time}
        />
      </Page>
    </Document>
  );
  const upload = () => {
    if (image == null) return;

    // Create a reference to the storage path where you want to upload the image
    const storageRef = ref(pdfDB, `/images/${image.name}`);

    // Upload the image to Firebase Storage
    uploadBytes(storageRef, image)
      .then((snapshot) => {
        console.log("Image uploaded successfully!", snapshot);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  useEffect(() => {
    // Apply overflow-hidden to body when the modal is open
    document.body.style.overflow = "hidden";

    // Cleanup function to remove the style when the component unmounts or modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const [pdfUrl, setPdfUrl] = useState(null);
  const uploadPdfToStorage = async (blob) => {
    try {
      // Create a reference to the storage path where you want to upload the PDF
      const storageRef = ref(pdfDB, "/reports/report111");

      // Upload the PDF Blob to Firebase Storage
      const snapshot = await uploadBytes(storageRef, blob);

      console.log("Uploaded a blob or file!", snapshot);

      // Get the download URL of the uploaded PDF
      const downloadURL = await getDownloadURL(storageRef);
      setPdfUrl(downloadURL);
      console.log("Download URL:", downloadURL);
    } catch (error) {
      console.error("Error uploading PDF to Firebase Storage:", error);
    }
  };

  console.log("pdfUrl", pdfUrl);
  const sendWhatsAppMessage = () => {
    // Replace 'YourEncodedMessage' and 'YourEncodedURL' with the message and URL you want to share
    const message = encodeURIComponent("Check out this link:");
    const url = encodeURIComponent(pdfUrl);

    console.log(url);
    // Construct the WhatsApp share link
    const whatsappLink = `https://wa.me/${7872358979}?text=${message}%20${url}`;

    // Open WhatsApp with the pre-filled message
    window.open(whatsappLink, "_blank");
  };

  const handleSave = async () => {
    console.log({ selectedReport });
    try {
      // Execute the mutation with the form data and context token
      const { data } = await Update_Call({
        variables: {
            callId: selectedReport.call_id,
            engEmp: selectedReport.eng_emp,
            updateCall: {
              report: pdfUrl,
              status: "COMPLETED",
              submit_date: selectedReport.date,
            },
        },
        fetchPolicy: "network-only",
      });
      // Close the modal after submitting the form
    } catch (error) {
      // Handle errors if the mutation fails
      console.error("Mutation Error:", error);
    }
  };

  useEffect(() => {
    if (pdfUrl.length > 5) {
      setTimeout(() => {
        handleSave();
      }, 2000);
      console.log("asdasdsad");
    }
  }, [pdfUrl]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full max-w-screen-md mx-auto my-6 bg-opacity-50 backdrop-filter backdrop-blur-md">
        {/* Modal content */}
        <div className="relative flex flex-col bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          {/* Header */}
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-3xl font-semibold">
              {selectedReport.company_name}
            </h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={closeModal}
            >
              <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/* Body */}
          <div className="relative p-6 flex-auto">
            <p className="mb-4">
              <span className="font-semibold mr-5">Submit Date By You:</span>{" "}
              {selectedReport.date}
            </p>
            <p className="mb-4">
              <span className="font-semibold mr-5">Location :</span>{" "}
              {selectedReport.address}
            </p>
            <p className="mb-4">
              <span className="font-semibold mr-5">Objective :</span>{" "}
              {selectedReport.nature_of_complaint}
            </p>

            <div className="flex my-2">
              <BlobProvider document={myDocs}>
                {({ url, blob }) => {
                  console.log({ url });
                  console.log({ blob });
                  return (
                    <button
                      onClick={() => {
                        uploadPdfToStorage(blob);
                      }}
                    >
                      <span className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 sm:px-6 border border-blue-500 hover:border-transparent rounded mb-2 sm:mb-0 w-full sm:w-auto mr-2">
                        Send To Admin
                      </span>
                    </button>
                  );
                }}
              </BlobProvider>
              <PDFDownloadLink document={myDocs} fileName="Report.pdf">
                <div>
                  <span className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 sm:px-6 border border-blue-500 hover:border-transparent rounded mb-2 sm:mb-0 w-full sm:w-auto">
                    Download
                  </span>
                </div>
              </PDFDownloadLink>
              <button onClick={sendWhatsAppMessage}>Share on WhatsApp</button>
            </div>
          </div>
          {/* Footer */}
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ReportViewModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  selectedReport: PropTypes.object.isRequired,
  eng_name: PropTypes.string.isRequired,
};

export default ReportViewModal;
