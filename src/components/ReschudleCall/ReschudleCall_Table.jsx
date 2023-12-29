import PropTypes from "prop-types";
import ReschudleCallModal from './ReschudleCallModal'
import CreateReportModal from '../EngineerReportModal/CreateReportModal'
import UpdateStatusModal from "./UpdateStatusModal";

const ReschudleCall_Table = ({closeModal, selectedCallTab }) => {
  return (
    <div className="px-4">
      {selectedCallTab === "" || selectedCallTab === "Reschudle_Call" ? (
        <ReschudleCallModal
        CallID="call_08/12/2023_01"
        companyName="Visa - 3412"
        Location="KOlkata"
        assignedDate="04/01/2016"
        DescriptionByAdmin="checkk"
        submitDate="04/01/2016"
        closeModal={closeModal}
        />
      ) : selectedCallTab === "Submit_Report" ? (
        <CreateReportModal 
        closeModal={closeModal}
        />
      ) : selectedCallTab === "Update_Status" ? (
        <UpdateStatusModal
        closeModal={closeModal}
        />
      ) :  (
        <div className="h-full mt-40 flex justify-center items-center">
          No Calls to Show
        </div>
      )}
    </div>
  );
};

ReschudleCall_Table.propTypes = {
  selectedCallTab: PropTypes.any,
  closeModal: PropTypes.func
};

export default ReschudleCall_Table;
