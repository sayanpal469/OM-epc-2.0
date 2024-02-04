import { gql } from "@apollo/client";
export const LOGIN_USER_MUTATION = gql`
  mutation LoginUser($userLogin: LoginInput!) {
    loginUser(userLogin: $userLogin) {
      token
    }
  }
`;

export const CREATE_ENGINEER_MUTATION = gql`
  mutation CreateEngineer($engineer: EngineerInput!, $adminId: ID!) {
    createEngineer(engineer: $engineer, adminId: $adminId) {
      _id
      Fname
      Lname
      contact
      age
      eng_emp
      address
      email
      designation
    }
  }
`;

export const CREATE_CALL_MUTATION = gql`
  mutation CreateCall($call: CallInput!) {
    createCall(call: $call) {
      message
    }
  }
`;

export const DELETE_CALL_MUTATION = gql`
  mutation DeleteCall($_id: ID!) {
    deleteCall(_id: $_id) {
      message
    }
  }
`;

export const DELETE_ENGINEER_MUTATION = gql`
  mutation DeteleEngineer($eng_emp: String!) {
    deleteEngineer(eng_emp: $eng_emp) {
      message
    }
  }
`;

export const APPROVE_EXPENSE_MUTATION = gql`
  mutation ApproveExpenseReport(
    $callId: String!
    $approveStatus: ExpenseApproveEnum!
    $admin_desc: String
  ) {
    approveExpenseReport(
      call_id: $callId
      approveStatus: $approveStatus
      admin_desc: $admin_desc
    ) {
      isApprove
      status
      call_id
      admin_desc
    }
  }
`;

export const ADD_EXPENSE_MUTATION = gql`
  mutation CreateExpenseReport($expenseReport: ExpenseReportInput!) {
    createExpenseReport(expenseReport: $expenseReport) {
      call_id
      message
    }
  }
`;

export const ADD_REPORT_MUTATION = gql`
  mutation Mutation($report: ReportInput!) {
    createReport(report: $report) {
      _id
      company_name
      call_id
      eng_emp
      complain_id
      date
      time
      client_name
      atm_id
      contact
      address
      site_type
      device_type
      product_make
      product_slNo
      buy_back_details
      nature_of_complaint
      ac_input_three_phase {
        ac_input_three_phase_RY
        ac_input_three_phase_YB
        ac_input_three_phase_RB
        ac_input_three_phase_NR
      }
      ac_output_three_phase {
        ac_output_three_phase_RY
        ac_output_three_phase_YB
        ac_output_three_phase_RB
        ac_output_three_phase_NR
      }
      ac_input_single_phase {
        ac_input_single_phase_LN
        ac_input_single_phase_NE
        ac_input_single_phase_LE
      }
      ac_output_single_phase {
        ac_output_single_phase_LN
        ac_output_single_phase_NE
        ac_output_single_phase_LE
      }
      DC {
        V
        V_withMains
        V_withoutMains
      }
      site_images
      power_cut
      battery_make
      battery_type
      battery_AH
      quantity
      battery_test_report {
        after_1_hour
        after_40_min
        after_20_min
        after_10_min
        after_5_min
        without_mains
        with_mains
        battery_catch_code
      }
      customer_sign
      eng_sign
    }
  }
`;

export const EDIT_CALL_BY_ADMIN_MUTATION = gql`
  mutation EditCall_by_Admin($call: CallInput!) {
    editCall_by_Admin(call: $call) {
      _id
      company_name
      company_details
      company_location
      company_address
      eng_name
      eng_emp
      assigned_date
      assigned_time
      eng_desc
      admin_desc
      call_id
      customer_contact
      submit_date
      visit_date
      completed
      expense_amount
      report
      status
    }
  }
`;

export const SUBMIT_ATTENDENCE_MUTATION = gql`
  mutation SubmitAttendence($attendence: AttendenceInput!) {
    submitAttendence(attendence: $attendence) {
      eng_emp
      eng_name
      message
    }
  }
`;

export const RESCHEDULE_CALL_BY_ENG__MUTATION = gql`
  mutation RescheduleCall($call: RescheduleInput!) {
    rescheduleCall(call: $call) {
      _id
      company_name
      company_details
      company_location
      company_address
      eng_name
      eng_emp
      assigned_date
      assigned_time
      eng_desc
      admin_desc
      call_id
      customer_contact
      submit_date
      visit_date
      completed
      expense_amount
      report
      status
    }
  }
`;

export const UPDATE_CALL_AFTER_SUBMIT_REPORT_BY_ENG = gql`
  mutation UpdateCallByEng(
    $callId: String!
    $engEmp: String!
    $updateCall: UpdateCallInput!
  ) {
    updateCallByEng(
      call_id: $callId
      eng_emp: $engEmp
      updateCall: $updateCall
    ) {
      _id
      company_name
      company_details
      company_location
      company_address
      eng_name
      eng_emp
      assigned_date
      assigned_time
      eng_desc
      admin_desc
      call_id
      customer_contact
      submit_date
      visit_date
      completed
      expense_amount
      report
      status
    }
  }
`;

export const updateSignEng = gql`
  mutation UpdateSign($eng_emp: String!, $eng_sign: String!) {
    updateSign(eng_emp: $eng_emp, eng_sign: $eng_sign) {
      eng_sign
    }
  }
`;
