import PropTypes from "prop-types";
import { useEffect } from "react";
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

const myDocs = (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header />
      <Part1
        complain_id={""}
        customer_name={""}
        client_name={""}
        atm_id={""}
        contact={""}
        address={""}
        date={""}
        product_make={""}
        product_slNo={""}
        buy_back_details={""}
        nature_of_complaint={""}
        site_type={""}
        work_type={""}
        device_type={""}
      />
      <Part2
        AcInputThreePhase_RY={""}
        AcInputThreePhase_YB={""}
        AcInputThreePhase_RB={""}
        AcInputThreePhase_NR={""}
        AcOutputThreePhase_RY={""}
        AcOutputThreePhase_YB={""}
        AcOutputThreePhase_RB={""}
        AcOutputThreePhase_NR={""}
        AcInputSinglePhase_LN={""}
        AcInputSinglePhase_NE={""}
        AcInputSinglePhase_LE={""}
        AcOutputSinglePhase_LN={""}
        AcOutputSinglePhase_NE={""}
        AcOutputSinglePhase_LE={""}
        UpsInvertDCV={""}
        DCV_WithMains={""}
        DCV_WithoutMains={""}
        power_cut={""}
        battery_make={""}
        battery_type={""}
        battery_AH={""}
        quantity={""}
      />
      <Part3
        BatteryData={[]}
        CustomerRemarks={""}
      />
      <Footer customer_sign={""} />
    </Page>
  </Document>
);
const ReportViewModal = ({ companyName, assignedDate, closeModal }) => {
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
        {/* Modal content */}
        <div className="relative flex flex-col bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          {/* Header */}
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-3xl font-semibold">{companyName}</h3>
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
              <span className="font-semibold mr-5">
                Assigned Date by Admin:
              </span>{" "}
              {assignedDate}
            </p>
            <p className="mb-4">
              <span className="font-semibold mr-5">Submit Date by You:</span>{" "}
              20/08/2023
            </p>
            <p className="mb-4">
              <span className="font-semibold mr-5">Location :</span> Esplanade
            </p>
            <p className="mb-4">
              <span className="font-semibold mr-5">Objective :</span>{" "}
              Replacement of UPS Battery
            </p>

            <div className="flex my-2">
              <BlobProvider document={myDocs}>
                {({ url }) => {
                  return (
                    <a href={url} style={styles.btn}>
                      <span className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 sm:px-6 border border-blue-500 hover:border-transparent rounded mb-2 sm:mb-0 w-full sm:w-auto mr-2">
                        Print
                      </span>
                    </a>
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
  companyName: PropTypes.string.isRequired,
  assignedDate: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ReportViewModal;
