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
      customer_contact
      visit_date
      eng_desc
      completed
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
  query GetCallsByEngineer($eng_emp: String!, $status: CallStatus!) {
    callsByEng(eng_emp: $eng_emp, status: $status) {
      eng_emp
      eng_name
      call_list {
        call_id
        company_name
        company_details
        company_location
        company_address
        assigned_date
        assigned_time
        submit_date
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
      password
      designation
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
