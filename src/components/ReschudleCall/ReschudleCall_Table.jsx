import PropTypes from "prop-types";
import ReschudleCallModal from "./ReschudleCallModal";
import CreateReportModal from "../EngineerReportModal/CreateReportModal";
import UpdateStatusModal from "./UpdateStatusModal";
import { useNavigate } from "react-router-dom";

const ReschudleCall_Table = ({
  closeModal,
  selectedCallTab,
  selectedCall,
  refetch,
  selectedCallTab_Parent,
  eng_emp,
  engineer_data,
}) => {
  const navigate = useNavigate();
  console.log({
    selectedCall,
    eng_emp,
    closeModal,
    engineer_data,
  });
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
          refetch={refetch}
          eng_emp={eng_emp}
          selectedCallTab_Parent={selectedCallTab_Parent}
          engineer_data={engineer_data}
        />
      ) : selectedCallTab === "Submit_Report" ? (
        // <CreateReportModal
        //   selectedCall={selectedCall}
        //   eng_emp={eng_emp}
        //   closeModal={closeModal}
        //   engineer_data={engineer_data}
        // />
        navigate("/create-report/", {
          state: {
            selectedCall,
            eng_emp,
            closeModal: closeModal(),
            engineer_data,
          },
        })
      ) : selectedCallTab === "Update_Status" ? (
        <UpdateStatusModal
          selectedCall={selectedCall}
          closeModal={closeModal}
        />
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
  refetch: PropTypes.func.isRequired,
  selectedCallTab_Parent: PropTypes.string.isRequired,
  eng_emp: PropTypes.string.isRequired,
  engineer_data: PropTypes.object.isRequired,
};

export default ReschudleCall_Table;
