import { gql } from "@apollo/client";
export const LOGIN_USER_MUTATION = gql`
  mutation LoginUser($userLogin: LoginInput!) {
    loginUser(userLogin: $userLogin) {
      token
    }
  }
`;
export const CREATE_ENGINEER_MUTATION = gql`
  mutation Mutation($engineer: EngineerInput!, $adminId: ID!) {
    createEngineer(engineer: $engineer, adminId: $adminId) {
      _id
      Fname
      Lname
      contact
      age
      EMP_id
      address
      email
      password
      designation
    }
  }
`;

