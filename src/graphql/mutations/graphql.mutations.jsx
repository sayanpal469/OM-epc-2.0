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

export const DELETE_ENGINEER_MUTATION = gql`
  mutation DeteleEngineer($eng_emp: String!) {
    deleteEngineer(eng_emp: $eng_emp) {
      message
    }
  }
`;

export const APPROVE_EXPENSE_MUTATION = gql`
  mutation ApproveExpenseReport(
    $_id: ID!
    $approveStatus: ExpenseApproveEnum!
    $admin_desc: String
  ) {
    status: approveExpenseReport(
      _id: $_id
      approveStatus: $approveStatus
      admin_desc: $admin_desc
    ) {
      _id
      isApprove
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
      ac_input_singel_phase_LN
      ac_input_singel_phase_NE
      ac_input_three_phase_LE
    }
    ac_output_single_phase {
      ac_input_singel_phase_LN
      ac_input_singel_phase_NE
      ac_input_three_phase_LE
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
      after_10_min
      after_1_hour
      after_20_min
      after_40_min
      after_5_min
      battery_catch_code
      signature
      with_mains
      without_mains
    }
    customer_sign
    eng_sign
  }
}
`;

