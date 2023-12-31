import PropTypes from "prop-types";
import ReschudleCallModal from "./ReschudleCallModal";
import CreateReportModal from "../EngineerReportModal/CreateReportModal";
import UpdateStatusModal from "./UpdateStatusModal";

const ReschudleCall_Table = ({ closeModal, selectedCallTab, selectedCall }) => {
  return (
    <div className="px-4">
      {selectedCallTab === "" || selectedCallTab === "Reschudle_Call" ? (
        <ReschudleCallModal
          CallID={selectedCall?.call_id}
          companyName={selectedCall?.company_name}
          Location={selectedCall?.company_location}
          assignedDate={selectedCall?.assigned_date}
          DescriptionByAdmin={selectedCall?.admin_desc}
          submitDate={selectedCall?.submit_date}
          closeModal={closeModal}
          selectedCall={selectedCall}
        />
      ) : selectedCallTab === "Submit_Report" ? (
        <CreateReportModal closeModal={closeModal} />
      ) : selectedCallTab === "Update_Status" ? (
        <UpdateStatusModal closeModal={closeModal} />
      ) : (
        <div className="h-full mt-40 flex justify-center items-center">
          No Calls to Show
        </div>
      )}
    </div>
  );
};

ReschudleCall_Table.propTypes = {
  selectedCallTab: PropTypes.any,
  closeModal: PropTypes.func,
  selectedCall: PropTypes.object,
};

export default ReschudleCall_Table;
