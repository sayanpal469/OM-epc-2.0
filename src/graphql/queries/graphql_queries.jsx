import { gql } from "@apollo/client";
export const GET_ENGINEERS = gql`
  query Engineers {
    engineers {
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
