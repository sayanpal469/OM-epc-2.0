import { gql } from "@apollo/client";
export const LOGIN_USER_MUTATION = gql`
  mutation LoginUser($userLogin: LoginInput!) {
    loginUser(userLogin: $userLogin) {
      token
    }
  }
`;
