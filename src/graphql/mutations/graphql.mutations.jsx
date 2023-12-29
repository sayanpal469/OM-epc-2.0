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
