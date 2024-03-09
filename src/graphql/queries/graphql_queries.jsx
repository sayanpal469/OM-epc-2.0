import { gql } from "@apollo/client";

export const GET_ENGINEERS = gql`
  query Engineers {
    engineers {
      _id
      Fname
      Lname
      contact
      age
      eng_emp
      address
      email
      password
      designation
    }
  }
`;

export const GET_CALLS_BY_STATUS = gql`
  query GetCallsByStatus($status: String!) {
    calls: callsByStatus(status: $status) {
      _id
      company_name
      company_details
      company_location
      company_address
      eng_name
      eng_emp
      assigned_date
      assigned_time
      call_id
      submit_date
      completed
      expense_amount
      report
      status
      admin_desc
      work_type
      customer_contact
      visit_date
      eng_desc
      completed
      site_images
    }
  }
`;

export const GET_ALL_ENGINEERS = gql`
  query getEngineer {
    engineers {
      _id
      Fname
      Lname
      eng_emp
      email
      age
      designation
    }
  }
`;

export const GET_CALLS_BY_ENGINEER = gql`
  query CallsByEng($engEmp: String!, $status: CallStatus!) {
    callsByEng(eng_emp: $engEmp, status: $status) {
      eng_emp
      eng_name
      call_list {
        call_id
        company_name
        company_details
        company_location
        company_address
        customer_contact
        assigned_date
        assigned_time
        submit_date
        visit_date
        work_type
        customer_contact
        eng_desc
        admin_desc
        report
        status
      }
    }
  }
`;

export const GET_EXPENSE_BY_STATUS = gql`
  query GetExpenseReportsByStatus($status: ExpenseStatus!) {
    expenseReportsByStatus(status: $status) {
      _id
      date
      time
      eng_emp
      eng_name
      company_name
      company_location
      call_id
      total_kilometer
      expense_amount
      isApprove
      status
      eng_desc
      admin_desc
    }
  }
`;
export const GET_ENGINEER = gql`
  query Engineer($engEmp: String!) {
    engineer(eng_emp: $engEmp) {
      _id
      Fname
      Lname
      contact
      age
      eng_emp
      address
      email
      password
      designation
      eng_sign
    }
  }
`;

export const GET_ENGINEER_BY_OBJECT_ID = gql`
  query EngineerByObject($id: ID!) {
    engineerByObject(_id: $id) {
      _id
      Fname
      Lname
      contact
      age
      eng_emp
      address
      email
      designation
      eng_sign
    }
  }
`;

export const GET_ATTENDENCE_BY_ENG = gql`
  query GetAttendenceByEng($engEmp: String!) {
    getAttendenceByEng(eng_emp: $engEmp) {
      eng_name
      eng_emp
      attendence {
        time
        date
      }
    }
  }
`;

export const GET_EXPENSE_BY_ENG = gql`
  query Query($engEmp: String!) {
    expenseReportByEng(eng_emp: $engEmp) {
      eng_emp
      eng_name
      expense_list {
        date
        time
        eng_emp
        eng_name
        company_name
        company_location
        call_id
        total_kilometer
        expense_amount
        isApprove
        status
        eng_desc
        admin_desc
      }
    }
  }
`;

export const GET_REPORT_BY_ENG = gql`
  query Query($engEmp: String!) {
    reportByEngineer(eng_emp: $engEmp) {
      _id
      company_name
      call_id
      eng_emp
      complain_id
      date
      client_name
      atm_id
      contact
      address
      site_type
      work_type
      device_type
      product_make
      product_slNo
      buy_back_details
      nature_of_complaint
      ac_input_three_phase {
        ac_input_three_phase_NR
        ac_input_three_phase_RB
        ac_input_three_phase_RY
        ac_input_three_phase_YB
      }
      ac_output_three_phase {
        ac_output_three_phase_NR
        ac_output_three_phase_RB
        ac_output_three_phase_RY
        ac_output_three_phase_YB
      }
      ac_input_single_phase {
        ac_input_single_phase_LE
        ac_input_single_phase_LN
        ac_input_single_phase_NE
      }
      ac_output_single_phase {
        ac_output_single_phase_LE
        ac_output_single_phase_LN
        ac_output_single_phase_NE
      }
      DC {
        V
        V_withMains
        V_withoutMains
      }
      power_cut
      battery_make
      battery_type
      battery_AH
      quantity
      battery_test_report {
        battery_catch_code
        with_mains
        without_mains
        after_5_min
        after_10_min
        after_20_min
        after_40_min
        after_1_hour
      }
      eng_sign
      customer_sign
      time
      site_images
    }
  }
`;

export const GET_WHATSAPP_CODE = gql`
  query GetQrCode {
    getQRCode
  }
`;

export const GET_CALL_BY_CALLID = gql`
  query GetCallByCallId($call_id: String!) {
    data: getCallByIdCallId(call_id: $call_id) {
      call_id
      customer_contact
      company_name
      company_details
      company_location
      company_address
      eng_name
      eng_emp
    }
  }
`;

export const GET_ADMIN_NOTIFICATION = gql`
  query GetAdminNotification {
    getAdminNotification {
      _id
      comment
      provider
      consumer
    }
  }
`;
